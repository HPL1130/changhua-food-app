const CACHE_NAME = 'changhua-food-pwa-v1.6';
const CORE_ASSETS = [
  'index.html','styles.css','app.js','manifest.json',
  'images/icons/appicon-512.png','images/icons/appicon-192.png','images/icons/appicon-48.png','images/icons/appicon-32.png',
  'images/hero/hero-b.png',
  'images/category/all.png','images/category/kuangroufan.png','images/category/rouyuan.png','images/category/vegetarian-noodle.png',
  'data/index_sanbao_reset.json'
];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(CORE_ASSETS))); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin === location.origin){
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(net => { const copy = net.clone(); caches.open(CACHE_NAME).then(c => c.put(e.request, copy)); return net; }).catch(()=>caches.match('index.html'))));
  }
});
