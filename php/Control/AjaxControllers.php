<?php

namespace Control;

class AjaxControllers //this controller is used for ajax queries and don't use any view
{

    public function gameCommentHandlerAction($post, $userChecking, $userInsert){
        if($userChecking->isLogged()){

            $commentText = $post['commentValue'];
            if ($commentText != ""){

                $request_id = isset($_COOKIE['id_user']) ? $_COOKIE['id_user'] : '';  //user id

                $userPseudo = $userChecking->pseudoFromID($request_id);

                //Inserting new comment in DB
                $result = $userInsert->writeGameComment($request_id,$commentText);


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
            echo "<button class=\"loginbutton\" role=\"button\"><a href=\"/index.php/connexion\">CONNEXION</a></button>";
        }
    }

    public function gameCommentReaderAction($userChecking){
        $allComments = $userChecking->allGameComments();

        echo $allComments;
    }

    public function timeReaderAction($userChecking){
        $resultBestTime = $userChecking->bestGameTimes();
        if ($resultBestTime){
            while($row = $resultBestTime->fetch()){
                $seconds = ($row->bestTime / 1000)% 60;
                $minutes = floor(($row->bestTime / 1000) / 60);
                echo "$row->pseudo à fini le jeu en $minutes min et $seconds secondes\n\n";
            }
        }
    }

    public function timeWriterAction($userChecking,$userInsert){

        $request_id = $_COOKIE['id_user'] ?? ''; // the id to test

        if($userChecking->isLogged()){

            $timeValue = $_POST['timePlayed'];

            $userInsert->updatePlayerTime($timeValue,$request_id); // updating time in DB
        }
    }

    public function progressLevelAction($userChecking, $userInsert, $post){
        //parsing ajax requests
        if(isset($post['fuction'])){
            switch ($post['fuction']){
                case "readLevel" :
                    $progressLvl = 0; // initialising progressLevel

                    if($userChecking->isLogged()){
                        $progressLvl = $userChecking->progressLvlFromId($_COOKIE['id_user']);
                    }
                    echo $progressLvl; //return the associated progress level
                    break;
                case "increaseLevel" :
                    if($userChecking->isLogged()){ //only for logged users

                        if(isset($_POST["lvl"])){
                            $lvl = $_POST['lvl'];
                            $userInsert->setProgressLvl($_COOKIE['id_user'] ?? '', $lvl);
                        }
                    }
                    break;
                case "resetLevel" :
                    if($userChecking->isLogged()){ //only for logged users
                        $userInsert->setProgressLvl($_COOKIE['id_user'] ?? '', 0);
                    }
                    break;
            }
        }
    }

    public function genereCommAction($commentChecking){
        $comment = $commentChecking->readComment();

        // Affichage du commentaire
        echo "<div class='comment'> ". $comment->libelle. "</div>" , " <content id='commentPseudo'> ". $comment->pseudo. "</content>";
    }
}