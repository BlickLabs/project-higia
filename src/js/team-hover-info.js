(function() {

  // Information from the team to show dynamically
  var title = 'Our team';
  var title_es = 'Nuestro Equipo';

  var title_ab = 'Advisory Board';
  var title_ab_es = 'Consejo Asesor';

  var team = [
    {
      title: title,
      title_es: title_es,
      name: 'Julián Rios',
      area: 'CEO',
      description_es: 'Mis principales tareas como Director ejecutivo de Higia Technologies consisten en cerciorarse de que la visión de la compañía sea la correcta, proveer los recursos necesarios para la creación de productos, construir la cultura corporativa, tomar las decisiones estratégicas para el óptimo funcionamiento de la empresa y supervisar el funcionamiento de la misma.<p>Actualmente, soy el primer y más jóven mexicano en ser galardonado con el Premio Global al Estudiante Emprendedor y la medalla Sol Azteca al emprendimiento por parte de la Presidencia de la República.</p>',
      description: 'My main duties as Chief Executive Officer of Higia Technologies are to ensure that the company\'s vision is correct, provide the necessary resources for product creation, build the corporate culture, make strategic decisions for the optimal functioning of the company and supervise the operation of the same.<p>Currently, I am the first and youngest Mexican to be awarded the Global Entrepreneurial Student Award and the Sol Azteca medal to the initiative by the Presidency of the Republic.</p>',
      social: {
        linkedin: 'https://www.linkedin.com/in/juli%C3%A1n-r%C3%ADos-cant%C3%BA-903b76106'
      }
    },
    {
      title: title,
      title_es: title_es,
      name: 'Alejandro Casar',
      area: 'Co-AIO',
      description_es: 'Mi trabajo consiste supervisar las áreas de inteligencia artificial y desarrollar algoritmos para la detección oportuna del pié diabético, cáncer de mama, cáncer testicular y prostático a partir de los datos obtenidos por nuestros productos.<p>Soy un graduado de Ingeniero en Sistemas  Digitales y Robótica del Tecnológico de Monterrey y, actualmente, estudio una maestría en inteligencia artificial haciendo investigación en algoritmos para detección de cáncer de mama.</p>',
      description: 'My job is to supervise the areas of artificial intelligence and develop algorithms for the timely detection of diabetic foot, breast cancer, testicular and prostate cancer based on the data obtained by our products. <p>I am a graduate of Digital Systems and Robotics Engineer at Tecnológico de Monterrey and I am currently studying a master\'s degree in artificial intelligence doing research on algorithms for detecting breast cancer.</p>',
      social: {
        linkedin: 'https://www.linkedin.com/in/alexcasar/'
      }
    },
    {
      title: title,
      title_es: title_es,
      name: 'Raymundo González',
      area: 'Co-AIO',
      description_es: 'Mi trabajo consiste supervisar las áreas de inteligencia artificial y desarrollar algoritmos para la detección oportuna del pié diabético, cáncer de mama, cáncer testicular y prostático a partir de los datos obtenidos por nuestros productos.<p>Soy un estudiante de Ciencias Computacionales y estadística en Minerva Schools KGI. En el pasado, he fungido como pasante investigador en Audible, compañía de Amazon, y colaborador en proyectos de investigación en el Laboratorio de Inteligencia Artificial de la Universidad de Stanford.</p>',
      description: 'My job is to supervise the areas of artificial intelligence and develop algorithms for the timely detection of diabetic foot, breast cancer, testicular and prostate cancer based on the data obtained by our products.<p>I am a student of Computer Science and Statistics at Minerva Schools KGI. In the past, I have served as a research intern at Audible, an Amazon company, and a research collaborator at the Stanford University Artificial Intelligence Laboratory.</p>',
      social: {
        linkedin: 'https://www.linkedin.com/in/raymundo-gzz/'
      }
    },
    {
      title: title,
      title_es: title_es,
      name: 'Fernando López',
      area: 'DSF',
      description_es: 'En Higia funjo como director del área de software, desde la parte orientada al cliente hasta el servidor en nuestra aplicación y sitio web.<p>También es mi deber detectar e implementar nuevas tecnologías para integrar en nuestro desarrollo con el objetivo de mejorar nuestros productos.</p>',
      description: 'In Higia, I work as director of the software area, from the client-side to the server in our application and website.<p>It is also my duty to detect and implement new technologies to integrate into our development with the aim of improving our products.</p>',
      social: {
        linkedin: 'https://www.linkedin.com/in/fernando-l%C3%B3pez-mart%C3%ADnez-774823111/'
      }
    },
    {
      title: title,
      title_es: title_es,
      name: 'Antonio Torres',
      area: 'CTO',
      description_es: 'Mi trabajo consiste en mirar hacia el futuro antes de que suceda. Tratar de arriesgarse y tomar decisiones innovadoras que lleven a la empresa a una posición más valiosa en el corto y largo plazo.<p>Soy el encargado de supervisar las áreas de tecnología y que nuestros productos y servicios cuenten con la calidad esperada.</p>',
      description: 'My job is to look into the future before it happens. Try to take risks and make innovative decisions that take the company to a more valuable position in the short and long term.<p>I am in charge of supervising the areas of technology and that our products and services have the expected quality.</p>',
      social: {
        linkedin: 'https://www.linkedin.com/in/jantoniotorres/'
      }
    },
    {
      title: title,
      title_es: title_es,
      name: 'José Ángel Lavariega',
      area: 'CINO',
      description_es: 'Como Jefe de Innovación es mi deber asegurarme que nuestros procesos sean innovadores, permanezcan realistas y que sigamos una rigor profesional y científico en nuestras publicaciones, investigaciones y prototipos.<p>En las primeras etapas de nuestra compañía me he dedicado a realizar profundas investigaciones de mercado y asegurarme de que la tecnología implementada en nuestro producto sea la correcta.</p>',
      description: 'As Head of Innovation it is my duty to ensure that our processes are innovative, remain realistic and that we follow a professional and scientific rigor in our publications, research and prototypes.<p>In the early stages of our company I have been dedicated to deep market research and to ensure that the technology implemented in our product is correct.</p>',
      social: {
        linkedin: 'https://www.linkedin.com/in/jose-angellavariegagomez/'
      }
    },
    {
      title: title,
      title_es: title_es,
      name: 'Martín Urtíz',
      area: 'AID',
      description_es: 'Como parte del equipo de inteligencia artificial de Higia es mi deber el siempre estar actualizado con las nuevas tecnologías que podrían mejorar nuestros algoritmos de predicción.<p>También soy responsable del desarrollo de nuestras propias tecnologías, las cuales catapultan a nuestros algoritmos a ser los mejores en sus predicciones.</p>',
      description: 'As part of the artificial intelligence team of Higia it is my duty to be always up to date with the new technologies that might improve our prediction algorithms.<p>I\'m also responsable for the development of our own technologies, which trigger our algorithms to be top of the art in their predictions.</p>',
      social: {
        linkedin: '#'
      }
    },
    {
      title: title,
      title_es: title_es,
      name: 'Rebecca Canales',
      area: 'SAI',
      description_es: 'En Higia colaboro en el área de software específicamente en el diseño, documentación y codificación de la base de datos.<p>Como mujer soy partícipe de dialogar sobre la comodidad y el diseño que llevará EVA, para demostrar que es un producto creado con la mejor calidad en cuanto a la tecnología utilizada, la investigación y el esfuerzo de todo el equipo. Con la finalidad de que los usuarios que porten a EVA tengan la confianza de que es un producto cómodo, seguro y fácil de utilizar.</p>',
      description: 'In Higia I collaborate in the area of ​​software specifically in the design, documentation and coding of the database.<p>As a woman, I am a participant in discussing the comfort and design that EVA will carry, to demonstrate that it is a product created with the best quality, in terms of the technology used, the research and the effort of the whole team. In order that users who carry EVA have the confidence that it is comfortable, safe and easy to use.</p>',
      social: {
        linkedin: 'https://www.linkedin.com/in/rebecca-irene-canales-andonie-5a5a1a144/'
      }
    },
    {
      title: title,
      title_es: title_es,
      name: 'Vicente Ferrara',
      area: 'HDI',
      description_es: 'Vicente Ferrara es un estudiante de Sistemas Digitales y Robótica en el Tecnológico de Monterrey Campus Monterrey. Y ha trabajado como Investigador en University of Texas MD Anderson Pulmonary Laboratory durante el verano 2016. Vicente realiza prácticas profesionales en Higia en el área de desarrollo de hardware.',
      description: 'Vicente Ferrara is a student of Digital Systems and Robotics at the Tecnológico de Monterrey Campus Monterrey. He has worked as a Researcher at the University of Texas MD Anderson Pulmonary Laboratory during the summer of 2016. Vicente is a professional intern at Higia in the area of hardware development.',
      social: {
        linkedin: '#'
      }
    },
    {
      title: title_ab,
      title_es: title_ab_es,
      name: 'Antonio Rallo',
      area: 'S&TABM',
      description_es: 'Antonio estudió biología marina en la Universidad de California. Fue Director de Tecnología Multimedia en Apple Europa, Director de Tecnología y Estrategia en Grupo Televisa, actualmente es el Cofundador de Kio Networks y Director Ejecutivo del fondo de inversion ID345',
      description: 'Antonio studied marine biology at the University of California. He was Director of Multimedia Technology at Apple Europe, Director of Technology and Strategy at Grupo Televisa, he is currently the Cofounder of Kio Networks and the Executive Director of the ID345 investment fund.',
      social: {
        linkedin: '#'
      }
    },
    {
      title: title_ab,
      title_es: title_ab_es,
      name: 'Felicia Knaul',
      area: 'S&TABM',
      description_es: 'La Dra. Felicia Knaul es Profesora Asociada de la Escuela de Medicina de Harvard y Directora de la Iniciativa de Equidad Global de Harvard, donde actúa como Co-directora de la Secretaría del Grupo de Trabajo Mundial sobre Acceso Ampliado al Cuidado y Control del Cáncer en los Países en Desarrollo. De igual manera, es economista de la Fundación Mexicana de la Salud.<p>Después de ser diagnosticado con cáncer de mama en 2007, el Dr. Knaul fundó la fundación Tómatelo a Pecho, una organización mexicana sin fines de lucro que promueve investigaciones, defensa, concientización e iniciativas de detección temprana para el cáncer de mama en América Latina. Ha publicado artículos sobre el cáncer de mama en diversos países y medios. Su libro relatando su experiencia personal con cáncer de mama y como fundador de la organización Tómatelo a pecho, fue lanzado en el 2009 y ampliado y publicado en inglés en 2012 titulado Beauty without the Breast.</p>',
      description: 'Dr. Felicia Knaul is an Associate Professor at Harvard Medical School and Director of the Harvard Global Equity Initiative where she serves as the Co-director of the Secretariat for the Global Task Force on Expanded Access to Cancer Care and Control in Developing Countries, She is also Senior Economist at the Mexican Health Foundation where she has led a research group focused on health and the economy since 2000. <p>After being diagnosed with breast cancer in 2007, Dr. Knaul founded Cáncer de Mama: Tómatelo a Pecho a Mexican civil society organization that promotes research, advocacy, awareness, and early detection initiatives for breast cancer in Latin America. She has published articles on the topic of breast cancer in low and middle income countries in academic journals, lectures extensively on the topic both from the point of view of a patient-advocate and a health systems researcher. Her book recounting her personal experience with breast cancer and as founder of a civil society organization in Mexico, was released as Tómatelo a Pecho in 2009, and expanded and published in English in 2012 titled Beauty without the Breast.</p>',
      social: {
        linkedin: 'https://www.linkedin.com/in/felicia-marie-knaul-68a5ab50/'
      }
    },
    {
      title: title_ab,
      title_es: title_ab_es,
      name: 'Julio Frenk',
      area: 'S&TABM',
      description_es: 'Julio Frenk fungió como Ministro de Salud de México de 2000 a 2006. Allí definió una ambiciosa agenda para reformar el sistema de salud del país e introdujo un programa de cobertura universal integral, conocido como Seguro Popular, que amplió el acceso a la atención médica para más de 55 millones de mexicanos previamente no asegurados.<p>Fue el director general y fundador del Instituto Nacional de Salud Pública en México, una de las principales instituciones de este tipo en el mundo. También se desempeñó como director ejecutivo a cargo de la Evidencia y la Información para la Política de la Organización Mundial de la Salud. El Dr. Frenk se convirtió en el sexto presidente de la Universidad de Miami en agosto de 2015.</p>',
      description: 'Julio Frenk served as the Minister of Health of Mexico from 2000 to 2006. There he pursued an ambitious agenda to reform the nation’s health system and introduced a program of comprehensive universal coverage, known as Seguro Popular, which expanded access to health care for more than 55 million previously uninsured Mexicans.<p>He was the founding director-general of the National Institute of Public Health in Mexico, one of the leading institutions of its kind in the developing world. He also served as executive director in charge of Evidence and Information for Policy at the World Health Organization. Dr. Frenk became the sixth president of the University of Miami in August of 2015.</p>',
      social: {
        linkedin: '#'
      }
    },
    {
      title: title_ab,
      title_es: title_ab_es,
      name: 'Raymond McCauley',
      area: 'S&TABM',
      description_es: 'Raymond McCauley es un científico, ingeniero y empresario que trabaja a la vanguardia de la biotecnología. Raymond explora cómo la aplicación de la tecnología a la biología, la genética, la medicina y la agricultura está afectando a cada uno de nosotros. Raymond es Presidente de la Biotech Track de Singularity University, un grupo de reflexión de Silicon Valley dedicado a capacitar a los líderes sobre tecnologías exponenciales. Es Cofundador y Arquitecto en Jefe de BioCurious, también forma parte del equipo que desarrolló la secuenciación de ADN de próxima generación en Illumina, donde trabajó en bioinformática, secuenciación del cáncer y genómica personal.<p>Su obra y su historia han sido publicadas en Wired, Forbes, Time y Nature. El trabajo de posgrado de Raymond incluye estudios en Texas A & M University, Stanford y UC Berkeley en ingeniería eléctrica, informática, biofísica, bioquímica, bioinformática y nanotecnología. Raymond desarrolla y asesora a una variedad de empresas y organizaciones, incluyendo Genomera (pruebas clínicas de la muchedumbre), Vecoy Nanomedicines (plataforma de antivirus de biología sintética), Androcyte (investigación de longevidad) y Nanokit (origami de ADN).</p>',
      description: 'Raymond McCauley is a scientist, engineer, and entrepreneur working at the forefront of biotechnology. Raymond explores how applying technology to life \' biology, genetics, medicine, agriculture \' is affecting every one of us. Raymond is: Chair of the Biotech Track at Singularity University, a Silicon Valley think tank devoted to training leaders about exponential technologies. Co-founder and Chief Architect for BioCurious, he is also part of the team that developed next generation DNA sequencing at Illumina, where he worked in bioinformatics, cancer sequencing, and personal genomics.<p>His work and story have been featured in Wired, Forbes, Time, and Nature. Raymond\'s postgraduate work includes studies at Texas A&M University, Stanford and UC Berkeley in electrical engineering, computer science, biophysics, biochemistry, bioinformatics, and nanotechnology. Raymond develops and advises a variety of companies and organizations, including Genomera (crowd-sourced clinical trials), Vecoy Nanomedicines (synthetic biology anti-virus platform), Androcyte (longevity research), and Nanokit (DNA origami).</p>',
      social: {
        linkedin: 'https://www.linkedin.com/in/raymondmccauley/'
      }
    }
  ];

  // Set by default the description of element 0, in this case "Julian"
  if (location.pathname === '/team-es.html' || '/project-higia/team-es.html') {
    $('#js-hover-title').html(team[0].title_es);
    $('#js-hover-name').html(team[0].name);
    $('#js-hover-area').html(team[0].area);
    $('#js-hover-description').html(team[0].description_es);
  } else if (location.pathname === '/team.html' || '/project-higia/team.html') {
    $('#js-hover-title').html(team[0].title);
    $('#js-hover-name').html(team[0].name);
    $('#js-hover-area').html(team[0].area);
    $('#js-hover-description').html(team[0].description);
  }


  // Displays information dynamically when hovering over each team member
  $('.team-photo-img').mouseover(function() {
    var $id = $(this).attr('data-hover-id');
    var $lang = $(this).attr('data-lang');
    var linkedin = '#js-hover-linkedin-' + $id;

    if ($lang === 'es') {
      $(linkedin).attr('href', team[$id].social.linkedin);
      $('#js-hover-title').text(team[$id].title_es);
      $('#js-hover-name').text(team[$id].name);
      $('#js-hover-area').text(team[$id].area);
      $('#js-hover-description').html(team[$id].description_es);
    } else if ($lang === 'en') {
      $(linkedin).attr('href', team[$id].social.linkedin);
      $('#js-hover-title').text(team[$id].title);
      $('#js-hover-name').text(team[$id].name);
      $('#js-hover-area').text(team[$id].area);
      $('#js-hover-description').html(team[$id].description);
    }
  });
})();
