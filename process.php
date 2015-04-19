<?php

    // CONDITIONS NOM
    if ( (isset($_POST["contact-nom"])) && (strlen(trim($_POST["contact-nom"])) > 0) ):
        $nom = stripslashes(strip_tags($_POST["contact-nom"]));
    else:
        echo "Merci d'écrire un nom <br />";
        $nom = "";
    endif;

    // CONDITIONS SUJET
    if ( (isset($_POST["contact-objet"])) && (strlen(trim($_POST["contact-objet"])) > 0) ):
        $sujet = stripslashes(strip_tags($_POST["contact-objet"]));
    else:
        echo "Merci d'écrire un sujet <br />";
        $sujet = "";
    endif;

    // CONDITIONS EMAIL
    if ( (isset($_POST["contact-adress"])) && (strlen(trim($_POST["contact-adress"])) > 0) && (filter_var($_POST["contact-adress"], FILTER_VALIDATE_EMAIL)) ):
        $email = stripslashes(strip_tags($_POST["contact-adress"]));
    elseif (empty($_POST["contact-adress"])):
        echo "Merci d'écrire une adresse email <br />";
        $email = "";
    else:
        echo "Email invalide :(<br />";
        $email = "";
    endif;

    // CONDITIONS MESSAGE
    if ( (isset($_POST["contact-message"])) && (strlen(trim($_POST["contact-message"])) > 0) ):
        $message = stripslashes(strip_tags($_POST["contact-message"]));
    else:
        echo "Merci d'écrire un message<br />";
        $message = "";
    endif;

    // Les messages d"erreurs ci-dessus s'afficheront si Javascript est désactivé

    // PREPARATION DES DONNEES
    $destinataire = "kalfondenis@gmail.com";
    $objet        = "[Site Web] " . $sujet;
    $contenu      = "Nom de l'expéditeur : " . $nom . "\r\n";
    $contenu     .= "Adresse mail : " . $email . "\r\n";
    $contenu     .= $message."\r\n";

    $headers = "From: " . $email ."\r\n";
    $headers .= 'Reply-To: '.$email."\r\n".'X-Mailer: PHP/'.phpversion();
    $headers .= "Content-Type: text/plain; charset='ISO-8859-1'; DelSp='Yes'; format=flowed";
    $headers .= "Content-Disposition: inline ";
    $headers .= "Content-Transfer-Encoding: 7bit ";
    $headers .= "MIME-Version: 1.0";

    // SI LES CHAMPS SONT MAL REMPLIS
    if ( (empty($nom)) && (empty($sujet)) && (empty($email)) && (!filter_var($email, FILTER_VALIDATE_EMAIL)) && (empty($message)) ):
        echo "echec :( <br /><a href='index.html'>Retour au formulaire</a>";
    // ENCAPSULATION DES DONNEES 
    else:
        mail($destinataire,$objet,utf8_decode($contenu),$headers);
        echo "Formulaire envoyé";
    endif;

    // Les messages d"erreurs ci-dessus s"afficheront si Javascript est désactivé
?>