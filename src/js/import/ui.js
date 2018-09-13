import '../lib/selectize.min.js';
import Rangeslider from 'rangeslider.js';
import '../lib/maskedinput.js';


//mask input
$('input[type="tel"]').mask('+7 (999) 999-99-99');




//search
$('.header__tools__search').on('click', function() {
  $('.search').addClass('active');
  $('.search').find('input[type="text"]').focus();
});
$('.search__close').on('click', function() {
  $('.search').removeClass('active');
});



//select
$('select').selectize('options');


//range
$('[rel="modal:open"]').on('click', function() {
  setTimeout(function() {
    Calc();
    $('input[type="range"]').rangeslider({
      polyfill: false,
      onSlide: function() {
        Calc();
      },
    });
  }, 50);
});


function Calc() {
  let val = $('input[type="range"]').val();

  let spanVal = $('.form__range__block__top span');
  spanVal.removeClass('active');
  let newVal = spanVal.eq(val).prev('span').text();
  let i = parseFloat(newVal.replace(',','.').replace(/[^0-9.]/gim, ''));

  if (isNaN(i)) {
    i = 1000000;
  }
  
  console.log(i);
  

  switch (i) {
    case 100:
      setValue(i, 18);
      break;
    case 250:
      setValue(i, 10);
      break;
    case 500:
      setValue(i, 8);
      break;
    case 1000:
      setValue(i, 6.5);
      break;
    case 2500:
      setValue(i, 5.5);
      break;
    case 5000:
      setValue(i, 4.5);
      break;
    case 7500:
      setValue(i, 3.5);
      break;
    case 10000:
      setValue(i, 2.95);
      break;
    case 20000:
      setValue(i, 1.85);
      break;
    case 25000:
      setValue(i, 1.75);
      break;
    case 50000:
      setValue(i, 1.35);
      break;
    case 75000:
      setValue(i, 1.15);
      break;
    case 100000:
      setValue(i, 1.09);
      break;
    case 250000:
      setValue(i, 0.99);
      break;
    case 500000:
      setValue(i, 0.89);
      break;
    case 1000000:
      setValue(i, 0.79);
      break;
    

  
    default:
      break;
  }


}

function setValue(editionV, coinsV) {
  let coins = $('.coins i');
  let coinsSum = $('.coins-sum i');
  let edition = $('.edition i');

  coins.text(coinsV);
  coinsSum.text((editionV * coinsV).toFixed(0));
  edition.text(editionV);
}



//aside
$('.aside .aside-categories').on('click', function(event) {
  event.preventDefault();
  $(this).next('.aside-list').slideToggle();
  $(this).find('i').toggleClass('active');
  console.log('wfwef');
});


//header-menu

$('.header__tools__burger').on('click', function() {
  $(this).toggleClass('active');
  $('.header__menu').fadeToggle();
});

if($(window).width() > 767) {
  $('.header__menu__block i').on('click', function() {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).parents('.header__menu__block').find('.header__menu__block-list').slideToggle();
  });
}
$(document).mouseup(function(e) {
  var block = $('.header__menu, .header__tools__burger');
  if (!block.is(e.target) && block.has(e.target).length === 0) { 
    $('.header__menu').fadeOut();
    $('.header__tools__burger').removeClass('active');
  }
});


//calculation
$('.calculation__form__text a, .calculation-order .form__text a').on('click', function() {
  let btn = $(this);
  event.preventDefault();
  btn.fadeOut();
  setTimeout(function() {
    btn.next().fadeIn();
  }, 370);
});

