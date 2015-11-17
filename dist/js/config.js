jQuery(function($){
	$().timelinr({
		orientation: 'vertical',
		containerDiv : '.JS_timeline',
		datesDiv: '.timeline_dates',
		issuesDiv : '.timeline_issues',
		// issuesSpeed: 	300,
		// datesSpeed: 	100,
		// arrowKeys: 		'true',
		// startAt:		3
	})

	$('.globalNav').smint();

});
