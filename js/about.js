$(".about").delay(100).addClass("about1");
$(".aboutbtn").addClass("aboutbtn1");
var flag = true;
var flag1 = true;
$(window).scroll(function () {
    var scrollTop = parseInt($(window).scrollTop());
    var offsetTop = parseInt($(".mtop").offset().top);
    var offsetTop1 = parseInt($(".whotop").offset().top);
    var num = offsetTop - scrollTop;
    var num1 = offsetTop1 - scrollTop;
    if(num1 < 1100){
        $(".img1").addClass("img1slider");

    }
    if(num < 900){
        $(".img2").addClass("img2slider");
    }
    if(num1 < 995){

        if(flag1){
            $(".whotop .words3").lbyl({
                content: "我们是谁？",
                speed: 200,
                type: 'show',
                finished: function(){
                    $('.whotop .words4').lbyl({
                        content:"弥尔酒店是以丰富历史文化底蕴和卓越服务著称的弥尔酒店，于2004年荣膺泉州市首家五星级酒店。酒店位于中国历史文化名城泉州的核心商业区，地理位置优越，“时尚购物，近在咫尺”。",
                        speed: 20,
                        type: 'fade',
                        fadeSpeed: 500
                    })
                }
            });
            $(".whotop .show2").css({
                opacity:1,
                transition:"2s"
            });
            flag1 = false;
        }
    }
    if(num < 550){
        if(flag){
            $(".words3").lbyl({
                content: "我们能做什么？",
                speed: 200,
                type: 'show',
                finished: function(){
                    $('.words4').lbyl({
                        content:"酒店拥有高端大气的会议室和多功能厅，按功能需 求设计和精心装修后焕然一新， 可根据各类会议规模供 您选择。大会议室配备大型LED显示屏，面积约500平 方米，可容纳350人会议及用餐;多功能会议厅面积约 300平方米，可容纳150人会议及用餐。",
                        speed: 20,
                        type: 'fade',
                        fadeSpeed: 500
                    })
                }
            });
            $(".show2").css({
                opacity:1,
                transition:"2s"
            });
            flag = false;
        }


    }
    if(num < 400){
        $(".oneimg").addClass("oneimgslider");
        $(".twoimg").addClass("twoimgslider");
    }
});
/*banner文字效果*/
var log = function (msg) {

        return function () {

            if (console) console.log(msg);

        }

    }
    $('code').each(function () {

        var $this = $(this);

        $this.text($this.html());

    })
    var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
    var $form = $('.playground form')
        , $viewport = $('.playground .viewport');
    var getFormData = function () {
        var data = {
            loop: true,
            in: { callback: log('in callback called.') },
            out: { callback: log('out callback called.') }
        };
        $form.find('[data-key="effect"]').each(function () {
            var $this = $(this)
                , key = $this.data('key')
                , type = $this.data('type');
            data[type][key] = $this.val();
        });
        $form.find('[data-key="type"]').each(function () {
            var $this = $(this)
                , key = $this.data('key')
                , type = $this.data('type')
                , val = $this.val();
            data[type].shuffle = (val === 'shuffle');
            data[type].reverse = (val === 'reverse');
            data[type].sync = (val === 'sync');
        });
        return data;
    };
    $.each(animateClasses.split(' '), function (i, value) {
        var type = '[data-type]'
            , option = '<option value="' + value + '">' + value + '</option>';
        if (/Out/.test(value) || value === 'hinge') {
            type = '[data-type="out"]';
        } else if (/In/.test(value)) {
            type = '[data-type="in"]';
        }
        if (type) {
            $form.find('[data-key="effect"]' + type).append(option);
        }
    });
    $form.find('[data-key="effect"][data-type="in"]').val('fadeInLeftBig');
    $form.find('[data-key="effect"][data-type="out"]').val('hinge');
    $('.jumbotron h1')
        .fitText(0.5)
        .textillate({ initialDelay: 800,in: { effect: 'flipInY' }});
    $('.jumbotron p')
        .fitText(3.2, { maxFontSize: 18 })
        .textillate({ initialDelay: 1000, in: { delay: 100, shuffle: true } });




