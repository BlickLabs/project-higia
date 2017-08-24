if (indexLocation) {
  var gtkubBg = document.getElementById('gtkub-bg');
  var gtkubVideo = document.getElementById('gtkub-video');
  var gtkubButton = document.getElementById('gtkub-button');
  var gtkubClose = document.getElementById('gtkub-close');

  gtkubButton.addEventListener('click', function(){
    gtkubBg.classList.remove('video-hidden');
    gtkubVideo.currentTime = 0;
    gtkubVideo.play();
  });

  gtkubClose.addEventListener('click', function(){
    stopVideo();
  });

  gtkubBg.addEventListener('click', function(e){
    if (e.target === gtkubBg) {
      stopVideo();
    }
  });
}

function stopVideo() {
  gtkubBg.classList.add('video-hidden');
  gtkubVideo.pause();
}
