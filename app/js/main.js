$(document).ready(function () {
  var height = Math.max($('.slider-featured__item-preview').height(), $('.slider-featured__item-info').height())
  var minHeight = height + 38.4
  console.log(height)
  console.log(minHeight)
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
          slidesToShow: 1,
          slidesToScroll: 1,
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
        breakpoint: 1065,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: false
        }
      },
      {
        breakpoint: 666,
        settings: {
          unslick: true
        }
      }
    ]
  })

  $('.header').on('click', '.search-toggle', function (e) {
    var selector = $(this).data('selector')

    $(selector).toggleClass('show').find('.search-form__input').focus()
    $(this).toggleClass('active')

    e.preventDefault()
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

  $('.header__bottom-nav-btn').on('click', function () {
    $('.header__bottom-items').slideToggle()
  })

  const selectElement = (element) => document.querySelector(element)
  selectElement('.header__bottom-nav-btn').addEventListener('click', () => {
    selectElement('.header__bottom-items').classList.toggle('.active')
  })

  $(window).resize(function resize() {
    if ($(window).width() < 868) {
      $('.header__register-link').insertBefore($('.header__bottom-menu'))
    } else {
      $('.header__register-link').insertBefore($('.header__notification-btns'))
    }
  }).trigger('resize')

  console.log($(window).width())

  // function checkWidth () {
  //   var windowSize = $(window).width()
  // if (windowSize <= 884) {
  //   // $('.header__register-link').appendTo($('.header__bottom')),
  //   $('.header__register-link').insertBefore($('.header__bottom-menu'))
  // } else {
  //   
  // }

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
  $('.page-content__view-btn--list').on('click', function () {
    $('.page-content__cards').addClass('list')
    $('.page-content__view-btn--list').addClass('active')
    $('.page-content__view-btn--grid').removeClass('active')
  })
  $('.page-content__view-btn--grid').on('click', function () {
    $('.page-content__cards').removeClass('list')
    $('.page-content__view-btn--grid').addClass('active')
    $('.page-content__view-btn--list').removeClass('active')
  })

  // if ($(window).width() <= 1080) {
  //   $('.header__register-link').appendTo($('.header__bottom'))
  // } else {
  //   $('.header__register-link').insertBefore($('.header__notification-btns'))
  // }

  if ($('.newest-products__items').length) {
    var mixer = mixitup('.newest-products__items')
  }
})