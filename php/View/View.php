<?php
namespace View;
include_once "Layout.php";

abstract class View
{
    protected $title = 'Marcel Roquette';
    protected $content = '';
    protected $layout;

    public function __construct($layout)
    {
        $this->layout = $layout;
    }

    public function display()
    {
        $this->layout->display( $this->title, $this->content );
    }
}
?>