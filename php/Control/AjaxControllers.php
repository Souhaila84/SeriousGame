<?php

namespace Control;

class AjaxControllers //this controller is used for ajax queries and don't use any view
{

    public function gameCommentHandlerAction($post, $userChecking, $userInsert){
        if($userChecking->isLogged()){

            $commentText = $post['commentValue'];
            $commentRate = intval($post['ratingValue']);
            if ($commentText != ""){

                $request_id = isset($_COOKIE['id_user']) ? $_COOKIE['id_user'] : '';  //user id

                $userPseudo = $userChecking->pseudoFromID($request_id);

                //Inserting new comment in DB
                $result = $userInsert->writeGameComment($request_id,$commentText,$commentRate);

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

        foreach ($allComments as $comment){
            echo "
        <li class='commentArea'>
            <div class='profile'>
                <img class='profilePicture' src='../images/avatar-default.png'>
                <p class='profileName'>$comment[0]</p>
            </div> ";
            for ($i=0; $i<=$comment[2]; ++$i){
                echo '<span id="i" class="fa fa-star checked"></span>';
            }
            for ($i=$comment[2]+1; $i < 5; ++$i) {
                echo '<span id="i" class="fa fa-star"></span>';
            }
            echo "<p class = 'commentsTexts'> $comment[1] </p>
        </li>
        ";
        }
    }

    public function timeReaderAction($userChecking){
        $resultBestTime = $userChecking->bestGameTimes();
        if ($resultBestTime){
            foreach ($resultBestTime as $bestTime){
                echo "$bestTime[0] à fini le jeu en $bestTime[1] min et $bestTime[2] secondes\n\n";
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
        echo "<div class='comment'> ". $comment[0]. "</div>" , " <content id='commentPseudo'> ". $comment[1]. "</content>";
    }

    public function gameCommentFieldAction($userChecking){
        if ($userChecking->isLogged()){
            echo '<div>
              <script>
              function changeStar(id){
                  for (let i = 0; i <= id; i++) {
                      let star = document.getElementById(i);
                      star.className = "fa fa-star editable checked";
                  }
                  for (let i = id+1; i < 5; i++) {
                      let star = document.getElementById(i);
                      star.className = "fa fa-star editable";
                  }
              }
              </script>
              
              <div id="inputCommentArea">
                    <div>  
                        <span id="0" class="fa fa-star editable checked" onclick="changeStar(0)"></span>
                        <span id="1" class="fa fa-star editable" onclick="changeStar(1)"></span>
                        <span id="2" class="fa fa-star editable" onclick="changeStar(2)"></span>
                        <span id="3" class="fa fa-star editable" onclick="changeStar(3)"></span>
                        <span id="4" class="fa fa-star editable" onclick="changeStar(4)"></span>
                    </div>
                    <textarea id="commentInput" name="commentField" placeholder="Ajouter un avis..."></textarea>
                    <button id="submitComment" >Soumettre</button>
              </div>
          </div>
            
            <script src="../../scripts/commentsHandler.js"></script>';
        }
        else{
            echo "<section class='mustBeConnected'>
        Vous devez etre connecté pour poster un commentaire ! Pour vous connectez utiliser le bouton en haut à droite.
        </section>";
        }
    }
}