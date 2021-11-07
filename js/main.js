$(function () {
  $('.toggle-btn').click(function () {
    $('#header').toggleClass('open');
  })
  $('#drawer-nav a').click(function () {
    $('#header').toggleClass('open');
  })
});