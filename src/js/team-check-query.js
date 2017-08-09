(function() {

	// Function to check if it is on mobile and activate the modals or visiversa.
	var mediaquery = window.matchMedia("(max-width: 414px)");
	var team = $('.team-photo-img');

	// Removes the activation of the modals if it opens in the desktop.
	if (!mediaquery.matches) {
		team.each(function (index, value) {
			value.removeAttribute('data-remodal-target');
		})
	}

	// A manager is added to check the width of the screen
	function handleOrientationChange(mediaquery) {

		var teamUser = [
			'julian',
			'alejandro',
			'raymundo',
			'fernando',
			'antonio',
			'jose'
		];

	  if (mediaquery.matches) {
			team.each(function (index, value) {
				value.setAttribute('data-remodal-target', teamUser[index])
			})
	  } else {
			team.each(function (index, value) {
				value.removeAttribute('data-remodal-target')
			})
		}
	 }
	mediaquery.addListener(handleOrientationChange)
})();
