$("#owl-restaurants").owlCarousel({loop:true,dots:false,autoplay:true,margin:25,responsive:{0:{items:1},600:{items:2},1400:{items:3}}});
$("#owl-menu").owlCarousel({loop:!0,dots:!1,autoplay:!0,margin:25,responsive:{0:{items:1},600:{items:2},1400:{items:3}}}),

$("#mobile-navbar-button,#menu_close_button").click(function(){
    $("#mobile-navbar-nav")
.toggleClass("mobile-navbar-hidden")}),

$("#document").ready(function(){
    $("#screen")
.fadeOut("slow")

  // Home - Intro slider
  $('.slick-slider').slick({
    dots: false,
    appendDots: '.dots-wrapper',
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    fade: true,
    cssEase: 'ease'
  });

}),

$("#scrolltotop").click(function(){
    $("html,body").animate({scrollTop:0},1e3)}
    ),

    

$(window).width()>800&&$(window).scroll(function(){
    $(this).scrollTop()>200?($(".logo").css("height","80px"),
    $("#scrolltotop").removeClass("d-none")):($(".logo").css("height","100px"),
    $("#scrolltotop").addClass("d-none"))}),



window.sr=ScrollReveal(),sr.reveal(".appear-left",{duration:1e3,origin:"left",distance:"50px",delay:"100"}),sr.reveal(".appear-right",{duration:1e3,origin:"right",distance:"50px",delay:"100"}),sr.reveal(".appear-bottom",{duration:1e3,origin:"bottom",distance:"50px",delay:"100"});