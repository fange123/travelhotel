(function() {
    [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
        new SelectFx(el);
    } );
})();
/*热点*/
var index = 0;
$(".arrow1").click(function () {
    index ++;
    if(index == 0){
        $(".bannerlist").html(`
            <li>
                <img src="img/hot-ban01.png" alt="">
                <div class="caption1 text-center">

                    <h2>香港</h2>
                    <p>亚洲美食之都</p>
                    <p>人均￥<span>440</span>/晚</p>
                    <button class="hot-btn showno">立即预约</button>

                </div>
            </li>
            <li>
                <img src="img/hot-ban02.png" alt="">
                <div class="caption1 text-center">
                    <h2>清迈</h2>
                    <p>泰国最文艺小城</p>
                    <p>人均￥<span>154</span>/晚</p>

                    <button class="hot-btn">立即预约</button>
                </div>
            </li>
            <li>
                <img src="img/hot-ban03.png" alt="">
                <div class="caption1 text-center">
                    <h2>伦敦</h2>
                    <p>感受英伦风情</p>
                    <p>人均￥<span>354</span>/晚</p>
                    <button class="hot-btn showno">立即预约</button>

                </div>
            </li>      
        `);
        $(".caption1").find("*").addClass("listshow");
    }else if(index == 1){
        $(".bannerlist").html(`
            <li>
                <img src="img/hot-ban02.png" alt="">
                <div class="caption1 text-center">
                     <h2>清迈</h2>
                    <p>泰国最文艺小城</p>
                    <p>人均￥<span>154</span>/晚</p>
                    <button class="hot-btn showno">立即预约</button>
                   
                </div>
            </li>
            <li>
                <img src="img/hot-ban03.png" alt="">
                <div class="caption1 text-center">
                    <h2>伦敦</h2>
                    <p>感受英伦风情</p>
                    <p>人均￥<span>354</span>/晚</p>
                    

                    <button class="hot-btn">立即预约</button>
                </div>
            </li>
            <li>
                <img src="img/hot-ban01.png" alt="">
                <div class="caption1 text-center">
                 <h2>香港</h2>
                    <p>亚洲美食之都</p>
                    <p>人均￥<span>440</span>/晚</p>
                    <button class="hot-btn showno">立即预约</button>


                </div>
            </li>
        `);
        $(".caption1").find("*").addClass("listshow");

    }else if(index == 2){
        $(".bannerlist").html(`
            <li>
                <img src="img/hot-ban03.png" alt="">
                <div class="caption1 text-center">
                 <h2>伦敦</h2>
                    <p>感受英伦风情</p>
                    <p>人均￥<span>354</span>/晚</p>
                     
                   
                </div>
            </li>
            <li>
                <img src="img/hot-ban01.png" alt="">
                <div class="caption1 text-center">
                      <h2>香港</h2>
                    <p>亚洲美食之都</p>
                    <p>人均￥<span>440</span>/晚</p>
                    <button class="hot-btn">立即预约</button>
                </div>
            </li>
            <li>
                <img src="img/hot-ban02.png" alt="">
                <div class="caption1 text-center">
                <h2>清迈</h2>
                    <p>泰国最文艺小城</p>
                    <p>人均￥<span>154</span>/晚</p>              
                </div>
            </li>
        `);
        $(".caption1").find("*").addClass("listshow");
        index = -1;
    }
});
$(".arrow2").click(function () {
    $(".caption1").find("*").css({
        opacity:1,
        transition:"1s"
    });
    index --;
    if(index == 0){
        $(".bannerlist").html(`
            <li>
                <img src="img/hot-ban01.png" alt="">
                <div class="caption1 text-center">

                    <h2>香港</h2>
                    <p>亚洲美食之都</p>
                    <p>人均￥<span>440</span>/晚</p>
                    <button class="hot-btn showno">立即预约</button>

                </div>
            </li>
            <li>
                <img src="img/hot-ban02.png" alt="">
                <div class="caption1 text-center">
                    <h2>清迈</h2>
                    <p>泰国最文艺小城</p>
                    <p>人均￥<span>154</span>/晚</p>

                    <button class="hot-btn">立即预约</button>
                </div>
            </li>
            <li>
                <img src="img/hot-ban03.png" alt="">
                <div class="caption1 text-center">
                    <h2>伦敦</h2>
                    <p>感受英伦风情</p>
                    <p>人均￥<span>354</span>/晚</p>
                    <button class="hot-btn showno">立即预约</button>

                </div>
            </li>      
        `);
        $(".caption1").find("*").addClass("listshow");
    }else if(index == -1){
        $(".bannerlist").html(`
            <li>
                <img src="img/hot-ban03.png" alt="">
                <div class="caption1 text-center">
                 <h2>伦敦</h2>
                    <p>感受英伦风情</p>
                    <p>人均￥<span>354</span>/晚</p>
                    <button class="hot-btn showno">立即预约</button>
                    
                   
                </div>
            </li>
            <li>
                <img src="img/hot-ban01.png" alt="">
                <div class="caption1 text-center">
                   <h2>香港</h2>
                    <p>亚洲美食之都</p>
                    <p>人均￥<span>440</span>/晚</p>

                    <button class="hot-btn">立即预约</button>
                </div>
            </li>
            <li>
                <img src="img/hot-ban02.png" alt="">
                <div class="caption1 text-center">
                 <h2>清迈</h2>
                    <p>泰国最文艺小城</p>
                    <p>人均￥<span>154</span>/晚</p>
                    <button class="hot-btn showno">立即预约</button>
                </div>
            </li>
        `);
        $(".caption1").find("*").addClass("listshow");

    }else if(index == -2){
        $(".bannerlist").html(`
            <li>
                <img src="img/hot-ban02.png" alt="">
                <div class="caption1 text-center">
                  <h2>清迈</h2>
                    <p>泰国最文艺小城</p>
                    <p>人均￥<span>154</span>/晚</p>  
                    <button class="hot-btn showno">立即预约</button>
                </div>
            </li>
            <li>
                <img src="img/hot-ban03.png" alt="">
                <div class="caption1 text-center">
                 <h2>伦敦</h2>
                    <p>感受英伦风情</p>
                    <p>人均￥<span>354</span>/晚</p>
                    <button class="hot-btn">立即预约</button>
                </div>
            </li>
            <li>
                <img src="img/hot-ban01.png" alt="">
                <div class="caption1 text-center">
                     <h2>香港</h2>
                    <p>亚洲美食之都</p>
                    <p>人均￥<span>440</span>/晚</p>   
                    <button class="hot-btn showno">立即预约</button>
                </div>
            </li>
        `);
        $(".caption1").find("*").addClass("listshow");
        index = 1;
    }
});
/*计数器*/
var flag = true;
$(window).scroll(function () {
    var scrollTop = parseInt($(window).scrollTop());
    var offsetTop = parseInt($(".world").offset().top);
    var offsetTop1 = parseInt($(".hot").offset().top);
    var offsetTop2 = parseInt($(".travelstory").offset().top);
    var offsetTop3 = parseInt($(".totop").offset().top);
    var num = offsetTop - scrollTop;
    var num1 = offsetTop1 - scrollTop;
    var num2 = offsetTop2 - scrollTop;
    var num3 = offsetTop3 - scrollTop;
    console.log(num3);
    if(num3 < 700 ){
        $(".totop").css({
            opacity:1
        })
    }
    /*世界之家*/
    if(flag){
        if(num < 540 ){
            $('.number').each(function(){
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
    /*热门城市*/
    if(num1 < 573){
        $(".hot .hot-text").find("h2").addClass("ex3");
        $(".hot-text").find("p").addClass("desc1");
        $('.hot .ex3').textyleF({
            duration : 500,
            delay : 100,
            easing : 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
            callback : function(){
                $(this).css({
                    color : '#666',
                    transition : '1s',
                });
                $('.hot .desc1').css('opacity',1);
                $(".hot .hot-text").addClass("hot1-text");
            }
        });
    }else {
        $(".hot .hot-text").find("h2").removeClass("ex3");
        $(".hot .hot-text").find("p").removeClass("desc1");
    }
    if(num1 < -173){
        $(".caption1").find("*").addClass("listshow");
    }
    /*精彩故事*/
    if(num2 < 589){
        $(".travelstory .hot-text").find("h2").addClass("ex3");
        $(".travelstory .hot-text").find("p").addClass("desc1");
        $('.travelstory .ex3').textyleF({
            duration : 500,
            delay : 100,
            easing : 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
            callback : function(){
                $(this).css({
                    color : '#666',
                    transition : '1s',
                });
                $('.travelstory .desc1').css('opacity',1);
                $(".travelstory .hot-text").addClass("hot1-text");
            }
        });
    }else {
        $(".travelstory .hot-text").find("h2").removeClass("ex3");
        $(".travelstory .hot-text").find("p").removeClass("desc1");
    }

});
/*banner文字*/
$('.ex1').textyleF();
$('.ex2').textyleF({
    duration : 500,
    delay : 100,
    easing : 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    callback : function(){
        $(this).css({
            color : '#fff',
            transition : '1s',
        });
        $('.desc').css('opacity',1);
    }
});
$(".line").stop().fadeIn(4000).show();

/*热门城市鼠标滑过*/

