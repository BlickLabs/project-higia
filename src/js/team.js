(function() {

  var mediaquery = window.matchMedia("(max-width: 876px)");
  var el = $('.team-our-team');

  if (!mediaquery.matches) {
    el.sticky({
      topSpacing: 52
    })
  }

  function checkTeam(mediaquer) {
    var el = $('.team-our-team');
    if (mediaquery.matches) {
      el.unstick();
    } else {
      el.sticky({
        topSpacing: 52
      })
    }
  }

  mediaquery.addListener(checkTeam);
})();
