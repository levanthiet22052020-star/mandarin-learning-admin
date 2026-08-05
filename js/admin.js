/* ============================================
   HSK Admin · App Logic
   ============================================ */

/* ─── Icon library (SVG inline, không dùng emoji) ─── */
const I = {
  dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  quiz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  shuffle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  grammar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
  empty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  // ─── AI feature icons ───
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  save: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
  undo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  paperclip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>',
  // Section icons (renderAiPreview)
  secVocab: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  secDialog: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  secGrammar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>',
  secFill: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  secSort: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="15" y2="12"/><line x1="3" y1="18" x2="9" y2="18"/></svg>',
  secMatch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  secQuiz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  secWarmup: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  secConvo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
};

/* ─── Toast ─── */
function toast(title, msg, type = 'info') {
  const wrap = document.getElementById('toast-wrap');
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  const ic = type === 'success' ? I.check : type === 'error' ? I.alert : type === 'warning' ? I.alert : I.info;
  t.innerHTML = `<div class="toast-ic">${ic}</div><div class="toast-body"><div class="toast-title"></div><div class="toast-msg"></div></div>`;
  t.querySelector('.toast-title').textContent = title;
  t.querySelector('.toast-msg').textContent = msg || '';
  wrap.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(20px)'; setTimeout(() => t.remove(), 250); }, 3500);
}

/* ─── Confirm dialog ─── */
function confirmDialog(opts) {
  return new Promise(resolve => {
    const ov = document.getElementById('confirm-overlay');
    ov.querySelector('.confirm-title').textContent = opts.title || 'Xác nhận';
    ov.querySelector('.confirm-msg').textContent = opts.msg || 'Bạn có chắc muốn thực hiện?';
    const target = ov.querySelector('.confirm-target');
    if (opts.target) { target.style.display = 'inline-block'; target.textContent = opts.target; }
    else target.style.display = 'none';
    const ok = ov.querySelector('.btn-danger');
    const cancel = ov.querySelectorAll('.btn-ghost, .btn:not(.btn-danger)');
    const close = () => { ov.classList.remove('show'); ok.onclick = null; cancel.forEach(b => b.onclick = null); };
    ok.onclick = () => { close(); resolve(true); };
    cancel.forEach(b => b.onclick = () => { close(); resolve(false); });
    ov.classList.add('show');
  });
}

/* ─── Modal helper ─── */
function openModal(id) { document.getElementById(id).classList.add('show'); }
function closeModal(id) { document.getElementById(id).classList.remove('show'); }

/* ─── Escape (đóng modal) ─── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.show').forEach(m => m.classList.remove('show'));
  }
});

/* ─── Navigation (sidebar) ─── */
function showView(name, navItem) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const view = document.getElementById('view-' + name);
  if (view) view.classList.add('active');
  // Tự tìm nav-item nếu không truyền (vd. gọi từ dashboard shortcut)
  if (!navItem) navItem = document.querySelector('.nav-item[onclick*="showView(\'' + name + '\'"]');
  if (navItem) {
    navItem.classList.add('active');
    const title = navItem.dataset.title;
    if (title) document.getElementById('page-title').textContent = title;
  }
  // Render tương ứng khi mở view
  if (name === 'dashboard') renderDashboard();
  if (name === 'vocab') renderVocab();
  if (name === 'flashcards') renderFlashcards();
  if (name === 'dialogs') renderDialogs();
  if (name === 'quiz') renderQuiz();
  if (name === 'warmup') renderWarmup();
  if (name === 'convo') renderConvo();
  if (name === 'grammar') renderGrammar();
  if (name === 'lessons') renderLessons();
  if (name === 'users') renderUsers();
  // Đóng mobile sidebar (kèm backdrop)
  document.querySelector('.sidebar').classList.remove('open');
  const bd = document.getElementById('sidebar-backdrop');
  if (bd) bd.classList.remove('show');
}

/* ════════════════════════════════════════════
   DASHBOARD
   ════════════════════════════════════════════ */
function renderDashboard() {
  const cards = [
    { ic: 'blue', svg: I.book, lbl: 'Từ vựng', go: "showView('vocab')" },
    { ic: 'indigo', svg: I.layers, lbl: 'Thẻ nhớ', go: "showView('flashcards')" },
    { ic: 'cyan', svg: I.chat, lbl: 'Hội thoại', go: "showView('dialogs')" },
    { ic: 'pink', svg: I.quiz, lbl: 'Trắc nghiệm', go: "showQuizType('mc')" },
    { ic: 'amber', svg: I.pen, lbl: 'Điền từ', go: "showQuizType('fill')" },
    { ic: 'orange', svg: I.shuffle, lbl: 'Sắp xếp', go: "showQuizType('sort')" },
    { ic: 'teal', svg: I.link, lbl: 'Nối câu', go: "showQuizType('match')" },
    { ic: 'green', svg: I.dashboard, lbl: 'Khởi động', go: "showView('warmup')" },
    { ic: 'rose', svg: I.chat, lbl: 'Luyện nói', go: "showView('convo')" },
    { ic: 'purple', svg: I.grammar, lbl: 'Ngữ pháp', go: "showView('grammar')" },
  ];
  document.getElementById('stats-grid').innerHTML = cards.map(c => `
    <button class="stat-card shortcut" onclick="${c.go}">
      <div class="stat-ic ${c.ic}">${c.svg}</div>
      <div class="stat-lbl">${c.lbl}</div>
    </button>`).join('');

  // Quick actions
  const qa = document.getElementById('quick-actions');
  if (qa) qa.innerHTML = `
    <button class="btn btn-primary" onclick="showView('vocab',document.querySelector('.nav-item[data-title=\"Từ vựng\"]'))">${I.plus} Thêm từ vựng</button>
    <button class="btn" onclick="showView('dialogs',document.querySelector('.nav-item[data-title=\"Hội thoại\"]'))">${I.plus} Thêm hội thoại</button>
    <button class="btn" onclick="showView('quiz',document.querySelector('.nav-item[data-title=\"Bài tập\"]'))">${I.plus} Thêm bài tập</button>
    <button class="btn" onclick="showView('grammar',document.querySelector('.nav-item[data-title=\"Ngữ pháp\"]'))">${I.plus} Thêm ngữ pháp</button>`;
}

/* ════════════════════════════════════════════
   VOCAB (Từ vựng)
   ════════════════════════════════════════════ */
const POS_LIST = ['Danh từ', 'Động từ', 'Tính từ', 'Phó từ', 'Đại từ', 'Trợ từ', 'Số lượng từ', 'Lượng từ'];
const LESSON_LIST = [1, 2, 3];
let vocabFilter = { q: '', lesson: '', pos: '' };

function posClass(pos) {
  const map = {
    'Danh từ': 'pos-n', 'Động từ': 'pos-v', 'Tính từ': 'pos-a', 'Phó từ': 'pos-adv',
    'Đại từ': 'pos-p', 'Trợ từ': 'pos-le', 'Số lượng từ': 'pos-n2', 'Lượng từ': 'pos-m'
  };
  return map[pos] || 'tag-gray';
}

function renderVocab() {
  const tbody = document.getElementById('vocab-tbody');
  const list = Store.list('vocab').filter(v => {
    if (vocabFilter.lesson && v.lesson !== Number(vocabFilter.lesson)) return false;
    if (vocabFilter.pos && v.pos !== vocabFilter.pos) return false;
    if (vocabFilter.q) {
      const q = vocabFilter.q.toLowerCase();
      return (v.zh + v.py + v.vn + getExamples(v).map(e => e.zh + e.vn).join(' ')).toLowerCase().includes(q);
    }
    return true;
  });
  document.getElementById('vocab-count').textContent = `${list.length} / ${Store.list('vocab').length} từ`;

  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="7"><div class="empty">${I.empty}<h3>Không tìm thấy từ vựng</h3><p>Thử bỏ bộ lọc hoặc thêm từ mới.</p></div></td></tr>`;
    return;
  }
  tbody.innerHTML = list.map(v => `
    <tr>
      <td class="col-num">#${v.n}</td>
      <td class="col-em">${v.em || ''}</td>
      <td><div class="col-zh">${v.zh}</div><div class="col-py">${v.py}</div></td>
      <td class="col-vn">${v.vn}</td>
      <td><span class="tag ${posClass(v.pos)}">${v.pos}</span></td>
      <td><span class="tag tag-blue">Bài ${v.lesson}</span></td>
      <td class="col-actions">
        <button class="row-btn" title="Sửa" onclick="openVocabForm(${v.n})">${I.edit}</button>
        <button class="row-btn danger" title="Xóa" onclick="deleteVocab(${v.n})">${I.trash}</button>
      </td>
    </tr>`).join('');
}

function openVocabForm(n) {
  const v = n ? Store.get('vocab', n) : { n: null, zh: '', py: '', pos: 'Danh từ', vn: '', em: '', lesson: 1 };
  const form = document.getElementById('vocab-form');
  form.n.value = v.n || '';
  form.zh.value = v.zh || '';
  form.py.value = v.py || '';
  form.pos.value = v.pos || 'Danh từ';
  form.vn.value = v.vn || '';
  form.em.value = v.em || '';
  form.lesson.value = v.lesson || 1;
  renderExampleRows(getExamples(v));
  document.getElementById('vocab-modal-title').textContent = v.n ? 'Sửa từ vựng #' + v.n : 'Thêm từ vựng mới';
  openModal('vocab-modal');
}

// Render danh sách row ví dụ trong form vocab. list = [{zh,py,vn}]
function renderExampleRows(list) {
  const wrap = document.getElementById('vocab-examples-list');
  if (!wrap) return;
  const rows = (list && list.length) ? list : [{ zh: '', py: '', vn: '' }];
  wrap.innerHTML = rows.map((e, i) => `
    <div class="ex-row" style="display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:8px;margin-bottom:8px;align-items:end;">
      <div class="form-field" style="margin:0;">
        <label>Ví dụ ${i + 1} — Trung</label>
        <input class="input" name="ex-zh" placeholder="今天天气怎么样？" value="${escapeAttr(e.zh || '')}">
      </div>
      <div class="form-field" style="margin:0;">
        <label>Phiên âm</label>
        <input class="input" name="ex-py" placeholder="Jīntiān tiānqì zěnmeyàng?" value="${escapeAttr(e.py || '')}">
      </div>
      <div class="form-field" style="margin:0;">
        <label>Tiếng Việt</label>
        <input class="input" name="ex-vn" placeholder="Hôm nay thời tiết thế nào?" value="${escapeAttr(e.vn || '')}">
      </div>
      <button type="button" class="btn btn-sm btn-ghost" title="Xóa ví dụ này" onclick="removeExampleRow(this)" style="height:38px;">${I.trash}</button>
    </div>`).join('');
}

function addExampleRow() {
  const wrap = document.getElementById('vocab-examples-list');
  if (!wrap) return;
  const idx = wrap.querySelectorAll('.ex-row').length;
  const div = document.createElement('div');
  div.className = 'ex-row';
  div.style.cssText = 'display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:8px;margin-bottom:8px;align-items:end;';
  div.innerHTML = `
    <div class="form-field" style="margin:0;">
      <label>Ví dụ ${idx + 1} — Trung</label>
      <input class="input" name="ex-zh" placeholder="今天天气怎么样？">
    </div>
    <div class="form-field" style="margin:0;">
      <label>Phiên âm</label>
      <input class="input" name="ex-py" placeholder="Jīntiān tiānqì zěnmeyàng?">
    </div>
    <div class="form-field" style="margin:0;">
      <label>Tiếng Việt</label>
      <input class="input" name="ex-vn" placeholder="Hôm nay thời tiết thế nào?">
    </div>
    <button type="button" class="btn btn-sm btn-ghost" title="Xóa ví dụ này" onclick="removeExampleRow(this)" style="height:38px;">${I.trash}</button>`;
  wrap.appendChild(div);
}

function removeExampleRow(btn) {
  const row = btn.closest('.ex-row');
  if (!row) return;
  const wrap = document.getElementById('vocab-examples-list');
  row.remove();
  // Nếu xóa hết rồi thì giữ 1 row trống (tránh form không có ô nhập)
  if (wrap && !wrap.querySelectorAll('.ex-row').length) renderExampleRows([]);
  // Cập nhật lại label số thứ tự
  if (wrap) wrap.querySelectorAll('.ex-row').forEach((r, i) => {
    const lbl = r.querySelector('label');
    if (lbl) lbl.textContent = `Ví dụ ${i + 1} — Trung`;
  });
}

function submitVocabForm(e) {
  e.preventDefault();
  const f = e.target;
  // Thu thập examples từ các row động
  const exRows = (document.getElementById('vocab-examples-list') || {}).querySelectorAll?.('.ex-row') || [];
  const examples = Array.from(exRows).map(r => ({
    zh: (r.querySelector('[name=ex-zh]') || {}).value?.trim() || '',
    py: (r.querySelector('[name=ex-py]') || {}).value?.trim() || '',
    vn: (r.querySelector('[name=ex-vn]') || {}).value?.trim() || '',
  })).filter(e => e.zh || e.py || e.vn);
  const item = {
    zh: f.zh.value.trim(),
    py: f.py.value.trim(),
    pos: f.pos.value,
    vn: f.vn.value.trim(),
    em: f.em.value.trim(),
    lesson: Number(f.lesson.value),
    examples,
    // Đồng bộ ex_* cũ (lấy item đầu) cho backward-compat với code cũ
    ex_zh: examples.length ? examples[0].zh : '',
    ex_py: examples.length ? examples[0].py : '',
    ex_vn: examples.length ? examples[0].vn : '',
  };
  if (!item.zh || !item.py || !item.vn) {
    toast('Thiếu thông tin', 'Vui lòng nhập chữ Hán, phiên âm và nghĩa.', 'error');
    return;
  }
  if (f.n.value) {
    Store.update('vocab', Number(f.n.value), item);
    toast('Đã cập nhật', `Từ "${item.zh}" đã được lưu.`, 'success');
  } else {
    Store.add('vocab', item);
    toast('Đã thêm', `Từ "${item.zh}" đã được thêm vào.`, 'success');
  }
  closeModal('vocab-modal');
  renderVocab();
}

async function deleteVocab(n) {
  const v = Store.get('vocab', n);
  const ok = await confirmDialog({
    title: 'Xóa từ vựng?',
    msg: 'Từ này sẽ bị xóa vĩnh viễn. Hành động không thể hoàn tác.',
    target: v ? `${v.zh} (${v.py})` : `#${n}`
  });
  if (!ok) return;
  Store.remove('vocab', n);
  toast('Đã xóa', `Từ "${v.zh}" đã bị xóa.`, 'success');
  renderVocab();
}

