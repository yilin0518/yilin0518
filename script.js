/* ===== Configuration ===== */
const USERNAME = 'yilin0518';
const API_BASE  = 'https://api.github.com';

/* ===== Utility helpers ===== */
const SECONDS_PER_DAY = 86400;

function timeAgo(dateStr) {
  const diff = (Date.now() - new Date(dateStr)) / 1000;
  if (diff < 60)   return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < SECONDS_PER_DAY) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < SECONDS_PER_DAY * 30) return `${Math.floor(diff / SECONDS_PER_DAY)}d ago`;
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function escape(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

/* Extract "owner/repo" from full_name or html_url */
function repoName(item) {
  if (item.repository_url) {
    return item.repository_url.replace(`${API_BASE}/repos/`, '');
  }
  return '';
}

/* ===== GitHub API fetch with pagination ===== */
async function ghSearch(query, type) {
  const perPage = 100;
  let page = 1;
  let all = [];
  while (true) {
    const url = `${API_BASE}/search/issues?q=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}`;
    const resp = await fetch(url, {
      headers: { Accept: 'application/vnd.github+json' }
    });
    if (!resp.ok) throw new Error(`GitHub API error: ${resp.status}`);
    const data = await resp.json();
    all = all.concat(data.items);
    if (all.length >= data.total_count || data.items.length < perPage) break;
    page++;
  }
  return all;
}

/* ===== Profile section ===== */
async function loadProfile() {
  try {
    const resp = await fetch(`${API_BASE}/users/${USERNAME}`, {
      headers: { Accept: 'application/vnd.github+json' }
    });
    if (!resp.ok) return;
    const user = await resp.json();

    const avatarEl = document.getElementById('profile-avatar');
    if (user.avatar_url) {
      avatarEl.outerHTML = `<img id="profile-avatar" class="profile-avatar" src="${escape(user.avatar_url)}&s=220" alt="${escape(user.login)}" />`;
    }

    const nameEl = document.getElementById('profile-name');
    nameEl.textContent = user.name || user.login;

    const bioEl = document.getElementById('profile-bio');
    if (user.bio) bioEl.textContent = user.bio;

    // Stats
    document.getElementById('stat-repos').textContent = user.public_repos ?? '—';
    document.getElementById('stat-followers').textContent = user.followers ?? '—';
    document.getElementById('stat-following').textContent = user.following ?? '—';

    // Optional links
    const linksEl = document.getElementById('profile-links');
    if (user.blog) {
      linksEl.insertAdjacentHTML('beforeend',
        `<a href="${escape(user.blog.startsWith('http') ? user.blog : 'https://' + user.blog)}" target="_blank" rel="noopener">🌐 Website</a>`);
    }
    if (user.location) {
      linksEl.insertAdjacentHTML('beforeend', `<span>📍 ${escape(user.location)}</span>`);
    }
    if (user.company) {
      linksEl.insertAdjacentHTML('beforeend', `<span>🏢 ${escape(user.company)}</span>`);
    }
  } catch (e) {
    console.warn('Could not load profile:', e);
  }
}

/* ===== Issues section ===== */
let allIssues = [];

function renderIssues(filter) {
  const list = document.getElementById('issues-list');
  const countEl = document.getElementById('issues-count');

  const filtered = filter === 'all' ? allIssues
    : allIssues.filter(i => i.state === filter);

  countEl.textContent = allIssues.length;
  const badge = document.getElementById('issues-badge');
  if (badge) badge.textContent = allIssues.length;

  if (filtered.length === 0) {
    list.innerHTML = `<li class="state-placeholder"><p>No issues found.</p></li>`;
    return;
  }

  list.innerHTML = filtered.map(issue => {
    const state = issue.state;
    const stateLabel = state === 'open' ? '🟢 Open' : '🔴 Closed';
    const stateClass = state === 'open' ? 'state-open' : 'state-closed';
    const repo = repoName(issue);
    return `
      <li class="item-card">
        <span class="item-icon">${state === 'open' ? '🔵' : '🟣'}</span>
        <div class="item-body">
          <div class="item-title">
            <a href="${escape(issue.html_url)}" target="_blank" rel="noopener">${escape(issue.title)}</a>
          </div>
          <div class="item-meta">
            ${repo ? `<span class="repo-tag">${escape(repo)}</span>` : ''}
            <span class="state-badge ${stateClass}">${stateLabel}</span>
            <span>#${issue.number}</span>
            <span>opened ${timeAgo(issue.created_at)}</span>
            ${issue.comments > 0 ? `<span>💬 ${issue.comments}</span>` : ''}
          </div>
        </div>
      </li>`;
  }).join('');
}

async function loadIssues() {
  const list = document.getElementById('issues-list');
  list.innerHTML = `<li class="state-placeholder"><div class="spinner"></div><p>Loading issues…</p></li>`;

  try {
    allIssues = await ghSearch(`author:${USERNAME} type:issue`, 'issue');
    renderIssues('all');
    setupIssueFilters();
  } catch (e) {
    list.innerHTML = `<li class="state-placeholder"><p class="error-msg">⚠️ Failed to load issues: ${escape(e.message)}</p></li>`;
  }
}

function setupIssueFilters() {
  document.querySelectorAll('#issues-filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#issues-filters .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderIssues(btn.dataset.filter);
    });
  });
}

