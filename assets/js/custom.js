var $ = jQuery;
$(window).on('load', function() { 
 AOS.init({
   // once: true
 });
});

$( document ).ready(function() {

  AOS.init({
    duration: 1200,
  })

  // hero slider
  $('.hero-slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true
  });

  $('.featur-slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true
  });
});
$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});
