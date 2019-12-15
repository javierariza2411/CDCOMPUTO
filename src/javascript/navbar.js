$(window).on('load', function() {
	$(document).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 25 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	});

	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});

	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});

	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');
		$('.navbar').toggleClass('open-menu');

		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
			$('.navbar').removeClass('open-menu');
		});
	});
});
