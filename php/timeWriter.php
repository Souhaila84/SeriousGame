<?php
    include 'isLogged.php';

    if($isLogged){
        include 'config.php'; // including DB connexion
        
        $addTimeSql = "UPDATE user SET bestTime=$timeValue WHERE id=$request_id AND (bestTime > $timeValue OR bestTime IS NULL)"; //using user id from isLogged.php
        
    }
?>