document.getElementById("flatpickr-tryme").flatpickr();
document.getElementById("flatpickr-tryme1").flatpickr();
/*文字*/
$(".room-tit").find("h2").addClass("h2ani");
$(".room-tit").find(".suntit").addClass("sunnitani");
$(".room-tit").find(".p1").addClass("sunnitani");
/*标题*/

$(window).scroll(function () {
    var scrollTop = parseInt($(window).scrollTop());
    var offsetTop = parseInt($(".detailtit").offset().top);
    var offsetTop1 = parseInt($(".detailtit").offset().top);
    var num = offsetTop - scrollTop;
    var num1 = offsetTop1 - scrollTop;
    /*热门城市*/
    if(num1 < 1180){
        $(".project").find("h2").addClass("ex3");
        $(".project").find("p").addClass("desc1");
        $('.project .ex3').textyleF({
            duration : 500,
            delay : 100,
            easing : 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
            callback : function(){
                $(this).css({
                    color : '#666',
                    transition : '1s',
                });
                $('.project .desc1').css('opacity',1);
                $(".project .hot-text").addClass("hot1-text");
            }
        });
    }
    if(num < 543){
        $(".detailtit .hot-text").find("h2").addClass("ex3");
        $(".detailtit .hot-text").find("p").addClass("desc1");
        $('.detailtit .ex3').textyleF({
            duration : 500,
            delay : 100,
            easing : 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
            callback : function(){
                $(this).css({
                    color : '#666',
                    transition : '1s',
                });
                $('.detailtit .desc1').css('opacity',1);
                $(".detailtit .hot-text").addClass("hot1-text");
            }
        });
    }else {
        $(".detailtit .hot-text").find("h2").removeClass("ex3");
        $(".detailtit .hot-text").find("p").removeClass("desc1");
    }

});