/* ════════════════════════════════════════════
   FLASHCARDS (Thẻ nhớ) — xem trước vocab dạng thẻ
   Không có collection riêng; đọc từ Store.list('vocab')
   của bài đang chọn, đúng như web học render flashcard.
   ════════════════════════════════════════════ */
function vocabIcon(v) {
  // Ưu tiên emoji riêng, fallback theo từ loại
  if (v.em) return v.em;
  const m = {
    'Danh từ': '📕', 'Động từ': '🎬', 'Tính từ': '✨', 'Phó từ': '💨',
    'Đại từ': '👉', 'Trợ từ': '🔹', 'Số lượng từ': '🔢', 'Lượng từ': '📐'
  };
  return m[v.pos] || '🔖';
}

function renderFlashcards() {
  const wrap = document.getElementById('flashcards-wrap');
  const list = Store.list('vocab');
  const cnt = document.getElementById('flashcards-count');
  if (cnt) cnt.textContent = `${list.length} thẻ · bài ${Store.currentLesson() ? (Store.currentLesson().badge || '') : '?'}`.trim();

  if (!list.length) {
    wrap.innerHTML = `<div class="empty">${I.empty}<h3>Chưa có thẻ nhớ</h3><p>Thẻ nhớ được tạo từ Từ vựng. Thêm từ vựng để tạo thẻ.</p><button class="btn btn-primary" onclick="openVocabForm()">${I.plus} Thêm từ làm thẻ</button></div>`;
    return;
  }
  wrap.innerHTML = `<div class="flash-grid">${list.map(v => `
    <div class="flash-card-preview">
      <div class="flash-front">
        <div class="flash-em">${vocabIcon(v)}</div>
        <div class="flash-zh">${escapeHtml(v.zh || '')}</div>
        <div class="flash-py">${escapeHtml(v.py || '')}</div>
      </div>
      <div class="flash-back">
        <div class="flash-vn">${escapeHtml(v.vn || '')}</div>
        ${(() => { const exs = getExamples(v); return exs.length ? `<div class="flash-ex">${exs.map(e => escapeHtml(e.zh || '') + (e.vn ? ' — ' + escapeHtml(e.vn) : '')).join('<br>')}</div>` : ''; })()}
      </div>
      <div class="flash-actions">
        <button class="row-btn" title="Sửa từ này" onclick="openVocabForm(${v.n})">${I.edit}</button>
      </div>
    </div>`).join('')}</div>`;
}

/* ════════════════════════════════════════════
   DIALOGS (Hội thoại)
   ════════════════════════════════════════════ */
function renderDialogs() {
  const wrap = document.getElementById('dialogs-wrap');
  const list = Store.list('dialogs');
  if (!list.length) {
    wrap.innerHTML = `<div class="empty">${I.empty}<h3>Chưa có hội thoại</h3><p>Bấm nút "Thêm hội thoại" để tạo đoạn đầu tiên.</p><button class="btn btn-primary" onclick="openDialogForm()">${I.plus} Thêm hội thoại</button></div>`;
    return;
  }
  wrap.innerHTML = list.map(d => `
    <div class="panel">
      <div class="panel-head">
        <div>
          <div class="panel-title">Hội thoại #${d.id} · ${escapeHtml(d.scene || '')}</div>
          <div style="color:var(--muted);font-size:.85rem;margin-top:3px;">${(d.chars || []).map(escapeHtml).join(' · ')} — ${d.lines.length} câu</div>
        </div>
        <div class="page-actions">
          <button class="row-btn" title="Sửa" onclick='openDialogForm(${d.id})'>${I.edit}</button>
          <button class="row-btn danger" title="Xóa" onclick="deleteDialog(${d.id})">${I.trash}</button>
        </div>
      </div>
      <div class="table-wrap">
        <div class="table-scroll">
          <table class="data-table">
            <thead><tr><th>STT</th><th>Nhân vật</th><th>Tiếng Trung</th><th>Phiên âm</th><th>Tiếng Việt</th></tr></thead>
            <tbody>
              ${d.lines.map((l, i) => `
                <tr>
                  <td class="col-num">${i + 1}</td>
                  <td><span class="tag tag-${['blue', 'green', 'purple'][l.sp % 3]}">${escapeHtml(d.chars[l.sp] || '?')}</span></td>
                  <td class="col-zh">${escapeHtml(l.zh)}</td>
                  <td class="col-py">${escapeHtml(l.py)}</td>
                  <td class="col-vn">${escapeHtml(l.vn)}</td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>`).join('');
}

let dialogEditing = null; // state cho form hội thoại

function openDialogForm(id) {
  const d = id ? Store.get('dialogs', id) : { id: null, scene: '', chars: ['', ''], lines: [{ sp: 0, zh: '', py: '', vn: '' }] };
  dialogEditing = id ? JSON.parse(JSON.stringify(d)) : d;
  const form = document.getElementById('dialog-form');
  form.scene.value = dialogEditing.scene || '';
  form.char0.value = dialogEditing.chars[0] || '';
  form.char1.value = dialogEditing.chars[1] || '';
  if (dialogEditing.chars[2]) {
    form.char2.value = dialogEditing.chars[2];
    form.char2.style.display = '';
  } else {
    form.char2.value = '';
    form.char2.style.display = 'none';
  }
  document.getElementById('dialog-modal-title').textContent = id ? 'Sửa hội thoại #' + id : 'Thêm hội thoại';
  renderDialogLines();
  openModal('dialog-modal');
}

function renderDialogLines() {
  const wrap = document.getElementById('dialog-lines');
  const chars = ['char0', 'char1', 'char2'].map(n => document.getElementById('dialog-form')[n].value || '?');
  wrap.innerHTML = dialogEditing.lines.map((l, i) => `
    <div class="sublist-item">
      <div class="sublist-num">${i + 1}</div>
      <div class="sublist-body">
        <div class="sublist-fields">
          <select class="input dlg-sp" data-i="${i}">
            ${chars.map((c, j) => `<option value="${j}" ${l.sp === j ? 'selected' : ''}>Nhân vật ${j + 1}: ${c}</option>`).join('')}
          </select>
          <button type="button" class="btn btn-sm btn-ghost dlg-del" data-i="${i}" style="justify-content:flex-end;">${I.trash} Xóa câu</button>
        </div>
        <input class="input dlg-zh" data-i="${i}" placeholder="Tiếng Trung" value="${escapeAttr(l.zh)}">
        <input class="input dlg-py" data-i="${i}" placeholder="Phiên âm" value="${escapeAttr(l.py)}">
        <input class="input dlg-vn" data-i="${i}" placeholder="Tiếng Việt" value="${escapeAttr(l.vn)}">
      </div>
    </div>`).join('');
  // Bind events
  wrap.querySelectorAll('.dlg-sp').forEach(s => s.onchange = e => { dialogEditing.lines[+e.target.dataset.i].sp = +e.target.value; });
  wrap.querySelectorAll('.dlg-zh').forEach(s => s.oninput = e => { dialogEditing.lines[+e.target.dataset.i].zh = e.target.value; });
  wrap.querySelectorAll('.dlg-py').forEach(s => s.oninput = e => { dialogEditing.lines[+e.target.dataset.i].py = e.target.value; });
  wrap.querySelectorAll('.dlg-vn').forEach(s => s.oninput = e => { dialogEditing.lines[+e.target.dataset.i].vn = e.target.value; });
  wrap.querySelectorAll('.dlg-del').forEach(b => b.onclick = e => {
    const i = +e.currentTarget.dataset.i;
    dialogEditing.lines.splice(i, 1);
    renderDialogLines();
  });
}

function addDialogLine() {
  dialogEditing.lines.push({ sp: 0, zh: '', py: '', vn: '' });
  renderDialogLines();
}

function submitDialogForm(e) {
  e.preventDefault();
  const f = e.target;
  const chars = [f.char0.value.trim(), f.char1.value.trim()];
  if (f.char2.value.trim()) chars.push(f.char2.value.trim());
  if (!chars[0] || !chars[1]) {
    toast('Thiếu nhân vật', 'Vui lòng nhập ít nhất 2 nhân vật.', 'error');
    return;
  }
  // Lọc câu rỗng
  dialogEditing.lines = dialogEditing.lines.filter(l => l.zh.trim() && l.py.trim() && l.vn.trim());
  if (!dialogEditing.lines.length) {
    toast('Thiếu câu thoại', 'Hội thoại phải có ít nhất 1 câu.', 'error');
    return;
  }
  dialogEditing.scene = f.scene.value.trim();
  dialogEditing.chars = chars;
  if (dialogEditing.id) {
    Store.update('dialogs', dialogEditing.id, dialogEditing);
    toast('Đã cập nhật', 'Hội thoại đã được lưu.', 'success');
  } else {
    Store.add('dialogs', dialogEditing);
    toast('Đã thêm', 'Hội thoại mới đã được tạo.', 'success');
  }
  closeModal('dialog-modal');
  renderDialogs();
}

async function deleteDialog(id) {
  const d = Store.get('dialogs', id);
  const ok = await confirmDialog({
    title: 'Xóa hội thoại?',
    msg: 'Toàn bộ câu thoại sẽ bị xóa vĩnh viễn.',
    target: d ? `#${id} · ${d.scene}` : `#${id}`
  });
  if (!ok) return;
  Store.remove('dialogs', id);
  toast('Đã xóa', 'Hội thoại đã bị xóa.', 'success');
  renderDialogs();
}

/* ════════════════════════════════════════════
   QUIZ (4 loại: mc, fill, sort, match — mỗi loại 1 mục sidebar riêng)
   ════════════════════════════════════════════ */
let quizTab = 'mc'; // mc | fill | sort | match
const QUIZ_META = {
  mc:    { title: 'Trắc nghiệm', add: 'openMcForm()' },
  fill:  { title: 'Điền từ',     add: 'openFillForm()' },
  sort:  { title: 'Sắp xếp',     add: 'openSortForm()' },
  match: { title: 'Nối câu',     add: 'openMatchForm()' },
};

// Mở mục bài tập với loại cụ thể (từ sidebar nav-item)
function showQuizType(t, navItem) {
  quizTab = t;
  showView('quiz', navItem);
}

