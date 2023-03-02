<?php

    echo '<!DOCTYPE html>
    <html> 
        <head>
            <meta charset="UTF-8"/>
            <link rel="stylesheet" href="../css/Support.css">
            
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
            <link rel="shortcut icon" type="image/png" href="/images/faviconn.png"/>
        </head>
        <body>
            <div id="wrap">
            </div>
            <nav class="sticky">
               <ul id="nav">
              <img id="logo" src="/images/Logo.png" alt="example" class="responsive">
              <li><a id="home" href="/index.html">Accueil</a></li>
              <li><a id="play" href="/pages/gamePage.html">Jouer</a></li>
              <li><a id="support" href="/pages/Support.html">Support</a></li>
              <li><a id="about us" href="/pages/About_us.html">A propos</a></li>
              <script>
              $.ajax({
                url: \'/php/connectButton.php\',
                success: function(data){
                   $(\'#nav\').append(data);
                }
                });
                </script>
               </ul>   
           </nav>
           <h1 class="title"><strong>Bienvenue sur la page Support !</strong></h1>
    <h3 class="title">Si vous venez à rencontrer un problème, n\'hésitez pas à nous en faire part !</h3>
    <form>
        <br>
            <p><input type="text" name="mail" placeholder="Mail :"></p>
            <p><input type="text" name="nom" placeholder="Nom :"><input type="text" name="prenom" placeholder="Prénom :"></p>
            <div id="zone">
                <textarea name="probleme" rows= 9 cols= 100 style="max-width: 100%;" placeholder ="Expliquez le problème :"></textarea>
            </div>
            <button class="supportButton">
                <a href="mailto:the1884murder@gmail.com">Envoyer</a>
            </button>

        </form>
      <div id="footer">
        <ul>
          <li><a id="legal_terms" href="/pages/legalMentions.html">Mentions légales</a></li>
          <li><p class="pipe"> | </p></li>
          <li><a id="about us_bot" href="/pages/About_us.html">A propos</a></li>
          <li><p class="pipe"> | </p></li>
          <li><a id="Contact" href="/pages/Support.html">Contact</a></li> 
        </ul>
    </div>
</body>
</html>';

    
    require '../phpmailer/includes/Exception.php';
    require '../phpmailer/includes/SMTP.php';
    require '../phpmailer/includes/PHPMailer.php';
    require 'configPDO.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    $mail_dest = $_POST["mail"];
    $Nom = $_POST["nom"];
    $Prenom = $_POST["prenom"];

    // On crée uns instance de PHPMailer
    $mail = new PHPMailer();

    // Encodage UTF-8 pour les accents...
    $mail->CharSet = 'UTF-8';

    // On utilise le serveur mail SMTP
    $mail->isSMTP();

    // On définit l'hôte smtp (dans notre cas GMAIL)
    $mail->Host = "smtp.gmail.com";

    // On active l'authentification SMTP
    $mail->SMTPAuth = true;

    // On utilise l'encryptage de type tls (Transport Layer Security)
    $mail->SMTPSecure = "tls";

    // On se connecte sur le port 587 qui est un port sécurité
    $mail->Port = "587";

    // On donne l'utilisateur à savoir le login du compte GMAIL
    $mail->Username = "the1884murder@gmail.com";

    // On donne le mot de passe qui à été généré dans la partie sécurité du compte GMAIL
    $mail->Password = "nfobozbdicetgyof";

    // Le sujet de l'email
    $mail->Subject = "Problème";

    // La personne qui envoie l'email
    $mail->setFrom("the1884murder@gmail.com");

    // On active le format PAGES (On peu utiliser la synthaxe PAGES a savoir les balises dans le corps du mail et celui-ci sera reconnu)
    $mail->isHTML(true);

    // Le corps du mail a savoir le token qui est généré aléatoirement
    $mail->Body = $corpMail;

    // On ajoute l'adresse mail du destinataire
    $mail->addAddress($mail_dest);

    // On ferme la connexion SMTP au compte GMAIL
    $mail->smtpClose();

?>
