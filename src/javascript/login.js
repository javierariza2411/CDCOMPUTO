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

    $('.login__modal--registration').css('display', 'none');
    $('#open-register').on('click', () => {
        $('.login__modal--sign-in').removeClass('animated fadeInDown');
        $('.login__modal--sign-in').addClass('animated fadeOutUp');
        $('.login__modal--registration').removeClass('animated fadeOutDown');
        $('.login__modal--registration').addClass('animated fadeInUp');
        setTimeout(() => {
            $('.login__modal--sign-in').css('display', 'none');
            $('.login__modal--registration').css('display', 'initial');
        }, 100);
    });

    $('#close--register').on('click', () => {
        $('.login__modal--registration').removeClass('animated fadeInUp');
        $('.login__modal--registration').addClass('animated fadeOutDown');
        $('.login__modal--sign-in').removeClass('animated fadeOutUp');
        $('.login__modal--sign-in').addClass('animated fadeInDown');
        setTimeout(() => {
          $('.login__modal--registration').css('display', 'none');
          $('.login__modal--sign-in').css('display', 'initial');
        }, 500);
    });
});