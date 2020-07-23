$(function () {
  // slickliders
  $('.slider-featured__products').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg class="lnr lnr-chevron-right"><use xlink:href="#lnr-chevron-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg class="lnr lnr-chevron-right"><use xlink:href="#lnr-chevron-right"></use></svg></button>',
    appendArrows: $('.slider-featured__top')
  })

  $('.follow-slider__items').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg class="lnr lnr-chevron-right"><use xlink:href="#lnr-chevron-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg class="lnr lnr-chevron-right"><use xlink:href="#lnr-chevron-right"></use></svg></button>',
    appendArrows: $('.follow-slider__title'),
    responsive: [{
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  })

  var slider = $('.follow-slider__items');

  $('.follow-slider__title .slick-prev').on('click', function() {
    $(slider).slick('slickPrev');
  });
  $('.follow-slider__title .slick-next').on('click', function() {
    $(slider).slick('slickNext');
  });


  $('.feedback__cards').slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<button type="button" class="slick-btn slick-prev-feedback"><svg class="lnr lnr-chevron-right"><use xlink:href="#lnr-chevron-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next-feedback"><svg class="lnr lnr-chevron-right"><use xlink:href="#lnr-chevron-right"></use></svg></button>',
    responsive: [{
      breakpoint: 1065,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows:false
      }
    }]
  })

  $('.header').on('click', '.search-toggle', function(e) {
    var selector = $(this).data('selector');
  
    $(selector).toggleClass('show').find('.search-form__input').focus();
    $(this).toggleClass('active');
  
    e.preventDefault();
  });

  // raty
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

  if ($('.newest-products__items').length) {
    var mixer = mixitup('.newest-products__items')
  }
})