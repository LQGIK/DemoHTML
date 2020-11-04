var slides = document.getElementsByClassName("slide");
var gallery = document.getElementById("gallery")
let currentSlide = 1;
gallery.addEventListener("click", function(){
    currentSlide = (currentSlide >= slides.length) ? 1 : currentSlide + 1;
    slides[currentSlide - 1].style.display = "block";
    for (let i=1; i <= slides.length; i++){
        if (i != currentSlide) {
            slides[i - 1].style.display = "none"
        }
    }
})
