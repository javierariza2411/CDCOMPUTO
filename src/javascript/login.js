$(window).on('load', function() {
    $('.login__modal').css('display', 'none');
    $('#login').on('click', () => {
        $('html').css('overflow','hidden');
        $('.login__modal').css('display', 'flex');
    });

    $('.login--close').on('click', () => {
        $('html').css('overflow','auto');
        $('.login__modal').css('display', 'none');
      });
});