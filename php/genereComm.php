<?php
    include 'configPDO.php';
    $result = ConnexionDBRead::getInstance()->commGenerated();
    $comment = $result->fetch();
    // Affichage du commentaire
    
    echo "<div class='comment'> ". $comment->libelle. "</div>" , " <content id='commentPseudo'> ". $comment->pseudo. "</content>";
?>