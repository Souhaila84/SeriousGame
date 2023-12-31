<?php
namespace View;
include_once 'View.php';

class ViewMentionsLegales extends View
{
    public function __construct($layout)
    {
        parent::__construct($layout);

        $this->title= 'Mentions Légales';

        $this->content = "        <h1>Mentions Legales</h1>
        <h2>Preambule :</h2>
            Ce site a ete cree dans le cadre d'un projet au sein de l'IUT d'Aix-Marseille site de Gaston Berger (Aix-en-Provence (13)).
            <br>
            Derniere mise a jour du site : 02 / 04 / 2023.
            <br>
            Les adresses e-mails communiquees, etant des adresses e-mails etudiantes, peuvent ne plus etre valable a partir de juillet 2024. Dans le cas echeant, si le site est mis à jour, elles seront modifiees dans la mesure du possible.
        <h2>Proprietes intellectuelles :</h2>
        <ul>
            <li>Victor BOUVERET : Mail : <a href='mailto:victor.bouveret@etu.univ-amu.fr'>victor.bouveret@etu.univ-amu.fr</a> | L'adresse et le numero de telephone ne souhaitent pas etre communiquees par cette personne.</li>
            <li>William GOUJON : Mail : <a href='mailto:william.goujon@etu.univ-amu.fr'>william.goujon@etu.univ-amu.fr</a> | L'adresse et le numero de telephone ne souhaitent pas etre communiquees par cette personne.</li>
            <li>Alexis MARIOTTI : Mail : <a href='mailto:alexis.mariotti@etu.univ-amu.fr'>alexis.mariotti@etu.univ-amu.fr</a> | L'adresse et le numero de telephone ne souhaitent pas etre communiquees par cette personne.</li>
            <li>Souhaila MOUMANE : Mail : <a href='mailto:souhaila.moumane@etu.univ-amu.fr'>souhaila.moumane@etu.univ-amu.fr</a> | L'adresse et le numero de telephone ne souhaitent pas etre communiquees par cette personne.</li>
        </ul>
        <p>Hebergement du site : Alwaysdata <a href='https://www.alwaysdata.com/en/'>redirection vers le site de Alwaysdata</a>.<br>Mentions legales de l'hebergeur : La societe ALWAYSDATA, SARL au capital de 200.000 euros immatriculee au RCS de Paris sous le numero 492 893 490 dont le siege social se trouve 91 rue du Faubourg Saint Honore - 75008 Paris.</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
 ";

    }
}
?>
