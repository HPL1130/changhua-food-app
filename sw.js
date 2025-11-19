const CACHE_NAME = 'changhua-v5.4-ai';
const ASSETS = [
  './','./index.html','./styles.css','./app.js','./config.js','./data.json',
  './assets/icon-192.png','./assets/icon-512.png','./assets/baguashan_buddha.svg','./assets/three_treasures.svg',
  './assets/ai_rouyuan_640x360.png','./assets/ai_kongroufan_640x360.png','./assets/ai_sushi_640x360.png','./assets/ai_default_640x360.png'
];
self.addEventListener('install', e=>{ e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS))); });
self.addEventListener('fetch', e=>{ e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request))); });
