var scroll = new SmoothScroll('a[href*="#section_"]');

var sectionOne = document.getElementById('section_one');
var sectionTwo = document.getElementById('section_two');
var sectionThree = document.getElementById('section_three');
var sectionFour = document.getElementById('section_four');
var sectionFive = document.getElementById('section_five');
var sectionSix = document.getElementById('section_six');
var sectionSeven = document.getElementById('home-b-particles-container');

var linesContainer = document.querySelector('.lines-container')
var lines = document.querySelectorAll('.line')

var circuitMask =document.querySelector('.circuit-mask')

function changeLineColor() {
  var sY = window.scrollY;

  if (sY < (sectionOne.clientHeight * 0.6)) {
    lines[0].classList.add('active');
  } else {
    lines[0].classList.remove('active');
  }

  if (sY >= (sectionTwo.offsetTop - (sectionOne.clientHeight * 0.4)) && sY < ((sectionTwo.clientHeight * 0.6) + (sectionTwo.offsetTop))) {
    lines[1].classList.add('active');
  } else {
    lines[1].classList.remove('active');
    if (evaMatchMedia=true) {
      evaFeatures()
    }
  }

  if (sY >= (sectionThree.offsetTop - (sectionTwo.clientHeight * 0.4)) && sY < ((sectionThree.clientHeight * 0.6) + sectionThree.offsetTop)) {
    lines[2].classList.add('active');
  } else {
    lines[2].classList.remove('active');
  }

  if (sY >= (sectionFour.offsetTop - (sectionThree.clientHeight * 0.4)) && sY < ((sectionFour.clientHeight * 0.5) + sectionFour.offsetTop)) {
    lines[3].classList.add('active');
  } else {
    lines[3].classList.remove('active');
  }

  if (sY >= (sectionFive.offsetTop - (sectionFour.clientHeight * 0.5)) && sY < ((sectionFive.clientHeight * 0.6) + sectionFive.offsetTop)) {
    lines[4].classList.add('active');
    circuitMask.classList.add('circuit-anim')
  } else {
    lines[4].classList.remove('active');
  }

  if (sY >= (sectionSix.offsetTop - (sectionFive.clientHeight * 0.4)) && sY < ((sectionSix.clientHeight * 0.6) + sectionSix.offsetTop)) {
    lines[5].classList.add('active');
  } else {
    lines[5].classList.remove('active');
  }

  if (sY >= (sectionSeven.offsetTop - (sectionSix.clientHeight * 0.4)) && sY < (sectionSeven.clientHeight + sectionSeven.offsetTop)) {
    lines[6].classList.add('active');
  } else {
    lines[6].classList.remove('active');
  }

  if (sY >= (sectionSeven.offsetTop + (sectionSeven.clientHeight * 0.4))) {
    lines[6].classList.remove('active');
    linesContainer.classList.add('hidden');
  } else {
    linesContainer.classList.remove('hidden');
  }
}

if (window.location.pathname === '/index.html' || window.location.pathname === '/' || window.location.pathname === '/project-higia/index.html' || window.location.pathname === '/project-higia/') {
  window.addEventListener('scroll', changeLineColor)

  changeLineColor()

}
