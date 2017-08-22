var strokes = document.querySelectorAll('.stroke');
var bubbles = document.querySelectorAll('.bubble');
var features = document.querySelectorAll('.eva-feature-name');
var evaMatchMedia;

function evaFeatures () {
  strokes.forEach(function (stroke) {
    stroke.classList.toggle('stroke-anim')
  })

  bubbles.forEach(function (bubble) {
    bubble.classList.toggle('bubble-anim')
  })

  features.forEach(function (feature) {
    feature.classList.toggle('feature-anim')
  })
}

if (window.matchMedia("(max-width: 500px)").matches) {
    evaMatchMedia = true;
} else {
    evaMatchMedia = false;
}