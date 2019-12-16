
// subscription
$('body').css('max-height','100vh');
$('body').css('overflow','hidden');

$(window).on('load', function() {
  setTimeout(function(){
    $('.page-spinner').fadeOut();
    $('.spinner').fadeOut();
    $('body').css('overflow','');
    $('body').css('max-height','unset');
  }, 1000);

  $('.subscription__modal').css('display', 'none');
  $('.subscription').on('click', () => {
    $('html').css('overflow','hidden');
    $('.subscription__modal').css('display', 'flex');
    $('.subscription__container--appear').fadeOut(10);
    setTimeout(() => {
      $('.subscription__container').addClass('subscription__container-expand');
      $('.subscription__container--appear').delay(100).fadeIn();
    }, 30);
  });
  $('.subscription--close').on('click', () => {
    $('html').css('overflow','auto');
    $('.subscription__modal').css('display', 'none');
    $('.subscription__container').removeClass('subscription__container-expand');
  });
});