// setQuizTab giữ lại (case còn dùng ở vài nơi), giờ chỉ set biến + render
function setQuizTab(t, btn) { quizTab = t; renderQuiz(); }

function renderQuiz() {
  const wrap = document.getElementById('quiz-content');
  const meta = QUIZ_META[quizTab] || QUIZ_META.mc;
  // Title + nút Thêm động theo loại đang mở
  const tEl = document.getElementById('quiz-page-title');
  if (tEl) tEl.textContent = 'Quản lý ' + meta.title.toLowerCase();
  const addBtn = document.getElementById('quiz-add-btn');
  if (addBtn) addBtn.innerHTML = `<button class="btn btn-primary" onclick="${meta.add}">${I.plus} Thêm ${meta.title.toLowerCase()}</button>`;

  const items = Store.list(quizTab);
  document.getElementById('quiz-count').textContent = `${items.length} câu`;

  if (quizTab === 'mc') return renderMc(wrap, items);
  if (quizTab === 'fill') return renderFill(wrap, items);
  if (quizTab === 'sort') return renderSort(wrap, items);
  if (quizTab === 'match') return renderMatch(wrap, items);
}

/* --- Trắc nghiệm (mc) --- */
function renderMc(wrap, items) {
  if (!items.length) {
    wrap.innerHTML = quizEmpty('trắc nghiệm', () => openMcForm());
    return;
  }
  wrap.innerHTML = items.map((q, i) => `
    <div class="panel" style="padding:16px 18px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="sublist-num" style="margin-top:2px;">${i + 1}</span>
        <div style="flex:1;">
          <div class="col-zh" style="margin-bottom:8px;">${escapeHtml(q.q)}</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">
            ${q.opts.map((o, j) => `<span class="tag ${j === q.ans ? 'tag-green' : 'tag-gray'}">${String.fromCharCode(65 + j)}. ${escapeHtml(o)}</span>`).join('')}
          </div>
        </div>
        <div style="display:flex;gap:4px;">
          <button class="row-btn" onclick="openMcForm(${q.n})">${I.edit}</button>
          <button class="row-btn danger" onclick="deleteQuizItem('mc',${q.n})">${I.trash}</button>
        </div>
      </div>
    </div>`).join('');
}

function openMcForm(n) {
  const q = n ? Store.get('mc', n) : { n: null, q: '', opts: ['', '', '', ''], ans: 0 };
  const f = document.getElementById('mc-form');
  f.n.value = q.n || '';
  f.q.value = q.q || '';
  f.ans.value = q.ans;
  for (let i = 0; i < 4; i++) f['opt' + i].value = q.opts[i] || '';
  document.getElementById('mc-modal-title').textContent = q.n ? 'Sửa câu trắc nghiệm #' + q.n : 'Thêm câu trắc nghiệm';
  openModal('mc-modal');
}
function submitMcForm(e) {
  e.preventDefault();
  const f = e.target;
  const opts = [f.opt0.value.trim(), f.opt1.value.trim(), f.opt2.value.trim(), f.opt3.value.trim()].filter(Boolean);
  const item = { q: f.q.value.trim(), opts, ans: Number(f.ans.value) };
  if (!item.q || opts.length < 2 || item.ans >= opts.length) {
    toast('Thiếu thông tin', 'Nhập câu hỏi, ít nhất 2 lựa chọn và đáp án đúng.', 'error');
    return;
  }
  if (f.n.value) { Store.update('mc', Number(f.n.value), item); toast('Đã cập nhật', 'Câu trắc nghiệm đã được lưu.', 'success'); }
  else { Store.add('mc', item); toast('Đã thêm', 'Câu trắc nghiệm mới đã được tạo.', 'success'); }
  closeModal('mc-modal');
  renderQuiz();
}

/* --- Điền từ (fill) --- */
function renderFill(wrap, items) {
  if (!items.length) { wrap.innerHTML = quizEmpty('điền từ', () => openFillForm()); return; }
  wrap.innerHTML = items.map((q, i) => `
    <div class="panel" style="padding:16px 18px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="sublist-num" style="margin-top:2px;">${i + 1}</span>
        <div style="flex:1;">
          <div class="col-zh" style="margin-bottom:6px;">${escapeHtml(q.pre)}<span class="tag tag-amber" style="vertical-align:middle;">${escapeHtml(q.blank)}</span>${escapeHtml(q.post)}</div>
          <div class="cell-muted">💡 ${escapeHtml(q.hint)}</div>
        </div>
        <div style="display:flex;gap:4px;">
          <button class="row-btn" onclick="openFillForm(${q.n})">${I.edit}</button>
          <button class="row-btn danger" onclick="deleteQuizItem('fill',${q.n})">${I.trash}</button>
        </div>
      </div>
    </div>`).join('');
}
function openFillForm(n) {
  const q = n ? Store.get('fill', n) : { n: null, pre: '', blank: '', post: '', hint: '', ans: '', exp: '' };
  const f = document.getElementById('fill-form');
  f.n.value = q.n || ''; f.pre.value = q.pre || ''; f.blank.value = q.blank || ''; f.post.value = q.post || '';
  f.hint.value = q.hint || ''; f.ans.value = q.ans || ''; f.exp.value = q.exp || '';
  document.getElementById('fill-modal-title').textContent = q.n ? 'Sửa câu điền từ #' + q.n : 'Thêm câu điền từ';
  openModal('fill-modal');
}
function submitFillForm(e) {
  e.preventDefault();
  const f = e.target;
  const item = { pre: f.pre.value.trim(), blank: f.blank.value.trim(), post: f.post.value.trim(), hint: f.hint.value.trim(), ans: f.ans.value.trim(), exp: f.exp.value.trim() };
  if (!item.pre || !item.blank || !item.ans) { toast('Thiếu thông tin', 'Nhập phần trước, đáp án và chữ cần điền.', 'error'); return; }
  if (f.n.value) { Store.update('fill', Number(f.n.value), item); toast('Đã cập nhật', 'Câu điền từ đã được lưu.', 'success'); }
  else { Store.add('fill', item); toast('Đã thêm', 'Câu điền từ mới đã được tạo.', 'success'); }
  closeModal('fill-modal'); renderQuiz();
}

/* --- Sắp xếp (sort) --- */
function renderSort(wrap, items) {
  if (!items.length) { wrap.innerHTML = quizEmpty('sắp xếp', () => openSortForm()); return; }
  wrap.innerHTML = items.map((q, i) => `
    <div class="panel" style="padding:16px 18px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="sublist-num" style="margin-top:2px;">${i + 1}</span>
        <div style="flex:1;">
          <div class="col-zh" style="margin-bottom:6px;">${escapeHtml(q.ans)}</div>
          <div class="cell-muted">📋 ${escapeHtml(q.vn)} · Từ: ${(q.words || []).map(escapeHtml).join(' | ')}</div>
        </div>
        <div style="display:flex;gap:4px;">
          <button class="row-btn" onclick="openSortForm(${q.n})">${I.edit}</button>
          <button class="row-btn danger" onclick="deleteQuizItem('sort',${q.n})">${I.trash}</button>
        </div>
      </div>
    </div>`).join('');
}
function openSortForm(n) {
  const q = n ? Store.get('sort', n) : { n: null, words: ['', '', ''], ans: '', vn: '' };
  const f = document.getElementById('sort-form');
  f.n.value = q.n || ''; f.ans.value = q.ans || ''; f.vn.value = q.vn || ''; f.words.value = (q.words || []).join(' | ');
  document.getElementById('sort-modal-title').textContent = q.n ? 'Sửa câu sắp xếp #' + q.n : 'Thêm câu sắp xếp';
  openModal('sort-modal');
}
function submitSortForm(e) {
  e.preventDefault();
  const f = e.target;
  const words = f.words.value.split('|').map(s => s.trim()).filter(Boolean);
  const item = { words, ans: f.ans.value.trim(), vn: f.vn.value.trim() };
  if (!words.length || !item.ans || !item.vn) { toast('Thiếu thông tin', 'Nhập danh sách từ, đáp án đúng và nghĩa.', 'error'); return; }
  if (f.n.value) { Store.update('sort', Number(f.n.value), item); toast('Đã cập nhật', 'Câu sắp xếp đã được lưu.', 'success'); }
  else { Store.add('sort', item); toast('Đã thêm', 'Câu sắp xếp mới đã được tạo.', 'success'); }
  closeModal('sort-modal'); renderQuiz();
}

/* --- Nối câu (match) --- */
function renderMatch(wrap, items) {
  if (!items.length) { wrap.innerHTML = quizEmpty('nối câu', () => openMatchForm()); return; }
  wrap.innerHTML = items.map((q, i) => `
    <div class="panel" style="padding:16px 18px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="sublist-num" style="margin-top:2px;">${i + 1}</span>
        <div style="flex:1;">
          <div class="col-zh" style="margin-bottom:6px;">${escapeHtml(q.left)} <span style="color:var(--primary);">→</span> ${escapeHtml(q.right)}</div>
        </div>
        <div style="display:flex;gap:4px;">
          <button class="row-btn" onclick="openMatchForm(${q.n})">${I.edit}</button>
          <button class="row-btn danger" onclick="deleteQuizItem('match',${q.n})">${I.trash}</button>
        </div>
      </div>
    </div>`).join('');
}
function openMatchForm(n) {
  const q = n ? Store.get('match', n) : { n: null, left: '', right: '' };
  const f = document.getElementById('match-form');
  f.n.value = q.n || ''; f.left.value = q.left || ''; f.right.value = q.right || '';
  document.getElementById('match-modal-title').textContent = q.n ? 'Sửa cặp nối #' + q.n : 'Thêm cặp nối';
  openModal('match-modal');
}
function submitMatchForm(e) {
  e.preventDefault();
  const f = e.target;
  const item = { left: f.left.value.trim(), right: f.right.value.trim() };
  if (!item.left || !item.right) { toast('Thiếu thông tin', 'Nhập cả vế trái và vế phải.', 'error'); return; }
  if (f.n.value) { Store.update('match', Number(f.n.value), item); toast('Đã cập nhật', 'Cặp nối đã được lưu.', 'success'); }
  else { Store.add('match', item); toast('Đã thêm', 'Cặp nối mới đã được tạo.', 'success'); }
  closeModal('match-modal'); renderQuiz();
}

/* --- Xóa chung + Empty state --- */
async function deleteQuizItem(key, n) {
  const ok = await confirmDialog({ title: 'Xóa câu hỏi?', msg: 'Câu hỏi sẽ bị xóa vĩnh viễn.' });
  if (!ok) return;
  Store.remove(key, n);
  toast('Đã xóa', 'Câu hỏi đã bị xóa.', 'success');
  renderQuiz();
}
function quizEmpty(name) {
  const fnMap = { 'trắc nghiệm': 'openMcForm()', 'điền từ': 'openFillForm()', 'sắp xếp': 'openSortForm()', 'nối câu': 'openMatchForm()' };
  const fn = fnMap[name] || '';
  return `<div class="empty">${I.empty}<h3>Chưa có câu ${name}</h3><p>Bấm nút bên dưới để thêm câu ${name} đầu tiên.</p><button class="btn btn-primary" onclick="${fn}">${I.plus} Thêm câu ${name}</button></div>`;
}

/* ════════════════════════════════════════════
   WARMUP (Card khởi động)
   Fields: img (emoji), label (zh), py, letter (A-F), ans (letter đúng)
   ════════════════════════════════════════════ */
const WU_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

function renderWarmup() {
  const wrap = document.getElementById('warmup-wrap');
  const list = Store.list('warmup');
  if (!list.length) {
    wrap.innerHTML = `<div class="empty">${I.empty}<h3>Chưa có card khởi động</h3><p>Bấm nút bên dưới để thêm card đầu tiên.</p><button class="btn btn-primary" onclick="openWarmupForm()">${I.plus} Thêm card</button></div>`;
    return;
  }
  wrap.innerHTML = list.map((w, i) => `
    <div class="panel" style="padding:16px 18px;">
      <div style="display:flex;gap:12px;align-items:center;">
        <span class="col-em" style="font-size:1.8rem;">${w.img || ''}</span>
        <div style="flex:1;">
          <div class="col-zh">${escapeHtml(w.label)}</div>
          <div class="col-py">${escapeHtml(w.py)}</div>
        </div>
        <span class="tag tag-blue">Chữ ${escapeHtml(w.letter || '?')}</span>
        <span class="tag tag-green">Đáp án ${escapeHtml(w.ans || '?')}</span>
        <div style="display:flex;gap:4px;">
          <button class="row-btn" title="Sửa" onclick="openWarmupForm('${escapeAttr(w.letter)}')">${I.edit}</button>
          <button class="row-btn danger" title="Xóa" onclick="deleteWarmup('${escapeAttr(w.letter)}')">${I.trash}</button>
        </div>
      </div>
    </div>`).join('');
}

