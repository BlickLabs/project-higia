(function (){
  $('.section_four-slider-container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: ' <button class="arrow-slider arrow-left"><img class="arrow" src="img/slider-arrow/left.svg" alt=""></button>',
    nextArrow: ' <button class="arrow-slider arrow-right"><img class="arrow" src="img/slider-arrow/right.svg" alt=""></button>'
  });

  window.addEventListener('resize', homePressCarroussel);

  function homePressCarroussel() {
    if (window.matchMedia("(max-width: 500px)").matches) {
      $('.articles').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<button class="slick-prev slick-arrow buttont buttont-l"><img class="" src="img/slider-arrow/left.svg" alt=""></button>',
        nextArrow: '<button class="slick-next slick-arrow buttont buttont-r"><img class="" src="img/slider-arrow/right.svg" alt=""></button>'
      });

      evaFeatures();

    } else {
      $('.articles').slick('unslick');
    }
  }
  homePressCarroussel()
})();
