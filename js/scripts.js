
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
    $(".slick-slide").mouseenter(function (){
        $(this).children("div").fadeIn();
    });
    $(".slick-slide").mouseleave(function (){
        $(this).children("div").fadeOut();
    });
    $(window).scroll(function (){
        if($(window).scrollTop() >= 10 ){
            $(".nav-vertical").fadeIn();
        }
        else{
            $(".nav-vertical").fadeOut();
        }
    });
    $(".to-top").click(function (){
        window.scrollTo(0, 0);
    });
    
    /*AJAX FORMULAIRE*/
    $(".form-contact").submit(function(){
        var nom        = $("#contact-nom").val();
        var sujet      = $("#contact-objet").val();
        var email      = $("#contact-adress").val();
        var message    = $("#contact-message").val();
        var dataString = nom + sujet + email + message;
        var msg_all    = "Merci de remplir tous les champs";
        var msg_alert  = "Merci de remplir ce champs";
        if(dataString  == "")
        {
            $("#msg_all").html(msg_all);
        }
        else if(nom == "")
        {
            $("#msg_nom").html(msg_alert);
        }
        else if(sujet == "")
        {
            $("#msg_sujet").html(msg_alert);
        }
        else if(email == "")
        {
            $("#msg_email").html(msg_alert);
        }
        else if(message == "")
        {
            $("#msg_message").html(msg_alert);
        }
        else
        {
            $.ajax({
                type : "POST",
                url: $(this).attr("action"),
                data: $(this).serialize(),
                success : function(){
                    $(".form-contact").html("<p>Votre mail a bien été envoyé. Merci.</p>");
                },
                error: function(){
                    $(".form-contact").html("<p>Une erreure est survenue...</p>");
                }
            });
        }
        return false;
    });
});

