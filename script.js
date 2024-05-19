 
var swiper = new swiper(".swiper products-slider", {
    slidesPerView: 3,
    spaceBetween: 10,
	loop:true,
	grabCursor:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        0: {
          slidesPerView: 0,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });