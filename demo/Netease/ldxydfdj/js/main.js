$(function () {
    //�ۿ���Ƶ��ַ
    var gkspVideoUrl = 'http://v.ldxy.netease.com/2016/0411/32062331118f28ab45fad1f48d29561cqt.mp4';
    //�����Ƶ��ַ--���ϵ��£�������
    var smallVideosUrls = [
        [
            'http://v.ldxy.netease.com/2016/0411/32062331118f28ab45fad1f48d29561cqt.mp4',//����Ƶ
            '12',
            'http://v.wh.netease.com/2015/1012/abfa234ef258503563fd394dbc596271qt.mp4',
            '14',
            '15'
        ],//��1ҳС��Ƶ
        [
            'http://v.wh.netease.com/2015/1012/abfa234ef258503563fd394dbc596271qt.mp4',
            '22',
            '23', '24', '25', '26', '27', '28', '29', '210'
        ],//��2ҳС��Ƶ
        [
            'http://v.ldxy.netease.com/2016/0411/32062331118f28ab45fad1f48d29561cqt.mp4',
            '32', '33', '34', '35', '36', '37', '38', '39', '310'
        ],//��3ҳС��Ƶ
        [
            'http://v.wh.netease.com/2015/1012/abfa234ef258503563fd394dbc596271qt.mp4',
            '42', '43', '44', '45', '46', '47', '48', '49', '410'
        ]//��4ҳС��Ƶ
    ];
    //��ǿ�Ծ���Ƶ��ַ-�����ң����ϵ���
    var fightVideo = [
        'http://v.ldxy.netease.com/2016/0411/32062331118f28ab45fad1f48d29561cqt.mp4', //1
        'http://v.ldxy.netease.com/2016/0411/32062331118f28ab45fad1f48d29561cqt.mp4', //2
        'http://v.ldxy.netease.com/2016/0411/32062331118f28ab45fad1f48d29561cqt.mp4', //3
        'http://v.ldxy.netease.com/2016/0411/32062331118f28ab45fad1f48d29561cqt.mp4', //4
        'http://v.ldxy.netease.com/2016/0411/32062331118f28ab45fad1f48d29561cqt.mp4', //5
        'http://v.ldxy.netease.com/2016/0411/32062331118f28ab45fad1f48d29561cqt.mp4', //6
        'http://v.ldxy.netease.com/2016/0411/32062331118f28ab45fad1f48d29561cqt.mp4', //7
        'http://v.ldxy.netease.com/2016/0411/32062331118f28ab45fad1f48d29561cqt.mp4' //8
    ];
    var pages = $('.page');
    var pageTxt = $('.pagebtn span');
    var pageTotalNum = pages.length;
    var activePageNum = 1;//��ʼ��
    var leftArr = $('.left-arr');
    var rightArr = $('.right-arr');
    var videoArea = $('#video-area');
    nie.config.copyRight.setWhite();
    var share = null;
    var shareUrl = $("#share_url").html();
    var sharePic = $("#share_pic").attr("data-src");
    var shareTxt = $("#share_desc").html();
    var shareTitle = $("#share_title").html();
    var video = null;
    nie.define(function () {
        var share = nie.require("nie.util.shareV5");
        share({
            fat: "#NIE-share",
            type: 1,
            defShow: [23, 22, 2, 1, 4, 3],
            title: shareTitle,
            //url:shareUrl,
            img: sharePic,
            content: shareTxt,
            product: "��Ʒ��"
        });
        $('.morebtn').mouseover(function () {
            var uld = $('.NIE-share-more').find('ul');
            uld.css("top", 8);
        });
        //var videoModule = nie.require("nie.util.videoV2");
        //
        //video = videoModule({
        //    fat : "#video",//����Ƶ������
        //    width:"720",//��Ƶ���
        //    height:"406",//��Ƶ�߶�
        //    //wmode:"direct",//flash wmodeֵ,Ĭ��direct
        //    movieUrl:'',//������Ƶ��ַ
        //    HDmovieUrl : "",//������Ƶ��ַ
        //    SHDmovieUrl : "",//������Ƶ��ַ
        //    vtype : ""//Ĭ��ѡ�����������ȣ��ֱ���d,hd,shd��Ĭ�ϲ���������У������Ȼ���Զ�ƥ��
        //    //autoPlay:false,//�Ƿ��Զ����ţ�Ĭ��false
        //    //startImg:null,//��ʼͼƬ��ַ��Ĭ��false
        //    //loopTimes:0,//ѭ�����Ŵ�����Ĭ��0
        //    //maskImg:null,//����flash��������ͼƬ��ַ��Ĭ��null
        //    //bufferTime:5//����ʱ�䣨�룩,Ĭ��5
        //});
    });

    $('a').focus(function () {
        $(this).blur()
    });
    function setPageNum(activePageNum, pageTotalNum) {
        var result = activePageNum + '/' + pageTotalNum;
        pageTxt.html(result);
    }

    setPageNum(activePageNum, pageTotalNum);

    leftArr.hide();
    rightArr.click(function () {
        pages.removeClass('active');
        activePageNum++;
        pages.eq(activePageNum - 1).addClass('active');
        setPageNum(activePageNum, pageTotalNum);
        if (activePageNum == pageTotalNum) {
            $(this).hide();
        }
        if (leftArr.is(':hidden')) {
            leftArr.show();
        }

    });

    leftArr.click(function () {
        pages.removeClass('active');
        activePageNum--;
        pages.eq(activePageNum - 1).addClass('active');
        setPageNum(activePageNum, pageTotalNum);
        if (activePageNum == 1) {
            $(this).hide();
        }
        if (rightArr.is(':hidden')) {
            rightArr.show();
        }
    });

    //��Ƶ����
    function playVideo(videoUrl, playBox, myHeight, myWidth) {
        //console.log(videoUrl);
        var videoModule = nie.require("nie.util.videoV2");

        video = videoModule({
            fat: playBox,//����Ƶ������
            width: myWidth + '',//��Ƶ���
            height: myHeight + '',//��Ƶ�߶�
            //wmode:"direct",//flash wmodeֵ,Ĭ��direct
            movieUrl: videoUrl,//������Ƶ��ַ
            HDmovieUrl: "",//������Ƶ��ַ
            SHDmovieUrl: "",//������Ƶ��ַ
            vtype: "",//Ĭ��ѡ�����������ȣ��ֱ���d,hd,shd��Ĭ�ϲ���������У������Ȼ���Զ�ƥ��
            autoPlay: true//�Ƿ��Զ����ţ�Ĭ��false
            //startImg:null,//��ʼͼƬ��ַ��Ĭ��false
            //loopTimes:0,//ѭ�����Ŵ�����Ĭ��0
            //maskImg:null,//����flash��������ͼƬ��ַ��Ĭ��null
            //bufferTime:5//����ʱ�䣨�룩,Ĭ��5
        });
        if (playBox === '#bigvideo-box') {
            $('#bigvideo-box').fadeIn();
        } else {
            $('#bigvideo-box').fadeOut().empty();
            $('#video-mask').fadeIn();
            $('#video-wrap').fadeIn();
            showInCenter();
        }
    }

    videoArea.on('click', '.videobtn', function (event) {
        var targetVideo = event.target.parentNode;
        var parentSelector = $(targetVideo);
        var videoIndex = parentSelector.index();
        var videoUrl = smallVideosUrls[activePageNum - 1][videoIndex];
        var videoBox = null;
        var myHeight = 373;
        var myWidth = 662;
        if (parentSelector.is('.bigvideo')) {
            videoBox = '#bigvideo-box';
        } else {
            videoBox = '#video';
            myHeight = 406;
            myWidth = 720;
        }
        playVideo(videoUrl, videoBox, myHeight, myWidth);
    });
    $('.jcspbtn-wrap').on('click', '.jcsp', function (e) {
        var jcspIndex = $(e.target).index();
        //console.log(fightVideo[jcspIndex]);
        var videoUrl = fightVideo[jcspIndex];
        playVideo(videoUrl, '#video', '406', '720');
    });
    $('.gksp').click(function () {
        playVideo(gkspVideoUrl, '#video', '406', '720');
    });
    var bigVideoBtn = $('.bigvideo .videobtn');
    bigVideoBtn.mouseover(function () {
        $('.circle').addClass('white');
    });
    bigVideoBtn.mouseout(function () {
        $('.circle').removeClass('white');
    });

    /*albumm ����ͼ��*/
    var swiper = new Swiper('.swiper-container', {

        mode: 'horizontal',
        speed: 800,
        //loop:true,
        //autoplay:30000,
        //mousewheelControl: true, // ������
        simulateTouch: false, // ����϶�
        slidesPerView: 1, // �����߶��Զ����򿪣���Ҫ
        resizeReInit: true, // ���ڸı��ʼ��
        calculateHeight: true, // ����߶�,�򿪣���Ҫ
        pagination: '.swiper-pagination',
        paginationClickable: true,
        createPagination: true,
        watchActiveIndex: true
        //onSlideChangeEnd : function(swiper){
        //
        //
        //}//��������
    });
    //����
    function showInCenter() {
        var e = $('#video-wrap');
        var bigHeight = $(window).outerHeight();
        var bigWidth = $(window).outerWidth();
        var tcHeight = e.outerHeight();
        var tcWidth = e.outerWidth();
        var halfHeightSpace = (bigHeight - tcHeight) / 2;
        var halfWidthSpace = (bigWidth - tcWidth) / 2;
        e.css("top", halfHeightSpace);
        e.css("left", halfWidthSpace);
    }

    showInCenter();
    $(window).resize(function () {
        showInCenter();
    });
    $('.video-cancel').click(function () {
        $('#video-mask').fadeOut();
        $('#video-wrap').fadeOut();
        $('#video').empty();
    });
});
