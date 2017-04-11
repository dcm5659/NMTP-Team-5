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

  resizeimg();
});
			

$( window ).resize(function() {
  console.log($(window).width());
  resizeimg();
});

function resizeimg(){
  if($(window).width() < 1200){
    var image = document.getElementById('collectionimg');
    var newheight = image.clientHeight + 470;
    $('#datacollection').css('height', newheight);
    $('#collectionimg').css({'position': 'absolute','top': '470px'})
  } else {
    $('#datacollection').removeAttr('style');
  }
}