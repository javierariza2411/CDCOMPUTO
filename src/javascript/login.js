$(window).on('load', function() {
    $('.login__modal').css('display', 'none');
    $('#login').on('click', () => {
        $('html').css('overflow','hidden');
        $('.login__modal').css('display', 'flex');
        $('.login__container--appear').fadeOut(10);
        setTimeout(() => {
            $('.login__container').addClass('login__container-expand');
            $('.login__container--appear').delay(100).fadeIn();
        }, 30);
    });

    $('.login--close').on('click', () => {
        $('html').css('overflow','auto');
        $('.login__modal').css('display', 'none');
        $('.login__container').removeClass('login__container-expand');
      });
});