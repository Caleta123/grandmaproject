function openNav() {
	document.getElementById("sideNav").style.width = "100%"
	document.getElementById("closebtn").style.visibility = "visible"
	document.getElementById("openBtn").style.visibility = "hidden"
	if (window.innerWidth <600) {
		document.getElementById("sideNav").style.width = "100%"
		document.getElementById("sideNav").style.height = "100%"
        var navElements = document.getElementsByClassName("nava");
        for (var i = 0; i < navElements.length; i++) {
            navElements[i].style.visibility = "visible";
        }
	}
}

function closeNav() {
	document.getElementById("sideNav").style.width = "20%"
    document.getElementById("closebtn").style.visibility = "hidden"
    document.getElementById("openBtn").style.visibility = "visible"
    if (window.innerWidth <600) {
    	document.getElementById("sideNav").style.width = "100%"
    	document.getElementById("sideNav").style.height = "8%"
    	var navElements = document.getElementsByClassName("nava");
        for (var i = 0; i < navElements.length; i++) {
            navElements[i].style.visibility = "hidden";
        }
    }
}


// change color 

var colors = ["blue", "red", "green", "orange"]
var currentColor = 0
var lis = document.querySelectorAll("h1.congrats")
function changeColor() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length -1
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.color = colors[(currentColor +i) % colors.length]
  }
}
setInterval(changeColor, 1000)