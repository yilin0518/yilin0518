import datetime
import json
import os
import re
import urllib.parse
import urllib.request

API_BASE = "https://api.github.com"
USERNAME = os.environ.get("GITHUB_REPOSITORY_OWNER") or os.environ.get("USERNAME")
TOKEN = os.environ.get("GITHUB_TOKEN")
README_PATH = os.path.join(os.getcwd(), "README.md")

ISSUE_START = "<!-- ISSUE-LIST:START -->"
ISSUE_END = "<!-- ISSUE-LIST:END -->"
PR_START = "<!-- PR-LIST:START -->"
PR_END = "<!-- PR-LIST:END -->"


def request_json(url: str) -> dict:
    headers = {"Accept": "application/vnd.github+json"}
    if TOKEN:
        headers["Authorization"] = f"Bearer {TOKEN}"
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read().decode("utf-8"))


def search_issues(query: str) -> list[dict]:
    per_page = 100
    page = 1
    all_items: list[dict] = []
    while True:
        params = {
            "q": query,
            "per_page": per_page,
            "page": page,
            "sort": "created",
            "order": "desc",
        }
        url = f"{API_BASE}/search/issues?{urllib.parse.urlencode(params)}"
        data = request_json(url)
        all_items.extend(data.get("items", []))
        if len(all_items) >= data.get("total_count", 0) or len(data.get("items", [])) < per_page:
            break
        page += 1
    return all_items


def format_date(value: str) -> str:
    dt = datetime.datetime.fromisoformat(value.replace("Z", "+00:00"))
    return dt.strftime("%Y-%m-%d")


def issue_status(item: dict) -> str:
    return "Open" if item.get("state") == "open" else "Closed"


def pr_status(item: dict) -> str:
    if item.get("state") == "open":
        return "Open"
    pr_url = item.get("pull_request", {}).get("url")
    if not pr_url:
        return "Closed"
    pr_data = request_json(pr_url)
    return "Merged" if pr_data.get("merged_at") else "Closed"


def build_list(items: list[dict], status_fn) -> str:
    if not items:
        return "- 暂无"
    lines = []
    for item in items:
        title = item.get("title", "Untitled")
        url = item.get("html_url", "")
        created_at_raw = item.get("created_at")
        created_at = format_date(created_at_raw) if created_at_raw else "unknown"
        status = status_fn(item)
        # try to determine the repository full name (owner/repo)
        repo_full = None
        repo_url = item.get("repository_url")
        if repo_url:
            parts = urllib.parse.urlparse(repo_url).path.split("/")
            if len(parts) >= 3:
                repo_full = f"{parts[-2]}/{parts[-1]}"
        if not repo_full:
            # fallback to html_url parsing: /owner/repo/...
            html_url = item.get("html_url", "")
            parts = urllib.parse.urlparse(html_url).path.split("/")
            if len(parts) >= 3:
                repo_full = f"{parts[1]}/{parts[2]}"
        if not repo_full:
            repo_full = "unknown/unknown"

        lines.append(f"- **{repo_full}**: [{title}]({url}) — {created_at} — state: {status}")
    return "\n".join(lines)


def replace_section(content: str, start_marker: str, end_marker: str, new_block: str) -> str:
    if start_marker not in content or end_marker not in content:
        raise RuntimeError(f"Missing markers: {start_marker} / {end_marker}")
    pattern = re.compile(
        f"{re.escape(start_marker)}.*?{re.escape(end_marker)}",
        re.DOTALL,
    )
    replacement = f"{start_marker}\n{new_block}\n{end_marker}"
    return pattern.sub(replacement, content, count=1)


def main() -> None:
    if not USERNAME:
        raise RuntimeError("USERNAME is required (set GITHUB_REPOSITORY_OWNER or USERNAME).")

    issues = search_issues(f"author:{USERNAME} type:issue")
    prs = search_issues(f"author:{USERNAME} type:pr")

    issue_block = build_list(issues, issue_status)
    pr_block = build_list(prs, pr_status)

    with open(README_PATH, "r", encoding="utf-8") as fh:
        content = fh.read()

    content = replace_section(content, ISSUE_START, ISSUE_END, issue_block)
    content = replace_section(content, PR_START, PR_END, pr_block)

    with open(README_PATH, "w", encoding="utf-8") as fh:
        fh.write(content)


if __name__ == "__main__":
    main()
