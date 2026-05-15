#!/usr/bin/env python3
import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request

README_PATH = os.path.join(os.path.dirname(__file__), "..", "README.md")
ISSUE_START = "<!-- ISSUE_LIST_START -->"
ISSUE_END = "<!-- ISSUE_LIST_END -->"
PR_START = "<!-- PR_LIST_START -->"
PR_END = "<!-- PR_LIST_END -->"


def github_request(url: str, token: str) -> dict:
    headers = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "readme-auto-update",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    if token:
        headers["Authorization"] = f"Bearer {token}"
    request = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(request) as response:
            body = response.read().decode("utf-8")
            return json.loads(body)
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8")
        raise RuntimeError(
            f"GitHub API request failed ({exc.code}) for {url}: {body}"
        ) from exc


def build_query(query: str, per_page: int) -> str:
    params = {
        "q": query,
        "sort": "created",
        "order": "desc",
        "per_page": str(per_page),
    }
    return "https://api.github.com/search/issues?" + urllib.parse.urlencode(params)


def fetch_items(query: str, per_page: int, token: str) -> list[dict]:
    url = build_query(query, per_page)
    data = github_request(url, token)
    return data.get("items", [])


def build_search_query(item_type: str, username: str, exclude_repo: str | None) -> str:
    parts = [f"is:{item_type}", f"author:{username}"]
    if exclude_repo:
        parts.append(f"-repo:{exclude_repo}")
    return " ".join(parts)


def format_items(items: list[dict], empty_message: str) -> list[str]:
    if not items:
        return [f"- {empty_message}"]
    lines = []
    for item in items:
        title = item.get("title", "Untitled")
        url = item.get("html_url", "")
        repo_url = item.get("repository_url", "")
        repo_path = urllib.parse.urlparse(repo_url).path
        if repo_path.startswith("/repos/"):
            repo = repo_path[len("/repos/") :]
        else:
            repo = repo_path.strip("/") or "unknown"
        state = item.get("state", "unknown")
        lines.append(f"- [{title}]({url}) ({repo}, {state})")
    return lines


def replace_block(lines: list[str], start_marker: str, end_marker: str, new_lines: list[str]) -> list[str]:
    start_index = next((i for i, line in enumerate(lines) if line.strip() == start_marker), -1)
    end_index = next((i for i, line in enumerate(lines) if line.strip() == end_marker), -1)
    if start_index == -1 or end_index == -1 or end_index <= start_index:
        raise RuntimeError(f"Missing or invalid markers: {start_marker} ... {end_marker}")
    return lines[: start_index + 1] + new_lines + lines[end_index:]


def main() -> None:
    token = os.getenv("GITHUB_TOKEN")
    if not token:
        raise SystemExit("GITHUB_TOKEN environment variable is required.")

    username = os.getenv("GITHUB_USERNAME") or os.getenv("GITHUB_REPOSITORY_OWNER")
    repository = os.getenv("GITHUB_REPOSITORY")
    if not username:
        raise SystemExit("GITHUB_USERNAME or GITHUB_REPOSITORY_OWNER is required.")

    max_items_value = os.getenv("MAX_ITEMS", "5")
    try:
        per_page = int(max_items_value)
    except ValueError as exc:
        raise SystemExit("MAX_ITEMS must be an integer.") from exc
    if per_page <= 0:
        raise SystemExit("MAX_ITEMS must be greater than zero.")
    exclude_repo = repository or None

    issue_query = build_search_query("issue", username, exclude_repo)
    pr_query = build_search_query("pr", username, exclude_repo)

    issues = fetch_items(issue_query, per_page, token)
    prs = fetch_items(pr_query, per_page, token)

    with open(README_PATH, "r", encoding="utf-8") as handle:
        content_lines = handle.read().splitlines()

    issue_lines = format_items(issues, "_No recent issues._")
    pr_lines = format_items(prs, "_No recent pull requests._")

    content_lines = replace_block(content_lines, ISSUE_START, ISSUE_END, issue_lines)
    content_lines = replace_block(content_lines, PR_START, PR_END, pr_lines)

    with open(README_PATH, "w", encoding="utf-8") as handle:
        handle.write("\n".join(content_lines) + "\n")


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"Error: {exc}", file=sys.stderr)
        sys.exit(1)
