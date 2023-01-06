<?php
    session_start();
    require_once 'includes/dbh.inc.php';
?>
<!DOCTYPE html>
<html lang="en">
 <head>
   <title>commentaires</title>
 </head>
 <body>
    <?php
    while(true){
    $query = "SELECT libelle, pseudo FROM commGenere ORDER BY rand()";
    $result = mysqli_query($bdd, $query);
    $comment = mysqli_fetch_assoc($result);
    // Affichage du commentaire
    echo "<br> ". $comment["libelle"]. " <br> ". $comment["pseudo"]. "<br>";
    $interval = 10; // intervalle de 10 secondes
    }


?>
<div id='commentaire' >
    <form action="index.php" method = "fetch" >
</form>
</div>
 </body>
</html>

