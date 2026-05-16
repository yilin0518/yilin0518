/* ===== Config ===== */
const USERNAME = 'yilin0518';
const README_RAW = `https://raw.githubusercontent.com/${USERNAME}/${USERNAME}/main/README.md`;

/* ===== Blog data (add real posts here) ===== */
const BLOGS = [];

/* ===== State ===== */
const state = {
  blog: { category: 'all', query: '' },
  contrib: { type: 'all', status: 'all', query: '' },
  contributions: [],
  tags: { active: null },
};

/* ===== Utilities ===== */
function esc(str) {
  const d = document.createElement('div');
  d.textContent = str ?? '';
  return d.innerHTML;
}

function fmtDate(s) {
  if (!s) return '';
  const d = new Date(s);
  return isNaN(d) ? s : d.toISOString().slice(0, 10);
}

function repoFromUrl(url) {
  try {
    const m = url.match(/github\.com\/([^/]+\/[^/]+)/);
    return m ? m[1] : '';
  } catch { return ''; }
}

/* ===== Theme ===== */
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

/* ===== Navigation ===== */
const PAGES = ['blog', 'categories', 'tags', 'contributions', 'about'];

function navigate(page) {
  if (!PAGES.includes(page)) page = 'blog';
  PAGES.forEach((p) => {
    const el = document.getElementById(`page-${p}`);
    if (el) el.classList.toggle('hidden', p !== page);
  });
  document.querySelectorAll('.nav-link').forEach((a) => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  // close mobile menu
  document.getElementById('nav-links')?.classList.remove('open');
}

function currentPage() {
  const hash = location.hash.replace('#', '') || 'blog';
  return PAGES.includes(hash) ? hash : 'blog';
}

/* ===== GitHub Profile ===== */
async function loadProfile() {
  try {
    const res = await fetch(`https://api.github.com/users/${USERNAME}`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) return;
    const u = await res.json();

    const avatarEl = document.getElementById('sidebar-avatar');
    if (avatarEl && u.avatar_url) {
      avatarEl.outerHTML = `<img id="sidebar-avatar" class="profile-avatar" src="${esc(u.avatar_url)}&s=144" alt="${esc(u.login)}" />`;
    }

    const nameEl = document.getElementById('sidebar-name');
    if (nameEl) nameEl.textContent = u.name || u.login;

    const bioEl = document.getElementById('sidebar-bio');
    if (bioEl && u.bio) bioEl.textContent = u.bio;

    const reposEl = document.getElementById('stat-repos');
    if (reposEl) reposEl.textContent = u.public_repos ?? '—';

    const followersEl = document.getElementById('stat-followers');
    if (followersEl) followersEl.textContent = u.followers ?? '—';
  } catch (e) {
    console.warn('Profile load failed:', e);
  }
}

/* ===== Contributions (parsed from README) ===== */
function parseContributions(markdown) {
  const items = [];
  const lineRe = /^- \[(.+?)\]\((.+?)\) — (\d{4}-\d{2}-\d{2}) — 状态: (\S+)/;

  let mode = null;
  for (const line of markdown.split('\n')) {
    if (line.includes('ISSUE-LIST:START')) { mode = 'issue'; continue; }
    if (line.includes('ISSUE-LIST:END'))   { mode = null; continue; }
    if (line.includes('PR-LIST:START'))    { mode = 'pr'; continue; }
    if (line.includes('PR-LIST:END'))      { mode = null; continue; }
    if (!mode) continue;

    const m = line.match(lineRe);
    if (!m) continue;
    const [, title, url, date, rawStatus] = m;
    const status = rawStatus.toLowerCase();
    items.push({ type: mode, title, url, date, status, repo: repoFromUrl(url) });
  }
  return items;
}

async function loadContributions() {
  const listEl = document.getElementById('contrib-list');
  if (listEl) listEl.innerHTML = `<div class="state-placeholder"><div class="spinner"></div><p>Loading contributions…</p></div>`;

  try {
    const res = await fetch(README_RAW);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    state.contributions = parseContributions(text);
  } catch (e) {
    console.warn('Contributions load failed:', e);
    state.contributions = [];
  }

  const prs    = state.contributions.filter((c) => c.type === 'pr');
  const issues = state.contributions.filter((c) => c.type === 'issue');

  const prEl = document.getElementById('stat-prs');
  if (prEl) prEl.textContent = prs.length || '—';

  const issueEl = document.getElementById('stat-issues');
  if (issueEl) issueEl.textContent = issues.length || '—';

  renderContributions();
}

function filteredContributions() {
  const { type, status, query } = state.contrib;
  return state.contributions.filter((c) => {
    if (type !== 'all' && c.type !== type) return false;
    if (status !== 'all' && c.status !== status) return false;
    if (query) {
      const q = query.toLowerCase();
      if (!c.title.toLowerCase().includes(q) && !c.repo.toLowerCase().includes(q)) return false;
    }
    return true;
  });
}

function renderContributions() {
  const listEl = document.getElementById('contrib-list');
  if (!listEl) return;
  const items = filteredContributions();

  const countEl = document.getElementById('contrib-count');
  if (countEl) countEl.textContent = `${items.length} items`;

  if (items.length === 0) {
    listEl.innerHTML = `<div class="state-placeholder"><p>No contributions found.</p></div>`;
    return;
  }

  listEl.innerHTML = items.map((c) => {
    const icon = c.type === 'pr' ? prIcon(c.status) : issueIcon(c.status);
    const statusClass = c.status === 'merged' ? 'state-merged'
      : c.status === 'open' ? 'state-open' : 'state-closed';
    const statusLabel = c.status.charAt(0).toUpperCase() + c.status.slice(1);
    const repo = c.repo ? `<span class="repo-tag">${esc(c.repo)}</span>` : '';
    return `
      <div class="contrib-card">
        <div class="contrib-icon">${icon}</div>
        <div class="contrib-body">
          <div class="contrib-title"><a href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.title)}</a></div>
          <div class="contrib-meta">
            ${repo}
            <span class="state-badge ${statusClass}">${esc(statusLabel)}</span>
            <span>${esc(fmtDate(c.date))}</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

function prIcon(status) {
  const color = status === 'merged' ? '#8250df' : status === 'open' ? '#1a7f37' : '#d1242f';
  return `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354Z"/></svg>`;
}

function issueIcon(status) {
  const color = status === 'open' ? '#1a7f37' : '#8250df';
  return `<svg width="16" height="16" viewBox="0 0 16 16" fill="${color}"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"/></svg>`;
}

/* ===== Blog ===== */
function uniqueCategories() {
  return [...new Set(BLOGS.map((b) => b.category).filter(Boolean))];
}

function filteredBlogs() {
  const { category, query } = state.blog;
  return BLOGS.filter((b) => {
    if (category !== 'all' && b.category !== category) return false;
    if (query) {
      const q = query.toLowerCase();
      if (!`${b.title} ${b.summary || ''}`.toLowerCase().includes(q)) return false;
    }
    return true;
  });
}

function renderBlogFilters() {
  const el = document.getElementById('blog-category-filters');
  if (!el) return;
  const cats = ['all', ...uniqueCategories()];
  el.innerHTML = cats.map((c) => {
    const label = c === 'all' ? 'All' : c;
    return `<button class="pill${c === state.blog.category ? ' active' : ''}" data-cat="${esc(c)}">${esc(label)}</button>`;
  }).join('');
  el.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.blog.category = btn.dataset.cat;
      renderBlogFilters();
      renderBlogList();
    });
  });
}

