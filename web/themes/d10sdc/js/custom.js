(function ($, Drupal) {
  
  function applyWhenElementExists(selector, myFunction, intervalTime) {
    var interval = setInterval(function () {
      if (jQuery(selector).length > 0) {
        myFunction();
        clearInterval(interval);
      }
    }, intervalTime);
  }  
})(jQuery, Drupal);