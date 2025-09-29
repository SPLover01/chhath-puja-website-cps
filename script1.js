// Initialize AOS for animations
AOS.init({
    duration: 1000,
    once: true
});

// Initialize Swiper for Video Slider
const videoSlider = new Swiper('.video-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Initialize Swiper for Gallery Slider
const gallerySlider = new Swiper('.gallery-slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var gallery2Swiper = new Swiper(".gallery2-slider", {
    slidesPerView: 3,       // Ek bar me 3 images
    spaceBetween: 20,       // Gap between images
    loop: true,             // Infinite loop
    autoplay: {
        delay: 2500,        // 2.5 sec break before next image
        disableOnInteraction: false,
    },
    pagination: {
        el: ".gallery2 .swiper-pagination",
        clickable: true,
    },
    speed: 1000,            // Smooth slide transition
    breakpoints: {
        0: { slidesPerView: 1 },   // Mobile pe 1 image
        600: { slidesPerView: 2 }, // Tablet pe 2 images
        1024: { slidesPerView: 3 } // Desktop pe 3 images
    }
});


// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

