$( document ).ready(function(){


	$("header").on('inview', function(event, isInView){
		if(isInView) {
			$(this).animate({ opacity: 1 }, 500);
		} else {
			$(this).animate({opacity: 0 }, 500);
		}
	});

	$("article").on('inview', function(event, isInView){
		if(isInView) {
			$(this).animate({ opacity: 1 }, 500);
		} else {
			$(this).animate({ opacity: 0 }, 500);
		}
	});
});