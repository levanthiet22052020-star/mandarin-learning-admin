/* ============================================
   HSK Admin · Config
   Cấu hình API base URL.
   - Local:    http://localhost:4000
   - Render:   https://mandarin-learning-api.onrender.com (đổi theo URL thật)

   ⚠️ KHI DEPLOY LÊN RENDER:
   Sửa dòng DEFAULT_API_BASE thành URL Render gán cho backend.
   ============================================ */

const DEFAULT_API_BASE = 'http://localhost:4000';

const API_BASE = (function () {
  const u = new URL(location.href);
  const q = u.searchParams.get('api');
  if (q) return q.replace(/\/$/, '');
  return (window.API_BASE || DEFAULT_API_BASE).replace(/\/$/, '');
})();

window.API_BASE = API_BASE;
