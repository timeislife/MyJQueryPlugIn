/*
 * MyJQueryPlugIn
 * https://github.com/timeislife/MyJQueryPlugIn
 *
 * Copyright (c) 2015 timeislife
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.MyJQueryPlugIn = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.MyJQueryPlugIn = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.MyJQueryPlugIn.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.MyJQueryPlugIn.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].MyJQueryPlugIn = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
