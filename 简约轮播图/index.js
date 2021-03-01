$(function() {
    var $li = $(".wrap>ul>li");
    var count = 0;
    $(".arrow-right").click(function() {
        count++;
        if (count == $li.lenght) {
            count++;
        }
        $li.eq(count).fadeIn(1000).siblings().fadeOut(1000);



    });
    $(".arrow-left").click(function() {
        count--;
        if (count == -1) {
            count = $li.length - 1;
        }
        $li.eq(count).fadeIn(1000).siblings().fadeOut(1000);


    });
});