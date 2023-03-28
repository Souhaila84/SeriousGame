<?php
namespace View;
include_once 'View.php';

class ViewMentionsLegales extends View
{
    public function __construct($layout)
    {
        parent::__construct($layout);

        $this->title= 'Mentions Légales';

        $this->content = "<p>mentions légales</p>";

    }
}
?>
