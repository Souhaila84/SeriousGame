<?php

    include 'isLogged.php';


    $progressLvl = 0; // initialising progressLevel

    if($isLogged){
        include 'config.php'; // including DB connexion
        
        $getProgressLvlSql = "SELECT nv_progression FROM `user` WHERE id = $request_id"; // ussing id from isLogged.php
        $resultProgressLvl = mysqli_query($bdd, $getProgressLvlSql); //executing query
        if (mysqli_num_rows($resultProgressLvl) == 1){
            $progressLvl = $resultProgressLvl->fetch_row()[0];
        }
    }

    echo $progressLvl

?>