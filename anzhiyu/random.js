var posts=["2025/03/08/dumpdex/","2025/03/07/hgame/","2025/03/13/基础/","2025/03/08/ghctf/","2025/03/10/水/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };