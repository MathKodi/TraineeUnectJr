//carousel responsivo
const carousel = document.querySelector('.carousel-ns');
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

carousel.addEventListener('mousedown', onMouseDown);
carousel.addEventListener('mousemove', onMouseMove);
carousel.addEventListener('mouseup', onMouseUp);
carousel.addEventListener('mouseleave', onMouseLeave);

carousel.addEventListener('touchstart', onTouchStart);
carousel.addEventListener('touchmove', onTouchMove);
carousel.addEventListener('touchend', onTouchEnd);
carousel.addEventListener('touchcancel', onTouchCancel);

carousel.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';

function onMouseDown(e) {
    isDragging = true;
    startPosition = e.clientX;
    prevTranslate = currentTranslate;
}

function onMouseMove(e) {
    if (!isDragging) return;
    const currentPosition = e.clientX;
    currentTranslate = prevTranslate + currentPosition - startPosition;
    updateCarousel();
}

function onMouseUp() {
    isDragging = false;
    carousel.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
}

function onMouseLeave() {
    isDragging = false;
    carousel.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
}

function onTouchStart(e) {
    const touch = e.touches[0];
    isDragging = true;
    startPosition = touch.clientX;
    prevTranslate = currentTranslate;
}

function onTouchMove(e) {
    if (!isDragging) return;
    const touch = e.touches[0];
    const currentPosition = touch.clientX;
    currentTranslate = prevTranslate + 3 * (currentPosition - startPosition);
    updateCarousel();
}

function onTouchEnd() {
    isDragging = false;
    carousel.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
}

function onTouchCancel() {
    isDragging = false;
    carousel.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
}

function updateCarousel() {
    const cardWidth = document.querySelector('.cards-ns').offsetWidth;
    const maxTranslate = -(carousel.scrollWidth - carousel.clientWidth);

    if (currentTranslate > 0) {
        currentTranslate = 0;
    } else if (currentTranslate < maxTranslate) {
        currentTranslate = maxTranslate;
    }

    carousel.style.transform = `translateX(${currentTranslate}px)`;
}

updateCarousel();