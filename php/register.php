<?php 

    if (!empty($_POST['pseudo']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['confirm_password'])){
        if($_SERVER["REQUEST_METHOD"] == "POST") {

            $pseudo = htmlspecialchars($_POST['pseudo']);
            $email = htmlspecialchars($_POST['email']);
            $password = htmlspecialchars($_POST['password']);
            $confirm_password = htmlspecialchars($_POST['confirm_password']);
            $email = strtolower($email); // We don't need caps mail address

            include 'configPDO.php'; // including DB connexion
            
            // Verifying if user already exist
            $resultIsExist = ConnexionDBRead::getInstance()->isEmailExist($email);
            
            //Verifying if the pseudo is available
            $resultIsPseudo = ConnexionDBRead::getInstance()->isPseudoExist($pseudo);

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
                                                header('Location: connexion.php?reg_err=passwordValidity&passwordValidity=' . serialize($passwordValidity)); die();
                                            }

                                            $hash = password_hash($password, PASSWORD_DEFAULT);
                                            // Inserting in DB
                                            $result = ConnexionDBWrite::getInstance()->insertNewAccount($pseudo,$email,$hash);

                                            // Redirecting
                                            if ($result) {
                                                header('Location: connexion.php?reg_err=succes');
                                                die();
                                            }
                                        }else{ header('Location: connexion.php?reg_err=passwordMatch'); die();}
                                    }else{ header('Location: connexion.php?reg_err=passwordIlegalChar'); die();}
                                }else{ header('Location: connexion.php?reg_err=email'); die();}
                            } else { header('Location: connexion.php?reg_err=password_length'); die();}
                        }else{ header('Location: connexion.php?reg_err=email_length'); die();}
                    }else{ header('Location: connexion.php?reg_err=pseudo_length'); die();}
                }else{ header('Location: connexion.php?reg_err=pseudo_not_available'); die();}
            }else{ header('Location: connexion.php?reg_err=already'); die();}
        }
    }
    else { header('Location: connexion.php?err=formNotComplete'); die(); }

?>