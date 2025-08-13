let currentIndex = 0;
const images = document.querySelectorAll('.carousel-track img');
const carousel = document.querySelector('.carousel');
const totalImages = images.length;
let autoScrollInterval;
const intervalTime = 3000; // 3 seconds
const dotsContainer = carousel.querySelector('.carousel-dots');

function updateCarouselHeight() {
    if (document.body.id === 'fart') {
        let maxHeight = 0;
        images.forEach((img, index) => {
        if (img.complete) {
            const scaledHeight = img.naturalHeight; // effective height after scaling
            if (scaledHeight > maxHeight) maxHeight = scaledHeight;
        }
        });
        console.log("Max Height is: ", maxHeight);
        carousel.style.height = maxHeight + 'px';
    }
}

function showImage(index) {
    images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
    });
    updateDots();
    updateCarouselHeight();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

function startAutoScroll() {
    stopAutoScroll(); // avoid duplicates
    autoScrollInterval = setInterval(nextImage, intervalTime);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Event listeners for buttons
document.querySelector('.next').addEventListener('click', () => {
    nextImage();
});
document.querySelector('.prev').addEventListener('click', () => {
    prevImage();
});

// Pause auto-scroll on hover
carousel.addEventListener('mouseenter', stopAutoScroll);
carousel.addEventListener('mouseleave', startAutoScroll);

// Wait for all images to load before starting
window.addEventListener('load', () => {
    updateCarouselHeight();
    showImage(currentIndex);
    startAutoScroll();
});

// Adjust on resize
window.addEventListener('resize', updateCarouselHeight);

//Place the dots
images.forEach((_, index) => {
    const dot = document.createElement('span');
    if (index === currentIndex) dot.classList.add('active');
    dot.addEventListener('click', () => {
        showImage(index);
        resetAutoScroll();
    });
    dotsContainer.appendChild(dot);
});

function updateDots() {
    const dots = dotsContainer.querySelectorAll('span');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
}