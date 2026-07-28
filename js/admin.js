/* ============================================
   HSK Admin · App Logic
   ============================================ */

/* ─── Icon library (SVG inline, không dùng emoji) ─── */
const I = {
  dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  quiz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  grammar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>',
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
  if (navItem) {
    navItem.classList.add('active');
    const title = navItem.dataset.title;
    if (title) document.getElementById('page-title').textContent = title;
  }
  // Render tương ứng khi mở view
  if (name === 'dashboard') renderDashboard();
  if (name === 'vocab') renderVocab();
  if (name === 'dialogs') renderDialogs();
  if (name === 'quiz') renderQuiz();
  // Đóng mobile sidebar
  document.querySelector('.sidebar').classList.remove('open');
}

/* ════════════════════════════════════════════
   DASHBOARD
   ════════════════════════════════════════════ */
function renderDashboard() {
  const d = Store.data;
  const counts = {
    vocab: d.vocab.length,
    dialogs: d.dialogs.length,
    quiz: d.fill.length + d.sort.length + d.match.length + d.mc.length,
    warmup: d.warmup.length,
    convo: d.convo.length,
  };
  const cards = [
    { ic: 'blue', svg: I.book, num: counts.vocab, lbl: 'Từ vựng' },
    { ic: 'cyan', svg: I.chat, num: counts.dialogs, lbl: 'Hội thoại' },
    { ic: 'pink', svg: I.quiz, num: counts.quiz, lbl: 'Câu hỏi bài tập' },
    { ic: 'amber', svg: I.dashboard, num: counts.warmup, lbl: 'Card khởi động' },
    { ic: 'green', svg: I.chat, num: counts.convo, lbl: 'Đoạn luyện nói' },
  ];
  document.getElementById('stats-grid').innerHTML = cards.map(c => `
    <div class="stat-card">
      <div class="stat-ic ${c.ic}">${c.svg}</div>
      <div><div class="stat-num">${c.num}</div><div class="stat-lbl">${c.lbl}</div></div>
    </div>`).join('');

  // Quick actions
  const qa = document.getElementById('quick-actions');
  if (qa) qa.innerHTML = `
    <button class="btn btn-primary" onclick="showView('vocab',document.querySelector('.nav-item[data-title=\"Từ vựng\"]'))">${I.plus} Thêm từ vựng</button>
    <button class="btn" onclick="showView('dialogs',document.querySelector('.nav-item[data-title=\"Hội thoại\"]'))">${I.plus} Thêm hội thoại</button>
    <button class="btn" onclick="showView('quiz',document.querySelector('.nav-item[data-title=\"Bài tập\"]'))">${I.plus} Thêm bài tập</button>`;
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
      return (v.zh + v.py + v.vn + v.ex_zh + v.ex_vn).toLowerCase().includes(q);
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
  const v = n ? Store.get('vocab', n) : { n: null, zh: '', py: '', pos: 'Danh từ', vn: '', em: '', lesson: 1, ex_zh: '', ex_py: '', ex_vn: '' };
  const form = document.getElementById('vocab-form');
  form.n.value = v.n || '';
  form.zh.value = v.zh || '';
  form.py.value = v.py || '';
  form.pos.value = v.pos || 'Danh từ';
  form.vn.value = v.vn || '';
  form.em.value = v.em || '';
  form.lesson.value = v.lesson || 1;
  form.ex_zh.value = v.ex_zh || '';
  form.ex_py.value = v.ex_py || '';
  form.ex_vn.value = v.ex_vn || '';
  document.getElementById('vocab-modal-title').textContent = v.n ? 'Sửa từ vựng #' + v.n : 'Thêm từ vựng mới';
  openModal('vocab-modal');
}

