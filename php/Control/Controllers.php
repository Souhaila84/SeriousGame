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

    public function gameCommentHandlerAction($post, $userChecking, $userInsert){
        if($userChecking->isLogged()){

            $commentText = $post['commentValue'];
            if ($commentText != ""){

                $request_id = isset($_COOKIE['id_user']) ? $_COOKIE['id_user'] : '';  //user id

                $userPseudo = $userChecking->pseudoFromID($request_id);

                //Inserting new comment in DB
                $result = $userInsert->writeGameComment($request_id,$commentText);


                //TODO FAIRE APPEL A LA VIEW

                if ($result){
                    echo "
                <li class='commentArea'>
                    <div class='profile'>
                        <img class='profilePicture' src='../images/avatar-default.png'>
                        <p class='profileName'>$userPseudo</p>
                    </div>
                    <p class = 'commentsTexts'> $commentText </p>
                </li>
                ";
                }
            }
        } else{
            echo "<section class='mustBeConnected'>
        Vous devez etre connecté pour poster un commentaire ! Pour vous connectez utiliser le bouton en haut à droite.
        </section>";
        }
    }

    public function connectButtonAction($userChecking){
        if($userChecking->isLogged()){
            echo "<button class=\"loginbutton\" role=\"button\" id=\"disconnectButton\">DECONNEXION</button>
        <script src=\"/scripts/disconnect.js\"></script>";
        }
        else {
            header('Status: 404 Not Found');
            echo '<html><body><h1>My Page NotFound</h1></body></html>';
        }
    }

    public function gameCommentReaderAction($userChecking){
        $allComments = $userChecking->allGameComments();


        //TODO: THE VIEW
        echo $allComments;
    }
}