const CACHE_NAME = 'test-pwa-cache-v1'; // 任意の値
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.ico',
];

// Service Workerのインストール
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => (
    cache.addAll(urlsToCache)
  )));
});
