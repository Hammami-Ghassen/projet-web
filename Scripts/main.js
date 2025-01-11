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
//navbar toggler
const button = document.getElementById('nav-toggler');
button.addEventListener('click', () => {
  button.classList.toggle('toggled');
});