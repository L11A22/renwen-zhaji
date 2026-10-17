/* 旧站已迁移，自毁：注销自身并清空缓存 */
self.addEventListener('install',function(e){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil((async function(){
  try{var ks=await caches.keys();await Promise.all(ks.map(function(k){return caches.delete(k);}));}catch(err){}
  try{await self.registration.unregister();}catch(err){}
})());});
self.addEventListener('fetch',function(){});
