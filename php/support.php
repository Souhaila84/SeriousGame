<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Envoie formulaire</title>
</head>
<body>
    <?php
    $retour = mail('lesinactifs13@gmail.com', 'Envoie depuis la page Suppor', $_POST['problème'], 'From : willylebigi@gmail.com');
    if($retour)
        echo '<p>Votre message a été envoyé<p>';
    ?>
</body>
</html>