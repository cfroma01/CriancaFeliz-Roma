let index = 0;
const track = document.getElementById('carouselTrack');
const slides = track.children.length;


function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}


function nextSlide() {
    index = (index + 1) % slides;
    updateCarousel();
}


function prevSlide() {
    index = (index - 1 + slides) % slides;
    updateCarousel();
}

    
setInterval(nextSlide, 5000);