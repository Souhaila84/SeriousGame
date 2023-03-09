<?php

// charge et initialise les bibliothèques globales


$data = null;
try {
    // construction du modèle
    $data = new DataAccess( new PDO('mysql:host=mysql-enqueteroquette.alwaysdata.net;dbname=enqueteroquette_db', '289405_a', '%Admin0!') );

} catch (PDOException $e) {
    print "Erreur de connexion !: " . $e->getMessage() . "<br/>";
    die();
}

// initialisation du controller
$controller = new Controllers();

// intialisation du cas d'utilisation AnnoncesChecking


// intialisation du presenter avec accès aux données de AnnoncesCheking


// chemin de l'URL demandée au navigateur
// (p.ex. /annonces/index.php)
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// route la requête en interne
// i.e. lance le bon contrôleur en focntion de la requête effectuée
if ( '/' == $uri || '/index.php' == $uri) {

    $layout = new Layout("gui/layout.html" );
    $vueLogin = new ViewLogin( $layout );

    $vueLogin->display();
}

else {
    header('Status: 404 Not Found');
    echo '<html><body><h1>My Page NotFound</h1></body></html>';
}

?>