function openWarmupForm(letter) {
  const w = letter ? Store.get('warmup', letter) : { letter: null, img: '', label: '', py: '', ans: '' };
  const f = document.getElementById('warmup-form');
  f.letter.value = w.letter || '';
  f.img.value = w.img || '';
  f.label.value = w.label || '';
  f.py.value = w.py || '';
  f.ans.value = w.ans || '';
  document.getElementById('warmup-modal-title').textContent = w.letter ? 'Sửa card khởi động ' + w.letter : 'Thêm card khởi động';
  openModal('warmup-modal');
}

function submitWarmupForm(e) {
  e.preventDefault();
  const f = e.target;
  const item = {
    img: f.img.value.trim(),
    label: f.label.value.trim(),
    py: f.py.value.trim(),
    ans: f.ans.value.trim(),
    letter: f.letter.value.trim(),
  };
  if (!item.label || !item.py || !item.letter || !item.ans) {
    toast('Thiếu thông tin', 'Nhập chữ Hán, phiên âm, chữ cái và đáp án.', 'error');
    return;
  }
  if (f.letter.value) {
    Store.update('warmup', f.letter.value, item);
    toast('Đã cập nhật', `Card "${item.label}" đã được lưu.`, 'success');
  } else {
    Store.add('warmup', item);
    toast('Đã thêm', `Card "${item.label}" đã được tạo.`, 'success');
  }
  closeModal('warmup-modal');
  renderWarmup();
}

async function deleteWarmup(letter) {
  const w = Store.get('warmup', letter);
  const ok = await confirmDialog({
    title: 'Xóa card khởi động?',
    msg: 'Card này sẽ bị xóa vĩnh viễn.',
    target: w ? `${w.img} ${w.label}` : letter
  });
  if (!ok) return;
  Store.remove('warmup', letter);
  toast('Đã xóa', 'Card khởi động đã bị xóa.', 'success');
  renderWarmup();
}

/* ════════════════════════════════════════════
   CONVO (Luyện hội thoại)
   Mỗi convo: { title, pairs: [ {q,q_py,q_vn,a,a_py,a_vn} ] }
   ════════════════════════════════════════════ */
let convoEditing = null;

function renderConvo() {
  const wrap = document.getElementById('convo-wrap');
  const list = Store.list('convo');
  if (!list.length) {
    wrap.innerHTML = `<div class="empty">${I.empty}<h3>Chưa có đoạn luyện nói</h3><p>Bấm nút bên dưới để thêm đoạn đầu tiên.</p><button class="btn btn-primary" onclick="openConvoForm()">${I.plus} Thêm đoạn luyện nói</button></div>`;
    return;
  }
  wrap.innerHTML = list.map((c, ci) => `
    <div class="panel">
      <div class="panel-head">
        <div>
          <div class="panel-title">Đoạn #${ci + 1} · ${escapeHtml(c.title || '')}</div>
          <div style="color:var(--muted);font-size:.85rem;margin-top:3px;">${(c.pairs || []).length} cặp hỏi – đáp</div>
        </div>
        <div class="page-actions">
          <button class="row-btn" title="Sửa" onclick="openConvoForm(${ci})">${I.edit}</button>
          <button class="row-btn danger" title="Xóa" onclick="deleteConvo(${ci})">${I.trash}</button>
        </div>
      </div>
      <div class="table-wrap">
        <div class="table-scroll">
          <table class="data-table">
            <thead><tr><th>STT</th><th>Câu hỏi (Q)</th><th>Câu trả lời (A)</th></tr></thead>
            <tbody>
              ${(c.pairs || []).map((p, i) => `
                <tr>
                  <td class="col-num">${i + 1}</td>
                  <td><div class="col-zh">${escapeHtml(p.q)}</div><div class="cell-muted">${escapeHtml(p.q_vn || '')}</div></td>
                  <td><div class="col-zh">${escapeHtml(p.a)}</div><div class="cell-muted">${escapeHtml(p.a_vn || '')}</div></td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>`).join('');
}

function openConvoForm(ci) {
  const c = (ci != null) ? Store.list('convo')[ci] : { title: '', pairs: [{ q: '', q_py: '', q_vn: '', a: '', a_py: '', a_vn: '' }] };
  convoEditing = { ci: (ci != null) ? ci : null, title: c.title || '', pairs: JSON.parse(JSON.stringify(c.pairs || [{ q: '', q_py: '', q_vn: '', a: '', a_py: '', a_vn: '' }])) };
  document.getElementById('convo-form').title.value = convoEditing.title;
  document.getElementById('convo-modal-title').textContent = (ci != null) ? 'Sửa đoạn luyện nói #' + (ci + 1) : 'Thêm đoạn luyện nói';
  renderConvoPairs();
  openModal('convo-modal');
}

function renderConvoPairs() {
  const wrap = document.getElementById('convo-pairs');
  wrap.innerHTML = convoEditing.pairs.map((p, i) => `
    <div class="sublist-item">
      <div class="sublist-num">${i + 1}</div>
      <div class="sublist-body">
        <div class="sublist-fields">
          <label class="cell-muted" style="font-size:.8rem;">Câu hỏi</label>
          <button type="button" class="btn btn-sm btn-ghost sublist-remove" data-i="${i}" style="justify-content:flex-end;">${I.trash} Xóa cặp</button>
        </div>
        <input class="input convo-q" data-i="${i}" placeholder="Tiếng Trung (câu hỏi)" value="${escapeAttr(p.q)}">
        <input class="input convo-qpy" data-i="${i}" placeholder="Phiên âm câu hỏi" value="${escapeAttr(p.q_py)}">
        <input class="input convo-qvn" data-i="${i}" placeholder="Tiếng Việt câu hỏi" value="${escapeAttr(p.q_vn)}">
        <label class="cell-muted" style="font-size:.8rem;margin-top:8px;">Câu trả lời mẫu</label>
        <input class="input convo-a" data-i="${i}" placeholder="Tiếng Trung (câu trả lời)" value="${escapeAttr(p.a)}">
        <input class="input convo-apy" data-i="${i}" placeholder="Phiên âm câu trả lời" value="${escapeAttr(p.a_py)}">
        <input class="input convo-avn" data-i="${i}" placeholder="Tiếng Việt câu trả lời" value="${escapeAttr(p.a_vn)}">
      </div>
    </div>`).join('');
  const bind = (sel, key) => wrap.querySelectorAll(sel).forEach(el => el.oninput = e => { convoEditing.pairs[+e.target.dataset.i][key] = e.target.value; });
  bind('.convo-q', 'q'); bind('.convo-qpy', 'q_py'); bind('.convo-qvn', 'q_vn');
  bind('.convo-a', 'a'); bind('.convo-apy', 'a_py'); bind('.convo-avn', 'a_vn');
  wrap.querySelectorAll('.sublist-remove').forEach(b => b.onclick = e => { convoEditing.pairs.splice(+e.currentTarget.dataset.i, 1); renderConvoPairs(); });
}

function addConvoPair() {
  convoEditing.pairs.push({ q: '', q_py: '', q_vn: '', a: '', a_py: '', a_vn: '' });
  renderConvoPairs();
}

function submitConvoForm(e) {
  e.preventDefault();
  const title = document.getElementById('convo-form').title.value.trim();
  if (!title) { toast('Thiếu tiêu đề', 'Nhập tiêu đề đoạn luyện nói.', 'error'); return; }
  convoEditing.pairs = convoEditing.pairs.filter(p => p.q.trim() && p.a.trim());
  if (!convoEditing.pairs.length) { toast('Thiếu cặp hỏi đáp', 'Ít nhất 1 cặp có câu hỏi và câu trả lời.', 'error'); return; }
  const item = { title, pairs: convoEditing.pairs };
  if (convoEditing.ci != null) {
    Store.update('convo', convoEditing.ci, item);
    toast('Đã cập nhật', 'Đoạn luyện nói đã được lưu.', 'success');
  } else {
    Store.add('convo', item);
    toast('Đã thêm', 'Đoạn luyện nói mới đã được tạo.', 'success');
  }
  closeModal('convo-modal');
  renderConvo();
}

async function deleteConvo(ci) {
  const c = Store.list('convo')[ci];
  const ok = await confirmDialog({
    title: 'Xóa đoạn luyện nói?',
    msg: 'Toàn bộ cặp hỏi – đáp sẽ bị xóa vĩnh viễn.',
    target: c ? `#${ci + 1} · ${c.title}` : `#${ci + 1}`
  });
  if (!ok) return;
  Store.remove('convo', ci);
  toast('Đã xóa', 'Đoạn luyện nói đã bị xóa.', 'success');
  renderConvo();
}

/* ════════════════════════════════════════════
   GRAMMAR (Điểm ngữ pháp) — trường cấu trúc
   Mỗi điểm: { num, title, titleZh, sub, rules[], formula[], table:{columns,rows}, note }
   ════════════════════════════════════════════ */
let grammarEditing = null;

function renderGrammar() {
  const wrap = document.getElementById('grammar-wrap');
  const list = Store.list('grammar');
  if (!list.length) {
    wrap.innerHTML = `<div class="empty">${I.empty}<h3>Chưa có điểm ngữ pháp</h3><p>Bấm nút bên dưới để thêm điểm ngữ pháp đầu tiên.</p><button class="btn btn-primary" onclick="openGrammarForm()">${I.plus} Thêm điểm ngữ pháp</button></div>`;
    return;
  }
  wrap.innerHTML = list.map((g, gi) => `
    <div class="panel">
      <div class="panel-head">
        <div>
          <div class="panel-title">${g.num || (gi + 1)}. ${escapeHtml(g.title || '')} ${g.titleZh ? `<span style="font-family:'Noto Serif SC',serif;color:var(--primary);">（${escapeHtml(g.titleZh)}）</span>` : ''}</div>
          <div style="color:var(--muted);font-size:.85rem;margin-top:3px;">${escapeHtml(g.sub || '')}</div>
        </div>
        <div class="page-actions">
          <button class="row-btn" title="Sửa" onclick="openGrammarForm(${gi})">${I.edit}</button>
          <button class="row-btn danger" title="Xóa" onclick="deleteGrammar(${gi})">${I.trash}</button>
        </div>
      </div>
      ${(g.rules && g.rules.length) ? `<div class="grammar-preview"><div class="gp-rule">${g.rules.map(r => typeof r === 'string' ? escapeHtml(r) : `<strong>${escapeHtml(r.label)}：</strong> ${escapeHtml(r.text)}`).join('<br>')}</div></div>` : ''}
      ${(g.table && g.table.rows && g.table.rows.length) ? `<div class="cell-muted" style="margin:6px 0;">Bảng ${g.table.columns.length} cột · ${g.table.rows.length} dòng</div>` : ''}
      ${g.note ? `<div class="gp-note">${escapeHtml(g.note).replace(/\n/g, '<br>')}</div>` : ''}
    </div>`).join('');
}

function openGrammarForm(gi) {
  const g = (gi != null) ? Store.list('grammar')[gi] : {
    num: null, title: '', titleZh: '', sub: '', rules: [], formula: [],
    table: { columns: ['Câu', 'Phiên âm', 'Nghĩa'], rows: [[{ zh: '' }, { py: '' }, { vn: '' }]] },
    note: ''
  };
  // Clone sâu
  grammarEditing = JSON.parse(JSON.stringify(g));
  grammarEditing.gi = (gi != null) ? gi : null;
  if (!grammarEditing.rules || !grammarEditing.rules.length) grammarEditing.rules = [''];
  if (!grammarEditing.formula) grammarEditing.formula = [];
  if (!grammarEditing.table) grammarEditing.table = { columns: [], rows: [] };
  const f = document.getElementById('grammar-form');
  f.title.value = grammarEditing.title || '';
  f.titleZh.value = grammarEditing.titleZh || '';
  f.sub.value = grammarEditing.sub || '';
  f.note.value = grammarEditing.note || '';
  document.getElementById('grammar-modal-title').textContent = (gi != null) ? 'Sửa điểm ngữ pháp #' + (gi + 1) : 'Thêm điểm ngữ pháp';
  renderGrammarRules();
  renderGrammarFormula();
  renderGrammarTable();
  openModal('grammar-modal');
}

