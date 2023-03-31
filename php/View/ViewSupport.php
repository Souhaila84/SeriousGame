<?php
namespace View;
include_once 'View.php';

class ViewSupport extends View
{
    public function __construct($layout)
    {
        parent::__construct($layout);

        $this->title= 'Support';

        $this->content = "<link rel='stylesheet' href='../css/Support.css'>
<h1 class='title'><strong>Bienvenue sur la page Support !</strong></h1>
<h3 class='title'>Si vous venez à rencontrer un problème, n'hésitez pas à nous en faire part !</h3>
<form src='../php/Support.php' method='post'>
    <br>
    <p><input type='text' name='adresse mail' placeholder='Adresse mail :'></p>
    <p><input type='text' name='nom' placeholder='Nom :'><input type='text' name='object' placeholder='object :'></p>
    <div id='zone'>
        <textarea name='probleme' rows= 9 cols= 100 style='max-width: 100%;' placeholder ='Expliquez le problème :'></textarea>
    </div>
    <button class='supportButton' type='submit'>Envoyer</button>
</form>";

    }
}
?>
