/* ===== Configuration ===== */
const USERNAME = 'yilin0518';
const API_BASE = 'https://api.github.com';

/* ===== Blog data ===== */
const BLOGS = [
  {
    title: 'Rust 编译器学习笔记',
    date: '2025-01-12',
    category: 'Rust',
    summary: '记录阅读 rustc 源码的阶段性收获与关键概念。',
    link: '#'
  },
  {
    title: '用 AI 辅助写开源贡献日志',
    date: '2025-02-08',
    category: 'AI',
    summary: '总结如何用工具整理 issue/PR 记录，提升协作效率。',
    link: '#'
  },
  {
    title: '项目复盘：从需求到发布',
    date: '2025-03-18',
    category: 'Project',
    summary: '复盘一次完整迭代中的关键决策与踩坑记录。',
    link: '#'
  }
];

const blogState = {
  category: 'all',
  query: ''
};

/* ===== Utility helpers ===== */
function escape(str) {
  const d = document.createElement('div');
  d.textContent = str ?? '';
  return d.innerHTML;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toISOString().slice(0, 10);
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
    if (user.avatar_url && avatarEl) {
      avatarEl.outerHTML = `<img id="profile-avatar" class="profile-avatar" src="${escape(user.avatar_url)}&s=220" alt="${escape(user.login)}" />`;
    }

    const nameEl = document.getElementById('profile-name');
    if (nameEl) nameEl.textContent = user.name || user.login;

    const bioEl = document.getElementById('profile-bio');
    if (bioEl && user.bio) bioEl.textContent = user.bio;

    document.getElementById('stat-repos').textContent = user.public_repos ?? '—';
    document.getElementById('stat-followers').textContent = user.followers ?? '—';
    document.getElementById('stat-following').textContent = user.following ?? '—';

    const linksEl = document.getElementById('profile-links');
    if (linksEl && user.blog) {
      linksEl.insertAdjacentHTML(
        'beforeend',
        `<a href="${escape(user.blog.startsWith('http') ? user.blog : 'https://' + user.blog)}" target="_blank" rel="noopener">🌐 Website</a>`
      );
    }
    if (linksEl && user.location) {
      linksEl.insertAdjacentHTML('beforeend', `<span>📍 ${escape(user.location)}</span>`);
    }
    if (linksEl && user.company) {
      linksEl.insertAdjacentHTML('beforeend', `<span>🏢 ${escape(user.company)}</span>`);
    }
  } catch (e) {
    console.warn('Could not load profile:', e);
  }
}

/* ===== Blog rendering ===== */
function uniqueCategories() {
  return Array.from(new Set(BLOGS.map((blog) => blog.category))).filter(Boolean);
}

function matchesBlog(blog) {
  const matchesCategory = blogState.category === 'all' || blog.category === blogState.category;
  const query = blogState.query.trim().toLowerCase();
  if (!query) return matchesCategory;
  const haystack = `${blog.title} ${blog.summary || ''}`.toLowerCase();
  return matchesCategory && haystack.includes(query);
}

function renderCategoryFilters() {
  const container = document.getElementById('category-filters');
  if (!container) return;
  const categories = ['all', ...uniqueCategories()];
  container.innerHTML = categories
    .map((category) => {
      const label = category === 'all' ? 'All' : category;
      const activeClass = category === blogState.category ? 'active' : '';
      return `<button class="filter-btn ${activeClass}" data-category="${escape(category)}">${escape(label)}</button>`;
    })
    .join('');

  container.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      blogState.category = btn.dataset.category || 'all';
      renderCategoryFilters();
      renderBlogList();
    });
  });
}

function renderBlogList() {
  const list = document.getElementById('blog-list');
  if (!list) return;
  const filtered = BLOGS.filter(matchesBlog);

  const countEl = document.getElementById('blog-count');
  if (countEl) countEl.textContent = String(filtered.length);

  if (filtered.length === 0) {
    list.innerHTML = `<li class="state-placeholder"><p>没有匹配的博客。</p></li>`;
    return;
  }

  list.innerHTML = filtered
    .map((blog) => {
      const title = escape(blog.title);
      const summary = escape(blog.summary || '');
      const category = escape(blog.category || '');
      const date = escape(formatDate(blog.date));
      const titleHtml = blog.link
        ? `<a href="${escape(blog.link)}" target="_blank" rel="noopener">${title}</a>`
        : `<span>${title}</span>`;

      return `
        <li class="blog-card">
          <div class="blog-title">${titleHtml}</div>
          ${summary ? `<p class="blog-summary">${summary}</p>` : ''}
          <div class="blog-meta">
            ${category ? `<span class="category-tag">${category}</span>` : ''}
            ${date ? `<span>${date}</span>` : ''}
          </div>
        </li>`;
    })
    .join('');
}

function setupSearch() {
  const input = document.getElementById('blog-search');
  if (!input) return;
  input.addEventListener('input', () => {
    blogState.query = input.value;
    renderBlogList();
  });
}

function updateBlogStats() {
  const blogCount = document.getElementById('stat-blogs');
  const categoryCount = document.getElementById('stat-categories');
  if (blogCount) blogCount.textContent = BLOGS.length;
  if (categoryCount) categoryCount.textContent = uniqueCategories().length;
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  loadProfile();
  renderCategoryFilters();
  setupSearch();
  renderBlogList();
  updateBlogStats();
});
