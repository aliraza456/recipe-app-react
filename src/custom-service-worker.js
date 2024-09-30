// src/custom-service-worker.js

/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';
 
precacheAndRoute(self.__WB_MANIFEST || []);

// Cache API responses for recipe data
registerRoute(
  ({ url }) => {
    console.log('Request made to:', url.href);
    return url.origin === 'https://dummyjson.com' && url.pathname.startsWith('/recipes');
  },
  new StaleWhileRevalidate({
    cacheName: 'recipes-api-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ],
  })
);