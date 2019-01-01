 $(document).ready(function(){
 	
 	$('.sidenav').sidenav();
 	$('.parallax').parallax();
 	$('.counter').counterUp({
 		delay: 10,
 		time: 1000
 	});
 	var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
  	e.preventDefault();
  	$('body,html').animate({
  		scrollTop: $(this.hash).offset().top
  	}, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
  	var scrollbarLocation = $(this).scrollTop();

  	scrollLink.each(function() {

  		var sectionOffset = $(this.hash).offset().top - 20;

  		if ( sectionOffset <= scrollbarLocation ) {
  			$(this).parent().addClass('active');
  			$(this).parent().siblings().removeClass('active');
  		}
  	})

  })
});
 

