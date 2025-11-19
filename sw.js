const CACHE_NAME = 'changhua-food-pwa-v1.2';
const CORE_ASSETS = [
  'index.html','styles.css','app.js','manifest.json',
  'images/icons/appicon-192.png','images/icons/appicon-512.png',
  'images/hero/hero-cute.png',
  'images/category/all.svg','images/category/kuangroufan.svg','images/category/rouyuan.svg','images/category/vegetarian-noodle.svg'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin === location.origin){
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(net => {
        const copy = net.clone(); caches.open(CACHE_NAME).then(c => c.put(e.request, copy)); return net;
      }).catch(() => caches.match('index.html')))
    );
  }
});
