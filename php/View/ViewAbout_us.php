<?php
namespace View;
include_once "View.php";

class ViewAbout_us extends View
{
    public function __construct($layout)
    {
        parent::__construct($layout);

        $this->title= 'A propos';

        $this->content = "<p> Hello</p>";

    }
}
?>