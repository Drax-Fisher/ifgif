document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector("#loader").style.visibility = "visible"; 
    } else { 
        document.querySelector("#loader").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
    } 
};
function menu(el){
	if (el.className=="close") {
		el.style.bottom = "30%";
		var up = document.getElementById('up');
		up.style.transform = "rotateZ(40deg)";
		up.style.marginBottom = "-18%";
		var mid = document.getElementById('mid');
		mid.style.opacity = "0";
		var down = document.getElementById('down');
		down.style.transform = "rotateZ(-40deg)";
		down.style.marginTop = "-19%";
		el.className = "open";
		document.getElementById('expage').style.display = "flex";
	}
	else{
		el.style.bottom = "16%";
		var up = document.getElementById('up');
		up.style.transform = "rotateZ(0deg)";
		up.style.marginBottom = "12%";
		var mid = document.getElementById('mid');
		mid.style.opacity = "1";
		var down = document.getElementById('down');
		down.style.transform = "rotateZ(0deg)";
		down.style.marginTop = "12%";
		el.className = "close";	
		document.getElementById('expage').style.display = "none";	
	}

}
function check(e, el) {
	// body...
	var key = e.keyCode ? e.keyCode : e.which;
	if (key==13) {
		var inp = document.getElementById('search_bar');
		var cat = inp.value;
		inp.value = "";
		if (cat.length>0) {
			var flag = 0;
			var allimg = document.querySelectorAll('#content div img');
			for (var i = 0; i < allimg.length; i++) {
				if (flag == 1) {
					document.querySelector("#content p").innerHTML = "Search results for '"+cat+"':";
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