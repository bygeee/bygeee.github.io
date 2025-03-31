var posts=["2025/03/23/android so层简单分析/","2025/04/01/github安卓加固项目分享/","2025/03/22/frida插桩爆破/","2025/03/08/dumpdex/","2025/03/25/nctf/","2025/03/08/ghctf/","2025/03/07/hgame/","2025/03/10/水/","2025/03/19/smc/","2025/03/13/基础/","2025/03/20/调试so/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };