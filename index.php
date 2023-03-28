<?php
// charge et initialise les bibliothèques globales
include_once 'php/View/ViewAbout_us.php';
include_once 'php/View/ViewAccueil.php';
include_once 'php/View/ViewGamePage.php';
include_once 'php/View/ViewSupport.php';
include_once 'php/View/ViewConnexion.php';
include_once 'php/View/ViewMentionsLegales.php';

use View\{ViewAbout_us, ViewAccueil, ViewGamePage, ViewSupport, ViewConnexion,ViewMentionsLegales};

$data = null;
try {
    // construction du modèle
    $data = new PDO('mysql:host=mysql-enqueteroquette.alwaysdata.net;dbname=enqueteroquette_db', '289405_a', '%Admin0!');

} catch (PDOException $e) {
    print "Erreur de connexion !: " . $e->getMessage() . "<br/>";
    die();
}

// initialisation du controller

// chemin de l'URL demandée au navigateur
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// route la requête en interne
// i.e. lance le bon contrôleur en focntion de la requête effectuée

//page accueil
if ('/' == $uri || '/index.php' == $uri || '/index.php/accueil' == $uri) {
    $layout = new Layout("php/View/layout.html" );
    $vueAccueil = new ViewAccueil($layout);

    $vueAccueil->display();
}

//page about us
elseif ( '/index.php/About_us' == $uri) {
    $layout = new Layout("php/View/layout.html" );
    $vueAboutUs = new ViewAbout_us($layout);

    $vueAboutUs->display();
}

//page jouer
elseif ('/index.php/jouer' == $uri){
    $layout = new Layout("php/View/layout.html" );
    $vueGamePage = new ViewGamePage($layout);

    $vueGamePage->display();
}

//page support
elseif ('/index.php/support' == $uri){
    $layout = new Layout("php/View/layout.html" );
    $vueSupport = new ViewSupport($layout);

    $vueSupport->display();
}

//page connexion
elseif ('/index.php/connexion' == $uri){
    $layout = new Layout("php/View/layout.html" );
    $vueConnexion = new ViewConnexion($layout);

    $vueConnexion->display();
}

//page mentions légales
elseif ('/index.php/mentionsLegales' == $uri){
    $layout = new Layout("php/View/layout.html" );
    $vueMentionsLégales = new ViewMentionsLegales($layout);

    $vueMentionsLégales->display();
}

else {
    header('Status: 404 Not Found');
    echo '<html><body><h1>My Page NotFound</h1></body></html>';
}

?>
