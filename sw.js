// sw.js

// 更改這個版本號 (Cache Name) 就能強制更新所有快取的檔案
const CACHE_NAME = 'changhua-food-v20251117_6'; 

// 列出所有需要被快取/離線儲存的檔案
const urlsToCache = [
  './', // 這是 index.html 的別名
  'index.html',
  'data.js',
  'manifest.json',
  // 如果未來有 CSS 或圖片，也需要加在這裡
];

// 監聽 'install' 事件：安裝 Service Worker 時，將檔案放入快取
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting(); // 強制新的 Service Worker 立即啟用
});

// 監聽 'fetch' 事件：攔截所有網路請求，優先從快取中回應
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 快取中有資源，就直接回傳快取
        if (response) {
          return response;
        }
        // 快取中沒有，就去網路抓取
        return fetch(event.request);
      })
  );
});

// 監聽 'activate' 事件：清理舊版本的快取
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // 如果快取不在白名單中 (即舊版本)，就刪除它
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
