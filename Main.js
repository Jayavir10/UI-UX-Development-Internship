function moveSlide(index) {
  var slides = document.querySelectorAll('.slide');
  slides.forEach(function(slide, i) {
    if (i === index - 1) {
      slide.classList.add('clear');
      slide.classList.remove('blur');
    } else {
      slide.classList.add('blur');
      slide.classList.remove('clear');
    }
  });

  // Update the selected button
  var buttons = document.querySelectorAll('.sliderbuttons button');
  buttons.forEach(function(button, i) {
    if (i === index - 1) {
      button.classList.add('selected');
    } else {
      button.classList.remove('selected');
    }
  });
}
