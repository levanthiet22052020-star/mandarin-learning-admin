/* ============================================
   HSK Admin · Storage Layer (API mode)
   Tất cả thao tác dữ liệu gọi về backend Express.
   Vẫn giữ `Store.data` làm cache để UI render ngay.
   ============================================ */

// Key map giữa tên collection internal và biến trong data.js (seed local)
const KEY_TO_VAR = {
  lessons: 'lessonsData',
  vocab: 'vocabData',
  warmup: 'wuData',
  dialogs: 'dialogData',
  fill: 'fillData',
  sort: 'sortData',
  match: 'matchData',
  mc: 'mcData',
  convo: 'convoData',
  grammar: 'grammarData',
};
// Các collection nội dung liên kết bài học qua field lessonId
const LESSON_LINKED = ['vocab', 'warmup', 'dialogs', 'fill', 'sort', 'match', 'mc', 'convo', 'grammar'];

/** Lấy token đăng nhập từ localStorage (nếu có) */
function getAuthToken() { return localStorage.getItem('admin_token') || ''; }

/** Fetch helper với xử lý lỗi + tự đính kèm Authorization header */
async function api(path, opts = {}) {
  const url = API_BASE + path;
  // Merge headers: mặc định Content-Type, thêm Authorization nếu có token
  const token = getAuthToken();
  const headers = Object.assign(
    { 'Content-Type': 'application/json' },
    token ? { Authorization: 'Bearer ' + token } : {},
    opts.headers || {}
  );
  const res = await fetch(url, { ...opts, headers });
  if (!res.ok) {
    // 401 → phiên hết hạn/chưa đăng nhập → báo để UI hiện lại login
    if (res.status === 401 && window.onAuthRequired) window.onAuthRequired();
    let msg = `HTTP ${res.status}`;
    try { const j = await res.json(); msg = j.error || msg; } catch (_) {}
    throw new Error(msg);
  }
  // DELETE / POST có thể trả JSON, GET luôn JSON
  const ct = res.headers.get('content-type') || '';
  if (ct.includes('application/json')) return res.json();
  return null;
}

/* ════════════════════════════════════════════
   AUTH — quản lý đăng nhập / phiên / user
   ════════════════════════════════════════════ */
const Auth = {
  TOKEN_KEY: 'admin_token',
  USER_KEY: 'admin_user',

  getToken() { return localStorage.getItem(this.TOKEN_KEY) || ''; },
  getUser() {
    try { return JSON.parse(localStorage.getItem(this.USER_KEY) || 'null'); }
    catch (_) { return null; }
  },
  isLoggedIn() { return !!this.getToken(); },

  /** Đăng nhập. Trả {user} nếu OK, throw Error nếu sai. */
  async login(username, password) {
    const data = await api('/api/_auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    localStorage.setItem(this.TOKEN_KEY, data.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(data.user));
    return data.user;
  },

  /** Đăng xuất (gọi API để hủy session + xoá local) */
  async logout() {
    try { await api('/api/_auth/logout', { method: 'POST' }); } catch (_) {}
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  },

  /** Xoá local-only (khi server 401, không cần gọi API) */
  clearLocal() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  },

  /** Verify token còn hợp lệ không. Trả user hoặc null. */
  async me() {
    if (!this.isLoggedIn()) return null;
    try {
      const data = await api('/api/_auth/me');
      localStorage.setItem(this.USER_KEY, JSON.stringify(data.user));
      return data.user;
    } catch (_) {
      this.clearLocal();
      return null;
    }
  },

  /* ─── Quản lý user (chỉ admin) ─── */
  async listUsers() {
    return (await api('/api/_users')).users;
  },
  async addUser(username, password, role) {
    return api('/api/_users', { method: 'POST', body: JSON.stringify({ username, password, role }) });
  },
  async changePassword(id, password) {
    return api('/api/_users/' + id, { method: 'PUT', body: JSON.stringify({ password }) });
  },
  async deleteUser(id) {
    return api('/api/_users/' + id, { method: 'DELETE' });
  },
};

/** Khởi tạo dữ liệu seed từ data.js local (fallback nếu API chết) */
function seedFromLocal() {
  return {
    lessons: JSON.parse(JSON.stringify(typeof lessonsData !== 'undefined' ? lessonsData : [])),
    vocab: JSON.parse(JSON.stringify(typeof vocabData !== 'undefined' ? vocabData : [])),
    warmup: JSON.parse(JSON.stringify(typeof wuData !== 'undefined' ? wuData : [])),
    dialogs: JSON.parse(JSON.stringify(typeof dialogData !== 'undefined' ? dialogData : [])),
    fill: JSON.parse(JSON.stringify(typeof fillData !== 'undefined' ? fillData : [])),
    sort: JSON.parse(JSON.stringify(typeof sortData !== 'undefined' ? sortData : [])),
    match: JSON.parse(JSON.stringify(typeof matchData !== 'undefined' ? matchData : [])),
    mc: JSON.parse(JSON.stringify(typeof mcData !== 'undefined' ? mcData : [])),
    convo: JSON.parse(JSON.stringify(typeof convoData !== 'undefined' ? convoData : [])),
    grammar: JSON.parse(JSON.stringify(typeof grammarData !== 'undefined' ? grammarData : [])),
  };
}

