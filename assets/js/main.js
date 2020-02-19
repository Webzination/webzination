$( document ).ready(function(){

	$("#navicon").on('click', function() {
		$("#sidebar").animate({left: 0}, 700);
		$("#sidebar-overlay").animate({left: 0}, 500);
	});

	$("#closeicon").on('click', function() {
		$("#sidebar").animate({left: "-100%"}, 500);
		$("#sidebar-overlay").animate({left: "-100%"}, 700);
	});


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