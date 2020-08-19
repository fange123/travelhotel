$(".meetingtit").addClass("show2");
var flag = true;
$(window).scroll(function () {
    var scrollTop = parseInt($(window).scrollTop());
    var offsetTop = parseInt($(".demo").offset().top);
    var offsetTop1 = parseInt($(".shebei-text").offset().top);
    var offsetTop2 = parseInt($(".hall").offset().top);
    var num = offsetTop - scrollTop;
    var num1 = offsetTop1 - scrollTop;
    var num2 = offsetTop2 - scrollTop;
    console.log(num2);
    if(num2 < 460){
        $(".sliderright").addClass("sliderright1");
        $(".sliderleft").addClass("sliderleft1");
    }else {
        $(".sliderright").removeClass("sliderright1");
        $(".sliderleft").removeClass("sliderleft1");
    }
    if(num1 < 600){
        /*标题*/
        $('.ex1').textyleF();
        $('.ex2').textyleF({
            duration : 400,
            delay : 200,
            easing : 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
            callback : function(){
                $(this).css({
                    color : '#504947',
                    transition : '1s',
                });
                $('.desc').css({
                    opacity:1,
                    transition : '2s',
                });
            }
        });
    }
    if(flag){
        if(num < 740 ){
                $('.counter-value').each(function(){
                    flag = false;
                    $(this).prop('Counter',0).stop().animate({
                        Counter: $(this).text()
                    },{
                        duration: 3500,
                        easing: 'swing',
                        step: function (now){
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
        }
    }

});
/*视频*/
var myvideo = document.getElementById("myvideo");
var play = document.getElementById("play");
play.onclick = function () {
  myvideo.play();
  play.style.display = "none";
  myvideo.onclick = function () {
      myvideo.pause();
      play.style.display = "block";
  }
};
