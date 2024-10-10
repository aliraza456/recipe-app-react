importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

if (workbox) {
  console.log('Workbox is loaded');

  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

  workbox.routing.registerRoute(
    ({ url }) => {
      return url.origin === 'https://dummyjson.com' && url.pathname.startsWith('/recipes');
    },
    new workbox.strategies.CacheFirst({
      cacheName: 'recipes-api-cache',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200], 
        }),
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50, 
          maxAgeSeconds: 24 * 60 * 60, 
        }),
      ],
    })
  );
} else {
  console.log('Workbox could not be loaded. No offline support');
}
