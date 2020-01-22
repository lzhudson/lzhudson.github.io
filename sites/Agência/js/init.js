$(document).ready(function() {
	carregado();
	configsmaterialize();
	barrasdeskill();	
	menucor();
	ativarLinkseRolagem();
	contador();
});
function ativarLinkseRolagem(argument) {
	var scrolllink = $('.scroll');
	var speed = 1000;
	scrolllink.click(function(event) {
		event.preventDefault();
		$('body,html').animate({scrollTop: $(this.hash).offset().top-65}, speed)
	});
	$(window).scroll(function() {
		scrollBarLocation = $(this).scrollTop();

		scrolllink.each(function() {
			var sectionOffset = $(this.hash).offset().top -60;
			if (sectionOffset <= scrollBarLocation) {
				$(this).parent().addClass('activelink');
				$(this).parent().siblings().removeClass('activelink');
			}	
		});
	});
}
function carregado(argument) {
	var $menu = $('.menu');

	if ($(this).scrollTop()>0) {
		$menu.addClass('bg-menu z-depth-1');
	}
}
function configsmaterialize(argument) {
	$('.button-collapse').sideNav();
	$('#textarea').trigger('autoresize');
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('.parallax').parallax();
	
	
}
function barrasdeskill(argument) {

	$('.ui-ux-design').animate({width:'75%'},2000);
	$('.web-development').animate({width:'90%'},2000);
	$('.marketing').animate({width:'65%'},2000);

}

function menucor(argument) {
	var $menu = $('.menu');
	$(window).scroll(function(event) {
		if ($(this).scrollTop()>10) {
			$menu.removeClass('z-depth-0 transparent')
			$menu.addClass('bg-menu z-depth-3');

			
		}
		else{
			$menu.removeClass('bg-menu z-depth-3');
			$menu.addClass('z-depth-0 transparent');
		}
		
	});
}

function contador(){
	var contando = $('.contador');
	contando.counterUp({
		delay: 10,
		time: 1000
	});
}