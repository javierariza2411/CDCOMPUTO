// contact us map
$( () => {
  $('.contact-us__map').css('display', 'none');
  $('.map--pointer').on('click', () => {
    $('.contact-us__map').removeClass('animated fadeOutDown');
    $('.contact-us__map').addClass('animated fadeInUp');
    setTimeout(() => {
      $('.contact-us__map').css('display', 'initial');
    }, 100);
  });
  $('.contact-us--close i').on('click', () => {
    $('.contact-us__map').removeClass('animated fadeInUp');
    $('.contact-us__map').addClass('animated fadeOutDown');
    setTimeout(() => {
      $('.contact-us__map').css('display', 'none');
    }, 500);
  });
});