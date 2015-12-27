//加注释
$(function(){
    //使用单例模式
    // //搜索框效果
    var searchBar={
        init: function(argument){
            var me =this;
            me.render(argument);
            me.bind();
        },
        render: function (param) {
            var me=this;
            var btns=document.getElementById(param);
            me.btn=$(btns);
        },
        bind:function(){
            var me=this;
            me.btn.focus(function(){
                $(this).css({
                    'border': '1px solid #38f',
                    'border-right': '0'
                });
            });
            me.btn.blur(function(){
                $(this).css({
                    'border': '1px solid #d8d8d8',
                    'border-right': '0'
                });
            });
        }
    };
    searchBar.init('kw');
//    搜索框效果结束

//    click效果
    var btnClick={
        init: function(arg,arg1,arg2){
            var me =this;
            me.render(arg);
            //me.bind();
            me.bind(arg1,arg2);
        },
        render: function (param) {
            var me=this;
            var btns=document.getElementById(param);
            me.btn=$(btns);
        },
        bind:function(param,param1){
            var me=this;
            var btns=document.getElementsByClassName(param);
            var btns1=document.getElementById(param1);
            $(".s-menu-item").each(function(index) {
                $('.s-menu-item').bind("click", function() {
                    $('.s-menu-item').removeClass('current');
                    $(this).addClass('current');
                    return false;
                });
            });
            me.btn.click(function(){
                $(btns).css('display', 'none');
                $(btns1).css('display', 'block');
            });
        }
    };
    btnClick.init('s_menu_mine','s-content','s_content_100');
    btnClick.init('recommand','s-content','s_content_2');
    btnClick.init('navbar','s-content','s_content_1');
    btnClick.init('video','s-content','s_content_15');
    btnClick.init('shopping','s-content','s_content_5');
//    click效果结束

    //hover效果1 （用户+设置两块效果）
    var btnHover1={
        init: function(argument,arg1,arg2){
            var me =this;
            me.render(argument);
            me.bind(arg1,arg2);
        },
        render: function (param) {
            var me=this;
            var btns=document.getElementById(param);
            me.btn=$(btns);

        },
        bind:function(param,param1){
            var me=this;
            var btn1=document.getElementById(param);
            me.btn.mouseover(function() {
                $(btn1).css("display", "block");
            });
            $(btn1).mouseover(function() {
                var a=document.getElementsByClassName(param1);
                $(a).hover(function() {
                    $(this).css("background", "#38f");
                    $(this).css("color", "#fff");
                }, function() {
                    $(this).css("background", "#fff");
                    $(this).css("color", "#555");
                });
            });
            $(btn1).mouseleave(function() {
                $(btn1).css("display", "none");
            });
        }
    };
    //右上角--用户hover效果
    btnHover1.init('s_username_top','s_user_name_menu','usernamemenua');
    //右上角--设置hover效果
    btnHover1.init('s_usersetting_top','set_menu','setmenua');
//    hover效果1结束

//    hover效果2  更多产品hover效果
    var btnHover2={
        init: function(argument,arg1,arg2,arg3){
            var me =this;
            me.render(argument,arg1,arg2,arg3);
            me.bind();
        },
        render: function (param,param1,param2,param3) {
            var me=this;
            var btns=document.getElementsByClassName(param);
            me.btn=$(btns);
            var btns1=document.getElementsByClassName(param1);
            me.btn1=$(btns1);
            var btns2=document.getElementsByClassName(param2);
            me.btn2=$(btns2);
            var btns3=document.getElementsByClassName(param3);
            me.btn3=$(btns3);

        },
        bind:function(){
            var me=this;
            me.btn.mouseover(function() {
                me.btn2.css('display', 'block');
                me.btn3.css('display', 'block');
            });
            me.btn1.mouseover(function() {
                $(this).css('text-decoration', 'underline');
            });
            me.btn1.mouseleave(function() {
                $(this).css('text-decoration', 'none');
            });
            me.btn3.mouseleave(function() {
                $(this).hide();
            });
        }
    };
    btnHover2.init('s-bri','moreproa','s-bdbriarrow','s-bdbriimg');
// hover效果2结束

    //返回顶部效果 --to-top
    var searchBar={
        init: function(argument){
            var me =this;
            me.render(argument);
            me.bind();
        },
        render: function (param) {
            var me=this;
            me.btn=document.getElementById(param);
            me.timer=null;
            var pageheight = $(window).height(); //获得当前窗体的高度
            me.pageh = pageheight / 10;
        },
        bind:function(){
            var me=this;
            $(window).scroll(function () {
                var top = $(window).scrollTop();
                if (top >= me.pageh) {
                    me.btn.style.display = "block";
                } else {
                    me.btn.style.display = "none";
                }
            });
            me.btn.onclick = function() {
                me.timer = setInterval(function() {
                    var top = document.documentElement.scrollTop | document.body.scrollTop;
                    var speedtop = top / 5;
                    document.documentElement.scrollTop = top - speedtop;
                    document.body.scrollTop = top - speedtop;
                    if (top == 0) {
                        clearInterval(me.timer);
                    }
                }, 30)
                //30ms执行一次
            }
        }
    };
    searchBar.init('to_top');
    //返回顶部 结束

    //简单工厂模式
    var factory={};
    //屏幕向下滚动时，搜索框的效果
    factory.searchScroll=function() {
        $(window).scroll(function () {
            var height = $(window).scrollTop(); //获得当前滚动条滚动的距离
            var winheight = $(window).height(); //获得当前窗体的高度
            var winwidth = $(window).width(); //当前窗体的宽度
            var widths = $(document).width(); //文档宽度，当widths大于1000的时候页面格局变化，小于1000的时候不变
            var wheight = winheight / 5;
            var wheight2 = winheight / 3;
            if (height > wheight) {
                $('#s_top_wrap').addClass('s-down');
                $('#head_wrapper').addClass('s-down');
                $('#s_wrap').addClass('s-down').css('padding-top', '294px');
            } else {
                $('#s_top_wrap').removeClass('s-down');
                $('#head_wrapper').removeClass('s-down');
                $('#s_wrap').removeClass('s-down').css('padding-top', '0');
            }
        });
    }

    //屏幕滚动时，推荐下右侧部分内容效果
    factory.rightBarScroll=function(){
        $(window).scroll(function () {
            var height = $(window).scrollTop(); //获得当前滚动条滚动的距离
            var winheight = $(window).height(); //获得当前窗体的高度
            var winwidth = $(window).width(); //当前窗体的宽度
            var widths = $(document).width(); //文档宽度，当widths大于1000的时候页面格局变化，小于1000的时候不变
            var wheight2 = winheight / 3;
            var rankwid = (winwidth - 895) / 2 + 5;
            var randkids = winwidth - 1000 + 53.5;
            //推荐右侧固定栏
            if (height > wheight2) {
                if (widths > 1000) {
                    $('.s-news-rank-wrapper').css({
                        'position': 'fixed',
                        'top': '89px',
                        'right': rankwid
                    });
                } else {
                    $('.s-news-rank-wrapper').css({
                        'position': 'fixed',
                        'top': '89px',
                        'right': randkids
                    });
                }

            } else {
                $('.s-news-rank-wrapper').css({
                    'position': 'absolute',
                    'top': '0',
                    'right': '5px'
                });
            }
        });
    }

    //屏幕滚动时，音乐台效果
    factory.musicBarScroll=function(){
        $(window).scroll(function () {
            var height = $(window).scrollTop(); //获得当前滚动条滚动的距离
            var winheight = $(window).height(); //获得当前窗体的高度
            var winwidth = $(window).width(); //当前窗体的宽度
            var widths = $(document).width(); //文档宽度，当widths大于1000的时候页面格局变化，小于1000的时候不变
            var musicheight = winheight * 0.8;
            var musicwidth = (winwidth - 895) / 2 - 22;
            console.log(winwidth + '----' + musicwidth);
            if (height > musicheight) {
                //当屏幕宽度大于1000px时，left=（屏宽-1000）/2-22;22px为音乐台图标的宽度。
                if (widths > 1000) {
                    $('#s_mancard_newmusic').css({
                        'top': musicheight,
                        'left': musicwidth
                    });
                } else {
                    $('#s_mancard_newmusic').css({
                        'top': musicheight,
                        'left': '30.5px'
                    });
                }
            } else {
                $('#s_mancard_newmusic').css({
                    'top': musicheight,
                    'left': musicwidth
                });
            }
        });
    }

    factory.scroll=function(param){
        return new factory[param]();
    }
    var me=factory.scroll('searchScroll');
    var me1=factory.scroll('rightBarScroll');
    var me1=factory.scroll('musicBarScroll');

});
