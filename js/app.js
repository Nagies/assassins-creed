$(document).ready(function() {
 
  $("#owl-example").owlCarousel({

    autoPlay: 3000,
    stopOnHover: true,
    lazyEffect: true,
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });

  $(".p-side-text").on("mouseenter", function() {
  	$(this).css({"color": "#891016"});
  });

  $(".p-side-text").on("mouseleave", function() {
  	$(this).css({"color": "white"});
  });

  $(".p-side-text-wide").on("mouseenter", function() {
  	$(this).css({"color": "#891016"});
  });

  $(".p-side-text-wide").on("mouseleave", function() {
  	$(this).css({"color": "white"});
  });


});


