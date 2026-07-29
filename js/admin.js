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
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
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
  if (name === 'warmup') renderWarmup();
  if (name === 'convo') renderConvo();
  if (name === 'grammar') renderGrammar();
  if (name === 'meta') renderMeta();
  if (name === 'users') renderUsers();
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
    grammar: (d.grammar || []).length,
  };
  const cards = [
    { ic: 'blue', svg: I.book, num: counts.vocab, lbl: 'Từ vựng' },
    { ic: 'cyan', svg: I.chat, num: counts.dialogs, lbl: 'Hội thoại' },
    { ic: 'pink', svg: I.quiz, num: counts.quiz, lbl: 'Câu hỏi bài tập' },
    { ic: 'amber', svg: I.dashboard, num: counts.warmup, lbl: 'Card khởi động' },
    { ic: 'green', svg: I.chat, num: counts.convo, lbl: 'Đoạn luyện nói' },
    { ic: 'purple', svg: I.grammar, num: counts.grammar, lbl: 'Điểm ngữ pháp' },
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
  updateNavCounts();
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
  updateNavCounts();
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
  updateNavCounts();
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
  updateNavCounts();
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
  updateNavCounts();
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
  updateNavCounts();
}

/* ════════════════════════════════════════════
   META (Tiêu đề bài học / Header info)
   Object đơn: { badge, zh, py, vn, chips: [{icon, text}] }
   ════════════════════════════════════════════ */
let metaEditing = null;
const META_ICON_OPTIONS = ['snow', 'book', 'chat', 'compass', 'target', 'mic', 'card', 'pen', 'shuffle', 'link', 'pencil', 'bulb'];

