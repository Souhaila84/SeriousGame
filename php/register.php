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
                    if(strlen($pseudo) <= 50){ // verifiying pseudo size
                        if(strlen($email) <= 50){ // verifiying mail size
                            if(filter_var($email, FILTER_VALIDATE_EMAIL)){ // If email maches the format
                                if(strpos($password, '&') ===false){ // if illegal chars for hash
                                    if(strcmp($password, $confirm_password) == 0){ // if passwords are sames

                                        $hash = password_hash($password, PASSWORD_DEFAULT);
                                        // Inserting in DB
                                        $result = ConnexionDBWrite::getInstance()->insertNewAccount($pseudo,$email,$hash);

                                        // Redirecting
                                        if ($result) {
                                            header('Location: connexion.php?reg_err=succes');
                                            die();
                                        }
                                    }else{ header('Location: connexion.php?reg_err=password'); die();}
                                }else{ header('Location: connexion.php?reg_err=passwordIlegalChar'); die();}
                            }else{ header('Location: connexion.php?reg_err=email'); die();}
                        }else{ header('Location: connexion.php?reg_err=email_length'); die();}
                    }else{ header('Location: connexion.php?reg_err=pseudo_length'); die();}
                }else{ header('Location: connexion.php?reg_err=pseudo_not_available'); die();}
            }else{ header('Location: connexion.php?reg_err=already'); die();}
        }
    }
    else { header('Location: connexion.php?err=formNotComplete'); die(); }

?>