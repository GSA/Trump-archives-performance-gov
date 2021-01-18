// Filter based on two factors + alphabetical sort
// Uses URI hash as trigger allowing direct links etc
// Losely based on: http://isotope.metafizzy.co/filtering.html#url-hash

jQuery(document).ready(function ($) {
    var $container = $(".main-iso");

    // Filter isotope
    $container.isotope({
        // options
        itemSelector: ".winner",
        layoutMode: "masonry",
        filter: function() {
          return qsRegex ? $(this).text().match( qsRegex ) : true;
        }
      });

      // use value of search field to filter
      var $quicksearch = $('.quicksearch').keyup( debounce( function() {
        qsRegex = new RegExp( $quicksearch.val(), 'gi' );
        $grid.isotope();
      }, 200 ) );

      // debounce so filtering doesn't happen every millisecond
      function debounce( fn, threshold ) {
        var timeout;
        threshold = threshold || 100;
        return function debounced() {
          clearTimeout( timeout );
          var args = arguments;
          var _this = this;
          function delayed() {
            fn.apply( _this, args );
          }
          timeout = setTimeout( delayed, threshold );
        };
      }


var iso = $container.data('isotope');
var $filterCount = $('.filter-count');

function updateFilterCount() {
  $filterCount.text( iso.filteredItems.length + ' items' );
}



  
