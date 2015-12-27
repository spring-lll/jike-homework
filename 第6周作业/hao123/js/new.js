//$(function() {
//  $('.banner').unslider();
//});
function textcolor(cor) {
	var objs = document.getElementById("bodyhost").getElementsByTagName("a");
	for (var i = 0; i < objs.length; i++) {
		objs[i].style.color = cor;
	}
}

function change(color) {
	var bg = document.getElementById("layoutContainer");
	var head = document.getElementById("myheader");

	switch (color) {
		case 'pink':
			bg.style.background = "pink";
			textcolor('rgb(95, 158, 160)');
			break;
		case 'yellow':
			bg.style.background = "lightgoldenrodyellow";
			textcolor('rgb(210, 105, 30)');
			break;
		case 'blue':
			bg.style.background = "deepskyblue";
			textcolor('gray');
			break;
		case 'black':
			bg.style.background = "black";
			textcolor('rgb(95, 158, 160)');
			break;
		case 'orange':
			bg.style.background = "orange";
			textcolor('green');
			break;
		case 'white':
			bg.style.background = "white";
			textcolor('#ccc');
		default:
			bg.style.background = "white";
	}
}