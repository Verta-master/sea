//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
})

$('.footer__btn').click(function() {
  $('.footer__nav').toggleClass('footer__nav--opened');
  $('.footer__menu').slideToggle();
})

//Header
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $('.header').addClass('header--scroll');
  } else {
    $('.header').removeClass('header--scroll');
  };
});
