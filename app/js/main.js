$(function () {
  $('.slider-featured__products').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/previous.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/next.png" alt=""></button>'
  })
})