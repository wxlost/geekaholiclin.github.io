$(function () {
    nie.config.copyRight.setWhite();
    //var share = null;
    //var shareUrl = $("#share_url").html();
    //var sharePic = $("#share_pic").attr("data-src");
    //var shareTxt = $("#share_desc").html();
    //var shareTitle = $("#share_title").html();
    //nie.define(function () {
    //    var share = nie.require("nie.util.shareV5");
    //    share({
    //        fat: "#NIE-share",
    //        type: 1,
    //        defShow: [23, 22, 2, 1, 4, 3],
    //        title: shareTitle,
    //        //url:shareUrl,
    //        img: sharePic,
    //        content: shareTxt,
    //        product: "��Ʒ��"
    //    });
    //    $('.morebtn').mouseover(function () {
    //        var uld = $('.NIE-share-more').find('ul');
    //        uld.css("top", 8);
    //    });
    //});
    //
    $('a').focus(function(){$(this).blur()});
    var lines = $('.swiper-slide .line');
    var dots = $('.swiper-slide .dot');
    var btns = $('.swiper-slide .btn');
    var leftArr = $('.left-arr');
    var rightArr = $('.right-arr');
    var leftArrOffSet = leftArr.offset().left;
    var rightArrOffSet = rightArr.offset().left;
    //var activeLines = $('.swiper-slide-active .line');
    //var activeDots = $('.swiper-slide-active .dot');
    //var activeBtns = $('.swiper-slide-active .btn');
    var times = 2;

    var showTime = 1100;
    var perTime = 42;
    //var activePre = null;
    var mLastSlideIndex = $('.swiper-slide').size()-1;
    var swiper = new Swiper('.swiper-container', {
        keyboardControl: true,
        //mode: 'horizontal',//ˮƽ
        autoplay:5000,
        autoplayDisableOnInteraction:true,
        mode: 'vertical',
        speed: 900,
        loop:true,
        mousewheelControl: false, // ������
        simulateTouch: false, // ����϶�
        slidesPerView: 1, // �����߶��Զ����򿪣���Ҫ
        resizeReInit: true, // ���ڸı��ʼ��
        //calculateHeight: true, // ����߶�,�򿪣���Ҫ
        watchActiveIndex: true,
        centeredSlides : true,
        tdFlow: {
            shadows:false,
            rotate : 360
        },
        //onFirstInit: function(){
        //
        //    dup.hide();
        //},
        onSlideChangeStart:function(swiper){

            var lines = $('.swiper-slide .line');
            var dots = $('.swiper-slide .dot');
            var btns = $('.swiper-slide .btn');
            //alert('neibu'+swiper.activeLoopIndex);
            dots.removeClass('show');
            btns.removeClass('show');
            lines.animate({width: 'hide'},10);
        },
        onSlideChangeEnd: function(swiper){
                mAnimation();
        } //��������

    });

    //����ִ��
   function mAnimation(){
       //����
       times = 2;
       $('.swiper-slide-active .dot')
           .transition({scale: 0.1},perTime)
           .addClass('show')
           .transition({scale: 0.2},perTime)
           .transition({scale: 0.3},perTime)
           .transition({scale: 0.4},perTime)
           .transition({scale: 0.5},perTime)
           .transition({scale: 0.6},perTime)
           .transition({scale: 0.7},perTime)
           .transition({scale: 0.8},perTime)
           .transition({scale: 0.9},perTime)
           .transition({scale: 1} , perTime)
           .transition({scale: 1.1},perTime)
           .transition({scale: 1.2},perTime)
           .transition({scale: 1.3},perTime)
           .transition({scale: 1.4},perTime)
           .transition({scale: 1.3},perTime)
           .transition({scale: 1.2},perTime)
           .transition({scale: 1.1},perTime)
           .transition({scale: 1}, perTime,function(){
               if(times==2){
                   times=1;
                   $('.swiper-slide-active .line').animate({width: 'show'}, showTime,function(){

                       if(times==1){
                           $('.swiper-slide-active .btn')
                               .transition({scale: 0.1},perTime)
                               .addClass('show')
                               .transition({scale: 0.2},perTime)
                               .transition({scale: 0.3},perTime)
                               .transition({scale: 0.4},perTime)
                               .transition({scale: 0.5},perTime)
                               .transition({scale: 0.6},perTime)
                               .transition({scale: 0.7},perTime)
                               .transition({scale: 0.8},perTime)
                               .transition({scale: 0.9},perTime)
                               .transition({scale: 1} , perTime)
                               .transition({scale: 1.1},perTime)
                               .transition({scale: 1.2},perTime)
                               .transition({scale: 1.3},perTime)
                               //.transition({scale: 1.4},perTime)
                               //.transition({scale: 1.5},perTime)
                               //.transition({scale: 1.4},perTime)
                               //.transition({scale: 1.3},perTime)
                               .transition({scale: 1.2},perTime)
                               .transition({scale: 1.1},perTime)
                               .transition({scale: 1}, perTime)
                               .transition({scale: 0.9},perTime*3)
                               .transition({scale: 1},perTime*3);
                           times=0;
                       }

                   });

               }

           });
   }

    $('.monitor').show(1000);
     var timer = setTimeout( function(){
         mAnimation();
         },500);



    //��ť�л�
    leftArr.mouseover(function(){

        $(this).animate({left: '-=5px'});//���
        swiper.stopAutoplay();
    });
    leftArr.mouseout(function(){
        $(this).animate({left: '+=5px'});
        swiper.startAutoplay();
    });
    leftArr.click(function () {

        var lines = $('.swiper-slide .line');
        var dots = $('.swiper-slide .dot');
        var btns = $('.swiper-slide .btn');
        dots.stop();
        btns.stop();
        lines.stop();//�޸��л����춯���ظ�
        dots.removeClass('show');
        btns.removeClass('show');
        lines.animate({width: 'hide'},10);
        //if(swiper.activeIndex==0){
        //    swiper.swipeTo(mLastSlideIndex,700,true);
        //}
        //else{
        if(swiper.activeLoopIndex==0){

        }
            swiper.swipePrev();
        //}
    });
   rightArr.click(function () {
       var lines = $('.swiper-slide .line');
       var dots = $('.swiper-slide .dot');
       var btns = $('.swiper-slide .btn');//����һ��ʼ��ȡ��ҳ�棬��Ȼ�޷��������ҳ��
       dots.stop();
       btns.stop();
       lines.stop();////�޸��л����춯���ظ�
       dots.removeClass('show');
       btns.removeClass('show');
       lines.animate({width: 'hide'},10);
       //if(swiper.activeIndex==mLastSlideIndex){
       //     swiper.swipeTo(0,700,true);
       //}
       swiper.swipeNext();
       //else{
       //}
    });
    rightArr.mouseover(function(){
        $(this).animate({right: '-=5px'});//���
        swiper.stopAutoplay();
    });
    rightArr.mouseout(function(){
        $(this).animate({right: '+=5px'});
        swiper.startAutoplay();
    });
    var spanImg = $('.down span');
    var downLinks = $('.down a');
    downLinks.mousedown(function(){
       $(this).trigger('mouseout');//ʹ�ô������
    });
    downLinks.mouseup(function(){
        $(this).trigger('mouseover');
    });
    downLinks.mouseover(function(){
       spanImg.addClass('hover');
    });
    downLinks.mouseout(function(){
        spanImg.removeClass('hover');
    });
});