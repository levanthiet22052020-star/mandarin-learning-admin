/* ============================================
   HSK Admin · Storage Layer
   Quản lý dữ liệu qua localStorage với fallback
   về dữ liệu mặc định trong /js/data.js
   ============================================ */

const STORE_KEY = 'hsk_admin_data_v1';

/**
 * Khởi tạo dữ liệu: nếu localStorage chưa có thì nạp từ data mặc định
 */
function loadStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Lỗi đọc localStorage:', e);
  }
  // Clone dữ liệu mặc định (từ data.js load qua <script>)
  // Lưu ý: data.js dùng `const` nên tham chiếu trực tiếp biến global, không qua window.
  return {
    vocab: JSON.parse(JSON.stringify(typeof vocabData !== 'undefined' ? vocabData : [])),
    warmup: JSON.parse(JSON.stringify(typeof wuData !== 'undefined' ? wuData : [])),
    dialogs: JSON.parse(JSON.stringify(typeof dialogData !== 'undefined' ? dialogData : [])),
    fill: JSON.parse(JSON.stringify(typeof fillData !== 'undefined' ? fillData : [])),
    sort: JSON.parse(JSON.stringify(typeof sortData !== 'undefined' ? sortData : [])),
    match: JSON.parse(JSON.stringify(typeof matchData !== 'undefined' ? matchData : [])),
    mc: JSON.parse(JSON.stringify(typeof mcData !== 'undefined' ? mcData : [])),
    convo: JSON.parse(JSON.stringify(typeof convoData !== 'undefined' ? convoData : [])),
  };
}

function saveStore(data) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error('Lỗi ghi localStorage:', e);
    return false;
  }
}

// Instance singleton
const Store = {
  data: null,
  init() { this.data = loadStore(); return this.data; },
  save() { return saveStore(this.data); },

  /* Generic CRUD cho mọi mảng */
  list(key) { return this.data[key] || []; },
  get(key, id) { return (this.data[key] || []).find(x => String(x.n || x.id) === String(id)); },

  add(key, item) {
    const arr = this.data[key];
    // Sinh id tự tăng: dùng field 'n' nếu có, không thì 'id'
    const idField = item.n !== undefined ? 'n' : 'id';
    const max = arr.reduce((m, x) => Math.max(m, Number(x[idField]) || 0), 0);
    item[idField] = max + 1;
    arr.push(item);
    this.save();
    return item;
  },

  update(key, id, patch) {
    const arr = this.data[key];
    const idField = arr[0] && arr[0].n !== undefined ? 'n' : 'id';
    const i = arr.findIndex(x => String(x[idField]) === String(id));
    if (i === -1) return null;
    arr[i] = Object.assign({}, arr[i], patch);
    arr[i][idField] = id; // giữ nguyên id
    this.save();
    return arr[i];
  },

  remove(key, id) {
    const arr = this.data[key];
    const idField = arr[0] && arr[0].n !== undefined ? 'n' : 'id';
    const i = arr.findIndex(x => String(x[idField]) === String(id));
    if (i === -1) return false;
    arr.splice(i, 1);
    this.save();
    return true;
  },

  /* Đặt lại toàn bộ mảng (khi import) */
  setAll(key, items) { this.data[key] = items; this.save(); },

  /* Reset về mặc định */
  reset() {
    localStorage.removeItem(STORE_KEY);
    this.init();
  },

  /* Export data.js để copy sang web chính */
  exportJs() {
    const d = this.data;
    const fmt = (arr) => JSON.stringify(arr, null, 2);
    return `/* Tự sinh từ HSK Admin · ${new Date().toLocaleString('vi-VN')} */
const vocabData = ${fmt(d.vocab)};

const wuData = ${fmt(d.warmup)};

const dialogData = ${fmt(d.dialogs)};

const fillData = ${fmt(d.fill)};

const sortData = ${fmt(d.sort)};

const matchData = ${fmt(d.match)};

const mcData = ${fmt(d.mc)};

const convoData = ${fmt(d.convo)};
`;
  }
};
