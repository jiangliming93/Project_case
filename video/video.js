(function() {
    function xys() {
        var html = document.querySelector("html")
        var userAgent = navigator.userAgent
            // userAgent.indexOf("iphone"),通过这个方法可以获取iPhone在字符串中的索引值
        html.className = "";
        if (userAgent.indexOf("iphone") != -1) {
            html.classList.add("iphone")
        } else if (userAgent.indexOf("Android") != -1) {
            html.classList.add("Android")
        } else if (userAgent.indexOf("ipad") != -1) {
            html.classList.add("ipad")
        } else {
            html.classList.add("pc")
        }

        // 通过wingdow.innerWidth可以获取窗口的宽度，所以根据窗口的宽度设置html的样式
        if (window.innerWidth < 640) {
            html.classList.add("lt640");
            html.classList.add("lt960");
            html.classList.add("lt1200");
        } else if (window.innerWidth < 960) {
            html.classList.add("lt960");
            html.classList.add("lt1200");
            html.classList.add("gt640");
        } else if (window.innerWidth < 1200) {
            html.classList.add("gt640");
            html.classList.add("gt960");
            html.classList.add("lt1200");
        } else {
            html.classList.add("gt640");
            html.classList.add("gt960");
            html.classList.add("gt1200");
        }


        // rem布局
        // 1.设计师设计网站的设计稿：1000px
        // 2.每个人的设备不同，打开网页的时候分辨率率就不同
        // 3.屏幕大小，1000px,即1rem==100px(设计稿的宽度)，所以10rem就会刚好霸占整个屏幕
        // 4.同样，500px,1rem==50px(设计稿的宽度),所以10rem就会占满整个屏幕
        // 5.750px，1rem==100px(设计稿的宽度)，所以7.5rem就会占满整个屏幕
        var screenWidth = window.innerWidth;
        var danwei = screenWidth / 7.68; //屏幕的宽度/设计稿占满全屏宽度为多少rem
        var html = document.querySelector("html")
        html.style.fontSize = danwei + "px"
    }
    xys();
    window.onresize = function() {
        xys();
    }

})()