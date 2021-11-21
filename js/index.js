const burger = document.querySelector(".burger");
const logo = document.querySelector(".logo");
const navbar = document.querySelector(".n-height");
var x = document.getElementsByClassName("nav");
var y = document.getElementsByClassName("nv");

burger.addEventListener("click", mobileMenu);
var c=0;
function mobileMenu() {
    l = x.length;
    l1 = y.length;
    for (i = 0; i < l; i++) {
      x[i].classList.toggle('n-visibility');
    }
    for (i = 0; i < l1; i++) {
      if(y[i].classList.contains("logo1"))
        continue;
      y[i].style.margin="2px 0px 0px 0px";
    }
    logo.classList.toggle('n-visibility');
    navbar.classList.toggle('n-height');
    c++;
    // document.querySelector(".nv").style.display="none";
    if(c%2!=0)
    {
      document.querySelector(".logo1").style.transition="none";
      document.querySelector(".logo1").style.opacity="0";
    }
    else
    {
      document.querySelector(".logo1").style.transition="opacity 0.5s linear";
        document.querySelector(".logo1").style.opacity="1";
    }
}

//Gallery

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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