function renderGrammarRules() {
  const wrap = document.getElementById('grammar-rules');
  wrap.innerHTML = grammarEditing.rules.map((r, i) => {
    const isObj = typeof r === 'object';
    const label = isObj ? (r.label || '') : '';
    const text = isObj ? (r.text || '') : r;
    return `<div class="sublist-item" style="align-items:center;">
      <div class="sublist-num">${i + 1}</div>
      <div class="sublist-body">
        <div class="sublist-fields">
          <input class="input gr-rule-label" data-i="${i}" placeholder="Nhãn (vd: Khẳng định) — để trống nếu chỉ là câu" value="${escapeAttr(label)}">
          <button type="button" class="btn btn-sm btn-ghost gr-rule-del" data-i="${i}" style="justify-content:flex-end;">${I.trash} Xóa</button>
        </div>
        <input class="input gr-rule-text" data-i="${i}" placeholder="Nội dung quy tắc" value="${escapeAttr(text)}">
      </div>
    </div>`;
  }).join('');
  wrap.querySelectorAll('.gr-rule-label').forEach(el => el.oninput = e => {
    const i = +e.target.dataset.i; const v = e.target.value;
    if (v) grammarEditing.rules[i] = { label: v, text: (typeof grammarEditing.rules[i] === 'object' ? grammarEditing.rules[i].text : grammarEditing.rules[i]) };
    else if (typeof grammarEditing.rules[i] === 'object') grammarEditing.rules[i] = grammarEditing.rules[i].text;
  });
  wrap.querySelectorAll('.gr-rule-text').forEach(el => el.oninput = e => {
    const i = +e.target.dataset.i; const v = e.target.value;
    if (typeof grammarEditing.rules[i] === 'object') grammarEditing.rules[i].text = v; else grammarEditing.rules[i] = v;
  });
  wrap.querySelectorAll('.gr-rule-del').forEach(b => b.onclick = e => { grammarEditing.rules.splice(+e.currentTarget.dataset.i, 1); renderGrammarRules(); });
}

function addGrammarRule() { grammarEditing.rules.push(''); renderGrammarRules(); }

function renderGrammarFormula() {
  const wrap = document.getElementById('grammar-formula');
  const info = document.getElementById('grammar-formula-info');
  const clsList = ['', 'fb-t', 'fb-adj', 'fb-le', 'fb-arrow', 'gloss'];
  if (!grammarEditing.formula.length) {
    info.style.display = '';
    wrap.innerHTML = '';
    return;
  }
  info.style.display = 'none';
  wrap.innerHTML = grammarEditing.formula.map((p, i) => {
    const isGloss = p.gloss != null;
    const cls = isGloss ? 'gloss' : (p.cls || '');
    const text = isGloss ? p.gloss : (p.text || '');
    return `<div class="sublist-item" style="align-items:center;">
      <div class="sublist-num">${i + 1}</div>
      <div class="sublist-body">
        <div class="sublist-fields">
          <select class="input gr-f-cls" data-i="${i}">
            ${clsList.map(c => `<option value="${c}" ${cls === c ? 'selected' : ''}>${c === 'gloss' ? 'Chú thích (gloss)' : c === '' ? '— thường —' : c}</option>`).join('')}
          </select>
          <button type="button" class="btn btn-sm btn-ghost gr-f-del" data-i="${i}" style="justify-content:flex-end;">${I.trash} Xóa</button>
        </div>
        <input class="input gr-f-text" data-i="${i}" placeholder="${isGloss ? 'Nghĩa (vd: ... quá!)' : 'Thành phần (vd: 太 / Tính từ)'}" value="${escapeAttr(text)}">
      </div>
    </div>`;
  }).join('');
  wrap.querySelectorAll('.gr-f-cls').forEach(el => el.onchange = e => {
    const i = +e.target.dataset.i; const v = e.target.value;
    const cur = grammarEditing.formula[i];
    const txt = (cur.gloss != null) ? cur.gloss : (cur.text || '');
    grammarEditing.formula[i] = v === 'gloss' ? { gloss: txt } : { cls: v, text: txt };
    renderGrammarFormula();
  });
  wrap.querySelectorAll('.gr-f-text').forEach(el => el.oninput = e => {
    const i = +e.target.dataset.i; const v = e.target.value;
    if (grammarEditing.formula[i].gloss != null) grammarEditing.formula[i].gloss = v;
    else grammarEditing.formula[i].text = v;
  });
  wrap.querySelectorAll('.gr-f-del').forEach(b => b.onclick = e => { grammarEditing.formula.splice(+e.currentTarget.dataset.i, 1); renderGrammarFormula(); });
}

function addGrammarFormula() { grammarEditing.formula.push({ cls: '', text: '' }); renderGrammarFormula(); }

function renderGrammarTable() {
  const wrap = document.getElementById('grammar-table');
  const t = grammarEditing.table;
  const ncol = Math.max((t.columns || []).length, 1);
  wrap.innerHTML = `
    <div class="sublist-fields" style="margin-bottom:8px;">
      <label class="cell-muted" style="font-size:.8rem;align-self:center;">Số cột bảng:</label>
      <div style="display:flex;gap:6px;">
        <button type="button" class="btn btn-sm btn-ghost" onclick="grammarColDelta(-1)">− Cột</button>
        <span class="tag tag-blue" style="align-self:center;">${ncol}</span>
        <button type="button" class="btn btn-sm btn-ghost" onclick="grammarColDelta(1)">+ Cột</button>
        <button type="button" class="btn btn-sm btn-ghost" onclick="grammarAddRow()">${I.plus} Dòng</button>
      </div>
    </div>
    <div class="table-wrap"><div class="table-scroll">
      <table class="data-table">
        <thead><tr>${(t.columns || []).map((c, ci) => `<th><input class="input gr-col" data-ci="${ci}" style="padding:4px 6px;font-size:.85rem;width:100%;" value="${escapeAttr(c)}"></th>`).join('')}</tr></thead>
        <tbody>
          ${(t.rows || []).map((row, ri) => `<tr>
            ${Array.from({ length: ncol }).map((_, ci) => {
              const cell = row[ci] || {};
              return `<td style="padding:4px;">
                <input class="input gr-cell-zh" data-ri="${ri}" data-ci="${ci}" style="padding:3px 5px;font-size:.9rem;width:100%;font-family:'Noto Serif SC',serif;" placeholder="中" value="${escapeAttr(cell.zh || '')}">
                <input class="input gr-cell-py" data-ri="${ri}" data-ci="${ci}" style="padding:3px 5px;font-size:.78rem;width:100%;margin-top:2px;" placeholder="py" value="${escapeAttr(cell.py || '')}">
                <input class="input gr-cell-vn" data-ri="${ri}" data-ci="${ci}" style="padding:3px 5px;font-size:.82rem;width:100%;margin-top:2px;" placeholder="vi" value="${escapeAttr(cell.vn || '')}">
                <input class="input gr-cell-type" data-ri="${ri}" data-ci="${ci}" style="padding:3px 5px;font-size:.78rem;width:100%;margin-top:2px;" placeholder="loại" value="${escapeAttr(cell.type || '')}">
              </td>`;
            }).join('')}
            <td style="text-align:center;"><button type="button" class="row-btn danger" onclick="grammarDelRow(${ri})">${I.trash}</button></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div></div>`;
  wrap.querySelectorAll('.gr-col').forEach(el => el.oninput = e => { grammarEditing.table.columns[+e.target.dataset.ci] = e.target.value; });
  const bindCell = (sel, key) => wrap.querySelectorAll(sel).forEach(el => el.oninput = e => {
    const ri = +e.target.dataset.ri, ci = +e.target.dataset.ci;
    if (!grammarEditing.table.rows[ri]) grammarEditing.table.rows[ri] = [];
    if (!grammarEditing.table.rows[ri][ci]) grammarEditing.table.rows[ri][ci] = {};
    grammarEditing.table.rows[ri][ci][key] = e.target.value;
  });
  bindCell('.gr-cell-zh', 'zh'); bindCell('.gr-cell-py', 'py'); bindCell('.gr-cell-vn', 'vn'); bindCell('.gr-cell-type', 'type');
}

function grammarColDelta(delta) {
  const t = grammarEditing.table;
  let n = (t.columns || []).length + delta;
  if (n < 1) n = 1;
  if (delta < 0) { t.columns.pop(); }
  else { t.columns.push('Cột ' + (t.columns.length + 1)); }
  renderGrammarTable();
}
function grammarAddRow() {
  const ncol = (grammarEditing.table.columns || []).length;
  grammarEditing.table.rows.push(Array.from({ length: ncol }, () => ({})));
  renderGrammarTable();
}
function grammarDelRow(ri) { grammarEditing.table.rows.splice(ri, 1); renderGrammarTable(); }

function submitGrammarForm(e) {
  e.preventDefault();
  const f = document.getElementById('grammar-form');
  // Lọc rule rỗng
  const rules = grammarEditing.rules
    .map(r => typeof r === 'object' ? { label: (r.label || '').trim(), text: (r.text || '').trim() } : { label: '', text: String(r).trim() })
    .filter(r => r.text)
    .map(r => r.label ? r : r.text); // không nhãn → rút gọn thành chuỗi
  // formula: lọc rỗng
  const formula = grammarEditing.formula
    .map(p => p.gloss != null ? { gloss: (p.gloss || '').trim() } : { cls: p.cls || '', text: (p.text || '').trim() })
    .filter(p => p.gloss != null ? p.gloss : p.text);
  // table: dọn ô rỗng → bỏ field rỗng; bỏ dòng toàn rỗng
  const cleanCell = (cell) => {
    if (!cell || typeof cell !== 'object') return {};
    const out = {};
    ['zh', 'py', 'vn', 'type'].forEach(k => { if (cell[k] && String(cell[k]).trim()) out[k] = String(cell[k]).trim(); });
    return out;
  };
  const columns = (grammarEditing.table.columns || []).map(c => c.trim());
  const rows = (grammarEditing.table.rows || [])
    .map(row => (row || []).map(cleanCell))
    .filter(row => row.some(cell => Object.keys(cell).length));

  const item = {
    title: f.title.value.trim(),
    titleZh: f.titleZh.value.trim(),
    sub: f.sub.value.trim(),
    note: f.note.value.trim(),
    rules, formula,
    table: { columns, rows },
  };
  if (!item.title) { toast('Thiếu tiêu đề', 'Nhập tiêu đề điểm ngữ pháp.', 'error'); return; }
  if (grammarEditing.gi != null) {
    Store.update('grammar', grammarEditing.gi, item);
    toast('Đã cập nhật', 'Điểm ngữ pháp đã được lưu.', 'success');
  } else {
    item.num = Store.list('grammar').length + 1;
    Store.add('grammar', item);
    toast('Đã thêm', 'Điểm ngữ pháp mới đã được tạo.', 'success');
  }
  closeModal('grammar-modal');
  renderGrammar();
}

async function deleteGrammar(gi) {
  const g = Store.list('grammar')[gi];
  const ok = await confirmDialog({
    title: 'Xóa điểm ngữ pháp?',
    msg: 'Điểm ngữ pháp sẽ bị xóa vĩnh viễn.',
    target: g ? `${g.title}（${g.titleZh}）` : `#${gi + 1}`
  });
  if (!ok) return;
  Store.remove('grammar', gi);
  toast('Đã xóa', 'Điểm ngữ pháp đã bị xóa.', 'success');
  renderGrammar();
}

/* ════════════════════════════════════════════
   BÀI HỌC (lessons) — tiêu đề cha + nội dung con
   Mỗi bài: { id, num, badge, zh, py, vn, chips: [{icon, text}] }
   CRUD đầy đủ (thêm/sửa/xóa). Nội dung (vocab/grammar...)
   liên kết qua lessonId = bài đang chọn ở topbar.
   ════════════════════════════════════════════ */
let lessonEditing = null;   // null khi tạo mới, {id,...} khi sửa
let lessonFormBuf = null;   // buffer tạm cho form (badge/zh/py/vn/chips)
const LESSON_ICON_OPTIONS = ['snow', 'book', 'chat', 'compass', 'target', 'mic', 'card', 'pen', 'shuffle', 'link', 'pencil', 'bulb'];

