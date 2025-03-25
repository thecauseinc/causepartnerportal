self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("partner-portal-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/manifest.json",
        "/icon_192x192.png",
        "/icon_512x512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
