$(".banner").unslider({
	speed: 500,               //  滚动速度
	delay: 3000,              //  动画延迟
	complete: function(){},  //  动画完成的回调函数
	keys: true,               //  启动键盘导航
	dots: true,               //  显示点导航
	fluid: false              //  支持响应式设计
});