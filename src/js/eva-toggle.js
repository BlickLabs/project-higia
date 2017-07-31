var $evaButton = document.getElementById('eva-button');
var $hiddenDescription = document.getElementById('hidden-description');

$evaButton.addEventListener('click', function () {
  $hiddenDescription.classList.toggle('active');
  $evaButton.classList.toggle('active');
});
