const CACHE_NAME = 'changhua-food-v1';
const urlsToCache = [
  '/changhua-food-app/',
  '/changhua-food-app/index.html',
  '/changhua-food-app/manifest.json',
  '/changhua-food-app/icons/icon-192.png',
  '/changhua-food-app/icons/icon-512.png',
  '/changhua-food-app/icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

