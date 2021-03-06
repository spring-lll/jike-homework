//目前存在问题：右侧固定必须滑动滚动条才会判断
$(document).ready(function() {
	//搜索框效果
	$("#kw").focus(function() {
		$(this).css({
			'border': '1px solid #38f',
			'border-right': '0'
		});
	});
	$("#kw").blur(function() {
		$(this).css({
			'border': '1px solid #d8d8d8',
			'border-right': '0'
		});
	});

	//向下滚动屏幕时，搜索部分和推荐下的右侧内容部分的效果实现
	$(window).scroll(function() {
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
		//音乐台部分
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

	//用户名hover显示下拉内容
	$("#s_username_top").mouseover(function() {
		$("#s_user_name_menu").css("display", "block");
	});
	$("#s_user_name_menu").mouseover(function() {
		$("#s_user_name_menu a").hover(function() {
			$(this).css("background", "#38f");
			$(this).css("color", "#fff");
		}, function() {
			$(this).css("background", "#fff");
			$(this).css("color", "#555");
		});
	});
	$("#s_user_name_menu").mouseleave(function() {
		$("#s_user_name_menu").css("display", "none");
	});
	
	//-----设置hover效果-----
	$(".s-user-setting-top").mouseover(function() {
		$(".bdpfmenu").css("display", "block");
	});
	$(".bdpfmenu").mouseover(function() {
		$(".bdpfmenu a").hover(function() {
			$(this).css("background", "#38f");
			$(this).css("color", "#fff");
		}, function() {
			$(this).css("background", "#fff");
			$(this).css("color", "#555");
		});
	});
	$(".bdpfmenu").mouseleave(function() {
		$(".bdpfmenu").css("display", "none");
	});
	
	//更多产品hover效果
	$("#u_sp .s-bri").mouseover(function() {
		$('.s-bdbriarrow').css('display', 'block');
		$('.s-bdbriimg').css('display', 'block');
	});
	$(".s-bdbriimg a").mouseover(function() {
		$(this).css('text-decoration', 'underline');
	});
	$(".s-bdbriimg a").mouseleave(function() {
		$(this).css('text-decoration', 'none');
	});
	$(".s-bdbriimg").mouseleave(function() {
		$(this).hide();
	});
	
});

//内容部分导航切换
$(".s-menu-item").each(function(index) {
	$('.s-menu-item').live("click", function() {
		$('.s-menu-item').removeClass('current');
		$(this).eq(index).addClass('current');
		return false;
	});
});
$(function() {
	$('#s_menu_mine').click(function() {
		$('.s-content').css('display', 'none');
		$('#s_content_100').css('display', 'block');
	});
	$('#s_menus_wrapper span:first-child').click(function() {
		$('.s-content').css('display', 'none');
		$('#s_content_2').css('display', 'block');
	});
	$('#s_menus_wrapper span:nth-child(2)').click(function() {
		$('.s-content').css('display', 'none');
		$('#s_content_1').css('display', 'block');
	});
	$('#s_menus_wrapper span:nth-child(3)').click(function() {
		$('.s-content').css('display', 'none');
		$('#s_content_15').css('display', 'block');
	});
	$('#s_menus_wrapper span:last-child').click(function() {
		$('.s-content').css('display', 'none');
		$('#s_content_5').css('display', 'block');
	});
});