function submitVocabForm(e) {
  e.preventDefault();
  const f = e.target;
  const item = {
    zh: f.zh.value.trim(),
    py: f.py.value.trim(),
    pos: f.pos.value,
    vn: f.vn.value.trim(),
    em: f.em.value.trim(),
    lesson: Number(f.lesson.value),
    ex_zh: f.ex_zh.value.trim(),
    ex_py: f.ex_py.value.trim(),
    ex_vn: f.ex_vn.value.trim(),
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
  updateNavCounts();
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
  updateNavCounts();
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
          <div class="panel-title">Hội thoại #${d.id} · ${d.scene || ''}</div>
          <div style="color:var(--muted);font-size:.85rem;margin-top:3px;">${(d.chars || []).join(' · ')} — ${d.lines.length} câu</div>
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
                  <td><span class="tag tag-${['blue', 'green', 'purple'][l.sp % 3]}">${d.chars[l.sp] || '?'}</span></td>
                  <td class="col-zh">${l.zh}</td>
                  <td class="col-py">${l.py}</td>
                  <td class="col-vn">${l.vn}</td>
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
  updateNavCounts();
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
  updateNavCounts();
}

/* ════════════════════════════════════════════
   QUIZ (4 loại: mc, fill, sort, match)
   ════════════════════════════════════════════ */
let quizTab = 'mc'; // mc | fill | sort | match
function setQuizTab(t, btn) {
  quizTab = t;
  document.querySelectorAll('.quiz-subtab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderQuiz();
}

function renderQuiz() {
  const wrap = document.getElementById('quiz-content');
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
          <div class="col-zh" style="margin-bottom:8px;">${q.q}</div>
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
  updateNavCounts();
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
  closeModal('fill-modal'); renderQuiz(); updateNavCounts();
}

/* --- Sắp xếp (sort) --- */
function renderSort(wrap, items) {
  if (!items.length) { wrap.innerHTML = quizEmpty('sắp xếp', () => openSortForm()); return; }
  wrap.innerHTML = items.map((q, i) => `
    <div class="panel" style="padding:16px 18px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="sublist-num" style="margin-top:2px;">${i + 1}</span>
        <div style="flex:1;">
          <div class="col-zh" style="margin-bottom:6px;">${q.ans}</div>
          <div class="cell-muted">📋 ${escapeHtml(q.vn)} · Từ: ${(q.words || []).join(' | ')}</div>
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
  closeModal('sort-modal'); renderQuiz(); updateNavCounts();
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
  closeModal('match-modal'); renderQuiz(); updateNavCounts();
}

/* --- Xóa chung + Empty state --- */
async function deleteQuizItem(key, n) {
  const ok = await confirmDialog({ title: 'Xóa câu hỏi?', msg: 'Câu hỏi sẽ bị xóa vĩnh viễn.' });
  if (!ok) return;
  Store.remove(key, n);
  toast('Đã xóa', 'Câu hỏi đã bị xóa.', 'success');
  renderQuiz(); updateNavCounts();
}
function quizEmpty(name) {
  const fnMap = { 'trắc nghiệm': 'openMcForm()', 'điền từ': 'openFillForm()', 'sắp xếp': 'openSortForm()', 'nối câu': 'openMatchForm()' };
  const fn = fnMap[name] || '';
  return `<div class="empty">${I.empty}<h3>Chưa có câu ${name}</h3><p>Bấm nút bên dưới để thêm câu ${name} đầu tiên.</p><button class="btn btn-primary" onclick="${fn}">${I.plus} Thêm câu ${name}</button></div>`;
}

/* ─── Helpers ─── */
function escapeHtml(s) { return String(s || '').replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c])); }
function escapeAttr(s) { return String(s || '').replace(/"/g, '&quot;'); }

/* ─── Import / Export / Reset ─── */
function exportData() {
  const js = Store.exportJs();
  const blob = new Blob([js], { type: 'text/javascript;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('Đã xuất file', 'Tải data.js về — copy đè vào js/data.js của web chính.', 'success');
}

function triggerImport(input) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const code = e.target.result;
      const fn = new Function(code + '; return {vocabData,wuData,dialogData,fillData,sortData,matchData,mcData,convoData};');
      const result = fn();
      Store.data.vocab = result.vocabData || Store.data.vocab;
      Store.data.warmup = result.wuData || Store.data.warmup;
      Store.data.dialogs = result.dialogData || Store.data.dialogs;
      Store.data.fill = result.fillData || Store.data.fill;
      Store.data.sort = result.sortData || Store.data.sort;
      Store.data.match = result.matchData || Store.data.match;
      Store.data.mc = result.mcData || Store.data.mc;
      Store.data.convo = result.convoData || Store.data.convo;
      Store.save();
      toast('Đã nhập dữ liệu', 'Dữ liệu từ file đã được tải vào.', 'success');
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
    msg: 'Mọi thay đổi sẽ bị mất và khôi phục về dữ liệu gốc ban đầu. Không thể hoàn tác.',
    target: 'TOÀN BỘ DỮ LIỆU'
  });
  if (!ok) return;
  Store.reset();
  toast('Đã đặt lại', 'Dữ liệu đã về trạng thái ban đầu.', 'success');
  refreshAll();
}

function refreshAll() {
  updateNavCounts();
  const activeView = document.querySelector('.view.active');
  if (!activeView) return;
  const id = activeView.id.replace('view-', '');
  if (id === 'dashboard') renderDashboard();
  if (id === 'vocab') renderVocab();
  if (id === 'dialogs') renderDialogs();
  if (id === 'quiz') renderQuiz();
}

/* ─── Cập nhật số lượng ở sidebar ─── */
function updateNavCounts() {
  const counts = {
    vocab: Store.data.vocab.length,
    dialogs: Store.data.dialogs.length,
    quiz: Store.data.fill.length + Store.data.sort.length + Store.data.match.length + Store.data.mc.length,
  };
  document.querySelectorAll('.nav-item[data-count]').forEach(n => {
    const key = n.dataset.count;
    if (counts[key] !== undefined) n.querySelector('.count').textContent = counts[key];
  });
}

/* ─── Khởi tạo ─── */
document.addEventListener('DOMContentLoaded', () => {
  Store.init();
  updateNavCounts();
  renderDashboard();
  // Bind form submit
  document.getElementById('vocab-form').addEventListener('submit', submitVocabForm);
  document.getElementById('dialog-form').addEventListener('submit', submitDialogForm);
  document.getElementById('mc-form').addEventListener('submit', submitMcForm);
  document.getElementById('fill-form').addEventListener('submit', submitFillForm);
  document.getElementById('sort-form').addEventListener('submit', submitSortForm);
  document.getElementById('match-form').addEventListener('submit', submitMatchForm);
  // Đóng modal khi click ra ngoài
  document.querySelectorAll('.modal-overlay').forEach(ov => {
    ov.addEventListener('click', e => { if (e.target === ov) ov.classList.remove('show'); });
  });
  // Mobile menu toggle
  const mb = document.querySelector('.mobile-menu-btn');
  if (mb) mb.addEventListener('click', () => document.querySelector('.sidebar').classList.toggle('open'));
  // Vocab filter events
  const vf = document.getElementById('vocab-filter');
  if (vf) {
    vf.addEventListener('input', e => { vocabFilter.q = e.target.value; renderVocab(); });
    document.getElementById('vocab-filter-lesson').addEventListener('change', e => { vocabFilter.lesson = e.target.value; renderVocab(); });
    document.getElementById('vocab-filter-pos').addEventListener('change', e => { vocabFilter.pos = e.target.value; renderVocab(); });
  }
});
