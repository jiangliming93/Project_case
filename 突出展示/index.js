// 入口函数
$(function() {
    $("li").mouseenter(function() {
        $(this).css("opacity", "1").siblings().css("opacity", "0.4")


    });
    $(".wrap").mouseleave(function() {
        $("this").find("li").css("opacity", 1);
    });


});