// import '../lib/maskedinput.js';
import selectize from '../lib/selectize';
import botstrapBunble from 'bootstrap/dist/js/bootstrap.bundle';
import botstrap from 'bootstrap/js/dist/modal';
import Quill from 'quill';
import fancyapps from '@fancyapps/fancybox';



//tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this).addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});


//hide modal
$('#slide-right-dx').on('hide.bs.modal', function(e) {
  console.log($('#slide-right-dx input').val());
  if($('#slide-right-dx').hasClass('change')) {
    e.preventDefault();
    $('#slide-up').modal('show');
    $('#slide-up').css({'z-index': 9999999});
  }
});

$('#slide-up .btn.btn-complete').on('click', function() {
  $('#slide-right-dx').removeClass('change');
  $('#slide-up').modal('hide');
  $('#slide-right-dx').modal('hide');
});


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

//form checkbox + text
$('.form__checkbox-ios label').on('click', function() {
  if($(this).prev().is(':checked')) {
    $(this).next('span').find('span:last-child').show();
    $(this).next('span').find('span:first-child').hide();
  } else{
    $(this).next('span').find('span:last-child').hide();
    $(this).next('span').find('span:first-child').show();
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














//admin table
$('.open-block-more').on('click', function(event) {
  event.preventDefault();
  $(this).next('.block-more').fadeIn();
});

$('.open-tegs').on('click', function(event) {
  event.preventDefault();
  $(this).next('.block-tegs').fadeIn();
});

$(document).mouseup(function(e) { // событие клика по веб-документу
  var div = $('.admin__table__header .block-tegs, .block-more'); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
    div.fadeOut(); // скрываем его
  }
});


//texteditor
var editor = new Quill('#editor', {
  modules: { 
    toolbar: ['bold', 'italic', 'strike', 'link', 'image']
  },
  placeholder: 'What is your full name?',
  theme: 'snow'
});


var editor = new Quill('#editor-1', {
  modules: { 
    toolbar: ['bold', 'italic', 'strike', 'link', 'image']
  },
  placeholder: 'What is your full name?',
  theme: 'snow'
});




////Create New Step //Formula
$('#enter-formula').on('click', function() {
  if($(this).prop('checked')) {
    $(this).closest('.radio-block').siblings('.generate-formula').hide();
    $(this).closest('.radio-block').siblings('.enter-formula').fadeIn();
  }
});
$('#generate-formula').on('click', function() {
  if($(this).prop('checked')) {
    $(this).closest('.radio-block').siblings('.enter-formula').hide();
    $(this).closest('.radio-block').siblings('.generate-formula').fadeIn();
  }
});


////Create New Step //Api
$('#authentication').on('click', function() {
  $(this).closest('.form__checkbox').next().fadeToggle();
});
