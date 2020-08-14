var swiper = new Swiper('.blog-slider', {
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });