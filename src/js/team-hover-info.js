(function() {

	// Information from the team to show dynamically
	var team = [
		{
			name: 'Julián Rios',
			area: 'CEO',
			description: 'Mis principales tareas como Director ejecutivo de Higia Technologies consisten en cerciorarse de que la visión de la compañía sea la correcta, proveer los recursos necesarios para la creación de productos, construir la cultura corporativa, tomar las decisiones estratégicas para el óptimo funcionamiento de la empresa y supervisar el funcionamiento de la misma.<p>Actualmente, soy el primer y más jóven mexicano en ser galardonado con el Premio Global al Estudiante Emprendedor y la medalla Sol Azteca al emprendimiento por parte de la Presidencia de la República.</p>',
			social: {
				linkedin: 'https://www.linkedin.com/in/juli%C3%A1n-r%C3%ADos-cant%C3%BA-903b76106'
			}
		},
		{
			name: 'Alejandro Casar',
			area: 'Co-AIO',
			description: 'Mi trabajo consiste supervisar las áreas de inteligencia artificial y desarrollar algoritmos para la detección oportuna del pié diabético, cáncer de mama, cáncer testicular y prostático a partir de los datos obtenidos por nuestros productos.<p>Soy un graduado de Ingeniero en Sistemas  Digitales y Robótica del Tecnológico de Monterrey y, actualmente, estudio una maestría en inteligencia artificial haciendo investigación en algoritmos para detección de cáncer de mama.</p>',
			social: {
				linkedin: 'https://www.linkedin.com/in/alexcasar/'
			}
		},
		{
			name: 'Raymundo González',
			area: 'Co-AIO',
			description: 'Mi trabajo consiste supervisar las áreas de inteligencia artificial y desarrollar algoritmos para la detección oportuna del pié diabético, cáncer de mama, cáncer testicular y prostático a partir de los datos obtenidos por nuestros productos.<p>Soy un estudiante de Ciencias Computacionales y estadística en Minerva Schools KGI. En el pasado, he fungido como pasante investigador en Audible, compañía de Amazon, y colaborador en proyectos de investigación en el Laboratorio de Inteligencia Artificial de la Universidad de Stanford.</p>',
			social: {
				linkedin: 'https://www.linkedin.com/in/raymundo-gzz/'
			}
		},
		{
			name: 'Fernando López',
			area: 'DSF',
			description: 'En Higia funjo como director del área de software, desde la parte orientada al cliente hasta el servidor en nuestra aplicación y sitio web.<p>También es mi deber detectar e implementar nuevas tecnologías para integrar en nuestro desarrollo con el objetivo de mejorar nuestros productos.</p>',
			social: {
				linkedin: 'https://www.linkedin.com/in/fernando-l%C3%B3pez-mart%C3%ADnez-774823111/'
			}
		},
		{
			name: 'Antonio Torres',
			area: 'CTO',
			description: 'Mi trabajo consiste en mirar hacia el futuro antes de que suceda. Tratar de arriesgarse y tomar decisiones innovadoras que lleven a la empresa a una posición más valiosa en el corto y largo plazo.<p>Soy el encargado de supervisar las áreas de tecnología y que nuestros productos y servicios cuenten con la calidad esperada.</p>',
			social: {
				linkedin: 'https://www.linkedin.com/in/jantoniotorres/'
			}
		},
		{
			name: 'José Ángel Lavariega',
			area: 'CINO',
			description: 'Como Jefe de Innovación es mi deber asegurarme que nuestros procesos sean innovadores, permanezcan realistas y que sigamos una rigor profesional y científico en nuestras publicaciones, investigaciones y prototipos.<p>En las primeras etapas de nuestra compañía me he dedicado a realizar profundas investigaciones de mercado y asegurarme de que la tecnología implementada en nuestro producto sea la correcta.</p>',
			social: {
				linkedin: 'https://www.linkedin.com/in/jose-angellavariegagomez/'
			}
		}
	];

	// Set by default the description of element 0, in this case "Julian"
	$('#js-hover-name').html(team[0].name);
	$('#js-hover-area').html(team[0].area);
	$('#js-hover-description').html(team[0].description);

	// Displays information dynamically when hovering over each team member
	// $('.team-photo-img').on('hover', function() {
	// 	var id = $(this).attr('data-hover-id');
	// 	$('#js-hover-name').text(team[id].name);
	// 	$('#js-hover-area').text(team[id].area);
	// 	$('#js-hover-description').html(team[id].description);
	// 	$('#js-hover-linkedin').attr('href', team[id].social.linkedin);
	// })

	$('.team-photo-img').mouseover(function() {
		var $id = $(this).attr('data-hover-id');
		var linkedin = '#js-hover-linkedin-' + $id;
		
		$(linkedin).attr('href', team[$id].social.linkedin);
		$('#js-hover-name').text(team[$id].name);
		$('#js-hover-area').text(team[$id].area);
		$('#js-hover-description').html(team[$id].description);
	})


})();
