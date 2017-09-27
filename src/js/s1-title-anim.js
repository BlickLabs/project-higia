if (indexLocation) {

  var animated = $('.section_one');
  var logo = $('.section_one-mask-container');
  var span = $('#topink');
  var mediaquery = window.matchMedia("(max-width: 550px)");

  // animations are deactivated for mobiles
  if (!mediaquery.matches) {
    animated.hover(function() {
      logo.addClass('section_one-mask-container2');
      span.addClass('lifePink');
    });
  }

  
}
