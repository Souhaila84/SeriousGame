<?php
    include 'configPDO.php'; // including DB connexion

    $request_id = $_COOKIE['id_user'] ?? ''; // the id to test

    if(ConnexionDBRead::getInstance()->isLogged()){
        
        $timeValue = $_POST['timePlayed'];

        ConnexionDBWrite::getInstance()->updatePlayerTime($timeValue,$request_id); // updating time in DB

    }
?>