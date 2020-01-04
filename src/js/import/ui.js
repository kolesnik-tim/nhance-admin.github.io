// import '../lib/maskedinput.js';
import selectize from '../lib/selectize';
import dynatree from '../lib/jquery.dynatree.min';
import botstrapBunble from 'bootstrap/dist/js/bootstrap.bundle';
import botstrap from 'bootstrap/js/dist/modal';


////header
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



//.natifications
$('.natifications a').on('click', function() {
  $(this).closest('.natifications').slideUp();
});

//tooltip
$('[data-toggle="tooltip"]').tooltip();




////forms
//select
$('.select-button').selectize({
  plugins: ['remove_button'],
  persist: false,
  valueField: 'value',
  maxItems: null,
  sortField: 'text'
});
$('.select').selectize({
  sortField: 'text'
});
$('.select-search').selectize({
  sortField: 'text'
});

//label
$('input').focus(function() {
  $(this).next('label').addClass('active');
  $(this).siblings('span').addClass('active');
});
$('input').blur(function() {
  if($(this).val() === '') {
    $(this).next('label').removeClass('active');
    $(this).siblings('span').removeClass('active');
  } else{
    $(this).next('label').addClass('active');
  }
});

