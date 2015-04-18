
$(document).ready(function() {
    $('.scrollTo').click( function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });
    $('.responsive-carousel').slick({
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchMove: true,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
  ]
});
    $(window).scroll(function (){ 
        $(".to-top").fadeIn();
    });
});

