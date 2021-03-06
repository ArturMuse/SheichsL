// Intro

const introBackgroundSlider = new Swiper(".js-intro-background-slider", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 5000
    }
});

const introBottomSlider = new Swiper(".js-intro-bottom-slider", {
    loop: true,
    pagination: {
        el: '.js-intro-bottom-slider .swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 5000
    }
})

// Program

const programSlider = new Swiper(".js-program-slider", {
    spaceBetween: 104,
    slidesPerView: 3,
    pagination: {
        el: ".program__slider-nums",
        type: "fraction",
    },
    navigation: {
        nextEl: ".program__slider-next",
        prevEl: ".program__slider-prev",
    },
})

// Video

const videoSlider = new Swiper(".js-video-slider", {
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
        el: ".video__slider-pagination",
        type: "bullets",
        clickable: true
    }
})