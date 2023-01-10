<?php

    include 'config.php'; // including DB connexion
    
    $showBestTimesSql = "SELECT pseudo, bestTime FROM `user` WHERE bestTime IS NOT NULL ORDER BY bestTime LIMIT 5";  // TOP 10 players
    $resultBestTime = mysqli_query($bdd, $showBestTimesSql);
    if ($resultBestTime){
        while($row = $resultBestTime->fetch_row()){
            $seconds = ($row[1] / 1000)% 60;
            $minutes = floor(($row[1] / 1000) / 60);
            echo "$row[0] à fini le jeu en $minutes min et $seconds secondes\n\n";
        }   
    }

?>