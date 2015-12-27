//返回顶部下js实现
window.onload=function(){
	var topbtn=document.getElementById("to_top");
	var timer=null;
	var pageheight=document.documentElement.clientHeight;
	var pageh=pageheight/10;
	window.onscroll=function(){
		var top=document.documentElement.scrollTop|document.body.scrollTop;
		if (top>=pageh) {
			topbtn.style.display="block";
		} else{
			topbtn.style.display="none";
		}
	}
	
	topbtn.onclick=function(){
		timer=setInterval(function(){
		var top=document.documentElement.scrollTop|document.body.scrollTop;		
		var speedtop=top/5;
		document.documentElement.scrollTop =top-speedtop;
		document.body.scrollTop =top-speedtop;
		if(top==0){
			clearInterval(timer);
			}		
		},30)
	//30ms执行一次
	}
}
