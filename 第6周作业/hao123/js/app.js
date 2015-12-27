$(document).ready(function() {
	//为了安全 google chrome 等浏览器是禁止本地文件写Cookie的即file:///F:/Lord%20community/test/Untitled-2.html这样的以file开头的是不能写本地文件的
	var cookieClass = getCookie('class'); //读取需要缓存的对象。
	$("#layoutContainer").attr("class", cookieClass); //
	$(".changeskin li").each(function() {
		$(this).click(function() {
			var className = $(this).attr("class"); //保存当前选择的类名
			$("#layoutContainer").attr("class", className, 30); //把选中的类名给body
			function SetCookie(name, value, day) //两个参数，一个是cookie的名子，一个是值
				{
					var exp = new Date(); //new Date("December 31, 9998");
					exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
					document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
				}
			SetCookie("class", className, 30);
		})
	});
});

function getCookie(name) //取cookies函数       
	{
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}