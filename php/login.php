<?php 
    if (!empty($_POST['email']) && !empty($_POST['password'])){  // !empty() and not isset() becaue $_POST can be empty but set
        if($_SERVER["REQUEST_METHOD"] == "POST") {

            $email = $_POST['email'];
            $password = $_POST['password'];
            $email = strtolower($email); // We don't need caps mail address

            include 'configPDO.php'; // including DB connexion

            // Verifying if user already exist
            $resultIsExist = ConnexionDBRead::getInstance()->userIdFromMail($email);

            if( $resultIsExist->rowCount() > 0){
                $userId = $resultIsExist->fetch()->id;

                $getPasswordResult = ConnexionDBRead::getInstance()->userPasswordFromId($userId);
                $userPassword = $getPasswordResult->fetch()->password;
                if (password_verify($password, $userPassword) || strcmp($password, $userPassword) == 0){
                    
                    // Generate a secure random token
                    $token = bin2hex(openssl_random_pseudo_bytes(32));

                    $_SESSION['login_token'] = $token;
                    setcookie('login_token', $token);
                    setcookie('id_user', $userId);
                    
                    ConnexionDBWrite::getInstance()->deleteSession($userId); //deleting the hold session
                    
                    ConnexionDBWrite::getInstance()->insertSession($token,$userId); //inserting the new session

                    header('Location: /index.html'); die();


                }else{ header('Location: connexion.php?conn_err=password'); die();}
            }else{ header('Location: connexion.php?conn_err=email'); die();}
        }
    } else { header('Location: connexion.php?err=formNotComplete'); die(); }

?>