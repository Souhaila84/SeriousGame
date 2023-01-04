<?php 

    if (!empty($_POST['pseudo']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['confirm_password'])){
        if($_SERVER["REQUEST_METHOD"] == "POST") {

            $pseudo = htmlspecialchars($_POST['pseudo']);
            $email = htmlspecialchars($_POST['email']);
            $password = htmlspecialchars($_POST['password']);
            $confirm_password = htmlspecialchars($_POST['confirm_password']);
            $email = strtolower($email); // We don't need caps mail address

            include 'config.php'; // including DB connexion 
            
            // Verifying if user already exist
            $sql = "SELECT pseudo, email, password FROM user WHERE email = '$email'";
            $resultIsExist = mysqli_query($bdd, $sql);

            if(mysqli_num_rows($resultIsExist) == 0){ 
                if(strlen($pseudo) <= 50){ // verifiying pseudo size
                    if(strlen($email) <= 50){ // verifiying mail size
                        if(filter_var($email, FILTER_VALIDATE_EMAIL)){ // If email maches the format
                            if(strcmp($password, $confirm_password) == 0){ // if passwords are sames

                                // Inserting in DB
                                $insert = "INSERT INTO user(pseudo, email, password) VALUES('$pseudo', '$email', '$password')";
                                $result = mysqli_query($bdd, $insert);

                                // Redirecting
                                if ($result) {
                                    header('Location: connexion.php?reg_err=succes');
                                    $bdd -> close();
                                    die();
                                }
                            }else{ header('Location: connexion.php?reg_err=password'); $bdd -> close(); die();}
                        }else{ header('Location: connexion.php?reg_err=email'); $bdd -> close(); die();}
                    }else{ header('Location: connexion.php?reg_err=email_length'); $bdd -> close(); die();}
                }else{ header('Location: connexion.php?reg_err=pseudo_length'); $bdd -> close(); die();}
            }else{ header('Location: connexion.php?reg_err=already'); $bdd -> close(); die();}
        }
    }
    else { header('Location: connexion.php?err=formNotComplete'); die(); }

?>