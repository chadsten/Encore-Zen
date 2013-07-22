/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

  $(function() {
    $('.compare-checkbox').click(function() {
      var checked = $('.compare-checkbox:checked');
      var unchecked = $('.compare-checkbox').not(':checked');
      var num_checked = checked.length;
      
      if(num_checked > 0) {
        if(num_checked == 1) {
          $('#compare-inventory').attr('disabled', 'disabled');
          $('#compare-inventory').attr('value', "Compare (add another)");
          unchecked.removeAttr('disabled');
        } else if(num_checked == 2) {
          $('#compare-inventory').removeAttr('disabled');
          $('#compare-inventory').attr('value', "Compare ("+num_checked+")");
          unchecked.removeAttr('disabled');
        } else if(num_checked == 3) {
          $('#compare-inventory').removeAttr('disabled');
          $('#compare-inventory').attr('value', "Compare ("+num_checked+")");
          unchecked.attr('disabled', 'disabled');
        } else {
          $('#compare-inventory').attr('disabled', 'disabled');
          $('#compare-inventory').attr('value', "Compare (too many)");
        }
      } else {
        $('#compare-inventory').attr('disabled', 'disabled');
        $('#compare-inventory').attr('value', "Compare");
        unchecked.removeAttr('disabled');
      }
    });
  
    $('#compare-inventory').click(function() {
      var stock_numbers = [];
      $('.compare-checkbox:checked').each(function() {
        stock_numbers.push($(this).attr('value'));
      });
      var stock_string = stock_numbers.join(',');
      window.location = '/inventory-list/compare/'+stock_string;
    });
  })

})(jQuery, Drupal, this, this.document);
