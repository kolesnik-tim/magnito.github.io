import Swiper from 'swiper';


$('[data-carousel="swiper"]').each( function() {


  if($(window).width() > 767) {
  // Animate Function
    function animated_swiper(selector, init) {
      var animated = function animated() {
        $(selector + ' [data-animate]').each(function() {
          var anim = $(this).data('animate');
          var delay = $(this).data('delay');
          var duration = $(this).data('duration');

          $(this).removeClass('anim' + anim)
            .addClass(anim + ' animated active')
            .css({
              webkitAnimationDelay: delay,
              animationDelay: delay,
              webkitAnimationDuration: duration,
              animationDuration: duration
            })
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
              $(this).removeClass(anim + ' animated');
            });
       
        });
      };
      animated();
      // Make animated when slide change
      init.on('slideChangeTransitionStart', function() {
        $('.swiper-intro' + ' [data-animate]').removeClass('animated active');
      });
      init.on('slideChangeTransitionEnd', animated);
    };

    // Initialization
    var init = new Swiper('.swiper-intro', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: '.swiper-pagination-intro',
        clickable: true,
      },
    });
    animated_swiper('.swiper-intro', init);
  }
});
if($(window).width() < 768) {
//intro
  var swiperin = new Swiper('.swiper-intro', {
    pagination: {
      el: '.swiper-pagination-intro',
      clickable: true,
    }
  });
}
//home-kinds
var swiper1 = new Swiper('.home-kinds__swiper', {
  loop: true,
  spaceBetween: 30,
});

//sentence
var swiper2 = new Swiper('.swiper-sentence', {
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination-sentence',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-sentence-next',
    prevEl: '.swiper-sentence-prev',
  },
  on: {
    slideChangeTransitionEnd: function() {
      if ($('.swiper-slide-active').hasClass('red')) {
        $('.home-sentence__content__before, .swiper-pagination-sentence').addClass('red');
      } else{
        $('.home-sentence__content__before, .swiper-pagination-sentence').removeClass('red');
      }
    }
  }
});

//hit
var swiper3 = new Swiper('.swiper-hit', {
  navigation: {
    nextEl: '.swiper-hit-next',
    prevEl: '.swiper-hit-prev',
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  }
});



function animate(el, start) {
  let slide = el,
    h2 = slide.find('h2'),
    h3 = slide.find('h3'),
    h4 = slide.find('h4'),
    p = slide.find('p'),
    a = slide.find('a'),
    img = slide.find('img');


  setTimeout(function() {
    h2.addClass('animated fadeInDown');
    h3.addClass('animated fadeInDown');
    h4.addClass('animated fadeInDown');
  }, 200);
  setTimeout(function() {
    p.addClass('animated fadeInLeft');
    a.addClass('animated fadeInUp');
    img.addClass('animated fadeInRight');
  }, 400);
  setTimeout(function() {
    h2.removeClass('animated fadeInDown');
    h3.removeClass('animated fadeInDown');
    h4.removeClass('animated fadeInDown');
    p.removeClass('animated fadeInLeft');
    a.removeClass('animated fadeInUp');
    img.removeClass('animated fadeInRight');
  }, 2000);
  


  
}
