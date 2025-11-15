// Simple PWA service worker: cache-first for root files, network-first for others
const CACHE_NAME = 'changhua-pwa-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install: cache core files
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// Fetch: try network, fallback to cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).then(res => {
      // optionally update cache for navigation requests
      return res;
    }).catch(() => caches.match(e.request))
  );
});
