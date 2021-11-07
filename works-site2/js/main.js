$(function () {
  $('.menu-btn').click(function () {
    if ($(window).scrollTop() < $('.fv').outerHeight()-50) {
      $('.header').toggleClass('open');
      $('.musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    } else {
      $('.menu-btn').toggleClass('black');
      $('.menu-title').toggleClass('black');
      $('.header').toggleClass('open');
      $('.musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });
  $('.header-nav a').click(function () {
    if ($(window).scrollTop() < $('.fv').outerHeight()-50) {
      $('.header').toggleClass('open');
      $('.musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    } else {
      $(this).toggleClass('black');
      $('.menu-title').toggleClass('black');
      $('.header').toggleClass('open');
      $('.musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });

  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < $('.kv-wrapper').outerHeight()-50) {
      $('.site-title').removeClass('black');
    } else {
      $('.site-title').addClass('black');
    }
  });

  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < $('.fv').outerHeight()-50) {
      $('.menu-btn').removeClass('black');
      $('.menu-title').removeClass('black');
    } else {
      $('.menu-btn').addClass('black');
      $('.menu-title').addClass('black');
    }
	});
});