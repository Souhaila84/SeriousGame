<?php
        $dbServername = "mysql-enqueteroquette.alwaysdata.net"; 
        $dbUsername = "289405_a";
        $dbPassword = "%Admin0!";
        $dbName = "enqueteroquette_commdb";

        // Create connection
        $bdd = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);
        // Check connection
        if($bdd) {
            echo "success"; 
        } 
        else {
            die("Error". mysqli_connect_error()); 
        }
?>