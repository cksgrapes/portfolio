jQuery(function($){
	$('.gridItem>a').magnificPopup({
		type: 'ajax',
		// alignTop: true,
		// overflowY: 'scroll'
	});

	$('.sfTrgr').on('click', function() {
		$(this).next().stop().slideToggle(300);
		$(this).toggleClass('active');
	});

	$('.grid').masonry({
		columnWidth: 150,
		itemSelector: '.gridItem',
		gutter: 30,
		isFitWidth: true
	});

	// function gridMasonry() {
	// 	$('.grid').gridalicious({
	// 		width: 150,
	// 		gutter: 30,
	// 		selector: '.gridItem'
	// 	});
	// }

	// gridMasonry();
});
