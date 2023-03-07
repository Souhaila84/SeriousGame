<?php
include 'configPDO.php'; // including DB connexion

if (ConnexionDBRead::getInstance()->isLogged()){
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
              
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                
              <span id="0" class="fa fa-star editable checked" onclick="changeStar(0)"></span>
              <span id="1" class="fa fa-star editable" onclick="changeStar(1)"></span>
              <span id="2" class="fa fa-star editable" onclick="changeStar(2)"></span>
              <span id="3" class="fa fa-star editable" onclick="changeStar(3)"></span>
              <span id="4" class="fa fa-star editable" onclick="changeStar(4)"></span>
              <div id="inputCommentArea">
                    <textarea id="commentInput" name="commentField" placeholder="Ajouter un avis..."></textarea>
                    <button id="submitComment" >Soumettre</button>
              </div>
          </div>
            
            <script src="../scripts/commentsHandler.js"></script>';
}
else{
    echo "<section class='mustBeConnected'>
        Vous devez etre connecté pour poster un commentaire ! Pour vous connectez utiliser le bouton en haut à droite.
        </section>";
}