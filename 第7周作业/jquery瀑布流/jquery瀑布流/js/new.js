$(document).ready(function() {
	//允许滚动的时候需要加载新的图片，所以这里来模拟一个网络获取数据的图片
	var dataImg = {
		"data": [{
			"src": "5.jpg"
		}, {
			"src": "0.jpg"
		}, {
			"src": "2.jpg"
		}, {
			"src": "3.jpg"
		}, {
			"src": "1.jpg"
		}, {
			"src": "4.png"
		}, {
			"src": "6.jpg"
		}, {
			"src": "7.jpg"
		}, {
			"src": "8.jpg"
		}, {
			"src": "9.jpg"
		}]
	};

	addImageToContainer(dataImg.data);
	window.onscroll = function(e) {
		if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
			addImageToContainer(dataImg.data);
		}
	}
});

function addImageToContainer(srcList) {
	//处理img src
	srcList = srcList.map(function(data) {
		return "./img/" + data.src;
	});

	finishSameImageLoaded(srcList, function() {
		$.each(srcList, function(index, value) {
			var box = $("<div>").addClass("box").appendTo($("#container"));
			var content = $("<div>").addClass("content").appendTo(box);
			$("<img>").attr("src", value).appendTo(content);
		});
		imgLocation();
	});
}

function finishSameImageLoaded(srcArr, done) {
	var DefList = srcArr.map(function(src, index, arr) {
		var defer = $.Deferred();
		var img = new Image();
		img.src = src;
		if (img.complete) {
			defer.resolve();
		} else {
			img.onload = function() {
				defer.resolve();
			}
		}
		return defer;
	});
	$.when.apply($, DefList).done(done);
}

//确定图片加载的位置
function imgLocation() {
	var box = $('.box');
	var boxWidth = box.eq(0).width();
	var num = Math.floor($(window).width() / boxWidth); //获取一排当中图片的个数;
	var boxArr = []; //存储盒子的高度
	$('#container').css({
		'width': boxWidth * num,
		'margin': '0 auto'
	});
	box.each(function(index, value) {
		var boxHeight = box.eq(index).height();
		if (index < num) {
			boxArr[index] = boxHeight;
		} else {
			//获取第一排图片的最低高度
			var minHeigth = Math.min.apply(null, boxArr);
			//获取最小图片的位置
			var minboxIndex = $.inArray(minHeigth, boxArr);
			$(value).css({
				'position': 'absolute',
				'top': minHeigth,
				'left': box.eq(minboxIndex).position().left
			});
			boxArr[minboxIndex] += box.eq(index).height(); //更新放了图片后的那一列的高度
		}
	});
}