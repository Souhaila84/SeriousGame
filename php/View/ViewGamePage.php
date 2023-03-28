<?php
namespace View;
include_once 'View.php';

class ViewGamePage extends View
{
    public function __construct($layout)
    {
        parent::__construct($layout);

        $this->title= 'Jouer';

        $this->content = "<p>jouer au jeu</p>";

    }
}
?>
