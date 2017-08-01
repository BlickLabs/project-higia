var partContainerA = document.getElementById('home-a-particles-container');
var partContainerB = document.getElementById('home-b-particles-container');

function resizeContainer() {
  var absContainerHeight = document.getElementById('absolute-container-a').clientHeight;
  partContainerA.style.height = absContainerHeight+'px';

  var absContainerHeight = document.getElementById('absolute-container-b').clientHeight;
  partContainerB.style.height = absContainerHeight+'px';
}

window.addEventListener('scroll', resizeContainer)

resizeContainer()