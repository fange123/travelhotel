$(".quick").fadeIn(1500).show();
$(".quick h2").addClass("rotate1");
$(window).scroll(function () {
    var scrollTop = parseInt($(window).scrollTop());
    var offsetTop = parseInt($(".news-text").offset().top);
    var num = offsetTop - scrollTop;
    console.log(num);
    /*热门城市*/
    if(num < 1180){
        $(".news-text").find("h2").addClass("ex3");
        $(".news-text").find("p").addClass("desc1");
        $('.news-text .ex3').textyleF({
            duration : 500,
            delay : 100,
            easing : 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
            callback : function(){
                $(this).css({
                    color : '#666',
                    transition : '1s',
                });
                $('.news-text .desc1').css('opacity',1);
                $(".news-text").addClass("hot1-text");
            }
        });
    }
});