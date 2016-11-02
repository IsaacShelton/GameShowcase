
var visible = false;

function windowResize(){
	if(window.innerWidth > 768){
		document.getElementById("navigation-ul").style.display = "block";
		document.getElementById("nav-title").style.display = "none";
		document.getElementById("nav-banner").style.display = "none";
		document.getElementById("nav-button").src = "http://dockysoft.com/res/nav.png";
		visible = false;
	} else {
		if(!visible){
			document.getElementById("navigation-ul").style.display = "none";
			document.getElementById("nav-title").style.display = "block";
			document.getElementById("nav-banner").style.display = "block";
			document.getElementById("nav-button").src = "http://dockysoft.com/res/nav.png";
		} else {
			document.getElementById("navigation-ul").style.display = "block";
			document.getElementById("nav-title").style.display = "none";
			document.getElementById("nav-banner").style.display = "none";
		}
	}
}

function toggleNavigationUl(){
	if(visible){
		document.getElementById("navigation-ul").style.display = "none";
		document.getElementById("nav-title").style.display = "block";
		document.getElementById("nav-banner").style.display = "block";
		document.getElementById("nav-button").src = "http://dockysoft.com/res/nav.png";
		visible = false;
	} else {
		document.getElementById("navigation-ul").style.display = "block";
		document.getElementById("nav-title").style.display = "none";
		document.getElementById("nav-banner").style.display = "none";
		document.getElementById("nav-button").src = "http://dockysoft.com/res/navclose.png";
		visible = true;
	}
}
