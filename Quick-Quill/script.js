document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
});

// cards 

// zzzzzzzzzzzz
let currentIndex = 0;
const slides = document.querySelectorAll('.hero-next2');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Initial slide
showSlide(currentIndex);

// Automatically change slide every 3 seconds
setInterval(nextSlide, 3000);


// xxxxxxxxxxxxxxxxxx