function renderMeta() {
  const wrap = document.getElementById('meta-wrap');
  const m = Store.getMeta();
  if (!m || !m.zh) {
    wrap.innerHTML = `<div class="empty">${I.empty}<h3>Chưa có tiêu đề bài học</h3><p>Thiết lập tiêu đề hiển thị ở đầu trang web.</p><button class="btn btn-primary" onclick="openMetaForm()">${I.plus} Thiết lập tiêu đề</button></div>`;
    return;
  }
  wrap.innerHTML = `
    <div class="panel">
      <div class="panel-head">
        <div class="panel-title">Tiêu đề bài học hiện tại</div>
        <div class="page-actions"><button class="btn btn-primary" onclick="openMetaForm()">${I.edit} Sửa tiêu đề</button></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:14px;padding:4px 0;">
        <div><span class="cell-muted">Badge:</span> <span class="tag tag-amber">${escapeHtml(m.badge || '')}</span></div>
        <div><span class="cell-muted">Chữ Hán:</span> <span class="col-zh" style="font-size:1.6rem;">${escapeHtml(m.zh || '')}</span></div>
        <div><span class="cell-muted">Phiên âm:</span> <span class="col-py">${escapeHtml(m.py || '')}</span></div>
        <div><span class="cell-muted">Tiếng Việt:</span> <span class="col-vn">${escapeHtml(m.vn || '')}</span></div>
        <div>
          <span class="cell-muted">Các chip thông tin:</span>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;">
            ${(m.chips || []).map(c => `<span class="tag tag-blue">${escapeHtml(c.icon || '•')} → ${escapeHtml(c.text || '')}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
    <div class="panel" style="border-color:var(--danger-l);">
      <div class="panel-title" style="color:var(--danger);margin-bottom:6px;">💡 Lưu ý</div>
      <p style="color:var(--muted);font-size:.9rem;margin:0;">Tiêu đề là dữ liệu duy nhất (không thể xóa, chỉ sửa). Nếu xóa sạch chữ Hán, web sẽ không hiển thị tiêu đề.</p>
    </div>`;
}

function openMetaForm() {
  const m = Store.getMeta();
  metaEditing = {
    badge: m.badge || '',
    zh: m.zh || '',
    py: m.py || '',
    vn: m.vn || '',
    chips: JSON.parse(JSON.stringify(m.chips || [])),
  };
  if (!metaEditing.chips.length) metaEditing.chips.push({ icon: 'snow', text: '' });
  const f = document.getElementById('meta-form');
  f.badge.value = metaEditing.badge;
  f.zh.value = metaEditing.zh;
  f.py.value = metaEditing.py;
  f.vn.value = metaEditing.vn;
  document.getElementById('meta-modal-title').textContent = 'Sửa tiêu đề bài học';
  renderMetaChips();
  openModal('meta-modal');
}

function renderMetaChips() {
  const wrap = document.getElementById('meta-chips');
  wrap.innerHTML = metaEditing.chips.map((c, i) => `
    <div class="sublist-item" style="align-items:center;">
      <div class="sublist-num">${i + 1}</div>
      <div class="sublist-body">
        <div class="sublist-fields">
          <select class="input meta-chip-icon" data-i="${i}">
            ${META_ICON_OPTIONS.map(ic => `<option value="${ic}" ${c.icon === ic ? 'selected' : ''}>${ic}</option>`).join('')}
          </select>
          <button type="button" class="btn btn-sm btn-ghost meta-chip-del" data-i="${i}" style="justify-content:flex-end;">${I.trash} Xóa</button>
        </div>
        <input class="input meta-chip-text" data-i="${i}" placeholder="Nội dung chip (vd: 24 từ mới)" value="${escapeAttr(c.text || '')}">
      </div>
    </div>`).join('');
  wrap.querySelectorAll('.meta-chip-icon').forEach(el => el.onchange = e => { metaEditing.chips[+e.target.dataset.i].icon = e.target.value; });
  wrap.querySelectorAll('.meta-chip-text').forEach(el => el.oninput = e => { metaEditing.chips[+e.target.dataset.i].text = e.target.value; });
  wrap.querySelectorAll('.meta-chip-del').forEach(b => b.onclick = e => { metaEditing.chips.splice(+e.currentTarget.dataset.i, 1); renderMetaChips(); });
}

function addMetaChip() { metaEditing.chips.push({ icon: 'book', text: '' }); renderMetaChips(); }

async function submitMetaForm(e) {
  e.preventDefault();
  const f = e.target;
  const chips = metaEditing.chips
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
  await Store.setMeta(patch);
  toast('Đã cập nhật', 'Tiêu đề bài học đã được lưu.', 'success');
  closeModal('meta-modal');
  renderMeta();
}

/* ─── Helpers ─── */
function escapeHtml(s) { return String(s || '').replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c])); }
function escapeAttr(s) { return String(s || '').replace(/"/g, '&quot;'); }

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
  updateNavCounts();
  const activeView = document.querySelector('.view.active');
  if (!activeView) return;
  const id = activeView.id.replace('view-', '');
  if (id === 'dashboard') renderDashboard();
  if (id === 'vocab') renderVocab();
  if (id === 'dialogs') renderDialogs();
  if (id === 'quiz') renderQuiz();
  if (id === 'warmup') renderWarmup();
  if (id === 'convo') renderConvo();
  if (id === 'grammar') renderGrammar();
  if (id === 'meta') renderMeta();
  if (id === 'users') renderUsers();
}

/* ─── Cập nhật số lượng ở sidebar ─── */
function updateNavCounts() {
  const counts = {
    vocab: Store.data.vocab.length,
    dialogs: Store.data.dialogs.length,
    quiz: Store.data.fill.length + Store.data.sort.length + Store.data.match.length + Store.data.mc.length,
    warmup: Store.data.warmup.length,
    convo: Store.data.convo.length,
    grammar: (Store.data.grammar || []).length,
  };
  document.querySelectorAll('.nav-item[data-count]').forEach(n => {
    const key = n.dataset.count;
    if (counts[key] !== undefined) n.querySelector('.count').textContent = counts[key];
  });
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
  updateNavCounts();
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
  document.getElementById('meta-form').addEventListener('submit', submitMetaForm);
  document.getElementById('user-form').addEventListener('submit', submitUserForm);
  document.getElementById('userpw-form').addEventListener('submit', submitUserPwForm);
  document.getElementById('login-form').addEventListener('submit', handleLogin);
  // Đóng modal khi click ra ngoài
  document.querySelectorAll('.modal-overlay').forEach(ov => {
    ov.addEventListener('click', e => { if (e.target === ov && ov.id !== 'login-overlay') ov.classList.remove('show'); });
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
