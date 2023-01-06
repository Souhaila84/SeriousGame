<?php 
    if (!empty($_POST['email']) && !empty($_POST['password'])){  // !empty() and not isset() becaue $_POST can be empty but set
        if($_SERVER["REQUEST_METHOD"] == "POST") {

            $email = $_POST['email'];
            $password = $_POST['password'];
            $email = strtolower($email); // We don't need caps mail address

            include 'config.php'; // including DB connexion 

            // Verifying if user already exist
            $isExistSql = "SELECT id FROM user WHERE email = '$email'";
            $resultIsExist = mysqli_query($bdd, $isExistSql);

            if($resultIsExist){
                $userId = $resultIsExist->fetch_row()[0];
                $getPasswordSql = "SELECT password FROM user WHERE id = $userId";
                $getPasswordResult = mysqli_query($bdd, $getPasswordSql);
                if ($getPasswordResult){
                    $userPassword = $getPasswordResult->fetch_row()[0];
                }
                if (strcmp($password, $userPassword) == 0){
                    
                    // Generate a secure random token
                    $token = bin2hex(openssl_random_pseudo_bytes(32));

                    $_SESSION['login_token'] = $token;
                    setcookie('login_token', $token);
                    setcookie('id_user', $userId);
                    
                    $deleteHoldToken = "DELETE FROM session WHERE idUser = $userId";
                    mysqli_query($bdd, $deleteHoldToken);
                    
                    $insertSession = "INSERT INTO session(sessionToken, idUser) VALUES('$token', '$userId')";
                    $result = mysqli_query($bdd, $insertSession);

                    header('Location: connexion.php'); $bdd -> close(); die();

                    
                }else{ header('Location: connexion.php?conn_err=password'); $bdd -> close(); die();}
            }else{ header('Location: connexion.php?conn_err=email'); $bdd -> close(); die();}
        }
    } else { header('Location: connexion.php?err=formNotComplete'); die(); }

?>