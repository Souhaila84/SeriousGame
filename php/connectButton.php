<?php
    include 'configPDO.php';
    
    if(ConnexionDBRead::getInstance()->isLogged()){
        echo "<button class=\"loginbutton\" role=\"button\" id=\"disconnectButton\">DECONNEXION</button>
        <script src=\"/scripts/disconnect.js\"></script>";
    }
    else{
        echo "<button class=\"loginbutton\" role=\"button\"><a href=\"/php/connexion.php\">CONNEXION</a></button>";
    }
?>