<?php
    echo '<!DOCTYPE html>
<link href="../css/connexion.css" rel="stylesheet">

<html lang="en">
 <head>
   <meta charset="UTF-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Marcel Roquette</title>
 </head>
 <body>
    <nav class="sticky">
           <ul id="nav">
          <li><a id="home" href="/Home.html">Accueil</a></li>
          <li><a id="play" href="/pages/gamePage.html">Jouer</a></li>
          <li><a id="support" href="/pages/Support.html">Support</a></li>
          <li><a id="about us" href="/pages/About_us.html">A propos</a></li>
          <button class="loginbutton" role="button">CONNEXION</button>
           </ul>   
    </nav>';

    if (isset($_GET["reg_err"])){
        switch ($_GET["reg_err"]) {
            case "succes" :
                echo ' 
                <div class="alert-success">
                <strong>Bravo!</strong> Votre compte a bien été créé.
                </div> 
                </html>';
                break;
            case "password" :
                echo ' 
                <div class="alert-warning">
                <strong>Attention!</strong> Le mot de passe ne correspond pas avec le mot de passe de confirmation. 
                </div> 
                </html>';
                break;
            case "email" :
                echo ' 
                <div class="alert-warning">
                <strong>Attention!</strong> L\'Email n\'est pas conforme. 
                </div> 
                </html>';
                break;
            case "email_length":
                echo ' 
                <div class="alert-warning">
                <strong>Attention!</strong> L\'Email est trop long. 
                </div> 
                </html>';
                break;
            case "pseudo_length":
                echo ' 
                <div class="alert-warning">
                <strong>Attention!</strong> Le pseudo est trop long. 
                </div> 
                </html>';
                break;
            case "already":
                echo ' 
                <div class="alert-warning">
                <strong>Attention!</strong> Ce compte existe déja dans notre base de donnée, essayer de vous connecter. 
                </div> 
                </html>';
                break;
        } 
    }
    else if (isset($_GET["err"])){
        if($_GET["err"] == "formNotComplete"){
            echo ' 
                <div class="alert-warning">
                <strong>Attention!</strong> Vous devez completez tous les champs! 
                </div> 
                </html>';
        }
    }
    else if (isset($_GET["conn_err"])){
        switch ($_GET["conn_err"]) {
            case "password" :
                echo " 
                <div class='alert-warning'>
                <strong>Attention!</strong> Le mot de passe ne correspond pas avec l'email. 
                </div> 
                </html>";
                break;
            case "email" :
                echo ' 
                <div class="alert-warning">
                <strong>Attention!</strong> Il n\'y a pas de compte lié à cet email. 
                </div> 
                </html>';
                break;
        }
    }

    
    echo '<div id="connect">
            <form action="../php/login.php" method="post">
                <h3>Se connecter</h3> <!--Connexion-->
                <input name="email" type="email" placeholder="E-MAIL">
                <input name="password" type="password" placeholder="MOT DE PASSE">
                <button class="boutonlog" type="submit">CONNEXION</button>
            </form>
            <p>SI VOUS N\'AVEZ PAS ENCORE DE COMPTE, VOUS POUVEZ EN CREER UN CI-DESSOUS. <!--texte listant raisons de s\'inscrire-->
            <br>EN VOUS INSCRIVANT, VOUS POUVEZ SAUVEGARDER VOTRE 
            <br>PROGESSION ET AJOUTER DES COMMENTAIRES</p>
            <h3>S\'inscrire</h3> <!--Inscription-->
            <form action="../php/register.php" method="post" class="inscription">
                <input type="email" name="email" id="email" placeholder="E-MAIL">
                <input type="password" name="password" id="password" placeholder="MOT DE PASSE">
                <input type="password" name="confirm_password" id="confirm_password" placeholder="CONFIRMER MOT DE PASSE">
                <input type="text" name="pseudo" placeholder="PSEUDO">
                <input type="submit" value="S\'INSCRIRE" class="boutonlog">
            </form>
      </div>
           <div id="footer">
                    <ul id="footer">
                  <li><a id="legal_terms" href="#">Mentions légales</a></li>
                  <li><p class="pipe"> | </p></li>
                  <li><a id="about us_bot" href="#">A propos</a></li>
                  <li><p class="pipe"> | </p></li>
                  <li><a id="utilisations conditions" href="#">Conidtions d\'utilisation</a></li>
                  <li><p class="pipe"> | </p></li>
                  <li><a id="Contact" href="#">Contact</a></li> 
                    </ul>
                </div>
            <div id="legals_terms">
            <li><a>Copyright © 2022 LorenIpsum Inc. Tous droits réservés.</a></li>
        </div>
    </body>';
?>

