(function() {

	// Information from the team to show dynamically
	var team = [
		{
			title: 'Our team',
			name: 'Julián Rios',
			area: 'CEO',
			description: 'Mis principales tareas como Director ejecutivo de Higia Technologies consisten en cerciorarse de que la visión de la compañía sea la correcta, proveer los recursos necesarios para la creación de productos, construir la cultura corporativa, tomar las decisiones estratégicas para el óptimo funcionamiento de la empresa y supervisar el funcionamiento de la misma.<p>Actualmente, soy el primer y más jóven mexicano en ser galardonado con el Premio Global al Estudiante Emprendedor y la medalla Sol Azteca al emprendimiento por parte de la Presidencia de la República.</p>',
			social: {
				linkedin: 'https://www.linkedin.com/in/juli%C3%A1n-r%C3%ADos-cant%C3%BA-903b76106'
			}
		},
		{
			title: 'Our team',
			name: 'Alejandro Casar',
			area: 'Co-AIO',
			description: 'Mi trabajo consiste supervisar las áreas de inteligencia artificial y desarrollar algoritmos para la detección oportuna del pié diabético, cáncer de mama, cáncer testicular y prostático a partir de los datos obtenidos por nuestros productos.<p>Soy un graduado de Ingeniero en Sistemas  Digitales y Robótica del Tecnológico de Monterrey y, actualmente, estudio una maestría en inteligencia artificial haciendo investigación en algoritmos para detección de cáncer de mama.</p>',
			social: {
				linkedin: 'https://www.linkedin.com/in/alexcasar/'
			}
		},
		{
			title: 'Our team',
			name: 'Raymundo González',
			area: 'Co-AIO',
			description: 'Mi trabajo consiste supervisar las áreas de inteligencia artificial y desarrollar algoritmos para la detección oportuna del pié diabético, cáncer de mama, cáncer testicular y prostático a partir de los datos obtenidos por nuestros productos.<p>Soy un estudiante de Ciencias Computacionales y estadística en Minerva Schools KGI. En el pasado, he fungido como pasante investigador en Audible, compañía de Amazon, y colaborador en proyectos de investigación en el Laboratorio de Inteligencia Artificial de la Universidad de Stanford.</p>',
			social: {
				linkedin: 'https://www.linkedin.com/in/raymundo-gzz/'
			}
		},
		{
			title: 'Our team',
			name: 'Fernando López',
			area: 'DSF',
			description: 'En Higia funjo como director del área de software, desde la parte orientada al cliente hasta el servidor en nuestra aplicación y sitio web.<p>También es mi deber detectar e implementar nuevas tecnologías para integrar en nuestro desarrollo con el objetivo de mejorar nuestros productos.</p>',
			social: {
				linkedin: 'https://www.linkedin.com/in/fernando-l%C3%B3pez-mart%C3%ADnez-774823111/'
			}
		},
		{
			title: 'Our team',
			name: 'Antonio Torres',
			area: 'CTO',
			description: 'Mi trabajo consiste en mirar hacia el futuro antes de que suceda. Tratar de arriesgarse y tomar decisiones innovadoras que lleven a la empresa a una posición más valiosa en el corto y largo plazo.<p>Soy el encargado de supervisar las áreas de tecnología y que nuestros productos y servicios cuenten con la calidad esperada.</p>',
			social: {
				linkedin: 'https://www.linkedin.com/in/jantoniotorres/'
			}
		},
		{
			title: 'Our team',
			name: 'José Ángel Lavariega',
			area: 'CINO',
			description: 'Como Jefe de Innovación es mi deber asegurarme que nuestros procesos sean innovadores, permanezcan realistas y que sigamos una rigor profesional y científico en nuestras publicaciones, investigaciones y prototipos.<p>En las primeras etapas de nuestra compañía me he dedicado a realizar profundas investigaciones de mercado y asegurarme de que la tecnología implementada en nuestro producto sea la correcta.</p>',
			social: {
				linkedin: 'https://www.linkedin.com/in/jose-angellavariegagomez/'
			}
		},
		{
			title: 'Our team',
			name: 'Martín Urtíz',
			area: 'AID',
			description: 'Como parte del equipo de inteligencia artificial de Higia es mi deber el siempre estar actualizado con las nuevas tecnologías que podrían mejorar nuestros algoritmos de predicción.<p>También soy responsable del desarrollo de nuestras propias tecnologías, las cuales catapultan a nuestros algoritmos a ser los mejores en sus predicciones.</p>',
			social: {
				linkedin: '#'
			}
		},
		{
			title: 'Our team',
			name: 'Rebecca Canales',
			area: 'SAI',
			description: 'En Higia colaboro en el área de software específicamente en el diseño, documentación y codificación de la base de datos.<p>Como mujer soy partícipe de dialogar sobre la comodidad y el diseño que llevará EVA, para demostrar que es un producto creado con la mejor calidad en cuanto a la tecnología utilizada, la investigación y el esfuerzo de todo el equipo. Con la finalidad de que los usuarios que porten a EVA tengan la confianza de que es un producto cómodo, seguro y fácil de utilizar.</p>',
			social: {
				linkedin: 'https://www.linkedin.com/in/rebecca-irene-canales-andonie-5a5a1a144/'
			}
		},
		{
			title: 'Our team',
			name: 'Vicente Ferrara',
			area: 'HDI',
			description: 'Vicente Ferrara es un estudiante de Sistemas Digitales y Robótica en el Tecnológico de Monterrey Campus Monterrey. Y ha trabajado como Investigador en University of Texas MD Anderson Pulmonary Laboratory durante el verano 2016. Vicente realiza prácticas profesionales en Higia en el área de desarrollo de hardware.',
			social: {
				linkedin: '#'
			}
		},
		{
			title: 'Advisory Board',
			name: 'Antonio Rallo',
			area: 'S&TABM',
			description: 'Antonio estudió biología marina en la Universidad de California. Fue Director de Tecnología Multimedia en Apple Europa, Director de Tecnología y Estrategia en Grupo Televisa, actualmente es el Cofundador de Kio Networks y Director Ejecutivo del fondo de inversion ID345',
			social: {
				linkedin: '#'
			}
		},
		{
			title: 'Advisory Board',
			name: 'Felicia Knaul',
			area: 'S&TABM',
			description: 'La Dra. Felicia Knaul es Profesora Asociada de la Escuela de Medicina de Harvard y Directora de la Iniciativa de Equidad Global de Harvard, donde actúa como Co-directora de la Secretaría del Grupo de Trabajo Mundial sobre Acceso Ampliado al Cuidado y Control del Cáncer en los Países en Desarrollo. De igual manera, es economista de la Fundación Mexicana de la Salud.<p>Después de ser diagnosticado con cáncer de mama en 2007, el Dr. Knaul fundó la fundación Tómatelo a Pecho, una organización mexicana sin fines de lucro que promueve investigaciones, defensa, concientización e iniciativas de detección temprana para el cáncer de mama en América Latina. Ha publicado artículos sobre el cáncer de mama en diversos países y medios. Su libro relatando su experiencia personal con cáncer de mama y como fundador de la organización Tómatelo a pecho, fue lanzado en el 2009 y ampliado y publicado en inglés en 2012 titulado Beauty without the Breast.</p>',
			social: {
				linkedin: 'https://www.linkedin.com/in/felicia-marie-knaul-68a5ab50/'
			}
		},
		{
			title: 'Advisory Board',
			name: 'Julio Frenk',
			area: 'S&TABM',
			description: 'Julio Frenk fungió como Ministro de Salud de México de 2000 a 2006. Allí definió una ambiciosa agenda para reformar el sistema de salud del país e introdujo un programa de cobertura universal integral, conocido como Seguro Popular, que amplió el acceso a la atención médica para más de 55 millones de mexicanos previamente no asegurados.<p>Fue el director general y fundador del Instituto Nacional de Salud Pública en México, una de las principales instituciones de este tipo en el mundo. También se desempeñó como director ejecutivo a cargo de la Evidencia y la Información para la Política de la Organización Mundial de la Salud. El Dr. Frenk se convirtió en el sexto presidente de la Universidad de Miami en agosto de 2015.</p>',
			social: {
				linkedin: '#'
			}
		},
		{
			title: 'Advisory Board',
			name: 'Raymond McCauley',
			area: 'S&TABM',
			description: 'Raymond McCauley es un científico, ingeniero y empresario que trabaja a la vanguardia de la biotecnología. Raymond explora cómo la aplicación de la tecnología a la biología, la genética, la medicina y la agricultura está afectando a cada uno de nosotros. Raymond es Presidente de la Biotech Track de Singularity University, un grupo de reflexión de Silicon Valley dedicado a capacitar a los líderes sobre tecnologías exponenciales. Es Cofundador y Arquitecto en Jefe de BioCurious, también forma parte del equipo que desarrolló la secuenciación de ADN de próxima generación en Illumina, donde trabajó en bioinformática, secuenciación del cáncer y genómica personal.<p>Su obra y su historia han sido publicadas en Wired, Forbes, Time y Nature. El trabajo de posgrado de Raymond incluye estudios en Texas A & M University, Stanford y UC Berkeley en ingeniería eléctrica, informática, biofísica, bioquímica, bioinformática y nanotecnología. Raymond desarrolla y asesora a una variedad de empresas y organizaciones, incluyendo Genomera (pruebas clínicas de la muchedumbre), Vecoy Nanomedicines (plataforma de antivirus de biología sintética), Androcyte (investigación de longevidad) y Nanokit (origami de ADN).</p>',
			social: {
				linkedin: 'https://www.linkedin.com/in/raymondmccauley/'
			}
		}
	];

	// Set by default the description of element 0, in this case "Julian"
	$('#js-hover-title').html(team[0].title);
	$('#js-hover-name').html(team[0].name);
	$('#js-hover-area').html(team[0].area);
	$('#js-hover-description').html(team[0].description);

	// Displays information dynamically when hovering over each team member
	$('.team-photo-img').mouseover(function() {
		var $id = $(this).attr('data-hover-id');
		var linkedin = '#js-hover-linkedin-' + $id;

		$(linkedin).attr('href', team[$id].social.linkedin);
		$('#js-hover-title').text(team[$id].title);
		$('#js-hover-name').text(team[$id].name);
		$('#js-hover-area').text(team[$id].area);
		$('#js-hover-description').html(team[$id].description);
	});
})();
