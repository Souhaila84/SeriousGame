<?php
    include 'configPDO.php'; // including DB connexion

    // Getting comments from data base
    $resultGameComments = ConnexionDBRead::getInstance()->readGameComm();

    while($commentRow = $resultGameComments->fetch()){
        $pseudo = $commentRow->pseudo;
        $content = $commentRow->libellé;
        $rate = $commentRow->note; //for rate display

        echo "
        <li class='commentArea'>
            <div class='profile'>
                <img class='profilePicture' src='../images/avatar-default.png'>
                <p class='profileName'>$pseudo</p>
            </div> ";
        for ($i=0; $i<=$rate; ++$i){
            echo '<span id="i" class="fa fa-star checked"></span>';
        }
        for ($i=$rate+1; $i < 5; ++$i) {
            echo '<span id="i" class="fa fa-star"></span>';
        }
        echo "<p class = 'commentsTexts'> $content </p>
        </li>
        ";
    }
?> 