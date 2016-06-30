// Global Variables
var windowHeight = $(window).height();
var index_1 = $('#p-1 .principle-index');
var index_2 = $('#p-2 .principle-index');
var index_3 = $('#p-3 .principle-index');
var index_4 = $('#p-4 .principle-index');
var index_5 = $('#p-5 .principle-index');
var index_6 = $('#p-6 .principle-index');
var index_7 = $('#p-7 .principle-index');
var index_8 = $('#p-8 .principle-index');
var index_9 = $('#p-9 .principle-index');
var index_10 = $('#p-10 .principle-index');
$(document).ready(function() {
	$('span.fade-in-cover').addClass('animated fadeInUp-Cover');	
	
	$(window).scroll(function () { 

		if(isElementInViewport('.cover-img span')) {
			$('.cover-img span').css({
				'top' : -($(this).scrollTop()/8)+"px"
	   		}); 
	   		$('.navbar-container').css('width', 0);
	   	}
	   	
	   	if(isElementInViewport($('#p-1'))) {
			index_1.css({
				'bottom' : +(($(this).scrollTop() - $('#p-1').offset().top)/20 + 20)+"%"
	   		}); 
	   		if (isElementInViewport(index_1)) {
		   		$('#p-1 .fade-in-principle').addClass('animated fadeInUp');
		   		$('.navbar-container').css('width', '10%');
	   		}
	   	}
	   	if(isElementInViewport($('#p-2'))) {
			index_2.css({
				'bottom' : +(($(this).scrollTop() - $('#p-2').offset().top)/25 + 50)+"%"
	   		}); 
	   		if (isElementInViewport(index_2)) {
		   		$('#p-2 .fade-in-principle').addClass('animated fadeInUp');
		   		$('.navbar-container').css('width', '20%');
	   		}
	   	}
	   	if(isElementInViewport($('#p-3'))) {
			index_3.css({
				'bottom' : +(($(this).scrollTop() - $('#p-3').offset().top)/22 + 50)+"%"
	   		}); 
	   		if (isElementInViewport(index_3)) {
		   		$('#p-3 .fade-in-principle').addClass('animated fadeInUp');
		   		$('.navbar-container').css('width', '30%');
	   		}
	   	}
	   	if(isElementInViewport($('#p-4'))) {
			index_4.css({
				'bottom' : +(($(this).scrollTop() - $('#p-4').offset().top)/30 + 40)+"%"
	   		}); 
	   		if (isElementInViewport(index_4)) {
		   		$('#p-4 .fade-in-principle').addClass('animated fadeInUp');
		   		$('.navbar-container').css('width', '40%');
	   		}
	   	}
	   	if(isElementInViewport($('#p-5'))) {
			index_5.css({
				'bottom' : +(($(this).scrollTop() - $('#p-5').offset().top)/25 + 50)+"%"
	   		}); 
	   		if (isElementInViewport(index_5)) {
		   		$('#p-5 .fade-in-principle').addClass('animated fadeInUp');
		   		$('.navbar-container').css('width', '50%');
	   		}
	   	}
	   	if(isElementInViewport($('#p-6'))) {
			index_6.css({
				'bottom' : +(($(this).scrollTop() - $('#p-6').offset().top)/22 + 50)+"%"
	   		}); 
	   		if (isElementInViewport(index_6)) {
		   		$('#p-6 .fade-in-principle').addClass('animated fadeInUp');
		   		$('.navbar-container').css('width', '60%');
	   		}
	   	}
	   	if(isElementInViewport($('#p-7'))) {
			index_7.css({
				'bottom' : +(($(this).scrollTop() - $('#p-7').offset().top)/30 + 55)+"%"
	   		}); 
	   		if (isElementInViewport(index_7)) {
		   		$('#p-7 .fade-in-principle').addClass('animated fadeInUp');
		   		$('.navbar-container').css('width', '70%');
	   		}
	   	}
	   	if(isElementInViewport($('#p-8'))) {
			index_8.css({
				'bottom' : +(($(this).scrollTop() - $('#p-8').offset().top)/22 + 50)+"%"
	   		}); 
	   		if (isElementInViewport(index_8)) {
		   		$('#p-8 .fade-in-principle').addClass('animated fadeInUp');
		   		$('.navbar-container').css('width', '80%');
	   		}
	   	}
	   	if(isElementInViewport($('#p-9'))) {
			index_9.css({
				'bottom' : +(($(this).scrollTop() - $('#p-9').offset().top)/22 + 50)+"%"
	   		}); 
	   		if (isElementInViewport(index_9)) {
		   		$('#p-9 .fade-in-principle').addClass('animated fadeInUp');
		   		$('.navbar-container').css('width', '90%');
	   		}
	   	}
	   	if(isElementInViewport($('#p-10'))) {
			index_10.css({
				'bottom' : +(($(this).scrollTop() - $('#p-10').offset().top)/22 + 50)+"%"
	   		}); 
	   		if (isElementInViewport(index_10)) {
		   		$('#p-10 .fade-in-principle').addClass('animated fadeInUp');
		   		$('.navbar-container').css('width', '100%');
	   		}
	   	}
	});
	
	
});

// Check if element is in the viewport
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the radial progress animation.
function checkAnimation(elem) {
	
    if (isElementInViewport(elem)) {
        // Start the animation
        //$elem1.addClass('fill-one');
        console.log("in");
    }
}