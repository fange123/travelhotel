$(".contact .one").addClass("h3slider");
$(".contact h2").addClass("h2slider");
$(".contact p").addClass("pslider");


$(".thumb-list img").click(function(){
    var src = $(this).attr("src");
    var large = $(this).data("large");
    $("#zoomblock>img").attr("src",src);
    $("#zoomblock .he-zoom>img").attr("src",large);
});
$(window).scroll(function () {
    var scrollTop = parseInt($(window).scrollTop());
    var offsetTop = parseInt($(".touch").offset().top);
    var offsetTop1 = parseInt($(".map").offset().top);
    var num = offsetTop - scrollTop;
    var num1 = offsetTop1 - scrollTop;
    console.log(num1);
    /*touch*/
    if(num < 573){
        $(".hot-text").find("h2").addClass("ex3");
        $(".hot-text").find("p").addClass("desc1");
        $('.ex3').textyleF({
            duration : 500,
            delay : 100,
            easing : 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
            callback : function(){
                $(this).css({
                    color : '#666',
                    transition : '1s',
                });
                $('.desc1').css('opacity',1);
                $(".hot-text").addClass("hot1-text");
            }
        });
    }else {
        $(".hot .hot-text").find("h2").removeClass("ex3");
        $(".hot .hot-text").find("p").removeClass("desc1");
    }
    if(num < 3){
        $(".text1").find("h2").addClass("ex3");
        $(".text1").find("p").addClass("desc1");
        $('.ex3').textyleF({
            duration : 500,
            delay : 100,
            easing : 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
            callback : function(){
                $(this).css({
                    color : '#666',
                    transition : '1s',
                });
                $('.desc1').css('opacity',1);
                $(".text1").addClass("hot1-text");
            }
        });
    }else {
        $(".text1").find("h2").removeClass("ex3");
        $(".text1").find("p").removeClass("desc1");
    }
    if(num1 < 490){
        $(".map").css({
            opacity:1,
            transition:"1s"
        })
    }
});
/*map*/
// 百度地图API功能
var map = new BMap.Map("allmap");    // 创建Map实例
map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
//添加地图类型控件
map.addControl(new BMap.MapTypeControl({
    mapTypes:[
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP
    ]}));
map.setCurrentCity("长春");          // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放