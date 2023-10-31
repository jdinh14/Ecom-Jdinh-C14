document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-slide");
    // const prevButton = document.querySelector(".prev-button");
    // const nextButton = document.querySelector(".next-button");
    const topicText = document.querySelector(".topic-text");

    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(${currentIndex * -100}%)`; // Change the direction here
        const currentImageDescription = slides[currentIndex].querySelector(".image-description").textContent;
        topicText.textContent = currentImageDescription;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    // nextButton.addEventListener("click", nextSlide);
    // prevButton.addEventListener("click", prevSlide);

    setInterval(nextSlide, 2500); // Auto-advance to the next slide every 5 seconds

    updateCarousel();
});

// document.addEventListener("DOMContentLoaded", function() {
//     let index = 0;
//     const carouselContainer = document.querySelector('.carousel_FC-container');
//     const images = carouselContainer.querySelectorAll('img');
//     const prevButton = document.querySelector('.carousel_FC-prev');
//     const nextButton = document.querySelector('.carousel_FC-next');

//     prevButton.addEventListener('click', function() {
//         index--;
//         if(index < 0) {
//             index = images.length = 0; // Loop back to the last image.
//         }
//         updateCarousel();
//     });

//     nextButton.addEventListener('click', function() {
//         index++;
//         if(index >= images.length) {
//             index = 0; // Loop back to the first image.
//         }
//         updateCarousel();
//     });

//     function updateCarousel() {
//         const offset = -index * window.innerWidth; // Use viewport width
//         carouselContainer.style.transform = `translateX(${offset}px)`;
//     }
    
// });


