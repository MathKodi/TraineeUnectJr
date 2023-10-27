(function() {
    const carousel = document.getElementById('carousel-sn');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    let animationFrameId;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    function updateCarousel() {
        const translateX = -currentIndex * 33.33;
        carousel.style.transform = `translateX(${translateX}%)`;
        animationFrameId = requestAnimationFrame(updateCarousel);
    }

    setInterval(nextSlide, 3000); 
})();