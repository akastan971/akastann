const CACHE_NAME = 'akastann-v2';

self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.map(function(key) {
        return caches.delete(key);
      }));
    })
  );
});

// Toujours chercher sur le réseau, jamais depuis le cache
self.addEventListener('fetch', function(e) {
  e.respondWith(fetch(e.request));
});
