$(function() {

    // Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    cheakScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {

        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        cheakScroll(scrollPos, introH)

    });

    function cheakScroll(scrollPos, introH) {

        if(scrollPos > introH) {
            header.addClass("fixed");
        } else  {
            header.removeClass("fixed");
        }

    }

    // Smooth scroll
    $("[data-scroll]").on("click" , function(event) {
        event.preventDefault();

        let blockID = $(this).data('scroll');
        let elementOffset = $(blockID).offset().top;
        
        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset -75
        }, 1000);
    });

    // Nav Toggle

    
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    // Reviews

    let slider = $("#reviewsSlider");
    
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });
          
});