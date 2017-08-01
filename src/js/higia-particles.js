var partConfig

if (window.navigator.vendor == 'Apple Computer, Inc.') {
  partConfig = 'js/higia-particles_config.json'
} else {
  partConfig = 'js/higia-particles_config.json'
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('home-a-particles-container', partConfig);

particlesJS.load('home-b-particles-container', partConfig);