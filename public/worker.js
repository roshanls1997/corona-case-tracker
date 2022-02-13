const CACHE_NAME = "corona-case-tracker";
const urlsToCache = ["/"];

// install service worker
self.addEventListener("install", (event) => {
  // perform install step
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("open cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// cache and return request
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        // cache hit so return response
        return response;
      }
      return fetch(event.request);
    })
  );
});

// update service worker
self.addEventListener("activate", (event) => {
  const cacheWhiteList = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
