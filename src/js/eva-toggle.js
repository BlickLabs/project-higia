if (indexLocation) {
  var $evaButton = document.getElementById('eva-button');
  var $hiddenDescription = document.getElementById('hidden-description');

  $evaButton.addEventListener('click', function () {
    $hiddenDescription.classList.toggle('active');
    $evaButton.classList.toggle('active');
    evaFeatures ()
    
    if ($hiddenDescription.classList.contains('active')) {
      var absContainerHeight = document.getElementById('absolute-container-a').clientHeight;
      partContainerA.style.height = (absContainerHeight + 500)+'px';
    } else {
      var absContainerHeight = document.getElementById('absolute-container-a').clientHeight;
      partContainerA.style.height = (absContainerHeight - 500)+'px';
    }
    
    partContainerA.style.transition = 'height .8s ease';

  });
}