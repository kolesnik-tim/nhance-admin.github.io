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
$('#slide-right-dx .continue, #slide-right-dx .skip').on('click', function() {
  if($('#slide-right-dx .tab-content .tab-pane.active').index() !== 3) {
    $('#slide-right-dx .nav-step li a.active').removeClass('active').parent().next().find('a').addClass('active');
    $('#slide-right-dx .tab-content .tab-pane.active').removeClass('active show').next().addClass('active show');
    $('#slide-right-dx .skip').fadeOut();
  }
  if($('#slide-right-dx .tab-content .tab-pane.active').index() === 2) {
    $('#slide-right-dx .skip').fadeIn();
  }
  if($('#slide-right-dx .tab-content .tab-pane.active').index() === 3) {
    $('#slide-right-dx .continue').text('Issue Now');
    $('#slide-right-dx .skip').fadeOut();
  }
});
$('#slide-right-dx .nav-step li a').click(function() {
  setTimeout(function() {
    if($('#slide-right-dx .tab-content .tab-pane.active').index() === 3) {
      $('#slide-right-dx .continue').text('Issue Now');
      $('#slide-right-dx .skip').fadeOut();
    } else{
      $('#slide-right-dx .continue').text('Continue');
      $('#slide-right-dx .skip').fadeOut();
    }
    if($('#slide-right-dx .tab-content .tab-pane.active').index() === 2) {
      $('#slide-right-dx .skip').fadeIn();
    }
  }, 300);
});


//input file
$(document).ready( function() {
  $('body').on('change', '#slide-right-dx .tab-pane .file input', function() {
    var filename = $(this).val().replace(/.*\\/, '');
    $(this).parent().next().text(filename);
  });
});


//Issue DX Card step 3
$('body').on('click', '#slide-right-dx .tab-pane label', function() {
  let label = $(this);
  if(label.attr('data-radio') === 'file') {
    label.parents('.radio-block').next('.input-block').find('.url').fadeOut(300);
    setTimeout(function() {
      label.parents('.radio-block').next('.input-block').find('.file').fadeIn();
    }, 300);
    
  } else if(label.attr('data-radio') === 'url') {
    label.parents('.radio-block').next('.input-block').find('.file').fadeOut(300);
    setTimeout(function() {
      label.parents('.radio-block').next('.input-block').find('.url').fadeIn();
    }, 300);
    
  }
});

//Issue DX Card delet step 3
$('body').on('click', '#slide-right-dx .tab-pane .btn-danger', function(event) {
  event.preventDefault();
  $(this).parent().remove();
});

$('#slide-right-dx .tab-pane .add-btn span, #slide-right-dx .tab-pane .add-btn b').on('click', function() {
  $(this).parents('.add-btn').toggleClass('active');
});



$('#slide-right-dx .add-btn .invoice').on('click', function() {
  
  $('#slide-right-dx #step-3').append('<div class="block-white m-b-15"><h5 class="fz-14 bold all-caps text-black title-invoice m-b-25">Invoice '+ 0 + (+$('.title-invoice').length+1) +'</h5><div class="form__block m-b-35 flex"><input type="text" id="name-4"><label for="name-4">Name</label><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up here!"><svg class="icon icon-information "><use xlink:href="img/sprite.svg#icon-information"></use></svg></a></div><div class="flex-wrap m-b-45 radio-block"><strong class="text-black m-b-10 m-r-20">File Details</strong><div class="form__radio m-r-20"><input type="radio" name="radio-04" id="radio-09" checked=""><label class="text-black fz-14" for="radio-09" data-radio="file">Upload File</label></div><div class="form__radio m-r-20"><input type="radio" name="radio-04" id="radio-10"><label class="text-black fz-14" for="radio-10" data-radio="url">URL</label></div><div class="form__radio"><input type="radio" name="radio-04" id="radio-11"><label class="text-black fz-14" for="radio-11" data-radio="invoice">Generate Invoice</label></div></div><div class="input-block"><div class="form__block m-b-35 flex file"><div><input type="file" id="file" placeholder="Upload File"></div><label for="file">Upload File</label><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up here!"><svg class="icon icon-information "><use xlink:href="img/sprite.svg#icon-information"></use></svg></a><svg class="icon icon-clip "><use xlink:href="img/sprite.svg#icon-clip"></use></svg></div><div class="form__block m-b-35 flex url" style="display:none"><input type="url" id="url"><label for="url">URL</label><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up here!"><svg class="icon icon-information "><use xlink:href="img/sprite.svg#icon-information"></use></svg></a></div></div><a class="btn btn-danger btn-sm" href="#">delete</a></div>');
});
