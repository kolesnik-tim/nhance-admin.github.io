import dynatree from '../lib/jquery.dynatree.min';
if($('div').hasClass('drag-tree')) {
  $(document).ready(function() {
    $('.drag-tree').dynatree({
      fx: {
        height: 'toggle',
        duration: 200
      }, //Slide down animation
    });

    $('.drag-tree-1').dynatree({
      fx: {
        height: 'toggle',
        duration: 200
      }, //Slide down animation
      checkbox: true,
    // selectMode: 2,
    });
  });
}

