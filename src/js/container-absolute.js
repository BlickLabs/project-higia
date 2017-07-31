var partContainer = document.getElementById('particles-container');

function resizeContainer() {
  var absContainerHeight = document.getElementById('absolute-container').clientHeight;
  partContainer.style.height = absContainerHeight+'px';
}

window.addEventListener('scroll', resizeContainer)

resizeContainer()