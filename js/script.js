// Membuat slider foto untuk bagian foto-foto wisata di Kabupaten Karo
let slideIndex = 1;
showSlides(slideIndex, 1);
showSlides(slideIndex, 2);
showSlides(slideIndex, 3);

function plusSlides(n, num) {
    showSlides(slideIndex += n, num);
}

function currentSlide(n, num) {
    showSlides(slideIndex = n, num);
}

function showSlides(n, num ) {
    let i;
    let slides = document.getElementsByClassName("slide" + num);
    let dots = document.getElementsByClassName("dotDiv" + num);
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