$( () => {
	$('#openCategories').on('click', () => {
		$('.side-nav--categories').addClass('show');
    });
    
    $('#closeCategories').on('click', () => {
		$('.side-nav--categories').removeClass('show');
	});
});