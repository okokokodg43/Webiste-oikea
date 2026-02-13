const header = document.getElementById("header");

const images = [
    "images/P1240639.jpg",
    "images/Hawk-Owl2.png",
    "images/Dipper2.jpg"
];

let current = 0;

function showSlide(index){
    header.style.backgroundImage = `url(${images[index]})`;
}

function nextSlide(){
    current = (current + 1) % images.length;
    showSlide(current);
}

function prevSlide(){
    current = (current - 1 + images.length) % images.length;
    showSlide(current);
}