if (indexLocation) {

  var animated = $('.section_one');
  var logo = $('.section_one-mask-container img');
  var span = $('#topink');

  animated.hover(function() {
    logo.addClass('logoPink')
    span.addClass('lifePink');
  });
}
