export function swiperInit() {
  const aboutSwiper = new Swiper(".aboutSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    initialSlide: 2,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
      nextEl: ".about-next",
      prevEl: ".about-prev",
    },
    on: {
        slideChange: function () {
            if (this.activeIndex === 0) {
                this.slideTo(1, 300);
            }
        }
    },
    breakpoints: {
      1024: {
        slidesPerView: "auto",
        spaceBetween: 24,
      },
    },
  });

  const gallerySwiper2 = new Swiper(".gallerySwiper2", {
    spaceBetween: 14,
    direction: "vertical",
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const gallerySwiper = new Swiper(".gallerySwiper", {
    spaceBetween: 14,
    // effect: "fade",
    thumbs: {
      swiper: gallerySwiper2,
    },
  });

  const arenaSwiper = new Swiper(".arenaSwiper", {
    slidesPerView: 1.3,
    spaceBetween: 16,
    centeredSlides: true,
    initialSlide: 2,
    loop: true,
    grabCursor: true,
    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      1024: {
        spaceBetween: 24,
        slidesPerView: 3.3,
      },
      1300: {
        spaceBetween: 24,
        slidesPerView: 3.8,
      },
    },
  });

  const infoSwiper = new Swiper(".infoSwiper", {
    slidesPerView: "auto",
    spaceBetween: -80,
    initialSlide: 3,
    loop: true,
    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },
    grabCursor: true,
    navigation: {
      nextEl: ".info-next",
      prevEl: ".info-prev",
    },
  });

}