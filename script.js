const carouselInner = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const dots = document.querySelectorAll('.dot');

let currentSlideIndex = 0;
const slideWidth = slides[0].offsetWidth;

function showSlide(index) {
  carouselInner.style.transform = `translateX(-${index * slideWidth}px)`;
  currentSlideIndex = index;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
  showSlide((currentSlideIndex - 1 + slides.length) % slides.length);
});

nextButton.addEventListener('click', () => {
  showSlide((currentSlideIndex + 1) % slides.length);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

// Automatic sliding (optional)
setInterval(() => {
  showSlide((currentSlideIndex + 1) % slides.length);
}, 3000); // Adjust interval as needed