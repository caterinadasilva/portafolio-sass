$(document).ready( function(){
	$(".dropdown-button").dropdown();
	$(".button-collapse").sideNav();
	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		indicators: false
	});
	   // move next carousel
   $('.moveNextCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('next');
   });

   // move prev carousel
   $('.movePrevCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('prev');
   });
	setInterval(function() {
	    $('.carousel').carousel('next');
	}, 5000); // every 2 seconds
});
