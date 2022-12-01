<?php
    /connexion à la base de données 
    $dbLink = mysqli_connect("localhost", "root@localhost", "")
    or die('Erreur de connexion au serveur : ' . mysqli_connect_error());

    //séléction de la base
    mysqli_select_db($dbLink , loginform)
    or die('Erreur dans la sélection de la base : ' . mysqli_error($dbLink)

    //récupérer les identifiants 
    /*if(isset($POST["email"]) && isset($POST["password"]) && isset($POST["pseudo"])){
    $email = $POST["email"];
    $password = $POST["password"];
    $pseudo = $POST["pseudo"];
    }
    */

    //inscription = insérer dans la base 
    $query = 'INSERT into user (email, password, pseudo) VALUES (\'' . $email. '\', \''. $password . '\', ' . $pseudo . ')';

    if(!($dbResult = mysqli_query($dbLink, $query)))
    {
    echo 'Erreur dans requête<br>';
    // Affiche le type d'erreur.
    echo 'Erreur : ' . mysqli_error($dbLink) . '<br>';
    // Affiche la requête envoyée.
    echo 'Requête : ' . $query . '<br>';
    exit();
    }

    if ($row ['email'] == $email && $row['password'] == $password && $row['pseudo'] == $pseudo){
        echo "Bonjour". $row['pseudo']. "votre inscription a bien été enregistré !"
    }



    //gestion d'erreurs (mdp différent(confirmat° mdp inscript°), email et/ou mdp incorrect, pseudo déja utilisé, compte nn existant (connexion) )
 
?>