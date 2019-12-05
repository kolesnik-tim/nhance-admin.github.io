// import '../lib/maskedinput.js';
// import modal from 'jquery-modal';
// import selectric from 'selectric';

//select
// $('select').selectric();


// //pop-up
// $('[rel="modal:open"]').on('click', function(event) {
//   $(this).modal({
//     fadeDuration: 200
//   });
//   return false;
// });

//drop-down open
$('.drop-down--open').on('click', function(e) {
  e.preventDefault();
  $(this).find('ul').fadeIn();
});
//document mouseup
$(document).mouseup(function(e) {
  var container = $('.admin-header__notifications ul, .admin-header__user ul');
  if (container.has(e.target).length === 0) {
    container.fadeOut();
  }
});



//aside-admin
$('.aside-admin b').click(function() {
  if($(this).hasClass('active')) {
    $(this).toggleClass('active').next().slideToggle();
  } else{
    $(this).siblings('b').removeClass('active');
    $(this).siblings('ul').slideUp();
    $(this).toggleClass('active').next().slideToggle();
  }
});



//aside-mobile
$('.menu-open').on('click', function() {
  $(this).toggleClass('active');
  $('.aside-admin').toggleClass('active');
  $('.admin').toggleClass('active');
});

//aside-hover
if($(window).width() > 1040) {
  $('.aside-admin').hover(function() {
    $(this).addClass('hover');
    $('.admin').addClass('hover');
  },function() {
    $(this).removeClass('hover');
    $('.admin').removeClass('hover');
  });
}
