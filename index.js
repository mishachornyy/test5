const swiper1 = new Swiper(".mySwiper1", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  slidesPerView: 3,

  breakpoints: {
      0: {
      slidesPerView: 1,
      allowTouchMove: true, pagination:    {
          el: ".swiper-pagination",
          clickable: true,
        },
    }, 
      635: {
      slidesPerView: 2,
      allowTouchMove: true, pagination:    {
          el: ".swiper-pagination",
          clickable: true,
        },
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 60,
         pagination: {
          el: ".swiper-pagination",
          clickable: true,}
    },
      
         900: {
      slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,}
        },
      
    1109: {
      slidesPerView: 2,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,}
        },
      allowTouchMove: true,
            1349: {
      slidesPerView: 3,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      allowTouchMove: true,
    },
    1499: {
      allowTouchMove: true,
          pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      spaceBetween: 50,
      slidesPerView: 3,
    },
  },
});

const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  slidesPerView: 3,

  breakpoints: {
         0: {
      slidesPerView: 1,
      allowTouchMove: true, pagination:    {
          el: ".swiper-pagination",
          clickable: true,
        },
    }, 
      635: {
      slidesPerView: 1,
      allowTouchMove: true, pagination:    {
          el: ".swiper-pagination",
          clickable: true,
        },
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 60,
    },
      
    1109: {
      slidesPerView: 3,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      allowTouchMove: true,
    },
    1499: {
      allowTouchMove: true,
          pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      spaceBetween: 50,
      slidesPerView: 3,
    },
  },
});

const toggleMenu = () => {
  const hamburgerButton = document.getElementById('hamburger-trigger');
  const mobileMenu = document.getElementById('hamburger-list');

  hamburgerButton.classList.toggle('checked');
  mobileMenu.classList.toggle('visible');
}
