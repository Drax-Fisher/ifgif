document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector("#loader").style.visibility = "visible"; 
    } else { 
        document.querySelector("#loader").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
    } 
};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var navh = document.getElementsByTagName('nav')[0].offsetHeight;
  	if (document.body.scrollTop > Number(navh)+20 || document.documentElement.scrollTop > Number(navh)+20) {
 		var ssb = document.getElementById('search_bar');
 		document.getElementsByTagName('header')[0].style.height = (navh+52).toString()+"px";
 		ssb.style.width = "100%";
 		ssb.style.position = "fixed";
 		ssb.style.top = "0px";   
 		ssb.style.left = "0px";
 		ssb.style.right = "0px";
 		ssb.style.margin = "auto";	
  	} else {
		document.getElementsByTagName('header')[0].style.height = "auto";
  		var ssb = document.getElementById('search_bar');
 		ssb.style.width = "200px";
 		ssb.style.position = "relative";
 		// ssb.style.top = "initial";
 		// ssb.style.left = "initial";
 		// ssb.style.right = "initial";
  	}
}
function menu(el){
	if (el.className=="close") {
		// el.style.bottom = "30%";
		el.style.transform = "rotate(360deg)";
		var up = document.getElementById('up');
		up.style.transform = "rotateZ(45deg)";
		up.style.marginTop = "36%";
		var mid = document.getElementById('mid');
		mid.style.opacity = "0";
		var down = document.getElementById('down');
		down.style.transform = "rotateZ(-45deg)";
		down.style.marginTop = "-36%";
		el.className = "open";
		document.getElementById('expage').style.transition = "opacity 0.5s";
		document.getElementById('expage').style.opacity = "1";
		document.getElementById('expage').style.zIndex = "10";
	}
	else{
		// el.style.bottom = "16%";
		el.style.transform = "rotate(0deg)";
		var up = document.getElementById('up');
		up.style.transform = "rotateZ(0deg)";
		up.style.marginTop = "12%";
		var mid = document.getElementById('mid');
		mid.style.opacity = "1";
		var down = document.getElementById('down');
		down.style.transform = "rotateZ(0deg)";
		down.style.marginTop = "12%";
		el.className = "close";	
		document.getElementById('expage').style.transition = "opacity 0.5s, z-index 0s 0.5s";
		document.getElementById('expage').style.opacity = "0";	
		document.getElementById('expage').style.zIndex = "-10";
	}

}
function check(e, el) {
	// body...
	var key = e.keyCode ? e.keyCode : e.which;
	if (key==13) {
		var inp = document.getElementById('search_bar');
		var cat = inp.value.toLowerCase();
		inp.value = "";
		cat = cat.trim();
		if (cat.length>0) {
			var flag = 0;
			document.querySelector('#content div:first-child').style.display = "inline-block";
			document.getElementById('catagory').style.display = "none";
			var allimg = document.querySelectorAll('#content div img');
			for (var i = 0; i < allimg.length; i++) {
				if (flag == 1) {
					document.querySelector("#content p").innerHTML = "'"+cat+"'";
				}
				var cname = allimg[i].className;
				if (cname.includes(cat)) {
					allimg[i].style.display = "inline-block";
					flag = 1;
				}
				else{
					allimg[i].style.display = "none";
				}
			}
			if (flag==0) {
				document.querySelector("#content p").innerHTML = "There are no search results for '"+cat+"'";
			}
		}
	}

}
function search(el){
	cat = el.innerHTML.toLowerCase();
	var flag = 0;
	document.querySelector('#content div:first-child').style.display = "inline-block";
	var allimg = document.querySelectorAll('#content div img');
	for (var i = 0; i < allimg.length; i++) {
		if (flag == 1) {
			document.querySelector("#content p").innerHTML = "'"+cat+"'";
		}
		var cname = allimg[i].className;
		if (cname.includes(cat)) {
			allimg[i].style.display = "inline-block";
			flag = 1;
		}
		else{
			allimg[i].style.display = "none";
		}
	}
	if (flag==0) {
		document.querySelector("#content p").innerHTML = "There are no search results for '"+cat+"'";
	}
}
