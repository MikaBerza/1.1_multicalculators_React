import "./swiperStyle.css";
import "../../node_modules/swiper/swiper-bundle.js";
import "../../node_modules/swiper/swiper-bundle.min.js";

// eslint-disable-next-line no-undef, no-unused-vars
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Cube Effect Parameters
  effect: "cube",
});
