var partConfig

if (window.navigator.vendor == 'Apple Computer, Inc.') {
  partConfig = 'js/higia-particles_config.json'
} else {
  partConfig = 'js/higia-particles_config.json'
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-container', partConfig, function() {
  console.log('callback - particles.js config loaded');
});