import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Inputmask from "inputmask";

const swiper = new Swiper(".hero__swiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  width: null,
  spaceBetween: 0,
  resizeObserver: true,
  observer: true,
  observeParents: true,
  pagination: {
    el: ".hero__pagination",
    clickable: true,
  },

  loop: false,
  navigation: {
    nextEl: ".hero-button-next",
    prevEl: ".hero-button-prev",
  },
});

const swiper2 = new Swiper(".gallery__swiper", {
  modules: [Navigation, Autoplay],
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: "auto", 
    },
  },
  loop: true,
  spaceBetween: 39,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});



const swiper3 = new Swiper(".join-us__swiper", {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

const swiper4 = new Swiper(".people__swiper", {
  modules: [Navigation, Autoplay],
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: "auto", 
    },
  },
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const dateInput = document.getElementById("dob");
Inputmask("99/99/9999").mask(dateInput);

document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("pswd");
  const toggle = document.querySelector(".toggle-password");
  const iconShow = toggle.querySelector(".password-open");
  const iconHide = toggle.querySelector(".password-hide");

  toggle.addEventListener("click", () => {
    const isPasswordVisible = passwordInput.type === "text";

    passwordInput.type = isPasswordVisible ? "password" : "text";

    iconShow.style.display = isPasswordVisible ? "block" : "none";
    iconHide.style.display = isPasswordVisible ? "none" : "block";
  });
});


