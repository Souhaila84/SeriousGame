<?php
namespace View;
include_once 'View.php';

class ViewAccueil extends View
{
    public function __construct($layout)
    {
        parent::__construct($layout);

        $this->title= 'Accueil';

        $this->content = "<p>Voici la page d'accueil</p>";

    }
}
?>
