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

$('.select-secondary').selectize();
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







//select tn
let result = $('.select-tn__result');
let dropdownItem = $('.select-tn__dorpdown li');


result.on('click', function() {
  if($(this).hasClass('active')) {
    $(this).removeClass('active').next('.select-tn__dorpdown').fadeOut();
  } else{
    $(this).addClass('active').next('.select-tn__dorpdown').fadeIn();
  }
});

dropdownItem.on('click', function() {
  $(this).siblings().removeClass('active');
  let htmltegs = $(this).html();
  let indexItem = $(this).index();
  $(this).closest('.select-tn__dorpdown').siblings('select').val(++indexItem);
  $(this).addClass('active').closest('.select-tn__dorpdown').prev('.select-tn__result').html(htmltegs);
  $(this).closest('.select-tn__dorpdown').fadeOut();
  $(this).closest('.select-tn__dorpdown').prev('.select-tn__result').removeClass('active');
});

$(document).mouseup(function(e) {
  var container = $('.select-tn');
  if (container.has(e.target).length === 0) {
    $('.select-tn__dorpdown').fadeOut();
    result.removeClass('active');
  }
});






//pop-up btn continue
$('#slide-right-dx .continue').on('click', function() {
  if($('#slide-right-dx .tab-content .tab-pane.active').index() !== 3) {
    $('#slide-right-dx .nav-step li a.active').removeClass('active').parent().next().find('a').addClass('active');
    $('#slide-right-dx .tab-content .tab-pane.active').removeClass('active show').next().addClass('active show');
  }
});
