$(document).ready(function () {
  var height = Math.max($('.slider-featured__item-preview').height(), $('.slider-featured__item-info').height())
  var minHeight = height + 38.4
  // console.log(height)
  // console.log(minHeight)
  $('.slider-featured__item-preview').height(minHeight)

  // slickliders
  $('.slider-featured__products').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg class="lnr lnr-chevron-right"><use xlink:href="#lnr-chevron-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg class="lnr lnr-chevron-right"><use xlink:href="#lnr-chevron-right"></use></svg></button>',
    appendArrows: $('.slider-featured__top'),
    responsive: [{
      breakpoint: 855,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
      }
    }]
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
      },
      {
        breakpoint: 855,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: false
        }
      }
    ]
  })

  var slider = $('.follow-slider__items')

  $('.follow-slider__title .slick-prev').on('click', function () {
    $(slider).slick('slickPrev')
  })
  $('.follow-slider__title .slick-next').on('click', function () {
    $(slider).slick('slickNext')
  })

  $('.feedback__cards').slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<button type="button" class="slick-btn slick-prev-feedback"><svg class="lnr lnr-chevron-right"><use xlink:href="#lnr-chevron-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next-feedback"><svg class="lnr lnr-chevron-right"><use xlink:href="#lnr-chevron-right"></use></svg></button>',
    responsive: [{
        breakpoint: 1235,
        settings: {
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: false
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: false
        }
      }
    ]
  })

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

  $('.aside__price-input').ionRangeSlider({
    type: 'double',
    min: 0,
    max: 400,
    from: 30,
    to: 300,
    prefix: '$'
  })

  $('.aside__filter--pricerange').click(function () {
    $('.aside__items--pricerange').toggle(1000)
  })
  $('.aside__filter--category').click(function () {
    $('.aside__items--category').toggle(1000)
  })
  $('.aside__filter--products').click(function () {
    $('.aside__items--products').toggle(1000)
  })

  // menu click event
  // $('.header__bottom-menubtn').click(function () {
  //   $(this).toggleClass('toggle')
  //   if ($(this).hasClass('toggle')) {
  //     $('.header__bottom-items').addClass('toggle')
  //   } else {
  //     $('.header__bottom-items').removeClass('toggle')
  //   }
  // })
  // menu-btn toggle
  $('.header__bottom-menubtn').click(function () {
    $(this).toggleClass('toggle')
    if ($(this).hasClass('toggle')) {
      $('.header__bottom-lines').addClass('toggle'),
        $('.header__bottom-items').addClass('toggle'),
        $('.header__bottom-menu').addClass('toggle'),
        $('body').addClass('fixedPosition')
    } else {
      $('.header__bottom-lines').removeClass('toggle'),
        $('.header__bottom-items').removeClass('toggle'),
        $('.header__bottom-menu').removeClass('toggle'),
        $('body').removeClass('fixedPosition')
    }
  })
  // searchbar-toggle
  $('.submit-form__button').click(function () {
    $(this).toggleClass('toggle')
    if ($(this).hasClass('toggle')) {
      $('.submit-form__input').addClass('toggle')
    } else {
      $('.submit-form__input').removeClass('toggle')
    }
  })
  // btn movement with windows resize
  $(window).resize(function resize() {
    if ($(window).width() <= 720) {
      $('.header__register-link').insertBefore($('.header__bottom-menu'))
    } else {
      $('.header__register-link').insertBefore($('.header__notification-btns'))
    }
  }).trigger('resize')
  $(window).resize(function resize() {
    if ($(window).width() <= 540) {
      $('.header__user-profile').insertBefore($('.dropdown__items--user'))
    } else {
      $('.header__user-profile').insertAfter($('.header__user-avatar'))
    }
  }).trigger('resize')

  console.log($(window).width())

  // }
  // checkWidth()
  // $(window).resize(checkWidth)
  // ('.count').counterUp({
  //   delay: 10,
  //   time: 1000
  // })
  // var isBreakPoint = function (bp) {
  //   var bps = [320, 885, 1440],
  //     w = $(window).width(),
  //     min, max
  //   for (var i = 0, l = bps.length; i < l; i++) {
  //     if (bps[i] === bp) {
  //       min = bps[i - 1] || 0
  //       max = bps[i]
  //       break
  //     }
  //   }
  //   return w > min && w <= max
  // }

  // if (isBreakPoint(885)) {
  //   // $('#appendTo').click(function () {
  //   //   $('#moveMeIntoMain').appendTo($('#main'))
  //   // })//CLICK END
  //   // $('.header__user-info').click(function () {
  //   //   $('.header__notification-btns').prependTo($('.header__dropdown-user'))
  //   // }) //CLICK BEGGINING
  //   // $('.header__notification-btns').prependTo($('.header__dropdown-user')),
  //   $('.header__register-link').appendTo($('.header__bottom'))
  // } // Breakpoint between 320 and 480

  // window.addEventListener('resize', handleBrowserResize)

  // function handleBrowserResize () {
  //   if (isBreakPoint(885)) {
  //     $('.header__register-link').appendTo($('.header__bottom'))
  //   } else {
  //     $('.header__register-link').insertBefore($('.header__notification-btns'))
  //   }
  // }

  // page-content__view-btn--grid 
  $('.filter__layout-button--list').on('click', function () {
    $('.category-page__products').addClass('list'),
      $('.product-card').addClass('list'),
      $('.product-card').children().addClass('list'),
      $('.product-card__info-top').children().addClass('list'),
      $('.product-card__top').children().addClass('list'),
      $('.product-card__top-author').children().addClass('list'),
      $('.product-card__review').children().addClass('list'),
      $('.product-card').children().addClass('list'),
      $('.product-card__review-category').children().addClass('list')
  })
  $('.filter__layout-button--grid').on('click', function () {
    $('.category-page__products').removeClass('list')
    $('.product-card').removeClass('list'),
      $('.product-card').children().removeClass('list'),
      $('.filter__layout-button--grid').addClass('active'),
      $('.filter__layout-button--list').removeClass('active'),
      $('.product-card__top').children().removeClass('list'),
      $('.product-card__info-top').children().removeClass('list'),
      $('.product-card__top-author').children().removeClass('list'),
      $('.product-card__review').children().removeClass('list'),
      $('.product-card').children().removeClass('list'),
      $('.product-card__review-category').children().removeClass('list')
  })

  if ($('.newest-products__items').length) {
    var mixer = mixitup('.newest-products__items')
  }
})