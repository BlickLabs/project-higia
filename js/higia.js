function resizeContainer(){var e=document.getElementById("absolute-container-a").clientHeight;partContainerA.style.height=e+"px";var e=document.getElementById("absolute-container-b").clientHeight;partContainerB.style.height=e+"px"}function evaFeatures(){strokes.forEach(function(e){e.classList.toggle("stroke-anim")}),bubbles.forEach(function(e){e.classList.toggle("bubble-anim")}),features.forEach(function(e){e.classList.toggle("feature-anim")})}function moveToCenter(){$("html body").stop().animate({scrollTop:850},500,"swing")}function stopVideo(){gtkubBg.classList.add("video-hidden"),gtkubVideo.pause()}function doSomething(e){e>30?(siteNavbar.classList.add("nav-white-bg"),siteNavbar.classList.remove("nav-transparent-bg")):(siteNavbar.classList.add("nav-transparent-bg"),siteNavbar.classList.remove("nav-white-bg"))}!function(){$.validator.setDefaults({invalidHandler:function(e,a){var i=$(this);i.find(".form-message").removeClass(i.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var a=$(e).serialize(),i=$(e).find("select, input, textarea, button").not("[disabled]"),t=$(e).find(".form-message"),n=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),o=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),r=function(e){var a=e?n:o;i.removeAttr("disabled"),t.removeClass(e?"error":"success"),t.addClass(e?"success":"error"),t.html(a)};i.attr("disabled","disabled"),t.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:a}).done(function(a){r(1===parseInt(a)),e.reset()}).fail(function(){r(!1)}).always(function(){i.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}();var indexLocation;"/"!==window.location.pathname&&"/index.html"!==window.location.pathname&&"/index-es.html"!==window.location.pathname&&"/project-higia/"!==window.location.pathname&&"/project-higia/index.html"!==window.location.pathname&&"/project-higia/index-es.html"!==window.location.pathname||(indexLocation=!0);var partContainerA=document.getElementById("home-a-particles-container"),partContainerB=document.getElementById("home-b-particles-container");indexLocation&&(window.addEventListener("scroll",resizeContainer),resizeContainer());var strokes=document.querySelectorAll(".stroke"),bubbles=document.querySelectorAll(".bubble"),features=document.querySelectorAll(".eva-feature-name"),evaMatchMedia;if(evaMatchMedia=!!window.matchMedia("(max-width: 500px)").matches,indexLocation){var $evaButton=document.getElementById("eva-button"),$hiddenDescription=document.getElementById("hidden-description");$evaButton.addEventListener("click",function(){if($hiddenDescription.classList.toggle("active"),$evaButton.classList.toggle("active"),evaFeatures(),$hiddenDescription.classList.contains("active")){var e=document.getElementById("absolute-container-a").clientHeight;partContainerA.style.height=e+500+"px",setTimeout(moveToCenter,400)}else{var e=document.getElementById("absolute-container-a").clientHeight;partContainerA.style.height=e-500+"px"}partContainerA.style.transition="height .8s ease"})}if(indexLocation){var gtkubBg=document.getElementById("gtkub-bg"),gtkubVideo=document.getElementById("gtkub-video"),gtkubButton=document.getElementById("gtkub-button"),gtkubClose=document.getElementById("gtkub-close");gtkubButton.addEventListener("click",function(){gtkubBg.classList.remove("video-hidden"),gtkubVideo.currentTime=0,gtkubVideo.play()}),gtkubClose.addEventListener("click",function(){stopVideo()}),gtkubBg.addEventListener("click",function(e){e.target===gtkubBg&&stopVideo()})}var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".site-navbar");if(doSomething(window.scrollY),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),indexLocation){var partConfig="js/higia-particles_config.json";particlesJS.load("home-a-particles-container",partConfig),particlesJS.load("home-b-particles-container",partConfig)}var lYear=(new Date).getFullYear();if(document.querySelector("#license-year").innerHTML=lYear,function(){function e(e){$(e.target).is(".site-navbar__menu-trigger")||$(e.target).is(".site-navbar__menu-container")||$(e.target).closest(".site-navbar__menu-container").length||!$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")||(e.preventDefault(),$(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll"))}function a(){$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")?($(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll")):($(".site-navbar__menu-container").addClass("site-navbar__menu-container--show-menu"),$("body").addClass("noscroll"))}var i=window.matchMedia("(max-width: 876px)");i.matches?($("body")[0].addEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").click(a)):($("body")[0].removeEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll")),$(window).resize(function(){$("body")[0].removeEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll"),$(".site-navbar__menu-container").removeClass("show-menu"),i.matches&&($("body")[0].addEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").click(a))}),$("#navbar-close").on("click touchstart",function(e){e.preventDefault(),$(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll")})}(),function(e,a){"function"==typeof define&&define.amd?define(["jquery"],function(i){return a(e,i)}):"object"==typeof exports?a(e,require("jquery")):a(e,e.jQuery||e.Zepto)}(this,function(e,a){"use strict";function i(e){if(C&&"none"===e.css("animation-name")&&"none"===e.css("-webkit-animation-name")&&"none"===e.css("-moz-animation-name")&&"none"===e.css("-o-animation-name")&&"none"===e.css("-ms-animation-name"))return 0;var a,i,t,n,o=e.css("animation-duration")||e.css("-webkit-animation-duration")||e.css("-moz-animation-duration")||e.css("-o-animation-duration")||e.css("-ms-animation-duration")||"0s",r=e.css("animation-delay")||e.css("-webkit-animation-delay")||e.css("-moz-animation-delay")||e.css("-o-animation-delay")||e.css("-ms-animation-delay")||"0s",s=e.css("animation-iteration-count")||e.css("-webkit-animation-iteration-count")||e.css("-moz-animation-iteration-count")||e.css("-o-animation-iteration-count")||e.css("-ms-animation-iteration-count")||"1";for(o=o.split(", "),r=r.split(", "),s=s.split(", "),n=0,i=o.length,a=Number.NEGATIVE_INFINITY;n<i;n++)(t=parseFloat(o[n])*parseInt(s[n],10)+parseFloat(r[n]))>a&&(a=t);return a}function t(){if(a(document).height()<=a(window).height())return 0;var e,i,t=document.createElement("div"),n=document.createElement("div");return t.style.visibility="hidden",t.style.width="100px",document.body.appendChild(t),e=t.offsetWidth,t.style.overflow="scroll",n.style.width="100%",t.appendChild(n),i=n.offsetWidth,t.parentNode.removeChild(t),e-i}function n(){if(!$){var e,i,n=a("html"),o=d("is-locked");n.hasClass(o)||(i=a(document.body),e=parseInt(i.css("padding-right"),10)+t(),i.css("padding-right",e+"px"),n.addClass(o))}}function o(){if(!$){var e,i,n=a("html"),o=d("is-locked");n.hasClass(o)&&(i=a(document.body),e=parseInt(i.css("padding-right"),10)-t(),i.css("padding-right",e+"px"),n.removeClass(o))}}function r(e,a,i,t){var n=d("is",a),o=[d("is",w.CLOSING),d("is",w.OPENING),d("is",w.CLOSED),d("is",w.OPENED)].join(" ");e.$bg.removeClass(o).addClass(n),e.$overlay.removeClass(o).addClass(n),e.$wrapper.removeClass(o).addClass(n),e.$modal.removeClass(o).addClass(n),e.state=a,!i&&e.$modal.trigger({type:a,reason:t},[{reason:t}])}function s(e,t,n){var o=0,r=function(e){e.target===this&&o++},s=function(e){e.target===this&&0==--o&&(a.each(["$bg","$overlay","$wrapper","$modal"],function(e,a){n[a].off(v+" "+y)}),t())};a.each(["$bg","$overlay","$wrapper","$modal"],function(e,a){n[a].on(v,r).on(y,s)}),e(),0===i(n.$bg)&&0===i(n.$overlay)&&0===i(n.$wrapper)&&0===i(n.$modal)&&(a.each(["$bg","$overlay","$wrapper","$modal"],function(e,a){n[a].off(v+" "+y)}),t())}function c(e){e.state!==w.CLOSED&&(a.each(["$bg","$overlay","$wrapper","$modal"],function(a,i){e[i].off(v+" "+y)}),e.$bg.removeClass(e.settings.modifier),e.$overlay.removeClass(e.settings.modifier).hide(),e.$wrapper.hide(),o(),r(e,w.CLOSED,!0))}function l(e){var a,i,t,n,o={};for(e=e.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),a=e.split(","),n=0,i=a.length;n<i;n++)a[n]=a[n].split(":"),t=a[n][1],("string"==typeof t||t instanceof String)&&(t="true"===t||"false"!==t&&t),("string"==typeof t||t instanceof String)&&(t=isNaN(t)?t:+t),o[a[n][0]]=t;return o}function d(){for(var e=f,a=0;a<arguments.length;++a)e+="-"+arguments[a];return e}function u(){var e,i,t=location.hash.replace("#","");if(t){try{i=a("[data-"+g+'-id="'+t+'"]')}catch(e){}i&&i.length&&(e=a[g].lookup[i.data(g)])&&e.settings.hashTracking&&e.open()}else p&&p.state===w.OPENED&&p.settings.hashTracking&&p.close()}function m(e,i){var t=a(document.body),n=t,o=this;o.settings=a.extend({},b,i),o.index=a[g].lookup.push(o)-1,o.state=w.CLOSED,o.$overlay=a("."+d("overlay")),null!==o.settings.appendTo&&o.settings.appendTo.length&&(n=a(o.settings.appendTo)),o.$overlay.length||(o.$overlay=a("<div>").addClass(d("overlay")+" "+d("is",w.CLOSED)).hide(),n.append(o.$overlay)),o.$bg=a("."+d("bg")).addClass(d("is",w.CLOSED)),o.$modal=e.addClass(f+" "+d("is-initialized")+" "+o.settings.modifier+" "+d("is",w.CLOSED)).attr("tabindex","-1"),o.$wrapper=a("<div>").addClass(d("wrapper")+" "+o.settings.modifier+" "+d("is",w.CLOSED)).hide().append(o.$modal),n.append(o.$wrapper),o.$wrapper.on("click."+f,"[data-"+g+'-action="close"]',function(e){e.preventDefault(),o.close()}),o.$wrapper.on("click."+f,"[data-"+g+'-action="cancel"]',function(e){e.preventDefault(),o.$modal.trigger(k.CANCELLATION),o.settings.closeOnCancel&&o.close(k.CANCELLATION)}),o.$wrapper.on("click."+f,"[data-"+g+'-action="confirm"]',function(e){e.preventDefault(),o.$modal.trigger(k.CONFIRMATION),o.settings.closeOnConfirm&&o.close(k.CONFIRMATION)}),o.$wrapper.on("click."+f,function(e){a(e.target).hasClass(d("wrapper"))&&o.settings.closeOnOutsideClick&&o.close()})}var p,h,g="remodal",f=e.REMODAL_GLOBALS&&e.REMODAL_GLOBALS.NAMESPACE||g,v=a.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(e){return e+"."+f}).join(" "),y=a.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(e){return e+"."+f}).join(" "),b=a.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},e.REMODAL_GLOBALS&&e.REMODAL_GLOBALS.DEFAULTS),w={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},k={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},C=function(){var e=document.createElement("div").style;return void 0!==e.animationName||void 0!==e.WebkitAnimationName||void 0!==e.MozAnimationName||void 0!==e.msAnimationName||void 0!==e.OAnimationName}(),$=/iPad|iPhone|iPod/.test(navigator.platform);m.prototype.open=function(){var e,i=this;i.state!==w.OPENING&&i.state!==w.CLOSING&&(e=i.$modal.attr("data-"+g+"-id"),e&&i.settings.hashTracking&&(h=a(window).scrollTop(),location.hash=e),p&&p!==i&&c(p),p=i,n(),i.$bg.addClass(i.settings.modifier),i.$overlay.addClass(i.settings.modifier).show(),i.$wrapper.show().scrollTop(0),i.$modal.focus(),s(function(){r(i,w.OPENING)},function(){r(i,w.OPENED)},i))},m.prototype.close=function(e){var i=this;i.state!==w.OPENING&&i.state!==w.CLOSING&&i.state!==w.CLOSED&&(i.settings.hashTracking&&i.$modal.attr("data-"+g+"-id")===location.hash.substr(1)&&(location.hash="",a(window).scrollTop(h)),s(function(){r(i,w.CLOSING,!1,e)},function(){i.$bg.removeClass(i.settings.modifier),i.$overlay.removeClass(i.settings.modifier).hide(),i.$wrapper.hide(),o(),r(i,w.CLOSED,!1,e)},i))},m.prototype.getState=function(){return this.state},m.prototype.destroy=function(){var e,i=a[g].lookup;c(this),this.$wrapper.remove(),delete i[this.index],0===(e=a.grep(i,function(e){return!!e}).length)&&(this.$overlay.remove(),this.$bg.removeClass(d("is",w.CLOSING)+" "+d("is",w.OPENING)+" "+d("is",w.CLOSED)+" "+d("is",w.OPENED)))},a[g]={lookup:[]},a.fn[g]=function(e){var i,t;return this.each(function(n,o){t=a(o),null==t.data(g)?(i=new m(t,e),t.data(g,i.index),i.settings.hashTracking&&t.attr("data-"+g+"-id")===location.hash.substr(1)&&i.open()):i=a[g].lookup[t.data(g)]}),i},a(document).ready(function(){a(document).on("click","[data-"+g+"-target]",function(e){e.preventDefault();var i=e.currentTarget,t=i.getAttribute("data-"+g+"-target"),n=a("[data-"+g+'-id="'+t+'"]');a[g].lookup[n.data(g)].open()}),a(document).find("."+f).each(function(e,i){var t=a(i),n=t.data(g+"-options");n?("string"==typeof n||n instanceof String)&&(n=l(n)):n={},t[g](n)}),a(document).on("keydown."+f,function(e){p&&p.settings.closeOnEscape&&p.state===w.OPENED&&27===e.keyCode&&p.close()}),a(window).on("hashchange."+f,u)})}),indexLocation){var animated=$(".section_one"),logo=$(".section_one-mask-container"),span=$("#topink");animated.hover(function(){logo.addClass("section_one-mask-container2"),span.addClass("lifePink")})}$(".eva-carousel").slick({infinite:!0,dots:!0,slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"10px 30px",arrows:!0,prevArrow:' <button class="arrow-slider arrow-left"><img class="arrow" src="img/slider-arrow/left.svg" alt=""></button>',nextArrow:' <button class="arrow-slider arrow-right"><img class="arrow" src="img/slider-arrow/right.svg" alt=""></button>'}),function(){function e(){if(window.matchMedia("(max-width: 500px)").matches)$(".articles").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"0px",prevArrow:'<button class="slick-prev slick-arrow buttont buttont-l"><img class="" src="img/slider-arrow/left.svg" alt=""></button>',nextArrow:'<button class="slick-next slick-arrow buttont buttont-r"><img class="" src="img/slider-arrow/right.svg" alt=""></button>'}),evaFeatures();else try{$(".articles").slick("unslick")}catch(e){console.log(".")}}$(".section_four-slider-container").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,centerMode:!0,centerPadding:"0px",prevArrow:' <button class="arrow-slider arrow-left"><img class="arrow" src="img/slider-arrow/left.svg" alt=""></button>',nextArrow:' <button class="arrow-slider arrow-right"><img class="arrow" src="img/slider-arrow/right.svg" alt=""></button>'}),window.addEventListener("resize",e),e()}(),function(){$(".section-press-carousel").slick({slidesToShow:2,slidesToScroll:1,centerPadding:"5px",centerMode:!0,prevArrow:'<img class="slick-prev" src="img/slider-arrow/left.svg">',nextArrow:'<img class="slick-next" src="img/slider-arrow/right.svg">',responsive:[{breakpoint:750,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}}]})}(),function(){var e=(new SmoothScroll('a[href*="#section_"]'),document.getElementById("section_one")),a=document.getElementById("section_two"),i=document.getElementById("section_three"),t=document.getElementById("section_four"),n=document.getElementById("section_five"),o=document.getElementById("section_six"),r=document.getElementById("home-b-particles-container"),s=document.querySelector(".lines-container"),c=document.querySelectorAll(".line"),l=document.querySelector(".circuit-mask");"/"!==window.location.pathname&&"/project-higia/"!==window.location.pathname&&"/index.html"!==window.location.pathname&&"/project-higia/index.html"!==window.location.pathname&&"/index-es.html"!==window.location.pathname&&"/project-higia/index-es.html"!==window.location.pathname||$(window).scroll(function(){var d=window.scrollY;d<.6*e.clientHeight?c[0].classList.add("active"):c[0].classList.remove("active"),d>=a.offsetTop-.4*e.clientHeight&&d<.6*a.clientHeight+a.offsetTop?c[1].classList.add("active"):c[1].classList.remove("active"),d>=i.offsetTop-.4*a.clientHeight&&d<.6*i.clientHeight+i.offsetTop?c[2].classList.add("active"):c[2].classList.remove("active"),d>=t.offsetTop-.4*i.clientHeight&&d<.5*t.clientHeight+t.offsetTop?c[3].classList.add("active"):c[3].classList.remove("active"),d>=n.offsetTop-.5*t.clientHeight&&d<.6*n.clientHeight+n.offsetTop?(c[4].classList.add("active"),l.classList.add("circuit-anim")):c[4].classList.remove("active"),d>=o.offsetTop-.4*n.clientHeight&&d<.6*o.clientHeight+o.offsetTop?c[5].classList.add("active"):c[5].classList.remove("active"),d>=r.offsetTop-.4*o.clientHeight&&d<r.clientHeight+r.offsetTop?c[6].classList.add("active"):c[6].classList.remove("active"),d>=r.offsetTop+.4*r.clientHeight?(c[6].classList.remove("active"),s.classList.add("hidden")):s.classList.remove("hidden")})}(),function(){function e(e){var a=$(".team-photo-img"),i=["julian","alejandro","raymundo","fernando","antonio","jose","martin","rebeca","vicente","ta-antonio","ta-felicia","ta-julio","ta-raymond","ta-isaac","ta-erickPonce"];e.matches?a.each(function(e,a){a.setAttribute("data-remodal-target",i[e])}):a.each(function(e,a){a.removeAttribute("data-remodal-target")})}var a=window.matchMedia("(max-width: 876px)"),i=$(".team-photo-img");a.matches||i.each(function(e,a){a.removeAttribute("data-remodal-target")}),a.addListener(e)}(),function(){var e="Our team",a="Nuestro Equipo",i="Advisory Board",t="Consejo Asesor",n=[{title:e,title_es:a,name:"Julián Rios",area:"CEO",description_es:"Mis principales tareas como Director ejecutivo de Higia Technologies consisten en cerciorarse de que la visión de la compañía sea la correcta, proveer los recursos necesarios para la creación de productos, construir la cultura corporativa, tomar las decisiones estratégicas para el óptimo funcionamiento de la empresa y supervisar el funcionamiento de la misma.<p>Actualmente, soy el primer y más jóven mexicano en ser galardonado con el Premio Global al Estudiante Emprendedor y la medalla Sol Azteca al emprendimiento por parte de la Presidencia de la República.</p>",description:"My main duties as Chief Executive Officer of Higia Technologies are to ensure that the company's vision is correct, provide the necessary resources for product creation, build the corporate culture, make strategic decisions for the optimal functioning of the company and supervise the operation of the same.<p>Currently, I am the first and youngest Mexican to be awarded the Global Entrepreneurial Student Award and the Sol Azteca medal to the initiative by the Presidency of the Republic.</p>",social:{linkedin:"https://www.linkedin.com/in/juli%C3%A1n-r%C3%ADos-cant%C3%BA-903b76106"}},{title:e,title_es:a,name:"Alejandro Casar",area:"Co-AIO",description_es:"Mi trabajo consiste supervisar las áreas de inteligencia artificial y desarrollar algoritmos para la detección oportuna del pié diabético, cáncer de mama, cáncer testicular y prostático a partir de los datos obtenidos por nuestros productos.<p>Soy un graduado de Ingeniero en Sistemas  Digitales y Robótica del Tecnológico de Monterrey y, actualmente, estudio una maestría en inteligencia artificial haciendo investigación en algoritmos para detección de cáncer de mama.</p>",description:"My job is to supervise the areas of artificial intelligence and develop algorithms for the timely detection of diabetic foot, breast cancer, testicular and prostate cancer based on the data obtained by our products. <p>I am a graduate of Digital Systems and Robotics Engineer at Tecnológico de Monterrey and I am currently studying a master's degree in artificial intelligence doing research on algorithms for detecting breast cancer.</p>",social:{linkedin:"https://www.linkedin.com/in/alexcasar/"}},{title:e,title_es:a,name:"Raymundo González",area:"Co-AIO",description_es:"Mi trabajo consiste supervisar las áreas de inteligencia artificial y desarrollar algoritmos para la detección oportuna del pié diabético, cáncer de mama, cáncer testicular y prostático a partir de los datos obtenidos por nuestros productos.<p>Soy un estudiante de Ciencias Computacionales y estadística en Minerva Schools KGI. En el pasado, he fungido como pasante investigador en Audible, compañía de Amazon, y colaborador en proyectos de investigación en el Laboratorio de Inteligencia Artificial de la Universidad de Stanford.</p>",description:"My job is to supervise the areas of artificial intelligence and develop algorithms for the timely detection of diabetic foot, breast cancer, testicular and prostate cancer based on the data obtained by our products.<p>I am a student of Computer Science and Statistics at Minerva Schools KGI. In the past, I have served as a research intern at Audible, an Amazon company, and a research collaborator at the Stanford University Artificial Intelligence Laboratory.</p>",social:{linkedin:"https://www.linkedin.com/in/raymundo-gzz/"}},{title:e,title_es:a,name:"Fernando López",area:"DSF",description_es:"En Higia funjo como director del área de software, desde la parte orientada al cliente hasta el servidor en nuestra aplicación y sitio web.<p>También es mi deber detectar e implementar nuevas tecnologías para integrar en nuestro desarrollo con el objetivo de mejorar nuestros productos.</p>",description:"In Higia, I work as director of the software area, from the client-side to the server in our application and website.<p>It is also my duty to detect and implement new technologies to integrate into our development with the aim of improving our products.</p>",social:{linkedin:"https://www.linkedin.com/in/fernando-l%C3%B3pez-mart%C3%ADnez-774823111/"}},{title:e,title_es:a,name:"Antonio Torres",area:"CTO",description_es:"Mi trabajo consiste en mirar hacia el futuro antes de que suceda. Tratar de arriesgarse y tomar decisiones innovadoras que lleven a la empresa a una posición más valiosa en el corto y largo plazo.<p>Soy el encargado de supervisar las áreas de tecnología y que nuestros productos y servicios cuenten con la calidad esperada.</p>",description:"My job is to look into the future before it happens. Try to take risks and make innovative decisions that take the company to a more valuable position in the short and long term.<p>I am in charge of supervising the areas of technology and that our products and services have the expected quality.</p>",social:{linkedin:"https://www.linkedin.com/in/jantoniotorres/"}},{title:e,title_es:a,name:"José Ángel Lavariega",area:"CINO",description_es:"Como Jefe de Innovación es mi deber asegurarme que nuestros procesos sean innovadores, permanezcan realistas y que sigamos una rigor profesional y científico en nuestras publicaciones, investigaciones y prototipos.<p>En las primeras etapas de nuestra compañía me he dedicado a realizar profundas investigaciones de mercado y asegurarme de que la tecnología implementada en nuestro producto sea la correcta.</p>",description:"As Head of Innovation it is my duty to ensure that our processes are innovative, remain realistic and that we follow a professional and scientific rigor in our publications, research and prototypes.<p>In the early stages of our company I have been dedicated to deep market research and to ensure that the technology implemented in our product is correct.</p>",social:{linkedin:"https://www.linkedin.com/in/jose-angellavariegagomez/"}},{title:e,title_es:a,name:"Martín Urtíz",area:"AID",description_es:"Como parte del equipo de inteligencia artificial de Higia es mi deber el siempre estar actualizado con las nuevas tecnologías que podrían mejorar nuestros algoritmos de predicción.<p>También soy responsable del desarrollo de nuestras propias tecnologías, las cuales catapultan a nuestros algoritmos a ser los mejores en sus predicciones.</p>",description:"As part of the artificial intelligence team of Higia it is my duty to be always up to date with the new technologies that might improve our prediction algorithms.<p>I'm also responsable for the development of our own technologies, which trigger our algorithms to be top of the art in their predictions.</p>",social:{linkedin:"#"}},{title:e,title_es:a,name:"Rebecca Canales",area:"SAI",description_es:"En Higia colaboro en el área de software específicamente en el diseño, documentación y codificación de la base de datos.<p>Como mujer soy partícipe de dialogar sobre la comodidad y el diseño que llevará EVA, para demostrar que es un producto creado con la mejor calidad en cuanto a la tecnología utilizada, la investigación y el esfuerzo de todo el equipo. Con la finalidad de que los usuarios que porten a EVA tengan la confianza de que es un producto cómodo, seguro y fácil de utilizar.</p>",description:"In Higia I collaborate in the area of ​​software specifically in the design, documentation and coding of the database.<p>As a woman, I am a participant in discussing the comfort and design that EVA will carry, to demonstrate that it is a product created with the best quality, in terms of the technology used, the research and the effort of the whole team. In order that users who carry EVA have the confidence that it is comfortable, safe and easy to use.</p>",social:{linkedin:"https://www.linkedin.com/in/rebecca-irene-canales-andonie-5a5a1a144/"}},{title:e,title_es:a,name:"Vicente Ferrara",area:"HDI",description_es:"Vicente Ferrara es un estudiante de Sistemas Digitales y Robótica en el Tecnológico de Monterrey Campus Monterrey. Y ha trabajado como Investigador en University of Texas MD Anderson Pulmonary Laboratory durante el verano 2016. Vicente realiza prácticas profesionales en Higia en el área de desarrollo de hardware.",description:"Vicente Ferrara is a student of Digital Systems and Robotics at the Tecnológico de Monterrey Campus Monterrey. He has worked as a Researcher at the University of Texas MD Anderson Pulmonary Laboratory during the summer of 2016. Vicente is a professional intern at Higia in the area of hardware development.",social:{linkedin:"#"}},{title:i,title_es:t,name:"Antonio Rallo",area:"S&TABM",description_es:"Antonio estudió biología marina en la Universidad de California. Fue Director de Tecnología Multimedia en Apple Europa, Director de Tecnología y Estrategia en Grupo Televisa, actualmente es el Cofundador de Kio Networks y Director Ejecutivo del fondo de inversion ID345",description:"Antonio studied marine biology at the University of California. He was Director of Multimedia Technology at Apple Europe, Director of Technology and Strategy at Grupo Televisa, he is currently the Cofounder of Kio Networks and the Executive Director of the ID345 investment fund.",social:{linkedin:"#"}},{title:i,title_es:t,name:"Felicia Knaul",area:"S&TABM",description_es:"La Dra. Felicia Knaul es Profesora Asociada de la Escuela de Medicina de Harvard y Directora de la Iniciativa de Equidad Global de Harvard, donde actúa como Co-directora de la Secretaría del Grupo de Trabajo Mundial sobre Acceso Ampliado al Cuidado y Control del Cáncer en los Países en Desarrollo. De igual manera, es economista de la Fundación Mexicana de la Salud.<p>Después de ser diagnosticado con cáncer de mama en 2007, el Dr. Knaul fundó la fundación Tómatelo a Pecho, una organización mexicana sin fines de lucro que promueve investigaciones, defensa, concientización e iniciativas de detección temprana para el cáncer de mama en América Latina. Ha publicado artículos sobre el cáncer de mama en diversos países y medios. Su libro relatando su experiencia personal con cáncer de mama y como fundador de la organización Tómatelo a pecho, fue lanzado en el 2009 y ampliado y publicado en inglés en 2012 titulado Beauty without the Breast.</p>",description:"Dr. Felicia Knaul is an Associate Professor at Harvard Medical School and Director of the Harvard Global Equity Initiative where she serves as the Co-director of the Secretariat for the Global Task Force on Expanded Access to Cancer Care and Control in Developing Countries, She is also Senior Economist at the Mexican Health Foundation where she has led a research group focused on health and the economy since 2000. <p>After being diagnosed with breast cancer in 2007, Dr. Knaul founded Cáncer de Mama: Tómatelo a Pecho a Mexican civil society organization that promotes research, advocacy, awareness, and early detection initiatives for breast cancer in Latin America. She has published articles on the topic of breast cancer in low and middle income countries in academic journals, lectures extensively on the topic both from the point of view of a patient-advocate and a health systems researcher. Her book recounting her personal experience with breast cancer and as founder of a civil society organization in Mexico, was released as Tómatelo a Pecho in 2009, and expanded and published in English in 2012 titled Beauty without the Breast.</p>",social:{linkedin:"https://www.linkedin.com/in/felicia-marie-knaul-68a5ab50/"}},{title:i,title_es:t,name:"Julio Frenk",area:"S&TABM",description_es:"Julio Frenk fungió como Ministro de Salud de México de 2000 a 2006. Allí definió una ambiciosa agenda para reformar el sistema de salud del país e introdujo un programa de cobertura universal integral, conocido como Seguro Popular, que amplió el acceso a la atención médica para más de 55 millones de mexicanos previamente no asegurados.<p>Fue el director general y fundador del Instituto Nacional de Salud Pública en México, una de las principales instituciones de este tipo en el mundo. También se desempeñó como director ejecutivo a cargo de la Evidencia y la Información para la Política de la Organización Mundial de la Salud. El Dr. Frenk se convirtió en el sexto presidente de la Universidad de Miami en agosto de 2015.</p>",description:"Julio Frenk served as the Minister of Health of Mexico from 2000 to 2006. There he pursued an ambitious agenda to reform the nation’s health system and introduced a program of comprehensive universal coverage, known as Seguro Popular, which expanded access to health care for more than 55 million previously uninsured Mexicans.<p>He was the founding director-general of the National Institute of Public Health in Mexico, one of the leading institutions of its kind in the developing world. He also served as executive director in charge of Evidence and Information for Policy at the World Health Organization. Dr. Frenk became the sixth president of the University of Miami in August of 2015.</p>",social:{linkedin:"#"}},{title:i,title_es:t,name:"Raymond McCauley",area:"S&TABM",description_es:"Raymond McCauley es un científico, ingeniero y empresario que trabaja a la vanguardia de la biotecnología. Raymond explora cómo la aplicación de la tecnología a la biología, la genética, la medicina y la agricultura está afectando a cada uno de nosotros. Raymond es Presidente de la Biotech Track de Singularity University, un grupo de reflexión de Silicon Valley dedicado a capacitar a los líderes sobre tecnologías exponenciales. Es Cofundador y Arquitecto en Jefe de BioCurious, también forma parte del equipo que desarrolló la secuenciación de ADN de próxima generación en Illumina, donde trabajó en bioinformática, secuenciación del cáncer y genómica personal.<p>Su obra y su historia han sido publicadas en Wired, Forbes, Time y Nature. El trabajo de posgrado de Raymond incluye estudios en Texas A & M University, Stanford y UC Berkeley en ingeniería eléctrica, informática, biofísica, bioquímica, bioinformática y nanotecnología. Raymond desarrolla y asesora a una variedad de empresas y organizaciones, incluyendo Genomera (pruebas clínicas de la muchedumbre), Vecoy Nanomedicines (plataforma de antivirus de biología sintética), Androcyte (investigación de longevidad) y Nanokit (origami de ADN).</p>",
description:"Raymond McCauley is a scientist, engineer, and entrepreneur working at the forefront of biotechnology. Raymond explores how applying technology to life ' biology, genetics, medicine, agriculture ' is affecting every one of us. Raymond is: Chair of the Biotech Track at Singularity University, a Silicon Valley think tank devoted to training leaders about exponential technologies. Co-founder and Chief Architect for BioCurious, he is also part of the team that developed next generation DNA sequencing at Illumina, where he worked in bioinformatics, cancer sequencing, and personal genomics.<p>His work and story have been featured in Wired, Forbes, Time, and Nature. Raymond's postgraduate work includes studies at Texas A&M University, Stanford and UC Berkeley in electrical engineering, computer science, biophysics, biochemistry, bioinformatics, and nanotechnology. Raymond develops and advises a variety of companies and organizations, including Genomera (crowd-sourced clinical trials), Vecoy Nanomedicines (synthetic biology anti-virus platform), Androcyte (longevity research), and Nanokit (DNA origami).</p>",social:{linkedin:"https://www.linkedin.com/in/raymondmccauley/"}},{title:i,title_es:t,name:"Isaac Lekach",area:"S&TABM",description:"Isaac Lekach is a private investor and advisor for companies based primarily in the United States and Mexico with a focus in the fields of marketing, consulting, real estate, finance, consumer goods and fashion. Isaac graduated in 2001 from NYU's Stern School of Business with degrees in Marketing, International Business and Management.<p>After working in New York for Advest in ​​Fixed Income Institutional Sales and Trading, Isaac moved to Mexico in 2003 to create a distribution platform for the groups’ diverse products in the country and repeated the task again in 2005/06 in Brazil. Over the past 12 years his company was responsible for the successful launches and distribution of numerous fragrance lines including Perry Ellis, Paris Hilton (including footwear), Guess, Maria Sharapova, XOXO, Ocean Pacific and more recently, Katy Perry, Ed Hardy, True Religion, BCBG, Selena Gomez and others.  The fragrance businesses were sold successfully in 2012/13. Isaac has mentored and coached over fifty companies in his lifetime and is active mentor and coach for Endeavor, Ashoka, Masschallenge, Victoria 147, Posible, Unreasonable Institute and EO-Accelerator in Mexico. At present, he manages investments in real estate and various startups, has cofounded a consulting firm and is also an investor and advisor to Dream Water (drinkdreamwater.com) and Artcan (artcangroup.com) both based in the US.</p>",description_es:" Isaac Lekach es un inversionista privado y asesor para empresas con sede principalmente en los Estados Unidos y México, con un enfoque en los campos de marketing, consultoría, bienes raíces, finanzas, bienes de consumo y moda. Isaac se graduó en 2001 de la Escuela de Negocios Stern de la Universidad de Nueva York, con títulos en Marketing, Negocios Internacionales y Administración.<p>Después de trabajar en Nueva York para Advest en Ventas Institucionales, Isaac se trasladó a México en 2003 para crear una plataforma de distribución para los diversos productos del grupo en el país y repitió la tarea otra vez en 2005/06 en Brasil. En los últimos 12 años, su empresa fue responsable de los exitosos lanzamientos y distribución de numerosas líneas de fragancias como Perry Ellis, Paris Hilton (incluido el calzado), Guess, Maria Sharapova, XOXO, Ocean Pacific y más recientemente Katy Perry, Ed Hardy, True Religion, BCBG, Selena Gómez y otros. Los negocios de fragancias se vendieron con éxito en 2012/13. Isaac ha asesorado y entrenado a más de cincuenta compañías en su vida y es mentor activo y entrenador para Endeavor, Ashoka, Masschallenge, Victoria 147, Possible, Unreasonable Institute y EO-Accelerator en México. En la actualidad, gestiona inversiones en bienes raíces y varias startups, ha cofundado una firma de consultoría y también es un inversor y asesor de Dream Water (drinkdreamwater.com) y Artcan (artcangroup.com) ambos con sede en los Estados Unidos.</p>",social:{linkedin:"/"}},{title:i,title_es:t,name:"Erick Ponce",area:"S&TABM",description:"Erick Ponce has worked for more than 15 years in the health sector, both public and private, where he has been dedicated to promoting the individualization of medicine and the revaluation of both the doctor and the patient.<p>After finishing his Philosophy studies at La Salle University in Mexico City, he lived in Santiago de Chile, where he became acquainted with the world of Startups, digital markets, and in particular health technology. In 2004 he founded Fadermex, a leading company in Pharma Technology (personalization of the medical prescription) and now also with scope in clinical research and drug-surveillance.</p>",description_es:"Erick Ponce ha trabajado por más de 15 años en el sector salud, tanto público como privado, donde se ha dedicado a impulsar la individualización del medicamento y la revaloración tanto del médico como del paciente.<p>Una vez finalizados sus estudios de Filosofía en la Universidad la Salle en la Ciudad de México, vivió en Santiago de Chile, donde conoció el mundo de las Startups, los mercados digitales, y en particular el de tecnología de la salud. En 2004 funda Fadermex, empresa líder en Farmaco-tecnia (personalización de la prescripción médica) y ahora además con alcance en investigación clínica y fármaco-vigilancia.</p>",social:{linkedin:"/"}}];"/team-es.html"===location.pathname||"/project-higia/team-es.html"===location.pathname?($("#js-hover-title").html(n[0].title_es),$("#js-hover-name").html(n[0].name),$("#js-hover-area").html(n[0].area),$("#js-hover-description").html(n[0].description_es)):"/team.html"!==location.pathname&&"/project-higia/team.html"!==location.pathname||($("#js-hover-title").html(n[0].title),$("#js-hover-name").html(n[0].name),$("#js-hover-area").html(n[0].area),$("#js-hover-description").html(n[0].description)),$(".team-photo-img").mouseover(function(){var e=$(this).attr("data-hover-id"),a=$(this).attr("data-lang"),i="#js-hover-linkedin-"+e;"es"===a?($(i).attr("href",n[e].social.linkedin),$("#js-hover-title").text(n[e].title_es),$("#js-hover-name").text(n[e].name),$("#js-hover-area").text(n[e].area),$("#js-hover-description").html(n[e].description_es)):"en"===a&&($(i).attr("href",n[e].social.linkedin),$("#js-hover-title").text(n[e].title),$("#js-hover-name").text(n[e].name),$("#js-hover-area").text(n[e].area),$("#js-hover-description").html(n[e].description))})}(),function(){$(document).on("opening",".remodal",function(){$(".remodal-wrapper").scrollTop(0)})}(),function(){function e(e){var i=$(".team-our-team");a.matches?i.unstick():i.sticky({topSpacing:126})}var a=window.matchMedia("(max-width: 876px)"),i=$(".team-our-team");a.matches||i.sticky({topSpacing:126}),a.addListener(e)}(),function(){$("#contact-form").validate({rules:{name:{required:!0},email:{required:!0,email:!0},message:{required:!0,minlength:1,maxlength:500}}})}();