// import '../lib/maskedinput.js';
import selectize from '../lib/selectize';
import botstrapBunble from 'bootstrap/dist/js/bootstrap.bundle';
import botstrap from 'bootstrap/js/dist/modal';
import dynatree from '../lib/jquery.dynatree.min';



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







//select
$('.select-button').selectize({
  plugins: ['remove_button'],
  persist: false,
  valueField: 'value',
  maxItems: null,
});
$('.select').selectize();




//.natifications
$('.natifications a').on('click', function() {
  $(this).closest('.natifications').slideUp();
});

//tooltip
$('[data-toggle="tooltip"]').tooltip();
















