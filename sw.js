const CACHE = 'beatsynth-pro-v1';
const ASSETS = [
  './','./index.html','./manifest.json','./icon-512.png','./apple-touch-icon.png',
  './splash-1170x2532.png','./splash-1290x2796.png','./splash-1125x2436.png','./splash-1242x2688.png','./splash-828x1792.png',
  'https://unpkg.com/lamejs@1.2.0/lame.min.js'
];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('fetch', e=>{
  e.respondWith(
    caches.match(e.request, {ignoreVary:true, ignoreSearch:true}).then(r=> r || fetch(e.request))
  );
});