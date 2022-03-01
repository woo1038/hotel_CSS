$(function () {

  
  /* Header Scroll Down Style Change */
  let position = $(window).scrollTop();

  $(window).scroll(function(){
    let win = $(this).scrollTop();
    let header = $('header');
    let slide = $('.slide').height();
    let scroll = $(window).scrollTop();

    if(win > slide) { 
      // Header Over First Section Bottom
      header.css({
        "background-color": "#fff",
      })
      $('.menu span').css({
        "background-color": "#000",
      })
      $('.book a, .langs a').css({
        "color": "#000"
      })
      $('.logo a img').attr('src', './images/logo02.png');

      /* Scroll Down header Hidden */
      if(scroll > position) {
        header.css({
          "opacity": "0",
          "visibility": "hidden"
        })
      }else {
        header.css({
          "opacity": "1",
          "visibility": "visible"
        })
      }
      position = scroll;
    } else {  
      // Header Under First Section Bottom
      header.css({
        "background-color": "transparent",
      })
      $('.menu span').css({
        "background-color": "#fff",
      })
      $('.book a, .langs a').css({
        "color": "#fff"
      })
      $('.logo a img').attr('src', './images/logo01.png');
    }
  })

  /* Menu Open Toggle And Body Scroll Hidden */
  $('.menu').click(function(){
    $('.menu-open').addClass('active');
    $('body').css({
      "overflow": "hidden",
    })
  })
  $('.close').click(function(){
    $('.menu-open').removeClass('active');
    $('body').css({
      "overflow": "scroll",
    })
  })

  /* Menu Open Dark Mode */
  $('.gyeongju, .ulsan, .pohang, .jeonju, .seamarq, .lahan').mouseenter(function(){
    $('.close span').css({
      "background-color": "#fff",
    })
    $('.close, .lang, .contact-text a, .brand-text, .site-text, .site-text a, .follow').css({
      "color": "#fff",
    })
  })
  $('.gyeongju, .ulsan, .pohang, .jeonju, .seamarq, .lahan').mouseleave(function(){
    $('.close span').css({
      "background-color": "#000",
    })
    $('.close, .lang, .brand-text, .site-text, .site-text a, .follow').css({
      "color": "#000",
    })
    $('.contact-text a').css('color', '');
  })
  /* Menu Open Text Image Effect */
  $('.gyeongju').mouseenter(function(){
    $('.gyeongju-img').css({
      "opacity": "1",
      "visibility": "visible"
    })
  })
  $('.gyeongju').mouseleave(function(){
    $('.gyeongju-img').css({
      "opacity": "0",
      "visibility": "hidden"
    })
  })
  $('.ulsan').mouseenter(function(){
    $('.ulsan-img').css({
      "opacity": "1",
      "visibility": "visible"
    })
  })
  $('.ulsan').mouseleave(function(){
    $('.ulsan-img').css({
      "opacity": "0",
      "visibility": "hidden"
    })
  })
  $('.pohang').mouseenter(function(){
    $('.pohang-img').css({
      "opacity": "1",
      "visibility": "visible"
    })
  })
  $('.pohang').mouseleave(function(){
    $('.pohang-img').css({
      "opacity": "0",
      "visibility": "hidden"
    })
  })
  $('.jeonju').mouseenter(function(){
    $('.jeonju-img').css({
      "opacity": "1",
      "visibility": "visible"
    })
  })
  $('.jeonju').mouseleave(function(){
    $('.jeonju-img').css({
      "opacity": "0",
      "visibility": "hidden"
    })
  })
  $('.seamarq').mouseenter(function(){
    $('.seamarq-img').css({
      "opacity": "1",
      "visibility": "visible"
    })
  })
  $('.seamarq').mouseleave(function(){
    $('.seamarq-img').css({
      "opacity": "0",
      "visibility": "hidden"
    })
  })
  $('.lahan').mouseenter(function(){
    $('.lahan-img').css({
      "opacity": "1",
      "visibility": "visible"
    })
  })
  $('.lahan').mouseleave(function(){
    $('.lahan-img').css({
      "opacity": "0",
      "visibility": "hidden"
    })
  })

  /* Check Box Event */
  $('.check-box').click(function(){
    $(this).addClass('check');
  })
    $('.check-box > ul > li').click(function(){
    $('.bar').css({
      "overflow": "visible"
    })

    $(this).siblings().removeClass('check');
    $(this).toggleClass('check');
  })
  $('.check-num li').click(function(){
    $(this).siblings().removeClass('check');
    $(this).addClass('check');

    /* Check Box Reservation */
    $(this).parent().closest('li').children(0).eq(0).html(`${$(this).html()}`);
  })


  

  
  /* slick */
  $('.slide').slick({
    arrows: true, //화살표
    dots: false, //인디케이트 해제
    fade: true, //페이드효과
    autoplay: true, //자동재생
    autoplaySpeed: 4000, //재생시간
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    infinite: true
  });
  $('.topaz-slider').slick({
    arrows: true, //화살표
    dots: true, //인디케이트 해제
    fade: false, //페이드효과
    autoplay: true, //자동재생
    autoplaySpeed: 4000, //재생시간
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    infinite: true
  });
  
  /* Section: Introduce Tab Click Event */
  let first_room = $('.double, .twin').slick({
    arrows: true, //화살표
    dots: true, //인디케이트 해제
    fade: true, //페이드효과
    autoplay: true, //자동재생
    autoplaySpeed: 4000, //재생시간
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    infinite: true
  });
  $('.tab ul li').click(function () {
    first_room.slick('slickGoTo', 0);
    
    $(this).siblings().removeClass('on');
    $(this).addClass('on');
    
    let index = $(this).index();
    if (index == 0) {
      $('.double').addClass('on');
      $('.twin').removeClass('on');
    } else if (index == 1) {
      $('.twin').addClass('on');
      $('.double').removeClass('on');
    }
  })
  
  
  /* Section: topaz Slide Dots Stlye */
  $('.topaz-slider .slick-dots li').eq(0).attr('data-alt', 'TOPZ');
  $('.topaz-slider .slick-dots li').eq(1).attr('data-alt', 'SARA');
  $('.topaz-slider .slick-dots li').eq(2).attr('data-alt', 'THE SHOP');
  $('.topaz-slider .slick-dots li').eq(3).attr('data-alt', 'HAVANA');
  

  /* Section: Introduce Slide Dots Text */
  $('.double .slick-dots li').eq(0).attr('data-kinds', 'DELUXE');
  $('.double .slick-dots li').eq(0).attr('data-room', 'DOUBLE');
  $('.double .slick-dots li').eq(1).attr('data-kinds', 'DELUXE');
  $('.double .slick-dots li').eq(1).attr('data-room', 'ONDOL');
  $('.twin .slick-dots li').eq(0).attr('data-kinds', 'DELUXE');
  $('.twin .slick-dots li').eq(0).attr('data-room', 'TWIN');
  $('.twin .slick-dots li').eq(1).attr('data-kinds', 'SUITE');
  $('.twin .slick-dots li').eq(1).attr('data-room', 'TWIN');
  $('.twin .slick-dots li').eq(2).attr('data-kinds', 'SUITE');
  $('.twin .slick-dots li').eq(2).attr('data-room', 'DOUBLE');
  $('.twin .slick-dots li').eq(3).attr('data-kinds', 'SUITE');
  $('.twin .slick-dots li').eq(3).attr('data-room', 'ONDOL');
  $('.twin .slick-dots li').eq(4).attr('data-kinds', 'PENTA');
  $('.twin .slick-dots li').eq(4).attr('data-room', 'SUITE');
  $('.twin .slick-dots li').eq(5).attr('data-kinds', 'SUITE');
  $('.twin .slick-dots li').eq(5).attr('data-room', 'TWIN');
  $('.twin .slick-dots li').eq(6).attr('data-kinds', 'ROYAL');
  $('.twin .slick-dots li').eq(6).attr('data-room', 'SUITE');


  /* Scroll animation */
  $('.animate').scrolla({
    moblie: true,
    once: true
  })

})