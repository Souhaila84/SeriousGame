<?php

namespace Control;

class Controllers
{
    public function loginAction($post, $userChecking, $userInsert){
        if (!empty($post['email']) && !empty($post['password'])){  // !empty() and not isset() becaue $_POST can be empty but set

                $email = $post['email'];
                $password = $post['password'];
                $email = strtolower($email); // We don't need caps mail address

                // Verifying if user already exist
                if( $userChecking->isExist($email)){
                    $userId = $userChecking->userId($email);

                    $userPassword = $userChecking->userPassword($userId);
                    if (password_verify($password, $userPassword) || strcmp($password, $userPassword) == 0){

                        // Generate a secure random token
                        $token = bin2hex(openssl_random_pseudo_bytes(32));

                        $_SESSION['login_token'] = $token;
                        setcookie('login_token', $token);
                        setcookie('id_user', $userId);

                        $userInsert->deleteSession($userId); //deleting the hold session

                        $userInsert->insertSession($token,$userId); //inserting the new session

                        header('Location: /index.html'); die(); // ATTENTION FAIRE LE HEADER BIEN


                    }else{ header('Location: connexion?conn_err=password'); die();} // ATTENTION FAIRE LE HEADER BIEN
                }else{ header('Location: connexion?conn_err=email'); die();} // ATTENTION FAIRE LE HEADER BIEN

        } else { header('Location: connexion?err=formNotComplete'); die(); } // ATTENTION FAIRE LE HEADER BIEN
    }

    public function registerAction($post, $userChecking, $userInsert){
        if (!empty($post['pseudo']) && !empty($post['email']) && !empty($post['password']) && !empty($post['confirm_password'])){

                $pseudo = htmlspecialchars($post['pseudo']);
                $email = htmlspecialchars($post['email']);
                $password = htmlspecialchars($post['password']);
                $confirm_password = htmlspecialchars($post['confirm_password']);
                $email = strtolower($email); // We don't need caps mail address

                // Verifying if user already exist
                $resultIsExist = $userChecking->isEmailExist($email);

                //Verifying if the pseudo is available
                $resultIsPseudo = $userChecking->isPseudoExist($pseudo);

                if($resultIsExist->rowCount() == 0){
                    if($resultIsPseudo->rowCount() == 0){
                        if(strlen($pseudo) <= 50){ // verifying pseudo size
                            if(strlen($email) <= 50){ // verifying mail size
                                if(strlen($password) <=60){ // verifying password size
                                    if(filter_var($email, FILTER_VALIDATE_EMAIL)){ // If email maches the format
                                        if(strpos($password, '&') ===false){ // if illegal chars for hash
                                            if(strcmp($password, $confirm_password) == 0){ // if passwords are sames

                                                // verifying password strength
                                                $uppercase = !preg_match('@[A-Z]@', $password); //One uppercase
                                                $number = !preg_match('@[0-9]@', $password); //One number
                                                $specialChars = !preg_match('@[^\w]@', $password); //One special char
                                                $length = strlen($password) < 12; // length test, more than 12 chars

                                                if ($uppercase || $number || $specialChars || $length){
                                                    $passwordValidity = array($uppercase,$number,$specialChars,$length);
                                                    header('Location: connexion?reg_err=passwordValidity&passwordValidity=' . serialize($passwordValidity)); die();
                                                }

                                                $hash = password_hash($password, PASSWORD_DEFAULT);
                                                // Inserting in DB
                                                $result = $userInsert->insertAccount($pseudo,$email,$hash);

                                                // Redirecting
                                                if ($result) {
                                                    header('Location: connexion?reg_err=succes');
                                                    die();
                                                }
                                            }else{ header('Location: connexion?reg_err=passwordMatch'); die();} // ATTENTION FAIRE LE HEADER BIEN
                                        }else{ header('Location: connexion?reg_err=passwordIlegalChar'); die();} // ATTENTION FAIRE LE HEADER BIEN
                                    }else{ header('Location: connexion?reg_err=email'); die();} // ATTENTION FAIRE LE HEADER BIEN
                                } else { header('Location: connexion?reg_err=password_length'); die();} // ATTENTION FAIRE LE HEADER BIEN
                            }else{ header('Location: connexion?reg_err=email_length'); die();} // ATTENTION FAIRE LE HEADER BIEN
                        }else{ header('Location: connexion?reg_err=pseudo_length'); die();} // ATTENTION FAIRE LE HEADER BIEN
                    }else{ header('Location: connexion?reg_err=pseudo_not_available'); die();} // ATTENTION FAIRE LE HEADER BIEN
                }else{ header('Location: connexion?reg_err=already'); die();} // ATTENTION FAIRE LE HEADER BIEN
        }
        else { header('Location: connexion?err=formNotComplete'); die(); } // ATTENTION FAIRE LE HEADER BIEN
    }
}