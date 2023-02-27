<?php
    include 'configPDO.php'; // including DB connexion

    // Getting comments from data base
    $resultGameComments = ConnexionDBRead::getInstance()->readGameComm();

    while($commentRow = $resultGameComments->fetch()){
        $pseudo = $commentRow->pseudo;
        $content = $commentRow->libellé;
        
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