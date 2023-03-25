<?php

include_once 'php/Control/Controllers.php';

include_once 'php/service/UserChecking.php';
include_once 'php/service/UserInsertion.php';

use Control\Controllers;
use service\{UserChecking,UserInsertion};


//initialisation of services
$userChecking = new UserChecking();
$userInsertion = new UserInsertion();

//Initialisation of controllers
$controller = new Controllers();

//url path
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if('/index.php/login' == $uri){

    $controller->loginAction($_POST, $userChecking, $userInsertion);

    echo 'login';
}
elseif('/index.php/connexion' == $uri && isset($_GET["reg_err"])){
    $errorMsg = "";
    switch ($_GET["reg_err"]) {
        case "succes" :
            $errorMsg = ' 
                <div class="alert-success">
                Bravo! Votre compte a bien été créé. Vous pouvez maintenant vous connectez !
                </div> 
                </html>';
            break;
        case "password" :
            $errorMsg = ' 
                <div class="alert-warning">
                Attention! Le mot de passe ne correspond pas avec le mot de passe de confirmation. 
                </div> 
                </html>';
            break;
        case "passwordIlegalChar" :
            $errorMsg = ' 
                <div class="alert-warning">
                Attention! Le mot de passe contient un charactere interdit ( \'&\'). 
                </div> 
                </html>';
            break;
        case "email" :
            $errorMsg = ' 
                <div class="alert-warning">
                Attention! L\'Email n\'est pas conforme. 
                </div> 
                </html>';
            break;
        case "email_length":
            $errorMsg = ' 
                <div class="alert-warning">
                Attention! L\'Email est trop long. 
                </div> 
                </html>';
            break;
        case "pseudo_length":
            $errorMsg = ' 
                <div class="alert-warning">
                Attention! Le pseudo est trop long. 
                </div> 
                </html>';
            break;
        case "password_length":
            $errorMsg = ' 
                <div class="alert-warning">
                Attention! Le mot de passe est trop long. 
                </div> 
                </html>';
            break;
        case "already":
            $errorMsg = ' 
                <div class="alert-warning">
                Attention! Ce compte existe déja dans notre base de donnée, essayer de vous connecter. 
                </div> 
                </html>';
            break;
        case "pseudo_not_available":
            $errorMsg = ' 
                <div class="alert-warning">
                Attention! Ce pseudo est déja utilisé par un autre joueur. 
                </div> 
                </html>';
            break;
        case "passwordValidity":
            $passwordValidity = unserialize($_GET["passwordValidity"]);
            $errorMsg = '
                <div class="alert-warning">
                Attention! Votre mot de passe doit remplir ces conditions : ';

            if ($passwordValidity[0]){
                $errorMsg .= '<p> Contenir un caractere majuscule minimum. </p>';
            }
            if ($passwordValidity[1]){
                $errorMsg .= '<p> Contenir un chifre minimum. </p>';
            }
            if ($passwordValidity[2]){
                $errorMsg .= '<p> Contenir un caractere special minimum. </p>';
            }
            if ($passwordValidity[3]){
                $errorMsg .= '<p> Contenir au moin 12 caracteres. </p>';
            }

            $errorMsg .= '</div> 
                </html>';
            break;


    }
    echo $errorMsg;

}elseif('/index.php/connexion' == $uri && isset($_GET["conn_err"])){
    $errorMsg = "";

    switch ($_GET["conn_err"]) {
        case "passwordMatch" :
            $errorMsg = " 
                <div class='alert-warning'>
                Attention! Le mot de passe ne correspond pas avec l'email. 
                </div> 
                </html>";
            break;
        case "email" :
            $errorMsg = ' 
                <div class="alert-warning">
                Attention! Il n\'y a pas de compte lié à cet email. 
                </div> 
                </html>';
            break;
    }

    echo $errorMsg;

}elseif('/index.php/connexion' == $uri && isset($_GET["err"])){
    $errorMsg = "";

    if($_GET["err"] == "formNotComplete"){
        $errorMsg = ' 
                <div class="alert-warning">
                Attention! Vous devez completez tous les champs! 
                </div> 
                </html>';
    }

    echo $errorMsg;


}elseif('/index.php/register' == $uri){

    $controller->registerAction($_POST, $userChecking, $userInsertion);

    echo 'registred';
}elseif('/index.php/disconnect' == $uri && $userChecking->isLogged()){

    $userInsertion->deleteSession($_COOKIE["id_user"]); //detruit le token dans la base de donnée

    //retire les coockies de connection
    setCookie("id_user","", time() - 3600);
    unset($_COOKIE["id_user"]);
    setCookie("login_token","", time() - 3600);
    unset($_COOKIE["login_token"]);
}
elseif('/index.php/gameCommentHandler' == $uri){

    $controller->gameCommentHandlerAction($_POST,$userChecking,$userInsertion);

}
else {
    header('Status: 404 Not Found');
    echo '<html><body><h1>My Page NotFound</h1></body></html>';
}

echo $uri;