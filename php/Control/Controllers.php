<?php

namespace Control;

use service\UserChecking;
use service\UserInsertion;

class Controllers
{
    public function loginAction($post){
        if (!empty($post['email']) && !empty($post['password'])){  // !empty() and not isset() becaue $_POST can be empty but set

                $email = $post['email'];
                $password = $post['password'];
                $email = strtolower($email); // We don't need caps mail address

                // Verifying if user already exist
                if( UserChecking::isExist($email)){
                    $userId = UserChecking::userId($email);

                    $userPassword = UserChecking::userPassword($userId);
                    if (password_verify($password, $userPassword) || strcmp($password, $userPassword) == 0){

                        // Generate a secure random token
                        $token = bin2hex(openssl_random_pseudo_bytes(32));

                        $_SESSION['login_token'] = $token;
                        setcookie('login_token', $token);
                        setcookie('id_user', $userId);

                        UserInsertion::deleteSession($userId); //deleting the hold session

                        UserInsertion::insertSession($token,$userId); //inserting the new session

                        header('Location: /index.html'); die(); // ATTENTION FAIRE LE HEADER BIEN


                    }else{ header('Location: connexion.php?conn_err=password'); die();} // ATTENTION FAIRE LE HEADER BIEN
                }else{ header('Location: connexion.php?conn_err=email'); die();} // ATTENTION FAIRE LE HEADER BIEN

        } else { header('Location: connexion.php?err=formNotComplete'); die(); } // ATTENTION FAIRE LE HEADER BIEN
    }
}