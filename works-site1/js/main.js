$(function () {
  
  fvHeight = $('.fv').outerHeight();

  $(window).on('load scroll', function () {
    var value = $(this).scrollTop();
      if (value > fvHeight) {
        $('#header').addClass('fixed');
      } else {
        $('#header').removeClass('fixed');
      } 
  });

  $('.toggle-btn').click(function () {
    $('#header').toggleClass('open');
    $('body').toggleClass('noscroll');
  });
  $('.header-nav a').click(function () {
    $('#header').toggleClass('open');
    if ($(window).width() < 768) {
      $('body').toggleClass('noscroll');
    }
  })
});

$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  speed: 1000,
  cssEase: 'linear'
});