/* ===== Pull Requests section ===== */
let allPRs = [];

function prState(pr) {
  if (pr.pull_request?.merged_at) return 'merged';
  return pr.state; // 'open' or 'closed'
}

function renderPRs(filter) {
  const list = document.getElementById('prs-list');
  const countEl = document.getElementById('prs-count');

  const filtered = filter === 'all' ? allPRs
    : allPRs.filter(pr => prState(pr) === filter);

  countEl.textContent = allPRs.length;
  const badge = document.getElementById('prs-badge');
  if (badge) badge.textContent = allPRs.length;

  if (filtered.length === 0) {
    list.innerHTML = `<li class="state-placeholder"><p>No pull requests found.</p></li>`;
    return;
  }

  list.innerHTML = filtered.map(pr => {
    const state = prState(pr);
    const iconMap  = { open: '🟢', merged: '🟣', closed: '🔴' };
    const labelMap = { open: '🟢 Open', merged: '🟣 Merged', closed: '🔴 Closed' };
    const classMap = { open: 'state-open', merged: 'state-merged', closed: 'state-closed' };
    const repo = repoName(pr);
    return `
      <li class="item-card">
        <span class="item-icon">${iconMap[state] ?? '⚪'}</span>
        <div class="item-body">
          <div class="item-title">
            <a href="${escape(pr.html_url)}" target="_blank" rel="noopener">${escape(pr.title)}</a>
          </div>
          <div class="item-meta">
            ${repo ? `<span class="repo-tag">${escape(repo)}</span>` : ''}
            <span class="state-badge ${classMap[state] ?? ''}">${labelMap[state] ?? state}</span>
            <span>#${pr.number}</span>
            <span>opened ${timeAgo(pr.created_at)}</span>
            ${pr.comments > 0 ? `<span>💬 ${pr.comments}</span>` : ''}
          </div>
        </div>
      </li>`;
  }).join('');
}

async function loadPRs() {
  const list = document.getElementById('prs-list');
  list.innerHTML = `<li class="state-placeholder"><div class="spinner"></div><p>Loading pull requests…</p></li>`;

  try {
    allPRs = await ghSearch(`author:${USERNAME} type:pr`, 'pr');
    renderPRs('all');
    setupPRFilters();
  } catch (e) {
    list.innerHTML = `<li class="state-placeholder"><p class="error-msg">⚠️ Failed to load pull requests: ${escape(e.message)}</p></li>`;
  }
}

function setupPRFilters() {
  document.querySelectorAll('#prs-filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#prs-filters .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPRs(btn.dataset.filter);
    });
  });
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  loadProfile();
  loadIssues();
  loadPRs();
});
