// 2) CREATE VARIABLES FOR THE NAME OF THE CACHE AND AN ARRAY CONTAINENG THE FILES TO BE CACHED

const cacheName = 'cache-v1';
const resourcesToPrecache = [
  '/',
  'index.html',
  'style.css',
  'main.js',
  'img/face.png',
  'img/fav.png',
  'img/insta.png',
  'img/pay.png',
  'img/sad.png',
  'img/success.png'
];

// 3) PRECACHING RESOURCES
// The sw recives an installation event during registration. This is our que to put the files into the cache
// Note: in a worker "self" is the worker. Anywhere else it refers to the global object
self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(resourcesToPrecache)
      })
  )
})

self.addEventListener('activate', event => {
  console.log('Activate event!');
})

// 4) IMPLEMENTING CACHE-FIRST 
// We have the files in the cache and now we want to get the out
// Note: the sw sits between our site and the network which means that it can intercept requests to the network and divert them in to the cache
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  )
})
