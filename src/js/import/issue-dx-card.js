function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener('input', function(e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement('DIV');
    a.setAttribute('id', this.id + 'autocomplete-list');
    a.setAttribute('class', 'autocomplete-items');
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement('DIV');
        /*make the matching letters bold:*/
        b.innerHTML = '<strong>' + arr[i].substr(0, val.length) + '</strong>';
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener('click', function(e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName('input')[0].value;
          /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener('keydown', function(e) {
    var x = document.getElementById(this.id + 'autocomplete-list');
    if (x) x = x.getElementsByTagName('div');
    if (e.keyCode === 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode === 38) { //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode === 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add('autocomplete-active');
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove('autocomplete-active');
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName('autocomplete-items');
    for (var i = 0; i < x.length; i++) {
      if (elmnt !== x[i] && elmnt !== inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener('click', function(e) {
    closeAllLists(e.target);
  });
}
















//autocomplete
var countries = ['Afghanistan','Albania','Algeria','Andorra','Angola','Anguilla','Antigua &amp; Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bosnia &amp; Herzegovina','Botswana','Brazil','British Virgin Islands','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Cayman Islands','Central Arfrican Republic','Chad','Chile','China','Colombia','Congo','Cook Islands','Costa Rica','Cote D Ivoire','Croatia','Cuba','Curacao','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Polynesia','French West Indies','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guam','Guatemala','Guernsey','Guinea','Guinea Bissau','Guyana','Haiti','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Isle of Man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kiribati','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macau','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Namibia','Nauro','Nepal','Netherlands','Netherlands Antilles','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','North Korea','Norway','Oman','Pakistan','Palau','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Puerto Rico','Qatar','Reunion','Romania','Russia','Rwanda','Saint Pierre &amp; Miquelon','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka','St Kitts &amp; Nevis','St Lucia','St Vincent','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand',"Timor L'Este",'Togo','Tonga','Trinidad &amp; Tobago','Tunisia','Turkey','Turkmenistan','Turks &amp; Caicos','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States of America','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Virgin Islands (US)','Yemen','Zambia','Zimbabwe'];
var mark = ['Apple', 'Google'];


autocomplete(document.getElementById('myInput'), countries);





$('#slide-right-dx input').change(function() {
  if($(this).val() !== '') {
    $(this).addClass('change');
    $('#slide-right-dx').addClass('change');
  } else{
    $(this).removeClass('change');
  }
});
$('#slide-right-dx select').change(function() {
  if($(this).val() >= 1) {
    $(this).addClass('change');
  } else{
    $(this).removeClass('change');
  }
  $('#slide-right-dx').addClass('change');
});

//pop-up btn continue
$('#slide-right-dx .continue, #slide-right-dx .skip').on('click', function(event) {
  if($('#slide-right-dx .tab-content .tab-pane.active').index() !== 3) {
    event.preventDefault();
    let require = 0;
    $('#step-1 input').each(function(index, el) {
      if($(el).is('[require]')) {
        if($(el).hasClass('change')) {
          ++require;
          $(el).css({'border-color': '#cecece'});
        } else{
          $(el).css({'border-color': '#ff0057'});
        }
      }
    });
    $('#step-1 .select-search-req').each(function(index, el) {
      if($(el).val() >= 1) {
        ++require;
        $(el).next('.selectize-control').find('.selectize-input').css({'border-color': '#cecece'});
      } else{
        $(el).next('.selectize-control').find('.selectize-input').css({'border-color': '#ff0057'});
      }
    });
    let sum = $('#step-1 input[require]').length + $('#step-1 select.select-search-req').length;
    if(require === sum) {
      $('#slide-right-dx .nav-step li a.active').removeClass('active').parent().next().find('a').addClass('active');
      $('#slide-right-dx .tab-content .tab-pane.active').removeClass('active show').next().addClass('active show');
      $('#slide-right-dx .skip').fadeOut(); 
    }
  }
  if($('#slide-right-dx .tab-content .tab-pane.active').index() === 2) {
    $('#slide-right-dx .skip').fadeIn();
    event.preventDefault();
  }
  if($('#slide-right-dx .tab-content .tab-pane.active').index() === 3) {
    $('#slide-right-dx .continue').text('Issue Now');
    $('#slide-right-dx .skip').fadeOut();
    let require = 0;
    $('#step-4 input').each(function(index, el) {
      if($(el).is('[require]')) {
        if($(el).hasClass('change')) {
          ++require;
          $(el).css({'border-color': '#cecece'});
        } else{
          $(el).css({'border-color': '#ff0057'});
        }
      }
    });
    $('#step-4 .select-search-req').each(function(index, el) {
      if($(el).val() >= 1) {
        ++require;
        $(el).next('.selectize-control').find('.selectize-input').css({'border-color': '#cecece'});
      } else{
        $(el).next('.selectize-control').find('.selectize-input').css({'border-color': '#ff0057'});
      }
    });
    let sum = $('#step-4 input[require]').length + $('#step-4 select.select-search-req').length;
    if(require !== sum) {
      event.preventDefault();
    }
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
  $('.invoice-block').each(function(index, el) {
    $(el).find('h5').text('Invoice ' + ++index);
  });
  $('.other-block').each(function(index, el) {
    $(el).find('h5').text('Other ' + ++index);
  });
});




//Issue DX Card add step 3
$('body').on('click', '#slide-right-dx .tab-pane .add-btn span', function() {
  $(this).parents('.add-btn').toggleClass('active');
});
$('body').on('click', '#slide-right-dx .tab-pane .add-btn b', function() {
  $(this).parents('.add-btn').toggleClass('active');
});

$('body').on('click', '#slide-right-dx .add-btn .invoice', function() {
  $('#slide-right-dx #step-3').append('<div class="block-white m-b-15 invoice-block"><h5 class="fz-14 bold all-caps text-black title-invoice m-b-25">Invoice 01</h5><div class="form__block m-b-35 flex"><input type="text" id="name-4"><label for="name-4">Name</label><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up here!"><svg class="icon icon-information "><use xlink:href="img/sprite.svg#icon-information"></use></svg></a></div><div class="flex-wrap m-b-45 radio-block"><strong class="text-black m-b-10 m-r-20">File Details</strong><div class="form__radio m-r-20"><input type="radio" name="radio-04" id="radio-09" checked=""><label class="text-black fz-14" for="radio-09" data-radio="file">Upload File</label></div><div class="form__radio m-r-20"><input type="radio" name="radio-04" id="radio-10"><label class="text-black fz-14" for="radio-10" data-radio="url">URL</label></div><div class="form__radio"><input type="radio" name="radio-04" id="radio-11"><label class="text-black fz-14" for="radio-11" data-radio="invoice">Generate Invoice</label></div></div><div class="input-block"><div class="form__block m-b-35 flex file"><div><input type="file" id="file" placeholder="Upload File"></div><label for="file">Upload File</label><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up here!"><svg class="icon icon-information "><use xlink:href="img/sprite.svg#icon-information"></use></svg></a><svg class="icon icon-clip "><use xlink:href="img/sprite.svg#icon-clip"></use></svg></div><div class="form__block m-b-35 flex url" style="display:none"><input type="url" id="url"><label for="url">URL</label><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up here!"><svg class="icon icon-information "><use xlink:href="img/sprite.svg#icon-information"></use></svg></a></div></div><a class="btn btn-danger btn-sm invoice-hide" href="#">delete</a><ul class="add-btn"><li><span></span></li><li><b>add new</b></li><li><a class="invoice" href="#">invoice</a></li><li><a class="other" href="#">other</a></li></ul></div>');
  $('.invoice-block').each(function(index, el) {
    $(el).find('h5').text('Invoice ' + ++index);
  });
  $(this).parents('.add-btn').hide().prev().fadeIn();
});



$('body').on('click', '#slide-right-dx .add-btn .other', function() {
  $('#slide-right-dx #step-3').append('<div class="block-white m-b-15 other-block"><h5 class="fz-14 bold all-caps text-black m-b-25">Other</h5><div class="form__block m-b-35 flex"><input type="text" id="name-4"><label for="name-4">Name</label><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up here!"><svg class="icon icon-information "><use xlink:href="img/sprite.svg#icon-information"></use></svg></a></div><div class="flex-wrap m-b-25 radio-block"><strong class="text-black m-b-10 m-r-20">File Details</strong><div class="form__radio m-r-20"><input type="radio" name="radio-09" id="radio-19" checked=""><label class="text-black fz-14" for="radio-19" data-radio="file">Upload File</label></div><div class="form__radio m-r-20"><input type="radio" name="radio-09" id="radio-20"><label class="text-black fz-14" for="radio-20" data-radio="url">URL</label></div></div><div class="input-block"><div class="form__block m-b-35 flex file"><div><input type="file" id="file" placeholder="Upload File"></div><label for="file">Upload File</label><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up here!"><svg class="icon icon-information "><use xlink:href="img/sprite.svg#icon-information"></use></svg></a><svg class="icon icon-clip "><use xlink:href="img/sprite.svg#icon-clip"></use></svg></div><div class="form__block m-b-35 flex url" style="display:none"><input type="url" id="url"><label for="url">URL</label><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up here!"><svg class="icon icon-information "><use xlink:href="img/sprite.svg#icon-information"></use></svg></a></div></div><a class="btn btn-danger btn-sm invoice-hide" href="#">delete</a><ul class="add-btn"><li><span></span></li><li><b>add new</b></li><li><a class="invoice" href="#">invoice</a></li><li><a class="other" href="#">other</a></li></ul></div>');
  $('.other-block').each(function(index, el) {
    $(el).find('h5').text('Other ' + ++index);
  });
  $(this).parents('.add-btn').hide().prev().fadeIn();
});
