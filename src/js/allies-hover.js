(function() {

  var apple = $('#apple');
  var imgApple = $('#apple img');

  apple.hover(function() {
    imgApple.attr('src', 'img/allies/apple.png').fadeIn();
  }, function() {
    imgApple.attr('src', 'img/allies/apple2.png').fadeIn();
  });


})();
