var flag_tab = true;
var phoneType = 0;
var Page = (function () {
    //���ܣ� �ֻ�������֤
    function checkPhoneNum(phoneNum) {
        return /^(13|14|15|17|18)\d{9}$/.test(phoneNum) ? !0 : !1
    }

    var fn = {
        setCopyrightColor: function (color) {
            if (color == 'black') {
                nie.config.copyRight.setNormal();
            } else {
                nie.config.copyRight.setWhite();
            }
        },

        setShare: function () {
            var share = null;
            var $mapArea = $('#map').find('area');
            var $btnArea = $('#btn-area');
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
                $('.morebtn').mouseover(function(){
                    var uld = $('.NIE-share-more').find('ul');
                    uld.css("top",-51);
                    uld.css("left",-22);
                });
            });
        },

        setDown: function () {
            nie.define("download", function () {
                var niedownload = nie.require("nie.util.niedownload");

                NieDownload.create({//��׿���ؿ��ţ�IOS����δ���ţ���IOS���ذ�ť�ϰ󶨵���¼�disableClick
                    wrapper: $("#nie-download"),
                    enableAndroid: true,
                    enableIos: true,
                    disableClick: function () {
                        alert("App Store��δ���ţ������ڴ�");
                    }
                });
            })
        } ,

        setVideoPlayer: function (opt) { //������Ƶ
           var movieUrl = opt.url;
            nie.define(function () {
                nie.use(["nie.util.videoV2"], function () {
                    video = nie.util.video({
                        fat: "#videoBox",//����Ƶ������
                        width: 620 + '',//��Ƶ��� 720
                        height: 350 + '',//��Ƶ�߶�
                        //wmode:"direct",//flash wmodeֵ,Ĭ��direct
                        movieUrl: movieUrl,//������Ƶ��ַ
                        HDmovieUrl: "",//������Ƶ��ַ
                        SHDmovieUrl: "",//������Ƶ��ַ
                        vtype: "",//Ĭ��ѡ�����������ȣ��ֱ���d,hd,shd��Ĭ�ϲ���������У������Ȼ���Զ�ƥ��
                        autoPlay: true//�Ƿ��Զ����ţ�Ĭ��false

                    });
                });
            });
            //nie.use(['nie.util.video', 'util.swfobject'], function () {
            //    nie.util.video($('#videoBox'), {
            //        movieUrl: opt.url,
            //        mp4_movieUrl: opt.url.replace(/\.(flv|f4v)/, '.mp4'),
            //        width: 620,
            //        height: 350,
            //        bufferTime: 5,
            //        loopTimes: 0,
            //        wmode: 'opaque',
            //        volume: 0.3,
            //        startImg: opt.img,
            //        autoPlay: true
            //    });
            //});

        },

        setVideoDialog: function (ele) {
            var btn = $(ele);
            btn.on('click', function () {
                var _thisObj = $(this);
                fn.setVideoPlayer({
                    url: _thisObj.data('f4v'),
                    img: _thisObj.data('img')
                });
                fn.popWindow('dialog-video');
            });
        },

        popWindow: function (popID) { //�򿪵���
            $('.dialog').fadeOut().removeClass('curr');
            var obj = $("#" + popID);
            var width = obj.width();
            var height = obj.height();
            var popTop = obj.height() / 2;
            var popLeft = obj.width() / 2;
            obj.css({"margin-top": -popTop, "margin-left": -popLeft}).fadeIn();
            //if ($("#fade").length < 1) $('body').append('<div id="fade"></div>');
            $('#fade').fadeIn();
        },

        popClose: function (popID) { //�رյ���
            $('#fade ,.dialog ,#' + popID).fadeOut();
            $('.dialog input').val('');
            $('#videoBox').empty();
        },

        setEvent: function () {

            // ��Ϸ��ɫ
            var $tabImg = $('.about');
            var end =  $tabImg.find('li').length-1;
            var interval = setTimeout(intervalFn,2500);
            var index = 0;
            $('.about li').bind('mouseenter', function(){
                index = $(this).index();
                function slide(){
                    var currLi = $('.about li').eq(index),
                        animateSpeed = 300;
                    currLi.animate({'width':'730px'},animateSpeed).find('a').fadeOut(animateSpeed);
                    currLi.siblings().animate({'width':'143px'},animateSpeed).find('a').fadeIn(animateSpeed);
                }
                slide();
            });

            //�Զ�����


            function intervalFn(){
                if(index>end){
                    index = 0;
                }
                $tabImg.find('li').eq(index).trigger("mouseenter");
                index++;
                interval = setTimeout(intervalFn,2500);
                //console.log(indexSlide);
            }


            $tabImg.bind("mouseover",function(){
                clearTimeout(interval);
            });
            $tabImg.bind("mouseout",function(){
                interval = setTimeout(intervalFn,1500);
            });
            /*ԤԼ�����¼�����*/
            $("#yue").on("click", function () {
                $("#dialog-app").show();
                //if ($("#fade").length < 1) $('body').append('<div id="fade"></div>');
                $('#fade').fadeIn();
            });


            $("#dialog-app").find(".dialog-close").on("click", function () {
                $(".dialog").hide();
                $("#fade").fadeOut();
            });

            // ����л�ԤԼϵͳ
            $(".chotype").on("click", function () {
                var pid = $(this).attr("pid");
                if (pid == 0) {
                    phoneType = 0;
                    $(this).children(".btn").addClass("ios_hov");
                    $(this).siblings().children(".btn").removeClass("android_hov");
                } else if (pid == 1) {
                    phoneType = 1;
                    $(this).children(".btn").addClass("android_hov");
                    $(this).siblings().children(".btn").removeClass("ios_hov");
                }
                $(this).siblings().children(".ptype").removeClass("p2");
                $(this).children(".ptype").addClass("p2");
                $(this).siblings().children(".ff").removeClass("ffy");
                $(this).children(".ff").addClass("ffy");

            });

            var urlindex = "http://dora.webcgi.163.com/api/85_283_2016_07_07/appoint?";
            $("#YuYue_Btn").click(function () {
                var phone = $("#phone").val();
                var type = "ios";
                if (phoneType == 0) {
                    type = "ios";
                } else if (phoneType == 1) {
                    type = "android";
                }

                if (phone === "") {
                    alert("�������ֻ�����");
                } else if (!checkPhoneNum(phone)) {
                    alert('��������ֻ���������');
                } else {
                    $.ajax({
                        type: 'GET',
                        url: urlindex + 'mobile=' + phone + '&os=' + type,
                        dataType: 'jsonp',
                        success: function (res) {
                            if (res.status == false) {
                                /*alert(res.msg);*/
                                $(".error .val").html(res.msg);
                                $("#dialog-app").hide();
                                $("#dialog-result").show();
                                $("#dialog-result .error").show();
                            } else if (res.status == 103) {
                                /*alert('������ʽ����ȷ');*/
                                $(".error .val").html("������ʽ����ȷ");
                                $("#dialog-app").hide();
                                $("#dialog-result").show();
                                $("#dialog-result").find(".error").show();
                            } else if (res.status == 201) {
                                /*alert("�Ѿ�ԤԼ�������ظ�ԤԼ");*/
                                $(".error .val").html("�Ѿ�ԤԼ�������ظ�ԤԼ");
                                $("#dialog-app").hide();
                                $("#dialog-result").show();
                                $("#dialog-result").find(".error").show();
                            } else {
                                /*alert('ԤԼ�ɹ���');*/
                                $("#dialog-app").hide();
                                $("#dialog-result").show();
                                $("#dialog-result").find(".success").show();
                                $("#phone").val("");
                            }
                        }
                    });
                }
            });
            $("#dialog-result").find(".dialog-close").on("click", function () {
                $(".dialog").hide();
                $("#fade").fadeOut();
                $("#dialog-result .success,#dialog-result .error").hide();
            });

            //��������

            $(".gc").on("click", "li",function (e) {
                var index = $(this).index();
                //if ($("#fade").length < 1) $('body').append('<div id="fade"></div>');
                $('#fade').fadeIn();
                $("#dialog-prize").show();
                $("#pop").find('li').eq(index).addClass('active');

            });
            $("#dialog-prize").find(".dialog-close").on("click", function () {
                $(".dialog").hide();
                $("#fade").fadeOut();
                $('#pop').find('li').removeClass('active');
            });
            $(".content-txt").niceScroll({
                cursorcolor:"#C1903E",
                cursorwidth: "5px",
                scrollspeed: 50
            });

        }
    };
    init = function () {
        fn.setShare();
        fn.setCopyrightColor("white");
        fn.setDown();
        fn.setVideoDialog('.videoBtn');
        fn.setEvent();
    };
    return {
        fn: fn,
        init: init
    }
})();

$(function () {
    Page.init();
});
