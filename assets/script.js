const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    loop: true,
    slidesPerView:3,
    spaceBetween: 10,
    slidePerGroup:3,
    pagination: {
      el: '.swiper-pagination',
    }, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

