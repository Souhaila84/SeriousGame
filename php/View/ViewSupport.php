<?php
namespace View;
include_once 'View.php';

class ViewSupport extends View
{
    public function __construct($layout)
    {
        parent::__construct($layout);

        $this->title= 'Support';

        $this->content = "<p>Voici la page de support</p>";

    }
}
?>
