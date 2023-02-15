<?php

include 'configPDO.php'; // including DB connexion

    //parsing ajax requests
    if(isset($_POST['fuction'])){
        if ($_POST['fuction'] == "readLevel") { readLevel(); }
        if ($_POST['fuction'] == "increaseLevel") { increaseLevel(); }
        if ($_POST['fuction'] == "resetLevel") { resetLevel(); }
    }

    function readLevel(){

        $progressLvl = 0; // initialising progressLevel

        if(ConnexionDBRead::getInstance()->isLogged()){

            $resultProgressLvl = ConnexionDBRead::getInstance()->progressLvlFromId($_COOKIE['id_user'] ?? '');
            if ($resultProgressLvl->rowCount() == 1){
                $progressLvl = $resultProgressLvl->fetch()->lvl;
            }
        }

        echo $progressLvl;
    }

    function increaseLevel(){
        
        if(ConnexionDBRead::getInstance()->isLogged()){
            
            if(isset($_POST["lvl"])){
                $lvl = $_POST['lvl'];
                ConnexionDBWrite::getInstance()->setProgressLvl($_COOKIE['id_user'] ?? '', $lvl);
            }
        }
    }

    function resetLevel(){
        
        if(ConnexionDBRead::getInstance()->isLogged()){

            ConnexionDBWrite::getInstance()->setProgressLvl($_COOKIE['id_user'] ?? '', 0); //set with 0 for reset

        }
    }
?>