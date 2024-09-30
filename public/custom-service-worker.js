/* eslint-disable */
/* eslint-disable no-restricted-globals */

// Import Workbox from the CDN
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

if (workbox) {
  console.log('Workbox is loaded');

  // Use CacheFirst strategy for recipes
  workbox.routing.registerRoute(
    ({ url }) => {
      return url.origin === 'https://dummyjson.com' && url.pathname.startsWith('/recipes');
    },
    new workbox.strategies.CacheFirst({
      cacheName: 'recipes-api-cache',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200], // Only cache successful responses
        }),
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50, // Limit the number of entries in the cache
          maxAgeSeconds: 24 * 60 * 60, // Cache for 24 hours
        }),
      ],
    })
  );
} else {
  console.log('Workbox could not be loaded. No offline support');
}