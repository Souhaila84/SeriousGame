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

            if(mysqli_num_rows($resultIsExist) == 1){
                $userId = $resultIsExist->fetch_row();
                $getPasswordSql = "SELECT password FROM user WHERE id = $userId[0]";
                $getPasswordResult = mysqli_query($bdd, $getPasswordSql);
                $userPassword = $getPasswordResult->fetch_row();
                if (strcmp($password, $userPassword[0]) == 0){
                    echo "gg t'es connecté";
                }else{ header('Location: connexion.php?conn_err=password'); $bdd -> close(); die();}
            }else{ header('Location: connexion.php?conn_err=email'); $bdd -> close(); die();}
        }
    } else { header('Location: connexion.php?err=formNotComplete'); die(); }

?>