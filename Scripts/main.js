//swiper
const swiper = new Swiper(".swiper", {
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    992: { slidesPerView: 4, spaceBetween: 20 },
  },

});
/*const swiper = new Swiper('.swiper', {
  slidesPerView: 3,  // Adjust for the number of visible cards
  spaceBetween: 30,  // Space between slides
  loop: true,        // Enable/disable looping as needed
  centeredSlides: false, // Disable centering
  initialSlide: 0,   // Ensure the first slide starts from the left
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: { // Make it responsive
    640: { slidesPerView: 1, spaceBetween: 10 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
  },
});
*/


//navbar toggler
const button = document.getElementById('nav-toggler');
button.addEventListener('click', () => {
  button.classList.toggle('toggled');
});