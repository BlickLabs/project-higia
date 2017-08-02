if (window.location.pathname === '/index.html' || window.location.pathname === '/' || window.location.pathname === '/project-higia/index.html' || window.location.pathname === '/project-higia/') {
  var sOneTitle = document.getElementById('section_one-title');
  var span = document.getElementById('topink');

  sOneTitle.addEventListener('mouseover', function () {
    span.classList.add('lifePink')
  });
}