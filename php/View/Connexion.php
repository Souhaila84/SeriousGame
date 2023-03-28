<?php
namespace View;

include_once 'View.php';
class Connexion extends View
{
    protected $templateFile;

    public function __construct( $layout, $error )
    {
        parent::__construct($layout);

        $page = '<link href="../css/connexion.css" rel="stylesheet">'
                . $error .
                '<div id="connect">
                
                    <form action="/index.php/login" method="post">
                        <h3>Se connecter</h3> <!--Connexion-->
                        <input name="email" type="email" placeholder="E-MAIL">
                        <input name="password" type="password" placeholder="MOT DE PASSE">
                        <button class="boutonlog" type="submit">CONNEXION</button>
                    </form>
                    <p>SI VOUS N\'AVEZ PAS ENCORE DE COMPTE, VOUS POUVEZ EN CREER UN CI-DESSOUS. <!--texte listant raisons de s\'inscrire-->
                    <br>EN VOUS INSCRIVANT, VOUS POUVEZ SAUVEGARDER VOTRE
                    <br>PROGESSION ET AJOUTER DES COMMENTAIRES</p>
                    <h3>S\'inscrire</h3> <!--Inscription-->
                    <form action="/index.php/register" method="post" class="inscription">
                        <input type="email" name="email" id="email" placeholder="E-MAIL">
                        <input type="password" name="password" id="password" placeholder="MOT DE PASSE">
                        <input type="password" name="confirm_password" id="confirm_password" placeholder="CONFIRMER MOT DE PASSE">
                        <input type="text" name="pseudo" placeholder="PSEUDO">
                        <input type="submit" value="S\'INSCRIRE" class="boutonlog">
                    </form>
                </div>';

        $this->content = $page;
    }

}