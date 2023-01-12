<?php

    //parsing ajax requests
    if(isset($_POST['fuction'])){
        if ($_POST['fuction'] == "readLevel") { readLevel(); }
        if ($_POST['fuction'] == "increaseLevel") { increaseLevel(); }
        if ($_POST['fuction'] == "resetLevel") { resetLevel(); }
    }

    function readLevel(){
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

        echo $progressLvl;
    }

    function increaseLevel(){
        include 'isLogged.php';
        
        if($isLogged){
            
            if(isset($_POST["lvl"])){
                $lvl = $_POST['lvl'];
                $increaseLevelSql = "UPDATE user SET nv_progression = $lvl WHERE id = $request_id"; // ussing id from isLogged.php
                mysqli_query($bdd, $increaseLevelSql); //executing query
            }
        }
    }

    function resetLevel(){
        include 'isLogged.php';
        
        if($isLogged){

            $resetLevel = "UPDATE user SET nv_progression = 0 WHERE id = $request_id"; // ussing id from isLogged.php
            mysqli_query($bdd, $resetLevel); //executing query

        }
    }
?>