var strokes = document.querySelectorAll('.stroke');
var bubbles = document.querySelectorAll('.bubble');
var features = document.querySelectorAll('.eva-feature-name');

function  evaFeatures () {
  strokes.forEach(function (stroke) {
    stroke.classList.add('stroke-anim')
  })

  bubbles.forEach(function (bubble) {
    bubble.classList.add('bubble-anim')
  })

  features.forEach(function (feature) {
    feature.classList.add('feature-anim')
  })
}