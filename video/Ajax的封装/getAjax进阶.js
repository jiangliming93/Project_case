function getAjax2(httpUrl, data, callback) {
    //1.创建xhr对象
    var xhr = new XMLHttpRequest()
        //2.设置请求的方法(get/post)和路径

    //404请求错误，可能请求路径 5开头网关、服务器问题 2开头成功 3开头需要下一步，重定向
    // xhr.open("POST", "http://127.0.0.1/面试上机练习/Ajax内涵段子/demo/123.txt")

    //GET发送格式  ？username=admin&password=123456就可以
    xhr.open("GET", httpUrl)


    //3.发送数据
    xhr.send()

    //POST发送格式
    // xhr.send("username=admin&password=123456");




    //4.监听后台是否返回数据
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // console.log("获取数据成功")
            // console.log(xhr)
            //以下两个值恒等于说明ajax是成功获取的
            //status==4
            //readyState==200
            // console.log(xhr.status)
            // console.log(xhr.readyState)

            //5.处理数据,response在浏览器中
            // var res = xhr.response;
            // var h1 = document.createElement("h1")
            // h1.innerHTML = res;
            // document.body.appendChild(h1)

            callback(xhr)

        }


    }

}