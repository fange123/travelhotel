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

var flag = true;
$(window).scroll(function () {
    var scrollTop = parseInt($(window).scrollTop());
    var offsetTop = parseInt($(".demo").offset().top);
    var num = offsetTop - scrollTop;
    console.log(num);
    console.log(scrollTop);
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
