(function() {

  var mediaquery = window.matchMedia("(max-width: 876px)");
  var el = '.team-our-team';

  function checkTeam() {
    if (mediaquery.matches) {
      $(el).unsticky();
    } else {
      $(el).sticky({
        topSpacing: 126
      })
    }
  }

  mediaquery.addListener(checkTeam);
})();
