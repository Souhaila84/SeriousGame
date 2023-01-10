<?php
    include 'isLogged.php';

    if($isLogged){
        include 'config.php'; // including DB connexion
        
        $timeValue = $_POST['timePlayed'];
        
        $updateTimeSql = "UPDATE user SET bestTime=$timeValue WHERE id=$request_id AND (bestTime > $timeValue OR bestTime IS NULL)"; //using user id from isLogged.php
        $resultUpdateTime = mysqli_query($bdd, $updateTimeSql); // updating time in DB
        
        $bdd->close();
    }
?>