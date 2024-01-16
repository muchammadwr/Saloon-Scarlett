const menu = document.querySelector(".menu-icon");

menu.onclick = () => {
  menu.classList.toggle("move");
};

// Swiper

var swiper = new Swiper(".services-container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
