$(window).on('load', function() { 
	$('#openCategories').on('click', () => {
		const screenSize = $(window).width();
		if (screenSize <= 768) {
			$('.side-nav--categories').addClass('show');
			$('.side-nav--overlay').addClass('show');
			document.documentElement.style.overflow = 'hidden';
		}
  });
    
    $('#closeCategories').on('click', () => {
		$('.side-nav--categories').removeClass('show');
		$('.side-nav--overlay').removeClass('show');
		document.documentElement.style.overflow = 'auto';
	});
});