function renderLessons() {
  const wrap = document.getElementById('lessons-wrap');
  const lessons = Store.listLessons();
  if (!lessons || !lessons.length) {
    wrap.innerHTML = `<div class="empty">${I.empty}<h3>Chưa có bài học nào</h3><p>Tạo bài học đầu tiên. Mỗi bài là một tiêu đề (chữ Hán, pinyin...) + nội dung con (từ vựng, ngữ pháp, quiz...).</p><button class="btn btn-primary" onclick="openLessonForm(null)">${I.plus} Thêm bài học</button></div>`;
    return;
  }
  wrap.innerHTML = `
    <div class="page-head">
      <div class="page-title">Danh sách bài học (${lessons.length})</div>
      <button class="btn btn-primary" onclick="openLessonForm(null)">${I.plus} Thêm bài học</button>
    </div>
    <div class="lesson-grid">
      ${lessons.map(l => `
        <div class="panel lesson-card ${Store.currentLessonId === l.id ? 'lesson-card-active' : ''}">
          <div class="lesson-card-head">
            <span class="tag tag-amber">${escapeHtml(l.badge || ('Bài ' + l.num))}</span>
            <div class="page-actions" style="gap:4px;">
              <button class="btn btn-sm btn-ghost" title="Chọn để quản lý nội dung" onclick="selectLesson('${l.id}')">${I.target} Chọn</button>
              <button class="btn btn-sm btn-ghost" onclick="openLessonForm('${l.id}')">${I.edit}</button>
              <button class="btn btn-sm btn-ghost" title="Xóa bài" onclick="deleteLesson('${l.id}', '${escapeAttr(l.badge || l.zh || '')}')">${I.trash}</button>
            </div>
          </div>
          <div class="col-zh" style="font-size:1.6rem;margin:6px 0 2px;">${escapeHtml(l.zh || '')}</div>
          <div class="col-py">${escapeHtml(l.py || '')}</div>
          <div class="col-vn" style="margin-top:2px;">${escapeHtml(l.vn || '')}</div>
          ${l.chips && l.chips.length ? `<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:10px;">${l.chips.map(c => `<span class="tag tag-blue">${escapeHtml(c.text || '')}</span>`).join('')}</div>` : ''}
          <div class="cell-muted" style="margin-top:10px;font-size:.82rem;">id: ${escapeHtml(l.id || '')}</div>
        </div>
      `).join('')}
    </div>`;
}

// Chọn bài để quản lý nội dung (vocab/grammar... của bài đó)
function selectLesson(id) {
  Store.setCurrentLesson(id);
  refreshLessonSelector();
  renderLessons();
  toast('Đã chọn bài', 'Các mục nội dung sẽ lọc theo bài này.', 'success');
}

// Cập nhật dropdown chọn bài ở topbar
function refreshLessonSelector() {
  const sel = document.getElementById('topbar-lesson-select');
  if (!sel) return;
  const lessons = Store.listLessons();
  sel.innerHTML = lessons.map(l =>
    `<option value="${l.id}" ${Store.currentLessonId === l.id ? 'selected' : ''}>${escapeHtml(l.badge || ('Bài ' + l.num))} · ${escapeHtml(l.zh || '')}</option>`
  ).join('');
}

// Khi đổi bài ở dropdown topbar
function onLessonSelectChange(el) {
  selectLesson(el.value);
}

function openLessonForm(id) {
  const l = id ? Store.getLesson(id) : null;
  lessonEditing = l ? { id: l.id } : null;
  lessonFormBuf = {
    badge: l ? (l.badge || '') : '',
    zh: l ? (l.zh || '') : '',
    py: l ? (l.py || '') : '',
    vn: l ? (l.vn || '') : '',
    chips: l ? JSON.parse(JSON.stringify(l.chips || [])) : [],
  };
  if (!lessonFormBuf.chips.length) lessonFormBuf.chips.push({ icon: 'snow', text: '' });
  const f = document.getElementById('lesson-form');
  f.badge.value = lessonFormBuf.badge;
  f.zh.value = lessonFormBuf.zh;
  f.py.value = lessonFormBuf.py;
  f.vn.value = lessonFormBuf.vn;
  document.getElementById('lesson-modal-title').textContent = l ? 'Sửa bài học' : 'Thêm bài học';
  renderLessonChips();
  openModal('lesson-modal');
}

function renderLessonChips() {
  const wrap = document.getElementById('lesson-chips');
  wrap.innerHTML = lessonFormBuf.chips.map((c, i) => `
    <div class="sublist-item" style="align-items:center;">
      <div class="sublist-num">${i + 1}</div>
      <div class="sublist-body">
        <div class="sublist-fields">
          <select class="input lesson-chip-icon" data-i="${i}">
            ${LESSON_ICON_OPTIONS.map(ic => `<option value="${ic}" ${c.icon === ic ? 'selected' : ''}>${ic}</option>`).join('')}
          </select>
          <button type="button" class="btn btn-sm btn-ghost lesson-chip-del" data-i="${i}" style="justify-content:flex-end;">${I.trash} Xóa</button>
        </div>
        <input class="input lesson-chip-text" data-i="${i}" placeholder="Nội dung chip (vd: 24 từ mới)" value="${escapeAttr(c.text || '')}">
      </div>
    </div>`).join('');
  wrap.querySelectorAll('.lesson-chip-icon').forEach(el => el.onchange = e => { lessonFormBuf.chips[+e.target.dataset.i].icon = e.target.value; });
  wrap.querySelectorAll('.lesson-chip-text').forEach(el => el.oninput = e => { lessonFormBuf.chips[+e.target.dataset.i].text = e.target.value; });
  wrap.querySelectorAll('.lesson-chip-del').forEach(b => b.onclick = e => { lessonFormBuf.chips.splice(+e.currentTarget.dataset.i, 1); renderLessonChips(); });
}

function addLessonChip() { lessonFormBuf.chips.push({ icon: 'book', text: '' }); renderLessonChips(); }

async function submitLessonForm(e) {
  e.preventDefault();
  const f = e.target;
  const chips = lessonFormBuf.chips
    .map(c => ({ icon: c.icon || 'book', text: (c.text || '').trim() }))
    .filter(c => c.text);
  const patch = {
    badge: f.badge.value.trim(),
    zh: f.zh.value.trim(),
    py: f.py.value.trim(),
    vn: f.vn.value.trim(),
    chips,
  };
  if (!patch.zh) { toast('Thiếu chữ Hán', 'Nhập ít nhất chữ Hán tiêu đề.', 'error'); return; }
  if (lessonEditing && lessonEditing.id) {
    await Store.updateLesson(lessonEditing.id, patch);
    toast('Đã cập nhật', 'Bài học đã được lưu.', 'success');
  } else {
    // Số thứ tự badge "Bài N" → num
    const nm = patch.badge.match(/(\d+)/);
    if (nm) patch.num = Number(nm[1]);
    const created = await Store.addLesson(patch);
    // Tự chọn bài mới tạo
    if (created && created.id) Store.setCurrentLesson(created.id);
    toast('Đã thêm', 'Bài học mới đã được tạo.', 'success');
  }
  closeModal('lesson-modal');
  refreshLessonSelector();
  renderLessons();
}

async function deleteLesson(id, label) {
  const lesson = Store.getLesson(id);
  // Đếm nội dung con để cảnh báo
  let childCount = 0;
  ['vocab','warmup','dialogs','fill','sort','match','mc','convo','grammar'].forEach(k => {
    childCount += (Store.data[k] || []).filter(x => String(x.lessonId) === String(id)).length;
  });
  const msg = childCount > 0
    ? `Bài "${label}" có ${childCount} mục nội dung. Xóa cả nội dung?`
    : `Xóa bài "${label}"?`;
  const ok = await confirmDialog({ title: 'Xóa bài học', msg });
  if (!ok) return;
  await Store.deleteLesson(id, childCount > 0);
  // Nếu đang chọn bài bị xóa → chọn bài đầu
  if (Store.currentLessonId === id) {
    const first = Store.listLessons()[0];
    Store.setCurrentLesson(first ? first.id : null);
  }
  refreshLessonSelector();
  renderLessons();
  toast('Đã xóa', childCount > 0 ? `Đã xóa bài + ${childCount} mục nội dung.` : 'Đã xóa bài học.', 'success');
}

