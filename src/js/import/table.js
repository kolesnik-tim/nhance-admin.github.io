import datatable from 'datatables.net';

///tabel
$(document).ready(function() {
  ////table primary
  if($('div').hasClass('table-basic')) {
    $('#table-primary thead th').each( function() {
      var title = $('#table-primary thead th').eq($(this).index()).text();
      if($(this).index() === 0) {
        $(this).html( '#<i class="icon-nn-dark-sort"></i>' );
      } else if($(this).index() === 2) {
  
      } else if($(this).index() === 3) {
      } else{
        $(this).html( '<i class="icon-nn-dark-search"></i><input type="text" placeholder="'+title+'" />' );
      }
    } );
  }

  // DataTable
  var table = $('#table-primary').DataTable({ 
    'aoColumnDefs': [ { 'bSortable': false, 'aTargets': [ 1, 2, 3, 4 ] } ],
    'pageLength': 10,
    'language': { 
      'info': '<p style="color: #212121;">Showing <strong>_START_</strong> to <strong>_END_</strong> of <strong>_TOTAL_</strong> entries</p>',
      'paginate': {
        'next': '<i class="icon-nn-thin-arrow-right"></i>',
        'previous': '<i class="icon-nn-thin-arrow-left"></i>'
      },
    }
  });
  if($('table').length) {
  // Apply the search
    table.columns().eq( 0 ).each( function( colIdx ) {
      $( 'input', table.column( colIdx ).header() ).on( 'keyup change', function() {
        table
          .column( colIdx )
          .search( this.value )
          .draw();
      } );
    } );

  }




  //table secondary
  if($('#table-secondary').length) {
    $('#table-secondary thead th').each( function() {
      var titleSecondary = $('#table-secondary thead th').eq($(this).index()).text();
      if($(this).index() === 0) {
        $(this).html( '#<i class="icon-nn-dark-sort"></i>' );
      } else{
        $(this).html( '<i class="icon-nn-dark-search"></i><input type="text" placeholder="'+titleSecondary+'" />' );
      }
    } );
  }

  // DataTable
  var tableSecondary = $('#table-secondary').DataTable({ 
    'aoColumnDefs': [ { 'bSortable': false, 'aTargets': [ 1, 2, 3, 4 ] } ],
    'pageLength': 1000,
    'language': { 
      'info': '<p style="color: #212121;">Showing <strong>_START_</strong> to <strong>_END_</strong> of <strong>_TOTAL_</strong> entries</p>',
      'paginate': {
        'next': '<i class="icon-nn-thin-arrow-right"></i>',
        'previous': '<i class="icon-nn-thin-arrow-left"></i>'
      },
    }
  });

  if($('table').length) {
  // Apply the search
    tableSecondary.columns().eq( 0 ).each( function( colIdxS ) {
      $( 'input', tableSecondary.column( colIdxS ).header() ).on( 'keyup change', function() {
        tableSecondary
          .column( colIdxS )
          .search( this.value )
          .draw();
      } );
    } );
  }
});




//table
$('.table__more').on('click', function(event) {
  event.preventDefault();
  $(this).next('ul').fadeToggle();
});


$(document).mouseup(function(e) {
  var div = $('.table__dropdown');
  if (!div.is(e.target)
      && div.has(e.target).length === 0) {
    div.fadeOut();
  }
});





////table-builder
if($('div').hasClass('table-basic')) {
  $('#table-builder thead th').each( function() {
    var title = $('#table-builder thead th').eq($(this).index()).text();
    if($(this).index() === 0) {
      $(this).html( '#<i class="icon-nn-dark-sort"></i>' );
    } else if($(this).index() === 6) {

    } else if($(this).index() === 7) {
    }
    else if($(this).index() === 8) {
    } else{
      $(this).html( '<i class="icon-nn-dark-search"></i><input type="text" placeholder="'+title+'" />' );
    }
  } );
}

// DataTable
var table = $('#table-builder').DataTable({ 
  'aoColumnDefs': [ { 'bSortable': false, 'aTargets': [ 1, 2, 3, 4 ] } ],
  'pageLength': 10,
  'language': { 
    'info': '<p style="color: #212121;">Showing <strong>_START_</strong> to <strong>_END_</strong> of <strong>_TOTAL_</strong> entries</p>',
    'paginate': {
      'next': '<i class="icon-nn-thin-arrow-right"></i>',
      'previous': '<i class="icon-nn-thin-arrow-left"></i>'
    },
  }
});
if($('table').length) {
// Apply the search
  table.columns().eq( 0 ).each( function( colIdx ) {
    $( 'input', table.column( colIdx ).header() ).on( 'keyup change', function() {
      table
        .column( colIdx )
        .search( this.value )
        .draw();
    } );
  } );

}




