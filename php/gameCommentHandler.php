<?php
    include 'isLogged.php';
    
    if($isLogged){
        
        $commentText = $_POST['commentValue'];
        if ($commentText != ""){
            include 'config.php'; // including DB connexion
            
            $request_id = isset($_COOKIE['id_user']) ? $_COOKIE['id_user'] : '';  //user id
            
            $getPseudoSql = "SELECT pseudo FROM user WHERE id = $request_id";
            $resultGetPseudo = mysqli_query($bdd, $getPseudoSql); //searching pseudo for this id in DB
            
            if($resultGetPseudo->num_rows == 1){
                $userPseudo = $resultGetPseudo->fetch_row()[0];  //user pseudo from DB
            }
            
            //Inserting new comment in DB
            $insertCommentSql = "INSERT INTO commentaire(id, libellé) VALUES($request_id, '$commentText');";
            $result = mysqli_query($bdd, $insertCommentSql); //executing query
            //$bdd -> close();
            
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
        You must be connected to post a comment !
        <content>
        <a href='../php/connexion.php'><button class='connexionButton'>CONNEXION</button></a>
        </content>
        </section>";
    }
?> 