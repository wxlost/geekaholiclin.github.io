$(function () {
    nie.config.copyRight.setWhite();
    var share = null;
    var shareUrl = $("#share_url").html();
    var sharePic = $("#share_pic").attr("data-src");
    var shareTxt = $("#share_desc").html();
    var shareTitle = $("#share_title").html();
    nie.define(function () {
        var share = nie.require("nie.util.shareV5");
        share({
            fat: "#NIE-share",
            type: 6,
            defShow: [23, 22, 2, 1, 4, 3],
            title: shareTitle,
            //url:shareUrl,
            img: sharePic,
            content: shareTxt,
            product: "��Ʒ��"
        });
        $('.morebtn').mouseover(function () {
            var uld = $('.NIE-share-more').find('ul');
            uld.css("top",-51);
            uld.css("left",-22);
        });

        $('#player').click(function () {
            var d_width = 780,
                d_height = 540;
            $('#video-mask').show();
            $('#video-wrap').width(d_width)
                .height(d_height)
                .css('margin', '-' + d_height / 2 + 'px 0 0 -' + d_width / 2 + 'px')
                .fadeIn(200);
            nie.use(["nie.util.videoV2"], function () {
                video = nie.util.video({
                    fat: "#video",//����Ƶ������
                    width: d_width + '',//��Ƶ��� 720
                    height: d_height + '',//��Ƶ�߶�
                    //wmode:"direct",//flash wmodeֵ,Ĭ��direct
                    movieUrl: 'http://v.wh.netease.com/2015/1012/abfa234ef258503563fd394dbc596271qt.mp4',//������Ƶ��ַ
                    HDmovieUrl: "",//������Ƶ��ַ
                    SHDmovieUrl: "",//������Ƶ��ַ
                    vtype: "",//Ĭ��ѡ�����������ȣ��ֱ���d,hd,shd��Ĭ�ϲ���������У������Ȼ���Զ�ƥ��
                    autoPlay: true//�Ƿ��Զ����ţ�Ĭ��false
                });
            });
        });


    });



    $('a').focus(function () {
        $(this).blur()
    });
    //��ť����
    var $area = $("#links").find("area");
    var $mapBtn = $("#mapbtn");
    var $tc = $('#pop').find('li');
    var _index = -1;
    $area.mouseover(function(){
        var index = $(this).index();
        $mapBtn.find(".btn").eq(index).addClass("selected");
    });
    $area.mouseout(function(){
        $mapBtn.find(".btn").removeClass("selected");
    });
    //�رհ�ť
    $('.close').click(function(){
        $('#video-wrap').hide();
        $('#pop-wrap').hide();
        //$('#pop').hide();
        $tc.hide();
        $('#video-mask').hide();
        $('#video').empty();
    });

    //�������Ҽ�ͷ
    $area.click(function(){
       _index = $(this).index();
        $('#video-mask').show();
        $('#pop-wrap').show();
        $('#pop').find('li').eq(_index).show();
    });
    var $leftArr = $('.left-arr');
    var $rightArr = $('.right-arr');
    var PIX = '10px';
    $leftArr.mouseover(function(){
        $(this).animate({
            'left':'-='+PIX
        });
    });
    $leftArr.mouseout(function(){
       $(this).animate({
          'left':'+='+PIX
       });
    });
    $rightArr.mouseover(function(){
        $(this).animate({
           'right':'-='+PIX
        });
    });
    $rightArr.mouseout(function(){
       $(this).animate({
          'right':'+='+PIX
       });
    });

    //�����л�

    var tcLength= $tc.length;
    $leftArr.click(function(){
        var left =((_index-1)<0?tcLength-1:_index-1)%tcLength;
        $tc.hide();
        $tc.eq(left).show();
        _index = left;
    });
    $rightArr.click(function(){
        var right = (_index+1)%tcLength;
        $tc.hide();
        $tc.eq(right).show();
        _index = right;
    });

    $(".content-wrap").niceScroll({

        cursorcolor:"#B47B5B",
        cursorwidth: "15px",
        scrollspeed: 50,
        cursorborderradius:"0",
        background:"#D5AA96"
        //autohidemode: false//always shows
    });
});
