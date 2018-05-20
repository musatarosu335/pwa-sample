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

// キャッシュされたレスポンスを返す
self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((res) => {
    // 有効なキャッシュがあれば、キャッシュしたリソースを返す
    if (res) {
      return res;
    }
    return fetch(event.request);
  }));
});
