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

  $('.instagramn-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1
    // autoplay: true
  });

  $('.testimonials-slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true
  });
  $('.about-feture-pro-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true
  });

  $('.popup-youtube').magnificPopup({
    type: 'iframe'
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
