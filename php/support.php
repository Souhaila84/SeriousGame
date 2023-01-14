<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Envoie formulaire</title>
</head>
<body>
    <?php
    $retour = mail('the1884murder@gmail.com', 'Envoie depuis la page Suppor', $_POST['problème'], 'From : the1884murder@gmail.com');
    if($retour)
        echo '<p>Votre message a été envoyé<p>';
    ?>
</body>
</html>
