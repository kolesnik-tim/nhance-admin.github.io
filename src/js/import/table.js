import datatable from 'datatables.net';

///tabel
$(document).ready(function() {
  ////table primary
  $('#table-primary thead th').each( function() {
    var title = $('#table-primary thead th').eq($(this).index()).text();
    if($(this).index() === 0) {
      $(this).html( '#<i class="fa fa-sort" aria-hidden="true"></i>' );
    } else{
      $(this).html( '<i class="fa fa-search" aria-hidden="true"></i><input type="text" placeholder="'+title+'" />' );
    }
  } );

  // DataTable
  var table = $('#table-primary').DataTable({ 
    'aoColumnDefs': [ { 'bSortable': false, 'aTargets': [ 1, 2, 3, 4 ] } ],
    'pageLength': 10,
    'language': { 
      'info': '<p style="color: #212121;">Showing <strong>_START_</strong> to <strong>_END_</strong> of <strong>_TOTAL_</strong> entries</p>',
      'paginate': {
        'next': '<i class="icon-arrow-right"></i>',
        'previous': '<i class="icon-arrow-left"></i>'
      },
    }
  });

  // Apply the search
  table.columns().eq( 0 ).each( function( colIdx ) {
    $( 'input', table.column( colIdx ).header() ).on( 'keyup change', function() {
      table
        .column( colIdx )
        .search( this.value )
        .draw();
    } );
  } );






  //table secondary
  $('#table-secondary thead th').each( function() {
    var titleSecondary = $('#table-secondary thead th').eq($(this).index()).text();
    if($(this).index() === 0) {
      $(this).html( '#<i class="fa fa-sort" aria-hidden="true"></i>' );
    } else{
      $(this).html( '<i class="fa fa-search" aria-hidden="true"></i><input type="text" placeholder="'+titleSecondary+'" />' );
    }
  } );

  // DataTable
  var tableSecondary = $('#table-secondary').DataTable({ 
    'aoColumnDefs': [ { 'bSortable': false, 'aTargets': [ 1, 2, 3, 4 ] } ],
    'pageLength': 1000,
    'language': { 
      'info': '<p style="color: #212121;">Showing <strong>_START_</strong> to <strong>_END_</strong> of <strong>_TOTAL_</strong> entries</p>',
      'paginate': {
        'next': '<i class="icon-arrow-right"></i>',
        'previous': '<i class="icon-arrow-left"></i>'
      },
    }
  });

  // Apply the search
  tableSecondary.columns().eq( 0 ).each( function( colIdxS ) {
    $( 'input', tableSecondary.column( colIdxS ).header() ).on( 'keyup change', function() {
      tableSecondary
        .column( colIdxS )
        .search( this.value )
        .draw();
    } );
  } );
});
