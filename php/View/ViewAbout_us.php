<?php
namespace View;
include_once "View.php";

class ViewAbout_us extends View
{
    public function __construct($layout)
    {
        parent::__construct($layout);

        $this->title= 'A propos';

        $this->content = "
<link rel='stylesheet' href='../css/aboutUs.css'>
<form>
    <div class='encadrement'>
        <p class='mainText'>Ce site a été effectué dans le cadre d'un projet de BUT de 2ème année en informatique.
            L'objectif du projet est de développer un sérious game qui vise à atteindre un objectif(apprentissage, communication,entraînement,...) de manière ludique.
            La conception du projet part des besoins décrits par un client qui nous a été attribué. Dans notre cas le sujet était la réalisation d'un sérious game sur le thème de l'anglais<br><br>
            <strong>Présentation du jeu :</strong><br><br>
            Durant le jeu nous jouons le rôle de l'assistant d'un détective français. Notre mission est d'aider l'inspecteur à résoudre l'enquête à travers plusieurs mini-jeux.</p>
    </div>
</form>
<h1 class='titre'><strong>Contributeurs</strong></h1>
<div class='allprofiles'>
    <div class='firstprofile'>
        <img class='profilpictures' src='../images/profil_souhaila.png' alt='Photo de profil Souhaila'>
        <p class='textfirstprofile'>Bonjour je m'appelle Souhaila Moumane je suis actuellement en 2 ème année d'informatique, Je suis l'auteure du jeu d'objets cachés, je suis une grande fan des jeux de mystères et tout particulièrement des jeux d'objets cachés. Les jeux comme Agatha Christie et la saga Nightfall Mysteries m'ont beaucoup inspirés lors de la création du mini-jeu. J'espère que celui-ci vous a plu, en tout cas, j'ai pris beaucoup de plaisir à le programmer.</p>
    </div>
    <div class='secondprofile'>
        <img class='profilpictures' src='../images/profil_alexis.png' alt='Photo de profil Alexis'>
        <p class='textsecondprofile'>Salut, moi c'est Alexis Mariotti je suis en seconde année de BUT informatique. Je suis l'auteur du jeu de traduction, ainsi que de tout le systeme de connexion et des avis du site. Je suis passioné de jeux vidéo ainsi que de bob marley. J'espere que mon travail vous à plu, en ce qui me concerce j'ai aimé le développer.</p>
    </div>
    <div class='thirdprofile'>
        <img class='profilpictures' src='../images/profil_victor.png' alt='Photo de profil Victor'>
        <p class='textthirdprofile'>Yo, moi c'est Victor Bouveret, j'étudie l'informatique depuis maintenant 2 ans. Je suis l'auteur du jeu d'orientation ainsi que du jeu final de choix du meurtrier mais également le css man principal du site. Je suis passioné de jeux calmes et reposants comme DOOM Eternal. J'ai beaucoup apprécie travailler sur ce projet et j'espère qu'il vous plaira !</p>
    </div>
    <div class='fourthprofile'>
        <img class='profilpictures' src='../images/profil_william.png' alt='Photo de profil William'>
        <p class='textfourthprofile'>Salut, c'est William Goujon, durant la conception du projet j'étais en 2e année de BUT informatique. Je suis passionné de jeux vidéo, d'E-sport et de streaming. Je suis l'auteur du jeu de texte à trous, j'espère que le jeu qu'on a fait vous a plu et je vous remercie d'y avoir joué.</p>
    </div>
</div>
<!--Souhaila Moumane Alexis Mariotti   Victor Bouveret  William Goujon-->";

    }
}
?>