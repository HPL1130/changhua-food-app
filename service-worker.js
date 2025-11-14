// service-worker.js

// 緩存的名稱 - 每次更新緩存內容時，請更改版本號
const CACHE_NAME = 'changhua-food-cache-v16'; // 再次升級版本號

// 需要預先快取的所有檔案列表 (清單)
// 確保所有 ICON 檔案的路徑正確（全部在 icons/ 子目錄）
const urlsToCache = [
  '/',                     
  '/index.html',           
  '/manifest.json',        
  
  // *** PWA ICON 檔案 - 統一指向 icons/ 子目錄 ***
  '/icons/icon-192.png',        
  '/icons/icon-512.png',        
  '/icons/apple-touch-icon.png', 
  
  // *** 其他靜態資源 (可選) ***
  // '/data.json' 
];

// =======================================================
// 1. 安裝事件：執行預快取並強制 Service Worker 立即激活 (skipWaiting)
self.addEventListener('install', function(event) {
  self.skipWaiting(); // 立即激活
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache and pre-caching resources');
        return cache.addAll(urlsToCache); // 將所有資源存入快取
      })
  );
});

// =======================================================
// 2. 激活事件：清除舊的快取並控制頁面 (clients.claim)
self.addEventListener('activate', function(event) {
  event.waitUntil(
    // 取得所有快取鍵值
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        // 過濾並刪除所有舊版本的快取
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('changhua-food-cache-') &&
                 cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    }).then(() => self.clients.claim()) // 接管頁面控制權
  );
});

// =======================================================
// 3. 請求事件：使用「快取優先 (Cache-First)」策略
self.addEventListener('fetch', function(event) {
  event.respondWith(
    // 1. 嘗試從快取中匹配資源
    caches.match(event.request)
      .then(function(response) {
        // 如果快取中有，則返回快取結果
        if (response) {
          return response;
        }
        // 如果快取中沒有，則進行網路請求
        return fetch(event.request);
      })
      .catch(function(error) {
        // 網路請求失敗時的處理（例如離線頁面）
        console.error('Fetch failed:', error);
      })
  );
});
