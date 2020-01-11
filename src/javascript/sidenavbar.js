$( () => {
    console.log('hola------');
	$('#openCategories').on('click', () => {
		console.log('add-----');
		$('.side-nav--categories').addClass('show');
    });
    
    $('#closeCategories').on('click', () => {
		$('.side-nav--categories').removeClass('show');
	});
});