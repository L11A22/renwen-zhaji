/* 站点配置：留言板后端地址与公开密钥（这个文件可以公开，密钥本身就是公开密钥）。
   留言板支持两种后端，用 type 切换：
     type:"supabase" → 需要 url + key（当前方案，境外服务）
     type:"api"      → 只需要 endpoint（自建后端，例如 EdgeOne 云函数，更稳）
   切换时只改这一个文件，其它文件都不用动。 */
window.SITE=window.SITE||{};
window.SITE.guestbook={
  type:"supabase",
  url:"https://eploesezvizdgibbbvbl.supabase.co",
  key:"sb_publishable_E5mxb7aRjHg-HSLozCVRQQ_BVzlqq9_",
  table:"guestbook"
};

/* —— 将来切到 EdgeOne 云函数时，把上面的 window.SITE.guestbook 整段替换成下面这段 ——
window.SITE.guestbook={
  type:"api",
  endpoint:"https://你的项目名.edgeone.dev/api/guestbook"
};
   （如果函数需要令牌，再加一行 token:"..."）
*/
