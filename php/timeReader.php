<?php

    include 'configPDO.php'; // including DB connexion

    $resultBestTime = ConnexionDBRead::getInstance()->bestGameTimes();
    if ($resultBestTime){
        while($row = $resultBestTime->fetch()){
            $seconds = ($row->bestTime / 1000)% 60;
            $minutes = floor(($row->bestTime / 1000) / 60);
            echo "$row->pseudo à fini le jeu en $minutes min et $seconds secondes\n\n";
        }   
    }

?>