<?php
namespace View;
include_once 'View.php';

class ViewAccueil extends View
{
    public function __construct($layout)
    {
        parent::__construct($layout);

        $this->title= 'Accueil';

        $this->content = '<div id="content">
                        <img src="images/The_1884\'s_murder.png" alt="Fond d\'écran d\'accueil class="responsive">
                         </div>  ';

    }
}
?>
