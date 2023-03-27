<?php
namespace View;

include_once 'View.php';
class Connexion extends View
{
    protected $templateFile;

    public function __construct( $layout, $error )
    {
        parent::__construct($layout);

        $page = file_get_contents( 'php/View/connexion.html' );
        $page = str_replace( ['%error%'], [$error], $page);

        $this->content = $page;
    }

}