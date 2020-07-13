$(function () {
  $('.slider-featured__products').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../images/chevron-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../images/chevron-right.svg" alt=""></button>'
  })
  $('.product-card__bottom-like').on('click', function (event, count) {
    event.preventDefault()

    var $this = $(this),
      count = $this.attr('data-count'),
      active = $this.hasClass('active')

    $.fn.noop = $.noop
    $this.attr('data-count', !active || multiple ? ++count : --count)[multiple ? 'noop' : 'toggleClass']('active')
  })

  $('.star-rating').raty({
    path: null,
    starHalf: '../images/star-half.png',
    starOff: '../images/star-off.png',
    starOn: '../images/star-on.png',
    score: 4.5,
    readOnly: true,
    half: true,
    halfShow: true,
    space: false
  })
  var mixer = mixitup('.newest-products__items')
})