/* ─── Helpers ─── */
function escapeHtml(s) { return String(s || '').replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c])); }
function escapeAttr(s) { return String(s || '').replace(/["']/g, c => ({ '"': '&quot;', "'": '&#39;' }[c])); }
// Lấy danh sách ví dụ của 1 vocab. Ưu tiên examples[], fallback gom ex_* cũ.
function getExamples(v){
  if(!v) return [];
  if(Array.isArray(v.examples) && v.examples.length) return v.examples;
  if(v.ex_zh || v.ex_py || v.ex_vn) return [{ zh: v.ex_zh || '', py: v.ex_py || '', vn: v.ex_vn || '' }];
  return [];
}

/* ════════════════════════════════════════════
   AI GENERATE LESSON (Gemini)
   Admin dán bài gốc/chủ đề → backend gọi Gemini
   → sinh ra 9 phần (vocab, dialogs, grammar...) → preview → lưu.
   ════════════════════════════════════════════ */
let aiLessonData = null; // cache kết quả trả về từ Gemini

function openAiModal() {
  resetAiModal();
  openModal('ai-modal');
}
function resetAiModal() {
  document.getElementById('ai-input-step').style.display = '';
  document.getElementById('ai-preview-step').style.display = 'none';
  document.getElementById('ai-preview').innerHTML = '';
  aiLessonData = null;
  // Clear file upload + text paste khi mở lại modal
  const fileInput = document.getElementById('ai-file');
  if (fileInput) fileInput.value = '';
  if (typeof clearAiFile === 'function') clearAiFile();
  const src = document.getElementById('ai-source');
  if (src) src.value = '';
  const topic = document.getElementById('ai-topic');
  if (topic) topic.value = '';
}

// Hiển thị tên file khi chọn — để admin biết file nào đang được upload.
function onAiFileChange(input) {
  const info = document.getElementById('ai-file-info');
  const clearBtn = document.getElementById('ai-file-clear');
  if (input && input.files && input.files[0]) {
    const f = input.files[0];
    const sizeKb = (f.size / 1024).toFixed(1);
    const sizeText = f.size > 1024 * 1024 ? (f.size / 1024 / 1024).toFixed(2) + ' MB' : sizeKb + ' KB';
    // Dùng innerHTML để chèn SVG + escape filename (tránh XSS)
    if (info) info.innerHTML = I.paperclip + ' ' + escapeHtml(f.name) + ' <span style="color:var(--soft)">(' + escapeHtml(sizeText) + ')</span>';
    if (clearBtn) clearBtn.style.display = '';
  } else {
    if (info) info.innerHTML = '';
    if (clearBtn) clearBtn.style.display = 'none';
  }
}
function clearAiFile() {
  const inp = document.getElementById('ai-file');
  if (inp) inp.value = '';
  onAiFileChange(inp);
}

async function callAiGenerate() {
  const btn = document.getElementById('ai-gen-btn');
  const fileInput = document.getElementById('ai-file');
  const file = fileInput && fileInput.files[0];
  const sourceText = document.getElementById('ai-source').value.trim();
  const topic = document.getElementById('ai-topic').value.trim();
  const level = document.getElementById('ai-level').value;
  // Validate: cần ít nhất 1 trong 3 nguồn — file, text paste, hoặc topic (sáng tạo)
  if (!file && !sourceText && !topic) {
    toast('Thiếu input', 'Upload file, dán bài gốc, hoặc nhập chủ đề để AI sinh.', 'error');
    return;
  }
  // Validate cơ bản file: max 10MB (backend cũng check, nhưng check sớm cho mượt)
  if (file && file.size > 10 * 1024 * 1024) {
    toast('File quá lớn', 'Tối đa 10MB. Hãy cắt bớt hoặc nén file.', 'error');
    return;
  }
  btn.disabled = true;
  // Lưu lại nội dung nút (gồm SVG icon) để restore sau, rồi đổi sang trạng thái loading.
  const origHTML = btn.innerHTML;
  btn.innerHTML = I.clock + (file ? ' Đang đọc file + sinh... (15-90s)' : ' Đang sinh... (10-60s)');
  try {
    let r;
    if (file) {
      // Nhánh upload: gửi multipart/form-data qua route upload
      const fd = new FormData();
      fd.append('file', file);
      if (topic) fd.append('topic', topic);
      if (level) fd.append('level', level);
      r = await api('/api/admin/generate-lesson-upload', { method: 'POST', body: fd });
    } else {
      // Nhánh text paste: gửi JSON qua route cũ
      r = await api('/api/admin/generate-lesson', {
        method: 'POST',
        body: JSON.stringify({ sourceText, topic, level }),
      });
    }
    aiLessonData = r;
    renderAiPreview(r);
    document.getElementById('ai-input-step').style.display = 'none';
    document.getElementById('ai-preview-step').style.display = '';
  } catch (e) {
    toast('Sinh thất bại', e.message || 'Lỗi không xác định', 'error');
  } finally {
    btn.disabled = false;
    btn.innerHTML = origHTML;
  }
}

// Render preview đầy đủ — admin xem trước khi lưu.
function renderAiPreview(d) {
  const lesson = d.lesson || {};
  const cnt = k => (Array.isArray(d[k]) ? d[k].length : 0);
  // Đếm tổng số mục sẽ thêm
  const total = ['vocab','warmup','dialogs','fill','sort','match','mc','convo','grammar']
    .reduce((s, k) => s + cnt(k), 0);

  const html = `
    <div style="margin-bottom:16px;padding:12px 16px;background:linear-gradient(135deg,#f0f7ff,#faf5ff);border-radius:10px;border-left:4px solid #6366f1;">
      <div style="font-size:1.5rem;font-family:'Noto Serif SC',serif;">${escapeHtml(lesson.zh || '(không tên)')}</div>
      <div style="color:#6b7280;">${escapeHtml(lesson.py || '')}</div>
      <div style="color:#374151;margin-top:4px;">${escapeHtml(lesson.vn || '')}</div>
      ${Array.isArray(lesson.chips) && lesson.chips.length ? `<div style="margin-top:8px;">${lesson.chips.map(c => `<span class="tag tag-blue" style="margin-right:6px;">${escapeHtml(c.text||'')}</span>`).join('')}</div>` : ''}
      <div style="margin-top:8px;font-size:0.9rem;color:#6366f1;font-weight:600;">Tổng: ${total} mục — sẽ tạo bài MỚI khi bấm Lưu</div>
    </div>

    ${renderAiSection(I.secVocab + ' Vocab (' + cnt('vocab') + ')', (d.vocab||[]).map(v =>
      `<div style="padding:6px 0;border-bottom:1px dashed #eee;">
        <span style="font-family:'Noto Serif SC',serif;font-size:1.1rem;">${escapeHtml(v.zh||'')}</span>
        <span style="color:#3b82f6;">${escapeHtml(v.py||'')}</span>
        <span class="tag" style="margin:0 4px;">${escapeHtml(v.pos||'')}</span>
        <span style="color:#6b7280;">— ${escapeHtml(v.vn||'')}</span>
        ${v.ex_zh ? `<div style="font-size:0.85rem;color:#6b7280;margin-left:12px;">vd: ${escapeHtml(v.ex_zh)} — ${escapeHtml(v.ex_vn||'')}</div>` : ''}
      </div>`).join(''), true)}

    ${renderAiSection(I.secDialog + ' Dialogs (' + cnt('dialogs') + ')', (d.dialogs||[]).map(dl =>
      `<div style="padding:8px 0;border-bottom:1px dashed #eee;">
        <div style="font-weight:600;color:#374151;">${escapeHtml(dl.scene||'')}</div>
        ${(dl.lines||[]).map(l => `<div style="margin:2px 0;font-size:0.92rem;"><span class="tag" style="margin-right:4px;">${escapeHtml((dl.chars||[])[l.sp]||'?')}</span><span style="font-family:'Noto Serif SC',serif;">${escapeHtml(l.zh||'')}</span> <span style="color:#6b7280;">(${escapeHtml(l.vn||'')})</span></div>`).join('')}
      </div>`).join(''))}

    ${renderAiSection(I.secGrammar + ' Grammar (' + cnt('grammar') + ')', (d.grammar||[]).map(g =>
      `<div style="padding:8px 0;border-bottom:1px dashed #eee;">
        <div style="font-weight:600;">${escapeHtml(g.title||'')} ${g.titleZh ? `<span style="font-family:'Noto Serif SC',serif;color:#3b82f6;">${escapeHtml(g.titleZh)}</span>` : ''}</div>
        <div style="color:#6b7280;font-size:0.9rem;">${escapeHtml(g.sub||'')}</div>
        ${(g.rules||[]).length ? `<div style="margin-top:4px;font-size:0.88rem;">${g.rules.map(r => `<div>• <b>${escapeHtml(r.label||'')}</b>: ${escapeHtml(r.text||'')}</div>`).join('')}</div>` : ''}
        ${g.note ? `<div style="margin-top:4px;font-size:0.85rem;color:#92400e;">${I.info} ${escapeHtml(g.note)}</div>` : ''}
      </div>`).join(''))}

    ${renderAiSection(I.secFill + ' Điền từ (' + cnt('fill') + ')', (d.fill||[]).map(f =>
      `<div style="font-size:0.9rem;padding:4px 0;">${escapeHtml(f.pre||'')}<b style="color:#dc2626;">[${escapeHtml(f.ans||'')}]</b>${escapeHtml(f.post||'')} <span style="color:#6b7280;">— ${escapeHtml(f.exp||'')}</span></div>`).join(''))}

    ${renderAiSection(I.secSort + ' Sắp xếp (' + cnt('sort') + ')', (d.sort||[]).map(s =>
      `<div style="font-size:0.9rem;padding:4px 0;"><span style="color:#6b7280;">[${escapeHtml((s.words||[]).join(' | '))}]</span> → <b style="font-family:'Noto Serif SC',serif;">${escapeHtml(s.ans||'')}</b> <span style="color:#6b7280;">(${escapeHtml(s.vn||'')})</span></div>`).join(''))}

    ${renderAiSection(I.secMatch + ' Nối câu (' + cnt('match') + ')', (d.match||[]).map(m =>
      `<div style="font-size:0.9rem;padding:4px 0;">${escapeHtml(m.left||'')} → <b>${escapeHtml(m.right||'')}</b></div>`).join(''))}

    ${renderAiSection(I.secQuiz + ' Trắc nghiệm (' + cnt('mc') + ')', (d.mc||[]).map(q =>
      `<div style="font-size:0.9rem;padding:4px 0;">${escapeHtml(q.q||'')} <span style="color:#6b7280;">[${(q.opts||[]).map((o,i)=>(i===q.ans?'✓':'')+' '+escapeHtml(o)).join(' | ')}]</span></div>`).join(''))}

    ${renderAiSection(I.secWarmup + ' Khởi động (' + cnt('warmup') + ')', (d.warmup||[]).map(w =>
      `<span class="tag" style="margin:2px;">${escapeHtml(w.img||'')} ${escapeHtml(w.label||'')}</span>`).join(''))}

    ${renderAiSection(I.secConvo + ' Luyện nói (' + cnt('convo') + ')', (d.convo||[]).map(c =>
      `<div style="padding:6px 0;border-bottom:1px dashed #eee;"><b>${escapeHtml(c.title||'')}</b>${(c.pairs||[]).map(p => `<div style="font-size:0.88rem;margin:2px 0;"><span style="font-family:'Noto Serif SC',serif;">${escapeHtml(p.q||'')}</span> → <span style="font-family:'Noto Serif SC',serif;">${escapeHtml(p.a||'')}</span></div>`).join('')}</div>`).join(''))}
  `;
  document.getElementById('ai-preview').innerHTML = html;
}

// Helper render 1 section dạng <details>
function renderAiSection(title, body, open) {
  if (!body) return '';
  return `<details ${open ? 'open' : ''}>
    <summary>${title}</summary>
    <div>${body}</div>
  </details>`;
}

// Lưu: luôn TẠO BÀI MỚI từ metadata Gemini đề xuất, rồi đổ 9 phần nội dung vào.
async function saveAiLesson() {
  if (!aiLessonData) return;
  const saveBtn = document.getElementById('ai-save-btn');
  if (saveBtn) { saveBtn.disabled = true; saveBtn.dataset.orig = saveBtn.innerHTML; saveBtn.innerHTML = I.clock + ' Đang lưu...'; }

  try {
    // 1) Tạo lesson mới từ metadata Gemini đề xuất (zh/py/vn/chips).
    //    Store.addLesson tự tăng num + POST /api/lessons.
    let lessonMeta = aiLessonData.lesson || {};
    // Bảo vệ: đảm bảo có tên zh (nếu AI thiếu thì dùng placeholder)
    if (!lessonMeta.zh) lessonMeta.zh = '(Bài AI)';
    // Chips phải là mảng object {icon,text} — dọn nếu sai
    if (!Array.isArray(lessonMeta.chips)) lessonMeta.chips = [];

    const created = await Store.addLesson(lessonMeta);
    if (!created || !created.id) {
      toast('Lỗi', 'Không tạo được bài học mới. Kiểm tra kết nối API.', 'error');
      return;
    }
    const lessonId = created.id;
    Store.setCurrentLesson(lessonId);
    if (typeof refreshLessonSelector === 'function') refreshLessonSelector();
    if (typeof renderLessons === 'function') renderLessons();

    // 2) Đổ 9 phần nội dung vào lesson vừa tạo.
    const collections = ['vocab','warmup','dialogs','fill','sort','match','mc','convo','grammar'];
    let total = 0;
    for (const k of collections) {
      const arr = Array.isArray(aiLessonData[k]) ? aiLessonData[k] : [];
      for (const item of arr) {
        try {
          Store.add(k, Object.assign({}, item, { lessonId }));
          total++;
        } catch (e) {
          console.warn('[saveAiLesson] add fail', k, e);
        }
      }
    }

    closeModal('ai-modal');
    toast('Đã lưu', `Đã tạo bài "${created.zh||''}" và thêm ${total} mục nội dung.`, 'success');

    // 3) Refresh các view chính.
    ['Vocab','Dialogs','Warmup','Convo','Grammar'].forEach(fn => {
      if (typeof window['render' + fn] === 'function') window['render' + fn]();
    });
    if (typeof renderQuiz === 'function') renderQuiz();
  } catch (e) {
    console.error('[saveAiLesson] error:', e);
    toast('Lưu thất bại', (e && e.message) || 'Lỗi không xác định', 'error');
  } finally {
    if (saveBtn) { saveBtn.disabled = false; saveBtn.innerHTML = saveBtn.dataset.orig || (I.save + ' Lưu tất cả'); }
  }
}


/* ─── Import / Export / Reset ─── */
async function exportData() {
  // Nếu online: tải trực tiếp data.js từ server (luôn mới nhất)
  if (Store.online) {
    try {
      const r = await fetch(Store.getExportUrl());
      const js = await r.text();
      _downloadJs(js);
      toast('Đã xuất file', 'Tải data.js từ server — copy đè vào js/data.js của web học nếu không dùng API.', 'success');
      return;
    } catch (e) {
      console.warn('Tải từ API thất bại, fallback local:', e);
    }
  }
  // Fallback: export từ cache local
  _downloadJs(Store.exportJs());
  toast('Đã xuất file (local)', 'Tải data.js từ cache local.', 'success');
}

function _downloadJs(js) {
  const blob = new Blob([js], { type: 'text/javascript;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function triggerImport(input) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = async e => {
    try {
      const code = e.target.result;
      const fn = new Function(code + '; return {vocabData,wuData,dialogData,fillData,sortData,matchData,mcData,convoData};');
      const result = fn();
      // Push toàn bộ lên server (nếu online)
      await Store.importAll({
        vocab: result.vocabData || [],
        warmup: result.wuData || [],
        dialogs: result.dialogData || [],
        fill: result.fillData || [],
        sort: result.sortData || [],
        match: result.matchData || [],
        mc: result.mcData || [],
        convo: result.convoData || [],
      });
      toast('Đã nhập dữ liệu', 'Dữ liệu đã được tải lên server.', 'success');
      refreshAll();
    } catch (err) {
      toast('Lỗi nhập file', 'File không đúng định dạng data.js. ' + err.message, 'error');
    }
    input.value = '';
  };
  reader.readAsText(file);
}

async function resetAll() {
  const ok = await confirmDialog({
    title: 'Đặt lại toàn bộ dữ liệu?',
    msg: 'Mọi thay đổi sẽ bị mất và khôi phục về dữ liệu gốc ban đầu. KHÔNG THỂ HOÀN TÁC.',
    target: 'TOÀN BỘ DỮ LIỆU'
  });
  if (!ok) return;
  await Store.reset();
  toast('Đã đặt lại', 'Dữ liệu đã về trạng thái ban đầu.', 'success');
  refreshAll();
}

function refreshAll() {
  const activeView = document.querySelector('.view.active');
  if (!activeView) return;
  const id = activeView.id.replace('view-', '');
  if (id === 'dashboard') renderDashboard();
  if (id === 'vocab') renderVocab();
  if (id === 'flashcards') renderFlashcards();
  if (id === 'dialogs') renderDialogs();
  if (id === 'quiz') renderQuiz();
  if (id === 'warmup') renderWarmup();
  if (id === 'convo') renderConvo();
  if (id === 'grammar') renderGrammar();
  if (id === 'lessons') renderLessons();
  if (id === 'users') renderUsers();
}

/* ─── API status indicator (online/offline) ─── */
window.onApiError = function (msg) {
  toast('Lỗi đồng bộ', msg || 'Không thể kết nối server.', 'error');
};
window.onStoreChange = function () {
  // Refresh view hiện tại khi server update xong
  refreshAll();
};

/* ─── Khởi tạo ─── */
/* ════════════════════════════════════════════
   AUTH — đăng nhập / đăng xuất / gate
   ════════════════════════════════════════════ */
function showLogin() {
  const ov = document.getElementById('login-overlay');
  if (ov) {
    ov.classList.add('show');
    const u = document.getElementById('login-username');
    if (u) setTimeout(() => u.focus(), 50);
  }
}
function hideLogin() {
  const ov = document.getElementById('login-overlay');
  if (ov) ov.classList.remove('show');
}

async function handleLogin(e) {
  e.preventDefault();
  const f = e.target;
  const username = f.username.value.trim();
  const password = f.password.value;
  const errEl = document.getElementById('login-error');
  const btn = f.querySelector('button[type="submit"]');
  if (errEl) errEl.textContent = '';
  if (btn) { btn.disabled = true; btn.textContent = 'Đang đăng nhập...'; }
  try {
    const user = await Auth.login(username, password);
    toast('Đăng nhập thành công', 'Xin chào ' + user.username + '!', 'success');
    f.reset();
    hideLogin();
    updateLoginUI();
    await initApp();
  } catch (err) {
    if (errEl) errEl.textContent = err.message || 'Đăng nhập thất bại';
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Đăng nhập'; }
  }
}

async function handleLogout() {
  const ok = await confirmDialog({ title: 'Đăng xuất?', msg: 'Bạn sẽ cần đăng nhập lại để quản lý nội dung.' });
  if (!ok) return;
  await Auth.logout();
  toast('Đã đăng xuất', 'Phiên làm việc đã kết thúc.', 'info');
  updateLoginUI();
  showLogin();
}

/** Khi server trả 401 → tự đá về login */
window.onAuthRequired = function () {
  Auth.clearLocal();
  updateLoginUI();
  showLogin();
};

/** Cập nhật UI theo trạng thái đăng nhập (tên user, nút logout, khóa app) */
function updateLoginUI() {
  const user = Auth.getUser();
  const ov = document.getElementById('login-overlay');
  const info = document.getElementById('login-info');
  const app = document.querySelector('.app');
  if (user) {
    if (ov) ov.classList.remove('show');
    if (app) app.classList.remove('app-locked');
    if (info) info.textContent = user.username + ' (' + (user.role || '?') + ')';
  } else {
    if (ov) ov.classList.add('show');
    if (app) app.classList.add('app-locked');
    if (info) info.textContent = '';
  }
}

/* ════════════════════════════════════════════
   QUẢN LÝ USER (view-users)
   ════════════════════════════════════════════ */
async function renderUsers() {
  const wrap = document.getElementById('users-wrap');
  const cur = Auth.getUser();
  if (!cur || cur.role !== 'admin') {
    wrap.innerHTML = `<div class="empty">${I.alert}<h3>Cần quyền admin</h3><p>Bạn không có quyền quản lý tài khoản.</p></div>`;
    return;
  }
  wrap.innerHTML = '<div class="cell-muted">Đang tải danh sách tài khoản...</div>';
  try {
    const users = await Auth.listUsers();
    document.getElementById('users-count').textContent = users.length + ' tài khoản';
    if (!users.length) {
      wrap.innerHTML = `<div class="empty">${I.empty}<h3>Chưa có tài khoản</h3></div>`;
      return;
    }
    wrap.innerHTML = users.map(u => `
      <div class="panel" style="padding:14px 18px;">
        <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
          <span class="sublist-num">${u.id}</span>
          <div style="flex:1;min-width:160px;">
            <div style="font-weight:600;">${escapeHtml(u.username)}</div>
            <div class="cell-muted" style="font-size:.8rem;">Tạo: ${escapeHtml(u.createdAt ? new Date(u.createdAt).toLocaleDateString('vi-VN') : '')}</div>
          </div>
          <span class="tag ${u.role === 'admin' ? 'tag-amber' : 'tag-blue'}">${escapeHtml(u.role || 'editor')}</span>
          <div style="display:flex;gap:4px;">
            <button class="row-btn" title="Đổi mật khẩu" onclick="openUserPwForm(${u.id},'${escapeAttr(u.username)}')">${I.edit}</button>
            ${u.id === cur.id ? '' : `<button class="row-btn danger" title="Xóa" onclick="deleteUserAccount(${u.id},'${escapeAttr(u.username)}')">${I.trash}</button>`}
          </div>
        </div>
      </div>`).join('');
  } catch (e) {
    wrap.innerHTML = `<div class="empty">${I.alert}<h3>Lỗi tải danh sách</h3><p>${escapeHtml(e.message)}</p></div>`;
  }
}

function openUserForm() {
  const f = document.getElementById('user-form');
  f.reset();
  f.role.value = 'editor';
  document.getElementById('user-modal-title').textContent = 'Thêm tài khoản';
  openModal('user-modal');
}
function submitUserForm(e) {
  e.preventDefault();
  const f = e.target;
  const username = f.username.value.trim();
  const password = f.password.value;
  const role = f.role.value;
  if (!username || password.length < 4) {
    toast('Thiếu thông tin', 'Tên đăng nhập + mật khẩu (tối thiểu 4 ký tự).', 'error');
    return;
  }
  Auth.addUser(username, password, role)
    .then(() => { toast('Đã thêm', 'Tài khoản "' + username + '" đã tạo.', 'success'); closeModal('user-modal'); renderUsers(); })
    .catch(e => toast('Lỗi', e.message, 'error'));
}

function openUserPwForm(id, username) {
  const f = document.getElementById('userpw-form');
  f.id.value = id;
  f.password.value = '';
  document.getElementById('userpw-modal-title').textContent = 'Đổi mật khẩu: ' + username;
  openModal('userpw-modal');
}
function submitUserPwForm(e) {
  e.preventDefault();
  const f = e.target;
  const id = f.id.value;
  const password = f.password.value;
  if (password.length < 4) { toast('Quá ngắn', 'Mật khẩu mới tối thiểu 4 ký tự.', 'error'); return; }
  Auth.changePassword(id, password)
    .then(() => { toast('Đã đổi', 'Mật khẩu đã được cập nhật.', 'success'); closeModal('userpw-modal'); })
    .catch(e => toast('Lỗi', e.message, 'error'));
}

async function deleteUserAccount(id, username) {
  const ok = await confirmDialog({ title: 'Xóa tài khoản?', msg: 'Tài khoản sẽ bị xóa vĩnh viễn.', target: username });
  if (!ok) return;
  try { await Auth.deleteUser(id); toast('Đã xóa', 'Tài khoản "' + username + '" đã xóa.', 'success'); renderUsers(); }
  catch (e) { toast('Lỗi', e.message, 'error'); }
}

/* ════════════════════════════════════════════
   BOOT
   ════════════════════════════════════════════ */
/** Khởi tạo app SAU khi đã đăng nhập thành công */
async function initApp() {
  const main = document.getElementById('page-title');
  const oldTitle = main.textContent;
  main.textContent = 'Đang tải dữ liệu từ server...';

  await Store.init(); // GET công khai, không cần token
  updateApiBadge();
  refreshLessonSelector();
  renderDashboard();

  main.textContent = oldTitle || 'Tổng quan';
  bindAppEvents();
}

/** Bind các sự kiện form/modal (chạy 1 lần sau đăng nhập) */
let _appBound = false;
function bindAppEvents() {
  if (_appBound) return;
  _appBound = true;
  document.getElementById('vocab-form').addEventListener('submit', submitVocabForm);
  document.getElementById('dialog-form').addEventListener('submit', submitDialogForm);
  document.getElementById('mc-form').addEventListener('submit', submitMcForm);
  document.getElementById('fill-form').addEventListener('submit', submitFillForm);
  document.getElementById('sort-form').addEventListener('submit', submitSortForm);
  document.getElementById('match-form').addEventListener('submit', submitMatchForm);
  document.getElementById('warmup-form').addEventListener('submit', submitWarmupForm);
  document.getElementById('convo-form').addEventListener('submit', submitConvoForm);
  document.getElementById('grammar-form').addEventListener('submit', submitGrammarForm);
  document.getElementById('lesson-form').addEventListener('submit', submitLessonForm);
  document.getElementById('user-form').addEventListener('submit', submitUserForm);
  document.getElementById('userpw-form').addEventListener('submit', submitUserPwForm);
  document.getElementById('login-form').addEventListener('submit', handleLogin);
  // Đóng modal khi click ra ngoài
  document.querySelectorAll('.modal-overlay').forEach(ov => {
    ov.addEventListener('click', e => { if (e.target === ov && ov.id !== 'login-overlay') ov.classList.remove('show'); });
  });
  // Mobile menu toggle (hamburger + backdrop đều điều khiển drawer)
  const mb = document.querySelector('.mobile-menu-btn');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (mb) mb.addEventListener('click', () => {
    const sb = document.querySelector('.sidebar');
    const opening = !sb.classList.contains('open');
    sb.classList.toggle('open');
    if (backdrop) backdrop.classList.toggle('show', opening);
  });
  if (backdrop) backdrop.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.remove('open');
    backdrop.classList.remove('show');
  });
  // Vocab filter events
  const vf = document.getElementById('vocab-filter');
  if (vf) {
    vf.addEventListener('input', e => { vocabFilter.q = e.target.value; renderVocab(); });
    document.getElementById('vocab-filter-lesson').addEventListener('change', e => { vocabFilter.lesson = e.target.value; renderVocab(); });
    document.getElementById('vocab-filter-pos').addEventListener('change', e => { vocabFilter.pos = e.target.value; renderVocab(); });
  }
}

async function boot() {
  // Bind login form ngay (cần trước khi đăng nhập)
  const lf = document.getElementById('login-form');
  if (lf && !lf._bound) { lf.addEventListener('submit', handleLogin); lf._bound = true; }

  // Kiểm tra đã đăng nhập chưa
  if (Auth.isLoggedIn()) {
    const user = await Auth.me(); // verify token với server
    if (user) {
      updateLoginUI();
      await initApp();
      return;
    }
  }
  // Chưa đăng nhập / token hết hạn → hiện login
  updateLoginUI();
  showLogin();
}

/** Cập nhật badge Online/Offline ở header */
function updateApiBadge() {
  let badge = document.getElementById('api-badge');
  if (!badge) {
    // Tạo nếu chưa có
    badge = document.createElement('div');
    badge.id = 'api-badge';
    badge.style.cssText = 'display:inline-flex;align-items:center;gap:6px;font-size:.8rem;padding:4px 10px;border-radius:999px;font-weight:600;margin-left:12px;';
    const header = document.querySelector('.topbar, .header, header');
    if (header) header.appendChild(badge);
  }
  if (Store.online) {
    badge.style.background = '#dcfce7';
    badge.style.color = '#16a34a';
    badge.innerHTML = '<span style="width:8px;height:8px;border-radius:50%;background:#16a34a;display:inline-block;"></span> API Online';
  } else {
    badge.style.background = '#fee2e2';
    badge.style.color = '#dc2626';
    badge.innerHTML = '<span style="width:8px;height:8px;border-radius:50%;background:#dc2626;display:inline-block;"></span> API Offline (local seed)';
  }
}

document.addEventListener('DOMContentLoaded', boot);
