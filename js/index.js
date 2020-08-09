(function() {
    [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
        new SelectFx(el);
    } );
})();
/*计数器*/
var flag = true;
$(window).scroll(function () {
    var scrollTop = parseInt($(window).scrollTop());
    var offsetTop = parseInt($(".world").offset().top);
    var num = offsetTop - scrollTop;
    // console.log(num);
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

                </div>
            </li>      
        `);
    }else if(index == 1){
        $(".bannerlist").html(`
            <li>
                <img src="img/hot-ban02.png" alt="">
                <div class="caption1 text-center">
                     <h2>清迈</h2>
                    <p>泰国最文艺小城</p>
                    <p>人均￥<span>154</span>/晚</p>
                   
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


                </div>
            </li>
        `);

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
        index = -1;
    }
});

$(".arrow2").click(function () {
    index --;
    if(index == 0){
        $(".bannerlist").html(`
            <li>
                <img src="img/hot-ban01.png" alt="">
                <div class="caption1 text-center">

                    <h2>香港</h2>
                    <p>亚洲美食之都</p>
                    <p>人均￥<span>440</span>/晚</p>

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

                </div>
            </li>      
        `);
    }else if(index == -1){
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

    }else if(index == -2){
        $(".bannerlist").html(`
            <li>
                <img src="img/hot-ban02.png" alt="">
                <div class="caption1 text-center">
                  <h2>清迈</h2>
                    <p>泰国最文艺小城</p>
                    <p>人均￥<span>154</span>/晚</p>  
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
                </div>
            </li>
        `);
        index = 1;
    }
});
