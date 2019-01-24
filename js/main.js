$(document).ready(function() {
	$('section#screenshots a').on('click', function(){
		$('div#modal img').attr('src', $(this).attr('data-image-url'));
	});

	var nav = $('.navbar-fixed-top');
	var home = $('.home');
	var distance = $('.navbar-fixed-top').offset();

	if (distance.top >= 300) {
		nav.addClass('effect');
		home.addClass('effect');
	}

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();

		if (scroll >= 300) {
			nav.addClass('effect');
			home.addClass('effect');
		}
		else{
			nav.removeClass('effect');
			home.removeClass('effect');
		}
	});

///////////////////////////////////		


////////////smooth scroll//////////

	$('.nav.nav-justified > li').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 800);

	});

///////////////////////////////////		

//////////About Animations/////////

	$('#about .blue-circle').waypoint(function(){
		$('#about .blue-circle').addClass('animated fadeInUp')
	}, {
		offset:'50%'
	});

	//////////icon animations

	$('#about .blue-circle > div').waypoint(function(){
		$('#about .blue-circle > div').addClass('animated fadeInRightBig')
	}, {
		offset:'50%'
	});

///////////////////////////////////	

////////features Animations////////

	$('.features-image img').waypoint(function(){
		$('.features-image img').addClass('animated flip')
	}, {
		offset:'50%'
	});

	$('#features .blue-circle').waypoint(function(){
		$(this.element).addClass('animated fadeInUp')
	}, {
		offset:'50%'
	});

	$('#features .blue-circle > div').waypoint(function(){
		$(this.element).addClass('animated fadeInRightBig')
	}, {
		offset:'50%'
	});

///////////////////////////////////

//////////screenshots Animations/////////

	$('#screenshots .col-xs-4').waypoint(function(){
		$(this.element).addClass('animated zoomIn');
		$('#screenshots .col-xs-4').css({'opacity':1});
	}, {
		offset:'50%'
	});	

///////////////////////////////////	

//////////downloads Animations/////////

	$('#downloads .phone img').waypoint(function(){
		$(this.element).addClass('animated fadeInRight');
	}, {
		offset:'50%'
	});	

	$('#downloads .platform > div').waypoint(function(){
		$(this.element).addClass('animated fadeInUp');
	}, {
		offset:'50%'
	});	

	//////////icon animations

	$('#downloads .platform > div > i').waypoint(function(){
		$('#downloads .platform > div > i').addClass('animated fadeInDownBig')
	}, {
		offset:'50%'
	});

///////////////////////////////////	


//////////Form Validation/////////

	$('#form').bootstrapValidator({
		message: 'This Value is not Valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh',
		},
		fields:{
			name:{
				validators:{
					notEmpty:{
						message:'Name is Required and cannot be Empty'
					}
				}
			},
			email:{
				validators:{
					notEmpty:{
						message:'Email is Required and cannot be Empty'
					},
					emailAddress:{
						message:'Email Address is Required and cannot be Empty'	
					}
				}
			},
			message:{
				validators:{
					notEmpty:{
						message:'Message is Required and cannot be Empty'
					}
				}
			}
		}
		}).on('success.form.bv', function(e){
			e.preventDefault();
			var $form = $(e.target);
			var bv = $form.data('bootstrapValidator');
			$.post($form.attr('action'), $form.serialize(), function(result){
				console.log(result);
			}, 'json')
		});

///////////////////////////////////	

});
