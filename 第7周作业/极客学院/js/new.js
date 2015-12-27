//搜索框部分效果实现
$(function() {
	$("#searchtxt").focus(function() {
		$(".hot-words").hide();
	});
	$("#searchtxt").blur(function() {
		$(".hot-words").show();
	});
	$(".one-classfiy-lesson .cf li").each(function(index) {
		var liNode = $(this);
		$(this).mouseover(function() {
			//移到哪个给哪个加上效果
			$(".lessonplay").eq(index).css("opacity", "1");
			$(".lesson-info").eq(index).css("height", "175px");
			$(".lesson-info p").eq(index).css({
				'height': '52px',
				'opacity': '1',
				'display': 'block'
			});
			$(".zhongji").eq(index).css("display", "block");
		}).mouseout(function() {
			$(".lessonplay").css("opacity", "0");
			$(".lesson-info").eq(index).css("height", "88px");
			$(".lesson-info p").eq(index).css({
				'height': '0',
				'opacity': '0',
				'display': 'none'
			});
			$(".zhongji").eq(index).css("display", "none");
		})
	})
});
$(function() {
	$("#searchtxt").focus(function() {
		$("#searchbtn").addClass('search-btn2');
	});
	$("#searchtxt").blur(function() {
		$("#searchbtn").removeClass('search-btn2');
	});
});

//热门推荐标签切换
$(document).ready(function() {
	//each是遍历所有的li标签
	$("#hotlessul li").each(function(index) {
		var liNode = $(this);
		$(this).mouseover(function() {
			$("div.lesson-list").removeClass("lesson-list");
			$("#hotlessul li.on").removeClass("on");
			//移到哪个给哪个加上效果
			$(".hotlediv .one-classfiy-lesson").eq(index).addClass("lesson-list");
			liNode.addClass("on");
		}).mouseout(function() {

		})
	})
})

//图片切换
$(function() {
	//热门课程推荐
	jQuery(".index-banner").slide({
		mainCell: ".banner ul",
		autoPlay: true
	});
	//战略合作,媒体报道
	jQuery(".strategy").slide({
		//				titCell: ".hd span",
		mainCell: ".bd ul",
		autoPage: true,
		effect: "left",
		autoPlay: false,
		vis: 6,
		trigger: "click"
	});
	//合作院校
	jQuery(".swiper-car-box").slide({
		mainCell: ".sw-car ul",
		autoPage: true,
		effect: "left",
		autoPlay: false,
		vis: 7,
		trigger: "click"
	});
});