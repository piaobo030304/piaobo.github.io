var posts=["2025/01/05/hello-world/","2025/01/05/2024年回顾/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };