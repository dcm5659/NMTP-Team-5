$(document).ready(function(){
  $('.carousel').slick({
  	arrows:false,
  	dots:true
  });

  $('.scroll').click(function() {
      $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top
      }, 1000);
    });

});
			