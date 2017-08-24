(function (){
  $('.section-press-carousel').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  centerPadding: '5px',
  centerMode: true,
  prevArrow: '<img class="slick-prev" src="img/slider-arrow/left.svg">',
  nextArrow: '<img class="slick-next" src="img/slider-arrow/right.svg">',
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
});
})();
