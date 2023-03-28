<?php
namespace View;
include_once 'View.php';

class ViewConnexion extends View
{
    public function __construct($layout)
    {
        parent::__construct($layout);

        $this->title= 'Connexion';

        $this->content = "<p>connectez-vous</p>";

    }
}
?>