function renderBlogList() {
  const listEl = document.getElementById('blog-list');
  if (!listEl) return;
  const items = filteredBlogs();

  const countEl = document.getElementById('blog-count');
  if (countEl) countEl.textContent = `${items.length} post${items.length !== 1 ? 's' : ''}`;

  if (items.length === 0) {
    listEl.innerHTML = `<li class="state-placeholder"><p>${BLOGS.length === 0 ? 'No posts yet. Stay tuned!' : 'No matching posts.'}</p></li>`;
    return;
  }

  listEl.innerHTML = items.map((b) => {
    const titleHtml = b.link && b.link !== '#'
      ? `<a href="${esc(b.link)}" target="_blank" rel="noopener">${esc(b.title)}</a>`
      : `<span>${esc(b.title)}</span>`;
    return `
      <li class="blog-card">
        <div class="blog-title">${titleHtml}</div>
        ${b.summary ? `<p class="blog-summary">${esc(b.summary)}</p>` : ''}
        <div class="blog-meta">
          ${b.category ? `<span class="category-badge">${esc(b.category)}</span>` : ''}
          ${b.date ? `<span>${esc(fmtDate(b.date))}</span>` : ''}
        </div>
      </li>`;
  }).join('');
}

/* ===== Categories Page ===== */
function renderCategories() {
  const el = document.getElementById('categories-content');
  if (!el) return;
  const cats = uniqueCategories();
  if (cats.length === 0) {
    el.innerHTML = `<div class="state-placeholder"><p>No categories yet.</p></div>`;
    return;
  }
  el.innerHTML = `<div class="categories-grid">${cats.map((c) => {
    const count = BLOGS.filter((b) => b.category === c).length;
    return `<div class="category-card" data-cat="${esc(c)}">
      <div class="category-card-name">${esc(c)}</div>
      <div class="category-card-count">${count} post${count !== 1 ? 's' : ''}</div>
    </div>`;
  }).join('')}</div>`;

  el.querySelectorAll('.category-card').forEach((card) => {
    card.addEventListener('click', () => {
      state.blog.category = card.dataset.cat;
      location.hash = '#blog';
    });
  });
}

