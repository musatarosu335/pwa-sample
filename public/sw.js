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
    // リクエストごとに逐次キャッシュ
    // event.requestはStreamなのでcloneする必要がある
    const fetchRequest = event.request.clone();

    return fetch(fetchRequest).then((res) => {
      // レスポンスが正しいかをチェック
      if (!res || res.status !== 200 || res.type !== 'basic') {
        return res;
      }
      // resはStreamなのでcloneする必要がある
      const responseToCache = res.clone();
      caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, responseToCache);
      });
      return res;
    });
  }));
});
