<?php
    include 'config.php'; // including DB connexion 

    // Getting comments from data base
    $gameCommentsSql = "SELECT pseudo, libellé FROM user, commentaire WHERE user.id = commentaire.id";
    $resultGameComments = mysqli_query($bdd, $gameCommentsSql);
    
    while($commentRow = $resultGameComments->fetch_row()){
        $pseudo = $commentRow[0];
        $content = $commentRow[1];
        
        echo "
        <li class='commentArea'>
            <div class='profile'>
                <img class='profilePicture' src='../images/avatar-default.png'>
                <p class='profileName'>$pseudo</p>
            </div>
            <p class = 'commentsTexts'> $content </p>
        </li>
        ";
    }
?> 