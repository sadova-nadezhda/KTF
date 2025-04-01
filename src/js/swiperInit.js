export function swiperInit() {
  const aboutSwiper = new Swiper(".aboutSwiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    initialSlide: 2,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
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
    }
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
    slidesPerView: 1,
    effect: "coverflow",
    initialSlide: 3,
    loop: true,
    watchSlidesVisibility: true,
    centeredSlides: true,
    grabCursor: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 250,
      modifier: 2,
      slideShadows: false
    },
    navigation: {
      nextEl: ".info-next",
      prevEl: ".info-prev",
    },
  });
}