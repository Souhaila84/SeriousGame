<?php
    include 'configPDO.php'; // including DB connexion
    
    if(ConnexionDBRead::getInstance()->isLogged()){
        
        $commentText = $_POST['commentValue'];  // the text of the new comment
        $commentRate = intval($_POST['ratingValue']); // the star rating value of the new comment
        if ($commentText != ""){
            
            $request_id = isset($_COOKIE['id_user']) ? $_COOKIE['id_user'] : '';  //user id

            $resultGetPseudo = ConnexionDBRead::getInstance()->userPseudoFromId($request_id);
            
            if($resultGetPseudo->rowCount() == 1){
                $userPseudo = $resultGetPseudo->fetch()->pseudo;  //user pseudo from DB
            }
            
            //Inserting new comment in DB
            $result = ConnexionDBWrite::getInstance()->writeGameComment($request_id,$commentText,$commentRate);
            
            if ($result){
                echo "
                <li class='commentArea'>
                    <div class='profile'>
                        <img class='profilePicture' src='../images/avatar-default.png'>
                        <p class='profileName'>$userPseudo</p>
                    </div>";
                for ($i=0; $i<=$commentRate; ++$i){
                    echo '<span id="i" class="fa fa-star checked"></span>';
                }
                for ($i=$commentRate+1; $i < 5; ++$i) {
                    echo '<span id="i" class="fa fa-star"></span>';
                }
                echo "<p class = 'commentsTexts'> $commentText </p>
                </li>
                ";   
            }
        }
    } else{
        echo "<section class='mustBeConnected'>
        Vous devez etre connecté pour poster un commentaire ! Pour vous connectez utiliser le bouton en haut à droite.
        </section>";
    }
?> 