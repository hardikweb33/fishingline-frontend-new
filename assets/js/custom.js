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
  $('.product-gallary-slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true
  });
  $('.modal').on('shown.bs.modal', function (e) {
    $('.product-gallary-slider').slick('setPosition');
  })
  $('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
    $('.qty .minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.qty .plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
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
$(window).resize(function() {
});