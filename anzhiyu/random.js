var posts=["2025/03/22/frida插桩爆破/","2025/03/08/dumpdex/","2025/03/08/ghctf/","2025/03/20/调试so/","2025/03/10/水/","2025/03/19/smc/","2025/03/13/基础/","2025/03/07/hgame/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };