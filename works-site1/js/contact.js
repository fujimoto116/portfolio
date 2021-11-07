$(function () {
  
  cHeight = $('.page-title-wrapper').outerHeight();

  $(window).on('load scroll', function () {
    var value = $(this).scrollTop();
      if (value > cHeight) {
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

