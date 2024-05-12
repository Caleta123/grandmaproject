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



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("Slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}