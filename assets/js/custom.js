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
    slidesToScroll: 1,
    // autoplay: true
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
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
    responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
      }
    }
  ]
  });
  $('.category-pro-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true
    responsive: [   
    {
      breakpoint: 768,
      settings: {
      slidesToShow: 2,
      centerMode: true,
      centerPadding: '60px',
      }
    },
    {
      breakpoint: 576,
      settings: {
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '60px',
      }
    }
  ]
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
  $("header .menu-icon").click(function(){
    $("header .menu").toggleClass("open");
    $(this).toggleClass("open");
    $("html").toggleClass("menu-open");
  });
  $(".mobile-filter").click(function(){
    $(".mobile-filter-content").toggle(400);
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
$(window).resize(function() {
});