
//aside-admin
$('.aside-admin b').click(function() {
  if($(this).hasClass('active')) {
    $(this).toggleClass('active').next('ul').slideToggle();
  } else{
    $(this).siblings('b').removeClass('active');
    $(this).siblings('ul').slideUp();
    $(this).toggleClass('active').next('ul').slideToggle();
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
