$(function () {
  $('.carousel__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$('.phone').mask('+9(999)999-9999');
