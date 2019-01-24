$(document).ready(function() {
	$('section#screenshots a').on('click', function(){
		$('div#modal img').attr('src', $(this).attr('data-image-url'));
	});

var nav = $('.navbar-fixed-top');
var distance = $('.navbar-fixed-top').offset();
//console.log(distance);
if (distance.top >= 300) {

    nav.addClass('effect');
    
}



$(window).scroll(function() {

    var scroll = $(window).scrollTop();
    
    //console.log(scroll);
  
   if (scroll >= 300) {
       
       nav.addClass('effect');
   
   }    else {
   
       nav.removeClass('effect');
   
   }
    
    
});

	//smooth scroll
	$('.nav.nav-justified > li').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 800);
	});



	
});
