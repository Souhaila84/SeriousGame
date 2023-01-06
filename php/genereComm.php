<?php
    session_start();
    require_once '../includes/dbh.inc.php';
    $query = "SELECT libelle, pseudo FROM commGenere ORDER BY rand()";
    $result = mysqli_query($bdd, $query);
    $comment = mysqli_fetch_assoc($result);
    // Affichage du commentaire
    echo "<br> ". $comment["libelle"]. " <br> ". $comment["pseudo"]. "<br>";
?>