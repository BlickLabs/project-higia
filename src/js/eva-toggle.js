if (window.location.pathname === '/index.html' || window.location.pathname === '/' || window.location.pathname === '/project-higia/index.html' || window.location.pathname === '/project-higia/') {
  var $evaButton = document.getElementById('eva-button');
  var $hiddenDescription = document.getElementById('hidden-description');

  $evaButton.addEventListener('click', function () {
    $hiddenDescription.classList.toggle('active');
    $evaButton.classList.toggle('active');
  });
}