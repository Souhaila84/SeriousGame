<?php

class Connexion
{
    protected $templateFile;

    public function __construct( $templateFile )
    {
        $this->templateFile = $templateFile;
    }

    public function display( $error )
    {
        $page = file_get_contents( $this->templateFile );
        $page = str_replace( ['%error%'], [$error], $page);
        echo $page;
    }

}