const Store = {
  data: null,
  online: false,
  // Bài học đang chọn để quản lý nội dung (admin). Khởi tạo = bài đầu.
  currentLessonId: null,

  /** Load toàn bộ dữ liệu từ API. Fallback về seed local nếu lỗi. */
  async init() {
    try {
      const all = await api('/api/_export/all');
      this.data = {
        lessons: all.lessons || [],
        vocab: all.vocab || [],
        warmup: all.warmup || [],
        dialogs: all.dialogs || [],
        fill: all.fill || [],
        sort: all.sort || [],
        match: all.match || [],
        mc: all.mc || [],
        convo: all.convo || [],
        grammar: all.grammar || [],
      };
      this.online = true;
      console.info('[Store] Đã load từ API:', API_BASE);
    } catch (e) {
      console.warn('[Store] API không khả dụng, dùng seed local:', e.message);
      this.data = seedFromLocal();
      this.online = false;
    }
    // Mặc định chọn bài đầu tiên
    if (this.data.lessons && this.data.lessons.length) {
      this.currentLessonId = this.data.lessons[0].id;
    }
    return this.data;
  },

  /** Đồng bộ 1 collection từ server (sau khi CRUD để refresh) */
  async refresh(key) {
    if (!this.online) return;
    try {
      this.data[key] = await api('/api/' + key);
    } catch (e) {
      console.warn('[Store] Lỗi refresh', key, e.message);
    }
  },

  /* ─── Read ─── */
  // list(key, lessonId?): trả toàn bộ hoặc lọc theo bài đang chọn / lessonId truyền vào
  list(key, lessonId) {
    const arr = this.data[key] || [];
    const lid = (lessonId === undefined) ? this.currentLessonId : lessonId;
    // lessons: trả toàn bộ (không lọc theo chính nó)
    if (key === 'lessons' || lid === null || lid === undefined) return arr;
    if (!LESSON_LINKED.includes(key)) return arr;
    return arr.filter(x => String(x.lessonId) === String(lid));
  },
  get(key, id) { return (this.data[key] || []).find(x => String(x.n || x.id) === String(id)); },

  /* ─── Bài học (lessons) — CRUD đầy đủ ─── */
  listLessons() { return this.data.lessons || []; },
  getLesson(id) { return (this.data.lessons || []).find(l => String(l.id) === String(id)); },
  currentLesson() { return this.getLesson(this.currentLessonId) || {}; },
  setCurrentLesson(id) { this.currentLessonId = id; },

  async addLesson(lesson) {
    // num tự tăng nếu không có
    if (lesson.num == null) {
      const max = (this.data.lessons || []).reduce((m, l) => Math.max(m, Number(l.num) || 0), 0);
      lesson.num = max + 1;
    }
    if (this.online) {
      try {
        const saved = await api('/api/lessons', { method: 'POST', body: JSON.stringify(lesson) });
        this.data.lessons.push(saved);
        this.data.lessons.sort((a, b) => (Number(a.num) || 0) - (Number(b.num) || 0));
        return saved;
      } catch (e) { window.onApiError && window.onApiError('Thêm bài thất bại: ' + e.message); }
    }
    this.data.lessons.push(lesson);
    return lesson;
  },

  async updateLesson(id, patch) {
    const i = (this.data.lessons || []).findIndex(l => String(l.id) === String(id));
    if (i === -1) return null;
    this.data.lessons[i] = Object.assign({}, this.data.lessons[i], patch);
    if (this.online) {
      try {
        await api('/api/lessons/' + id, { method: 'PUT', body: JSON.stringify(patch) });
      } catch (e) { window.onApiError && window.onApiError('Sửa bài thất bại: ' + e.message); }
    }
    return this.data.lessons[i];
  },

  async deleteLesson(id, cascade) {
    const i = (this.data.lessons || []).findIndex(l => String(l.id) === String(id));
    if (i !== -1) this.data.lessons.splice(i, 1);
    if (this.online) {
      try {
        const q = cascade ? '?cascade=1' : '';
        await api('/api/lessons/' + id + q, { method: 'DELETE' });
        if (cascade) {
          // Xóa nội dung con khỏi cache local
          LESSON_LINKED.forEach(k => {
            this.data[k] = (this.data[k] || []).filter(x => String(x.lessonId) !== String(id));
          });
        }
      } catch (e) { window.onApiError && window.onApiError('Xóa bài thất bại: ' + e.message); }
    } else if (cascade) {
      LESSON_LINKED.forEach(k => {
        this.data[k] = (this.data[k] || []).filter(x => String(x.lessonId) !== String(id));
      });
    }
    return true;
  },

  /* ─── Create ─── */
  add(key, item) {
    // Tự gắn lessonId = bài đang chọn cho nội dung mới
    if (LESSON_LINKED.includes(key) && this.currentLessonId && !item.lessonId) {
      item.lessonId = this.currentLessonId;
    }
    if (this.online) {
      // Async fire-and-forget, không block UI; refresh sau
      api('/api/' + key, { method: 'POST', body: JSON.stringify(item) })
        .then(saved => {
          // Xóa item optimistic tạm trước khi push item thật (chống render trùng 2 lần)
          const i = this.data[key].indexOf(item);
          if (i !== -1) this.data[key].splice(i, 1);
          this.data[key].push(saved);
          this.refresh(key);
          if (window.onStoreChange) window.onStoreChange();
        })
        .catch(e => {
          // Lỗi: cũng dọn optimistic item rác để UI không còn dòng không-id
          const i = this.data[key].indexOf(item);
          if (i !== -1) this.data[key].splice(i, 1);
          if (window.onStoreChange) window.onStoreChange();
          window.onApiError && window.onApiError('Thêm thất bại: ' + e.message);
        });
      // Optimistic: thêm tạm với id giả để UI hiển thị ngay
      this.data[key].push(item);
      return item;
    }
    // Offline: sinh id local
    const arr = this.data[key] || (this.data[key] = []);
    if ('n' in item) { const max = arr.reduce((m, x) => Math.max(m, Number(x.n) || 0), 0); item.n = max + 1; }
    arr.push(item);
    return item;
  },

  /* ─── Update ─── */
  update(key, id, patch) {
    const arr = this.data[key] || [];
    const i = arr.findIndex(x => String(x.n || x.id) === String(id));
    if (i !== -1) arr[i] = Object.assign({}, arr[i], patch);
    if (this.online) {
      api('/api/' + key + '/' + id, { method: 'PUT', body: JSON.stringify(patch) })
        .then(() => this.refresh(key))
        .catch(e => window.onApiError && window.onApiError('Cập nhật thất bại: ' + e.message));
    }
    return i !== -1 ? arr[i] : null;
  },

  /* ─── Delete ─── */
  remove(key, id) {
    const arr = this.data[key] || [];
    const i = arr.findIndex(x => String(x.n || x.id) === String(id));
    if (i !== -1) arr.splice(i, 1);
    if (this.online) {
      api('/api/' + key + '/' + id, { method: 'DELETE' })
        .then(() => this.refresh(key))
        .catch(e => window.onApiError && window.onApiError('Xóa thất bại: ' + e.message));
    }
    return true;
  },

  /** Đặt lại cả mảng (khi import) */
  setAll(key, items) { this.data[key] = items; },

  /** Reset về seed mặc định (server) */
  async reset() {
    if (this.online) {
      try {
        const r = await api('/api/_reset', { method: 'POST' });
        // Refetch all
        await this.init();
        return;
      } catch (e) {
        window.onApiError && window.onApiError('Reset thất bại: ' + e.message);
      }
    }
    this.data = seedFromLocal();
  },

  /** Import toàn bộ dữ liệu lên server */
  async importAll(data) {
    if (this.online) {
      await api('/api/_import', { method: 'POST', body: JSON.stringify(data) });
      await this.init();
      return;
    }
    this.data = {
      lessons: data.lessonsData || data.lessons || [],
      vocab: data.vocabData || data.vocab || [],
      warmup: data.wuData || data.warmup || [],
      dialogs: data.dialogData || data.dialogs || [],
      fill: data.fillData || data.fill || [],
      sort: data.sortData || data.sort || [],
      match: data.matchData || data.match || [],
      mc: data.mcData || data.mc || [],
      convo: data.convoData || data.convo || [],
      grammar: data.grammarData || data.grammar || [],
    };
  },

  /* ─── Export data.js (dùng API khi online, fallback local) ─── */
  exportJs() {
    const fmt = (arr) => JSON.stringify(arr, null, 2);
    const d = this.data;
    return `/* Tự sinh từ HSK Admin · ${new Date().toLocaleString('vi-VN')} */
const lessonsData = ${fmt(d.lessons || [])};

const vocabData = ${fmt(d.vocab)};

const wuData = ${fmt(d.warmup)};

const dialogData = ${fmt(d.dialogs)};

const fillData = ${fmt(d.fill)};

const sortData = ${fmt(d.sort)};

const matchData = ${fmt(d.match)};

const mcData = ${fmt(d.mc)};

const convoData = ${fmt(d.convo)};

const grammarData = ${fmt(d.grammar || [])};
`;
  },

  /** Lấy URL download data.js trực tiếp từ server */
  getExportUrl() {
    return API_BASE + '/api/_export/data.js';
  },

  /** Kiểm tra trạng thái kết nối API */
  async checkHealth() {
    try {
      const r = await fetch(API_BASE + '/api', { method: 'GET' });
      this.online = r.ok;
      return r.ok;
    } catch (_) {
      this.online = false;
      return false;
    }
  },
};
