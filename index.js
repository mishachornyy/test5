

const swiper1 = new Swiper(".mySwiper1", {
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
    },

    breakpoints: {
        767: {
            spaceBetween: 10,
            slidesPerView: 3,
           
            allowTouchMove: true,
        },
        1108: {
            allowTouchMove: true,
           spaceBetween: 10,
            slidesPerView: 3,
        },
        1499: {
            allowTouchMove: true,
            spaceBetween: 50,
            slidesPerView: 3,
        },
    },
});
