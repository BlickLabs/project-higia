function resizeContainer(){var e=document.getElementById("absolute-container-a").clientHeight;partContainerA.style.height=e+"px";var e=document.getElementById("absolute-container-b").clientHeight;partContainerB.style.height=e+"px"}function evaFeatures(){strokes.forEach(function(e){e.classList.toggle("stroke-anim")}),bubbles.forEach(function(e){e.classList.toggle("bubble-anim")}),features.forEach(function(e){e.classList.toggle("feature-anim")})}function moveToCenter(){$("html body").stop().animate({scrollTop:850},500,"swing")}function stopVideo(){gtkubBg.classList.add("video-hidden"),gtkubVideo.pause()}function doSomething(e){e>30?(siteNavbar.classList.add("nav-white-bg"),siteNavbar.classList.remove("nav-transparent-bg")):(siteNavbar.classList.add("nav-transparent-bg"),siteNavbar.classList.remove("nav-white-bg"))}function homePressCarroussel(){window.matchMedia("(max-width: 500px)").matches?($(".articles").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"0px",prevArrow:'<button class="slick-prev slick-arrow buttont buttont-l"><img class="" src="img/slider-arrow/left.svg" alt=""></button>',nextArrow:'<button class="slick-next slick-arrow buttont buttont-r"><img class="" src="img/slider-arrow/right.svg" alt=""></button>'}),evaFeatures()):$(".articles").slick("unslick")}function changeLineColor(){var e=window.scrollY;e<.6*sectionOne.clientHeight?lines[0].classList.add("active"):lines[0].classList.remove("active"),e>=sectionTwo.offsetTop-.4*sectionOne.clientHeight&&e<.6*sectionTwo.clientHeight+sectionTwo.offsetTop?lines[1].classList.add("active"):(lines[1].classList.remove("active"),(evaMatchMedia=!0)&&evaFeatures()),e>=sectionThree.offsetTop-.4*sectionTwo.clientHeight&&e<.6*sectionThree.clientHeight+sectionThree.offsetTop?lines[2].classList.add("active"):lines[2].classList.remove("active"),e>=sectionFour.offsetTop-.4*sectionThree.clientHeight&&e<.5*sectionFour.clientHeight+sectionFour.offsetTop?lines[3].classList.add("active"):lines[3].classList.remove("active"),e>=sectionFive.offsetTop-.5*sectionFour.clientHeight&&e<.6*sectionFive.clientHeight+sectionFive.offsetTop?(lines[4].classList.add("active"),circuitMask.classList.add("circuit-anim")):lines[4].classList.remove("active"),e>=sectionSix.offsetTop-.4*sectionFive.clientHeight&&e<.6*sectionSix.clientHeight+sectionSix.offsetTop?lines[5].classList.add("active"):lines[5].classList.remove("active"),e>=sectionSeven.offsetTop-.4*sectionSix.clientHeight&&e<sectionSeven.clientHeight+sectionSeven.offsetTop?lines[6].classList.add("active"):lines[6].classList.remove("active"),e>=sectionSeven.offsetTop+.4*sectionSeven.clientHeight?(lines[6].classList.remove("active"),linesContainer.classList.add("hidden")):linesContainer.classList.remove("hidden")}!function(){$.validator.setDefaults({invalidHandler:function(e,a){var i=$(this);i.find(".form-message").removeClass(i.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var a=$(e).serialize(),i=$(e).find("select, input, textarea, button").not("[disabled]"),n=$(e).find(".form-message"),t=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),o=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),s=function(e){var a=e?t:o;i.removeAttr("disabled"),n.removeClass(e?"error":"success"),n.addClass(e?"success":"error"),n.html(a)};i.attr("disabled","disabled"),n.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:a}).done(function(a){s(1===parseInt(a)),e.reset()}).fail(function(){s(!1)}).always(function(){i.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}();var partContainerA=document.getElementById("home-a-particles-container"),partContainerB=document.getElementById("home-b-particles-container");"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-higia/index.html"!==window.location.pathname&&"/project-higia/"!==window.location.pathname||(window.addEventListener("scroll",resizeContainer),resizeContainer());var strokes=document.querySelectorAll(".stroke"),bubbles=document.querySelectorAll(".bubble"),features=document.querySelectorAll(".eva-feature-name"),evaMatchMedia;if(evaMatchMedia=!!window.matchMedia("(max-width: 500px)").matches,"/index.html"===window.location.pathname||"/"===window.location.pathname||"/project-higia/index.html"===window.location.pathname||"/project-higia/"===window.location.pathname){var $evaButton=document.getElementById("eva-button"),$hiddenDescription=document.getElementById("hidden-description");$evaButton.addEventListener("click",function(){if($hiddenDescription.classList.toggle("active"),$evaButton.classList.toggle("active"),evaFeatures(),$hiddenDescription.classList.contains("active")){var e=document.getElementById("absolute-container-a").clientHeight;partContainerA.style.height=e+500+"px",setTimeout(moveToCenter,400)}else{var e=document.getElementById("absolute-container-a").clientHeight;partContainerA.style.height=e-500+"px"}partContainerA.style.transition="height .8s ease"})}if("/index.html"===window.location.pathname||"/"===window.location.pathname||"/project-higia/index.html"===window.location.pathname||"/project-higia/"===window.location.pathname){var gtkubBg=document.getElementById("gtkub-bg"),gtkubVideo=document.getElementById("gtkub-video"),gtkubButton=document.getElementById("gtkub-button"),gtkubClose=document.getElementById("gtkub-close");gtkubButton.addEventListener("click",function(){gtkubBg.classList.remove("video-hidden"),gtkubVideo.currentTime=0,gtkubVideo.play()}),gtkubClose.addEventListener("click",function(){stopVideo()}),gtkubBg.addEventListener("click",function(e){e.target===gtkubBg&&stopVideo()})}var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".site-navbar");if(doSomething(window.scrollY),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),"/index.html"===window.location.pathname||"/"===window.location.pathname||"/project-higia/index.html"===window.location.pathname||"/project-higia/"===window.location.pathname){var partConfig="js/higia-particles_config.json";particlesJS.load("home-a-particles-container",partConfig),particlesJS.load("home-b-particles-container",partConfig)}var lYear=(new Date).getFullYear();if(document.querySelector("#license-year").innerHTML=lYear,function(){function e(e){$(e.target).is(".site-navbar__menu-trigger")||$(e.target).is(".site-navbar__menu-container")||$(e.target).closest(".site-navbar__menu-container").length||!$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")||(e.preventDefault(),$(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll"))}function a(){$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")?($(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll")):($(".site-navbar__menu-container").addClass("site-navbar__menu-container--show-menu"),$("body").addClass("noscroll"))}var i=window.matchMedia("(max-width: 876px)");i.matches?($("body")[0].addEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").click(a)):($("body")[0].removeEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll")),$(window).resize(function(){$("body")[0].removeEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll"),$(".site-navbar__menu-container").removeClass("show-menu"),i.matches&&($("body")[0].addEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").click(a))}),$("#navbar-close").on("click touchstart",function(e){e.preventDefault(),$(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll")})}(),function(e,a){"function"==typeof define&&define.amd?define(["jquery"],function(i){return a(e,i)}):"object"==typeof exports?a(e,require("jquery")):a(e,e.jQuery||e.Zepto)}(this,function(e,a){"use strict";function i(e){if(k&&"none"===e.css("animation-name")&&"none"===e.css("-webkit-animation-name")&&"none"===e.css("-moz-animation-name")&&"none"===e.css("-o-animation-name")&&"none"===e.css("-ms-animation-name"))return 0;var a,i,n,t,o=e.css("animation-duration")||e.css("-webkit-animation-duration")||e.css("-moz-animation-duration")||e.css("-o-animation-duration")||e.css("-ms-animation-duration")||"0s",s=e.css("animation-delay")||e.css("-webkit-animation-delay")||e.css("-moz-animation-delay")||e.css("-o-animation-delay")||e.css("-ms-animation-delay")||"0s",r=e.css("animation-iteration-count")||e.css("-webkit-animation-iteration-count")||e.css("-moz-animation-iteration-count")||e.css("-o-animation-iteration-count")||e.css("-ms-animation-iteration-count")||"1";for(o=o.split(", "),s=s.split(", "),r=r.split(", "),t=0,i=o.length,a=Number.NEGATIVE_INFINITY;t<i;t++)(n=parseFloat(o[t])*parseInt(r[t],10)+parseFloat(s[t]))>a&&(a=n);return a}function n(){if(a(document).height()<=a(window).height())return 0;var e,i,n=document.createElement("div"),t=document.createElement("div");return n.style.visibility="hidden",n.style.width="100px",document.body.appendChild(n),e=n.offsetWidth,n.style.overflow="scroll",t.style.width="100%",n.appendChild(t),i=t.offsetWidth,n.parentNode.removeChild(n),e-i}function t(){if(!$){var e,i,t=a("html"),o=d("is-locked");t.hasClass(o)||(i=a(document.body),e=parseInt(i.css("padding-right"),10)+n(),i.css("padding-right",e+"px"),t.addClass(o))}}function o(){if(!$){var e,i,t=a("html"),o=d("is-locked");t.hasClass(o)&&(i=a(document.body),e=parseInt(i.css("padding-right"),10)-n(),i.css("padding-right",e+"px"),t.removeClass(o))}}function s(e,a,i,n){var t=d("is",a),o=[d("is",y.CLOSING),d("is",y.OPENING),d("is",y.CLOSED),d("is",y.OPENED)].join(" ");e.$bg.removeClass(o).addClass(t),e.$overlay.removeClass(o).addClass(t),e.$wrapper.removeClass(o).addClass(t),e.$modal.removeClass(o).addClass(t),e.state=a,!i&&e.$modal.trigger({type:a,reason:n},[{reason:n}])}function r(e,n,t){var o=0,s=function(e){e.target===this&&o++},r=function(e){e.target===this&&0==--o&&(a.each(["$bg","$overlay","$wrapper","$modal"],function(e,a){t[a].off(f+" "+w)}),n())};a.each(["$bg","$overlay","$wrapper","$modal"],function(e,a){t[a].on(f,s).on(w,r)}),e(),0===i(t.$bg)&&0===i(t.$overlay)&&0===i(t.$wrapper)&&0===i(t.$modal)&&(a.each(["$bg","$overlay","$wrapper","$modal"],function(e,a){t[a].off(f+" "+w)}),n())}function c(e){e.state!==y.CLOSED&&(a.each(["$bg","$overlay","$wrapper","$modal"],function(a,i){e[i].off(f+" "+w)}),e.$bg.removeClass(e.settings.modifier),e.$overlay.removeClass(e.settings.modifier).hide(),e.$wrapper.hide(),o(),s(e,y.CLOSED,!0))}function l(e){var a,i,n,t,o={};for(e=e.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),a=e.split(","),t=0,i=a.length;t<i;t++)a[t]=a[t].split(":"),n=a[t][1],("string"==typeof n||n instanceof String)&&(n="true"===n||"false"!==n&&n),("string"==typeof n||n instanceof String)&&(n=isNaN(n)?n:+n),o[a[t][0]]=n;return o}function d(){for(var e=h,a=0;a<arguments.length;++a)e+="-"+arguments[a];return e}function m(){var e,i,n=location.hash.replace("#","");if(n){try{i=a("[data-"+v+'-id="'+n+'"]')}catch(e){}i&&i.length&&(e=a[v].lookup[i.data(v)])&&e.settings.hashTracking&&e.open()}else p&&p.state===y.OPENED&&p.settings.hashTracking&&p.close()}function u(e,i){var n=a(document.body),t=n,o=this;o.settings=a.extend({},b,i),o.index=a[v].lookup.push(o)-1,o.state=y.CLOSED,o.$overlay=a("."+d("overlay")),null!==o.settings.appendTo&&o.settings.appendTo.length&&(t=a(o.settings.appendTo)),o.$overlay.length||(o.$overlay=a("<div>").addClass(d("overlay")+" "+d("is",y.CLOSED)).hide(),t.append(o.$overlay)),o.$bg=a("."+d("bg")).addClass(d("is",y.CLOSED)),o.$modal=e.addClass(h+" "+d("is-initialized")+" "+o.settings.modifier+" "+d("is",y.CLOSED)).attr("tabindex","-1"),o.$wrapper=a("<div>").addClass(d("wrapper")+" "+o.settings.modifier+" "+d("is",y.CLOSED)).hide().append(o.$modal),t.append(o.$wrapper),o.$wrapper.on("click."+h,"[data-"+v+'-action="close"]',function(e){e.preventDefault(),o.close()}),o.$wrapper.on("click."+h,"[data-"+v+'-action="cancel"]',function(e){e.preventDefault(),o.$modal.trigger(C.CANCELLATION),o.settings.closeOnCancel&&o.close(C.CANCELLATION)}),o.$wrapper.on("click."+h,"[data-"+v+'-action="confirm"]',function(e){e.preventDefault(),o.$modal.trigger(C.CONFIRMATION),o.settings.closeOnConfirm&&o.close(C.CONFIRMATION)}),o.$wrapper.on("click."+h,function(e){a(e.target).hasClass(d("wrapper"))&&o.settings.closeOnOutsideClick&&o.close()})}var p,g,v="remodal",h=e.REMODAL_GLOBALS&&e.REMODAL_GLOBALS.NAMESPACE||v,f=a.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(e){return e+"."+h}).join(" "),w=a.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(e){return e+"."+h}).join(" "),b=a.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},e.REMODAL_GLOBALS&&e.REMODAL_GLOBALS.DEFAULTS),y={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},C={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},k=function(){var e=document.createElement("div").style;return void 0!==e.animationName||void 0!==e.WebkitAnimationName||void 0!==e.MozAnimationName||void 0!==e.msAnimationName||void 0!==e.OAnimationName}(),$=/iPad|iPhone|iPod/.test(navigator.platform);u.prototype.open=function(){var e,i=this;i.state!==y.OPENING&&i.state!==y.CLOSING&&(e=i.$modal.attr("data-"+v+"-id"),e&&i.settings.hashTracking&&(g=a(window).scrollTop(),location.hash=e),p&&p!==i&&c(p),p=i,t(),i.$bg.addClass(i.settings.modifier),i.$overlay.addClass(i.settings.modifier).show(),i.$wrapper.show().scrollTop(0),i.$modal.focus(),r(function(){s(i,y.OPENING)},function(){s(i,y.OPENED)},i))},u.prototype.close=function(e){var i=this;i.state!==y.OPENING&&i.state!==y.CLOSING&&i.state!==y.CLOSED&&(i.settings.hashTracking&&i.$modal.attr("data-"+v+"-id")===location.hash.substr(1)&&(location.hash="",a(window).scrollTop(g)),r(function(){s(i,y.CLOSING,!1,e)},function(){i.$bg.removeClass(i.settings.modifier),i.$overlay.removeClass(i.settings.modifier).hide(),i.$wrapper.hide(),o(),s(i,y.CLOSED,!1,e)},i))},u.prototype.getState=function(){return this.state},u.prototype.destroy=function(){var e,i=a[v].lookup;c(this),this.$wrapper.remove(),delete i[this.index],0===(e=a.grep(i,function(e){return!!e}).length)&&(this.$overlay.remove(),this.$bg.removeClass(d("is",y.CLOSING)+" "+d("is",y.OPENING)+" "+d("is",y.CLOSED)+" "+d("is",y.OPENED)))},a[v]={lookup:[]},a.fn[v]=function(e){var i,n;return this.each(function(t,o){n=a(o),null==n.data(v)?(i=new u(n,e),n.data(v,i.index),i.settings.hashTracking&&n.attr("data-"+v+"-id")===location.hash.substr(1)&&i.open()):i=a[v].lookup[n.data(v)]}),i},a(document).ready(function(){a(document).on("click","[data-"+v+"-target]",function(e){e.preventDefault();var i=e.currentTarget,n=i.getAttribute("data-"+v+"-target"),t=a("[data-"+v+'-id="'+n+'"]');a[v].lookup[t.data(v)].open()}),a(document).find("."+h).each(function(e,i){var n=a(i),t=n.data(v+"-options");t?("string"==typeof t||t instanceof String)&&(t=l(t)):t={},n[v](t)}),a(document).on("keydown."+h,function(e){p&&p.settings.closeOnEscape&&p.state===y.OPENED&&27===e.keyCode&&p.close()}),a(window).on("hashchange."+h,m)})}),"/index.html"===window.location.pathname||"/"===window.location.pathname||"/project-higia/index.html"===window.location.pathname||"/project-higia/"===window.location.pathname){var sOneTitle=document.getElementById("section_one-title"),span=document.getElementById("topink");sOneTitle.addEventListener("mouseover",function(){span.classList.add("lifePink")})}$(".eva-carousel").slick({infinite:!0,dots:!0,slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"10px 30px",arrows:!0,prevArrow:' <button class="arrow-slider arrow-left"><img class="arrow" src="img/slider-arrow/left.svg" alt=""></button>',nextArrow:' <button class="arrow-slider arrow-right"><img class="arrow" src="img/slider-arrow/right.svg" alt=""></button>'}),$(".section_four-slider-container").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,centerMode:!0,centerPadding:"0px",prevArrow:' <button class="arrow-slider arrow-left"><img class="arrow" src="img/slider-arrow/left.svg" alt=""></button>',nextArrow:' <button class="arrow-slider arrow-right"><img class="arrow" src="img/slider-arrow/right.svg" alt=""></button>'}),window.addEventListener("resize",homePressCarroussel),homePressCarroussel(),$(".section-press-carousel").slick({slidesToShow:2,slidesToScroll:1,centerPadding:"5px",centerMode:!0,prevArrow:'<img class="slick-prev" src="img/slider-arrow/left.svg">',nextArrow:'<img class="slick-next" src="img/slider-arrow/right.svg">',responsive:[{breakpoint:414,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}}]});var scroll=new SmoothScroll('a[href*="#section_"]'),sectionOne=document.getElementById("section_one"),sectionTwo=document.getElementById("section_two"),sectionThree=document.getElementById("section_three"),sectionFour=document.getElementById("section_four"),sectionFive=document.getElementById("section_five"),sectionSix=document.getElementById("section_six"),sectionSeven=document.getElementById("home-b-particles-container"),linesContainer=document.querySelector(".lines-container"),lines=document.querySelectorAll(".line"),circuitMask=document.querySelector(".circuit-mask");"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-higia/index.html"!==window.location.pathname&&"/project-higia/"!==window.location.pathname||(window.addEventListener("scroll",changeLineColor),changeLineColor()),function(){function e(e){var a=["julian","alejandro","raymundo","fernando","antonio","jose"];e.matches?i.each(function(e,i){i.setAttribute("data-remodal-target",a[e])}):i.each(function(e,a){a.removeAttribute("data-remodal-target")})}var a=window.matchMedia("(max-width: 414px)"),i=$(".team-photo-img");a.matches||i.each(function(e,a){a.removeAttribute("data-remodal-target")}),a.addListener(e)}(),function(){var e=[{title:"Our team",name:"Julián Rios",area:"CEO",description:"Mis principales tareas como Director ejecutivo de Higia Technologies consisten en cerciorarse de que la visión de la compañía sea la correcta, proveer los recursos necesarios para la creación de productos, construir la cultura corporativa, tomar las decisiones estratégicas para el óptimo funcionamiento de la empresa y supervisar el funcionamiento de la misma.<p>Actualmente, soy el primer y más jóven mexicano en ser galardonado con el Premio Global al Estudiante Emprendedor y la medalla Sol Azteca al emprendimiento por parte de la Presidencia de la República.</p>",social:{linkedin:"https://www.linkedin.com/in/juli%C3%A1n-r%C3%ADos-cant%C3%BA-903b76106"}},{title:"Our team",name:"Alejandro Casar",area:"Co-AIO",description:"Mi trabajo consiste supervisar las áreas de inteligencia artificial y desarrollar algoritmos para la detección oportuna del pié diabético, cáncer de mama, cáncer testicular y prostático a partir de los datos obtenidos por nuestros productos.<p>Soy un graduado de Ingeniero en Sistemas  Digitales y Robótica del Tecnológico de Monterrey y, actualmente, estudio una maestría en inteligencia artificial haciendo investigación en algoritmos para detección de cáncer de mama.</p>",social:{linkedin:"https://www.linkedin.com/in/alexcasar/"}},{title:"Our team",name:"Raymundo González",area:"Co-AIO",description:"Mi trabajo consiste supervisar las áreas de inteligencia artificial y desarrollar algoritmos para la detección oportuna del pié diabético, cáncer de mama, cáncer testicular y prostático a partir de los datos obtenidos por nuestros productos.<p>Soy un estudiante de Ciencias Computacionales y estadística en Minerva Schools KGI. En el pasado, he fungido como pasante investigador en Audible, compañía de Amazon, y colaborador en proyectos de investigación en el Laboratorio de Inteligencia Artificial de la Universidad de Stanford.</p>",social:{linkedin:"https://www.linkedin.com/in/raymundo-gzz/"}},{title:"Our team",name:"Fernando López",area:"DSF",description:"En Higia funjo como director del área de software, desde la parte orientada al cliente hasta el servidor en nuestra aplicación y sitio web.<p>También es mi deber detectar e implementar nuevas tecnologías para integrar en nuestro desarrollo con el objetivo de mejorar nuestros productos.</p>",social:{linkedin:"https://www.linkedin.com/in/fernando-l%C3%B3pez-mart%C3%ADnez-774823111/"}},{title:"Our team",name:"Antonio Torres",area:"CTO",description:"Mi trabajo consiste en mirar hacia el futuro antes de que suceda. Tratar de arriesgarse y tomar decisiones innovadoras que lleven a la empresa a una posición más valiosa en el corto y largo plazo.<p>Soy el encargado de supervisar las áreas de tecnología y que nuestros productos y servicios cuenten con la calidad esperada.</p>",social:{linkedin:"https://www.linkedin.com/in/jantoniotorres/"}},{title:"Our team",name:"José Ángel Lavariega",area:"CINO",description:"Como Jefe de Innovación es mi deber asegurarme que nuestros procesos sean innovadores, permanezcan realistas y que sigamos una rigor profesional y científico en nuestras publicaciones, investigaciones y prototipos.<p>En las primeras etapas de nuestra compañía me he dedicado a realizar profundas investigaciones de mercado y asegurarme de que la tecnología implementada en nuestro producto sea la correcta.</p>",social:{linkedin:"https://www.linkedin.com/in/jose-angellavariegagomez/"}},{title:"Our team",name:"Martín Urtíz",area:"AID",description:"Como parte del equipo de inteligencia artificial de Higia es mi deber el siempre estar actualizado con las nuevas tecnologías que podrían mejorar nuestros algoritmos de predicción.<p>También soy responsable del desarrollo de nuestras propias tecnologías, las cuales catapultan a nuestros algoritmos a ser los mejores en sus predicciones.</p>",social:{linkedin:"#"}},{title:"Our team",name:"Rebecca Canales",area:"SAI",description:"En Higia colaboro en el área de software específicamente en el diseño, documentación y codificación de la base de datos.<p>Como mujer soy partícipe de dialogar sobre la comodidad y el diseño que llevará EVA, para demostrar que es un producto creado con la mejor calidad en cuanto a la tecnología utilizada, la investigación y el esfuerzo de todo el equipo. Con la finalidad de que los usuarios que porten a EVA tengan la confianza de que es un producto cómodo, seguro y fácil de utilizar.</p>",social:{linkedin:"https://www.linkedin.com/in/rebecca-irene-canales-andonie-5a5a1a144/"}},{title:"Our team",name:"Vicente Ferrara",area:"HDI",description:"Vicente Ferrara es un estudiante de Sistemas Digitales y Robótica en el Tecnológico de Monterrey Campus Monterrey. Y ha trabajado como Investigador en University of Texas MD Anderson Pulmonary Laboratory durante el verano 2016. Vicente realiza prácticas profesionales en Higia en el área de desarrollo de hardware.",social:{linkedin:"#"}},{title:"Advisory Board",name:"Antonio Rallo",area:"S&TABM",description:"Antonio estudió biología marina en la Universidad de California. Fue Director de Tecnología Multimedia en Apple Europa, Director de Tecnología y Estrategia en Grupo Televisa, actualmente es el Cofundador de Kio Networks y Director Ejecutivo del fondo de inversion ID345",social:{linkedin:"#"}},{title:"Advisory Board",name:"Felicia Knaul",area:"S&TABM",description:"La Dra. Felicia Knaul es Profesora Asociada de la Escuela de Medicina de Harvard y Directora de la Iniciativa de Equidad Global de Harvard, donde actúa como Co-directora de la Secretaría del Grupo de Trabajo Mundial sobre Acceso Ampliado al Cuidado y Control del Cáncer en los Países en Desarrollo. De igual manera, es economista de la Fundación Mexicana de la Salud.<p>Después de ser diagnosticado con cáncer de mama en 2007, el Dr. Knaul fundó la fundación Tómatelo a Pecho, una organización mexicana sin fines de lucro que promueve investigaciones, defensa, concientización e iniciativas de detección temprana para el cáncer de mama en América Latina. Ha publicado artículos sobre el cáncer de mama en diversos países y medios. Su libro relatando su experiencia personal con cáncer de mama y como fundador de la organización Tómatelo a pecho, fue lanzado en el 2009 y ampliado y publicado en inglés en 2012 titulado Beauty without the Breast.</p>",social:{linkedin:"https://www.linkedin.com/in/felicia-marie-knaul-68a5ab50/"}},{title:"Advisory Board",name:"Julio Frenk",area:"S&TABM",description:"Julio Frenk fungió como Ministro de Salud de México de 2000 a 2006. Allí definió una ambiciosa agenda para reformar el sistema de salud del país e introdujo un programa de cobertura universal integral, conocido como Seguro Popular, que amplió el acceso a la atención médica para más de 55 millones de mexicanos previamente no asegurados.<p>Fue el director general y fundador del Instituto Nacional de Salud Pública en México, una de las principales instituciones de este tipo en el mundo. También se desempeñó como director ejecutivo a cargo de la Evidencia y la Información para la Política de la Organización Mundial de la Salud. El Dr. Frenk se convirtió en el sexto presidente de la Universidad de Miami en agosto de 2015.</p>",social:{linkedin:"#"}},{title:"Advisory Board",name:"Raymond McCauley",area:"S&TABM",description:"Raymond McCauley es un científico, ingeniero y empresario que trabaja a la vanguardia de la biotecnología. Raymond explora cómo la aplicación de la tecnología a la biología, la genética, la medicina y la agricultura está afectando a cada uno de nosotros. Raymond es Presidente de la Biotech Track de Singularity University, un grupo de reflexión de Silicon Valley dedicado a capacitar a los líderes sobre tecnologías exponenciales. Es Cofundador y Arquitecto en Jefe de BioCurious, también forma parte del equipo que desarrolló la secuenciación de ADN de próxima generación en Illumina, donde trabajó en bioinformática, secuenciación del cáncer y genómica personal.<p>Su obra y su historia han sido publicadas en Wired, Forbes, Time y Nature. El trabajo de posgrado de Raymond incluye estudios en Texas A & M University, Stanford y UC Berkeley en ingeniería eléctrica, informática, biofísica, bioquímica, bioinformática y nanotecnología. Raymond desarrolla y asesora a una variedad de empresas y organizaciones, incluyendo Genomera (pruebas clínicas de la muchedumbre), Vecoy Nanomedicines (plataforma de antivirus de biología sintética), Androcyte (investigación de longevidad) y Nanokit (origami de ADN).</p>",social:{linkedin:"https://www.linkedin.com/in/raymondmccauley/"}}];$("#js-hover-title").html(e[0].title),$("#js-hover-name").html(e[0].name),$("#js-hover-area").html(e[0].area),$("#js-hover-description").html(e[0].description),$(".team-photo-img").mouseover(function(){var a=$(this).attr("data-hover-id"),i="#js-hover-linkedin-"+a;$(i).attr("href",e[a].social.linkedin),$("#js-hover-title").text(e[a].title),$("#js-hover-name").text(e[a].name),$("#js-hover-area").text(e[a].area),$("#js-hover-description").html(e[a].description)})}(),function(){$("#contact-form").validate({rules:{name:{required:!0},email:{required:!0,email:!0},message:{required:!0,minlength:1,maxlength:500}}})}();