/* ===== Tags Page ===== */
function allTags() {
  const tags = {};
  BLOGS.forEach((b) => {
    const t = b.category;
    if (t) tags[t] = (tags[t] || 0) + 1;
  });
  return tags;
}

function renderTagCloud() {
  const cloudEl = document.getElementById('tag-cloud');
  if (!cloudEl) return;
  const tags = allTags();
  const entries = Object.entries(tags);
  if (entries.length === 0) {
    cloudEl.innerHTML = `<div class="state-placeholder"><p>No tags yet.</p></div>`;
    return;
  }
  cloudEl.innerHTML = entries.map(([tag]) =>
    `<button class="tag-btn${state.tags.active === tag ? ' active' : ''}" data-tag="${esc(tag)}">${esc(tag)}</button>`
  ).join('');
  cloudEl.querySelectorAll('.tag-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.tags.active = state.tags.active === btn.dataset.tag ? null : btn.dataset.tag;
      renderTagCloud();
      renderTagPosts();
    });
  });
}

function renderTagPosts() {
  const el = document.getElementById('tag-filtered-posts');
  if (!el) return;
  if (!state.tags.active) { el.innerHTML = ''; return; }
  const posts = BLOGS.filter((b) => b.category === state.tags.active);
  if (posts.length === 0) { el.innerHTML = `<div class="state-placeholder"><p>No posts.</p></div>`; return; }
  el.innerHTML = `<ul class="post-list">${posts.map((b) => {
    const titleHtml = b.link && b.link !== '#'
      ? `<a href="${esc(b.link)}" target="_blank" rel="noopener">${esc(b.title)}</a>`
      : `<span>${esc(b.title)}</span>`;
    return `<li class="blog-card">
      <div class="blog-title">${titleHtml}</div>
      ${b.summary ? `<p class="blog-summary">${esc(b.summary)}</p>` : ''}
      <div class="blog-meta">
        ${b.date ? `<span>${esc(fmtDate(b.date))}</span>` : ''}
      </div>
    </li>`;
  }).join('')}</ul>`;
}

/* ===== Global Search ===== */
function setupGlobalSearch() {
  const input = document.getElementById('nav-search');
  const results = document.getElementById('nav-search-results');
  if (!input || !results) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.classList.remove('open'); return; }

    const blogHits = BLOGS.filter((b) =>
      `${b.title} ${b.summary || ''}`.toLowerCase().includes(q)
    ).slice(0, 4);

    const contribHits = state.contributions.filter((c) =>
      `${c.title} ${c.repo}`.toLowerCase().includes(q)
    ).slice(0, 4);

    if (blogHits.length === 0 && contribHits.length === 0) {
      results.innerHTML = `<div class="search-result-item"><div class="result-type">No results</div></div>`;
    } else {
      results.innerHTML = [
        ...blogHits.map((b) => `<a class="search-result-item" href="#blog">
          <div class="result-type">Blog</div>${esc(b.title)}</a>`),
        ...contribHits.map((c) => `<a class="search-result-item" href="${esc(c.url)}" target="_blank" rel="noopener">
          <div class="result-type">${c.type === 'pr' ? 'Pull Request' : 'Issue'} · ${esc(c.repo)}</div>${esc(c.title)}</a>`),
      ].join('');
    }
    results.classList.add('open');
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.classList.remove('open');
    }
  });
}

/* ===== Contribution Filters ===== */
function setupContribFilters() {
  const searchEl = document.getElementById('contrib-search');
  if (searchEl) {
    searchEl.addEventListener('input', () => {
      state.contrib.query = searchEl.value;
      renderContributions();
    });
  }

  document.querySelectorAll('[data-type]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.contrib.type = btn.dataset.type;
      document.querySelectorAll('[data-type]').forEach((b) =>
        b.classList.toggle('active', b.dataset.type === state.contrib.type)
      );
      renderContributions();
    });
  });

  document.querySelectorAll('[data-status]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.contrib.status = btn.dataset.status;
      document.querySelectorAll('[data-status]').forEach((b) =>
        b.classList.toggle('active', b.dataset.status === state.contrib.status)
      );
      renderContributions();
    });
  });
}

/* ===== Blog Search ===== */
function setupBlogSearch() {
  const el = document.getElementById('blog-search');
  if (!el) return;
  el.addEventListener('input', () => {
    state.blog.query = el.value;
    renderBlogList();
  });
}

/* ===== Mobile Menu ===== */
function setupMobileMenu() {
  const btn = document.getElementById('nav-hamburger');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => links.classList.toggle('open'));
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

  setupMobileMenu();
  setupGlobalSearch();
  setupBlogSearch();
  setupContribFilters();

  navigate(currentPage());
  window.addEventListener('hashchange', () => navigate(currentPage()));

  renderBlogFilters();
  renderBlogList();
  renderCategories();
  renderTagCloud();

  loadProfile();
  loadContributions();
});
