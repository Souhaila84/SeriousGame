<?php
   
    $servername = "mysql-enqueteroquette.alwaysdata.net"; 
    $DBusername = "289405_a"; 
    $DBpassword = "%Admin0!";
   
    $database = "enqueteroquette_db";
   
     // Create a connection 
     $bdd = mysqli_connect($servername, 
         $DBusername, $DBpassword, $database);
   
    if($bdd) {
        echo "success"; 
    } 
    else {
        die("Error". mysqli_connect_error()); 
    } 
?>
