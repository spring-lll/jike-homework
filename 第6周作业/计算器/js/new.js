//鼠标滑过btn颜色改变
$(document).ready(function() {
	$("input").mouseenter(function() {
		$($(this)).css("background", "yellow");
	});
	$("input").mouseleave(function() {
		$($(this)).css("background", "#f5f5f5");
	});
});
//计算
var caltoShow = ""; //要显示的算式
var calShow = ""; //要计算的算式
var result = ""; //储存结果
var flag = 0;
var operators = ['+', '-', '*', '/'];
var btnval = '';

function calFunc(print) {
	if (result != "" || result == "0") {
		result = "";
		caltoShow = "";
	}
	//根据选择的按钮处理
	switch (print) {
		case 'ac': //清空
			caltoShow = "";
			result = "";
			break;
		case 'backSpace': //退格
			caltoShow = caltoShow.substring(0, caltoShow.length - 1);
			break;

		case 'sign': //正负
			if (flag == 0) {
				caltoShow = caltoShow + '-';
				flag++;
			} else {
				var lastchar = caltoShow[caltoShow.length - 1];
				if (lastchar == '-')
					caltoShow = caltoShow.substring(0, caltoShow.length - 1);
				flag--;
			}
			break;
		case 'result':
			//计算
			if (caltoShow == "") result = "";
			else {
				calShow = caltoShow.toString();
				if (calShow.match(/sin/)) {
					calShow = calShow.replace(/sin/g, "Math.sin");
				} else if (calShow.match(/cos/)) {
					calShow = calShow.replace(/cos/g, 'Math.cos');
				} else if (calShow.match(/tan/)) {
					calShow = calShow.replace(/tan/g, 'Math.tan');
				}
				//检测，如果输入的字符串最后一个是操作符或是.则清除
				var lastchar = calShow[calShow.length - 1];
				if (operators.indexOf(lastchar) > -1 || lastchar == '.')
					calShow = calShow.replace(/.$/, '');
				var re1 = /^[\*|\/|\+|\)]/;
				var s = /\/0{1}/;
				if (lastchar == "(") {
					result = "请输入正确算式";
				} else if (calShow.match(re1)) {
					result = "开头不能输入*、+、/、)";
				} else if (calShow.match(s)) {
					result = "除数不能为0";
				} else {
					try {
						caltoShow = eval(calShow);

					} catch (e) {
						//TODO handle the exception
						alert(e);
					}
				}


			}

			break;
		default:
			caltoShow += print;
			//检测 只能输入一个操作符
			var re = /(\/|\*|\+|-|\(|\)){2}$/;
			if (caltoShow.match(re))
				caltoShow = caltoShow.substring(0, caltoShow.length - 2) + caltoShow.charAt(caltoShow.length - 1)
	}
	document.getElementById("screenShow").innerHTML = caltoShow;
	document.getElementById("screenShow1").innerHTML = result;
}