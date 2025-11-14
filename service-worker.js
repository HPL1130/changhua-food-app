// 緩存的名稱 - 每次更新緩存內容時，請更改版本號
const CACHE_NAME = 'changhua-food-cache-v10'; 

// 需要預先快取的所有檔案列表 (清單)
// **請確保您的 ICON 檔案路徑正確且已包含在此列表中**
const urlsToCache = [
  '/',                     // 根目錄 (通常是 index.html)
  '/index.html',           // 主要 HTML 檔案
  '/manifest.json',        // PWA 配置檔
  
  // *** PWA ICON 檔案 ***
  '/icon-192.png',         // Android / Chrome PWA Icon (192x192)
  '/icon-512.png',         // Android / Chrome PWA Icon (512x512)
  '/apple-touch-icon.png', // iOS/Safari PWA Icon
  
  // *** 其他靜態資源 ***
  // 如果您有 data.json 在本地 (而不是遠程 GitHub)，請取消註釋以下行
  // '/data.json' 
];

// 1. 安裝事件：當 Service Worker 首次安裝時觸發
self.addEventListener('install', (event) => {
  // 使用 event.waitUntil 確保 Service Worker 不會在快取完成前停止
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: 開啟並預先快取檔案...');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) // 強制新的 Service Worker 立即接管
  );
});

// 2. 激活事件：當 Service Worker 啟動並接管頁面控制權時觸發
self.addEventListener('activate', (event) => {
  // 清理舊的快取版本
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          // 刪除所有不符合當前 CACHE_NAME (v10) 的舊快取
          return cacheName.startsWith('changhua-food-cache-') && cacheName !== CACHE_NAME;
        }).map((cacheName) => {
          console.log('Service Worker: 正在刪除舊快取:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => self.clients.claim()) // 立即控制未受控的客戶端（頁面）
  );
});

// 3. 抓取事件：攔截所有網路請求
self.addEventListener('fetch', (event) => {
  // 檢查請求是否來自您的 data.json 的 GitHub 連結 (遠程 API)
  const isDataApi = event.request.url.includes('raw.githubusercontent.com');

  if (isDataApi) {
    // 對於外部 API 數據 (data.json)，我們優先使用網路（Network-First），並更新快取
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // 如果網路請求成功，複製響應並更新快取，然後返回網路響應
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // 如果網路失敗 (離線)，則從快取返回數據 (Cache-Fallback)
          return caches.match(event.request);
        })
    );
  } else {
    // 對於靜態資源 (HTML/CSS/ICON)，我們優先使用快取（Cache-First）
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // 快取中有資源，直接返回快取的內容（這就是 ICON 離線也能顯示的關鍵）
          if (response) {
            return response;
          }
          
          // 快取中沒有，則嘗試從網路抓取
          return fetch(event.request);
        })
    );
  }
});
