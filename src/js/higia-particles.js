if (window.location.pathname === '/index.html' || window.location.pathname === '/index-es.html' || window.location.pathname === '/' || window.location.pathname === '/project-higia/index.html' || window.location.pathname === '/project-higia/') {
  var partConfig = 'js/higia-particles_config.json'

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('home-a-particles-container', partConfig);
  particlesJS.load('home-b-particles-container', partConfig);
  
}
