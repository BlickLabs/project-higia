if (indexLocation) {

  var animated = $('.section_one');
  var logo = $('.section_one-mask-container');
  var span = $('#topink');

  animated.hover(function() {
    logo.addClass('section_one-mask-container2');
    span.addClass('lifePink');
  });
}
