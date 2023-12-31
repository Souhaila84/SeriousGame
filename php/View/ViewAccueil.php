<?php
namespace View;
include_once 'View.php';

class ViewAccueil extends View
{
    public function __construct($layout)
    {
        parent::__construct($layout);

        $this->content = '<div id="content">
                        <img src="/images/The_1884\'s_murder.png" alt="Fond d\'écran d\'accueil"  class="responsive">
                         </div>  ;
                        <!--Bot générateur de commentaires-->
                    <div id="commentaire">
                      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                      <script>
                         function genererComment(){
                             $.ajax({
                                 url: "../../index.php/genereComm",
                                 success: function(data){
                                 $("#commentaire").html(data);
                             }
                             });
                         };
                        setTimeout(genererComment, 0);
                        setInterval(genererComment, 10000);
                        </script>
                     </div>
                     <br>
                     <br>  
                    <div id="imagePreview">
                      <img src="/images/preview.jpg" alt="preview" class="responsive">
                    </div>
                        <div id="gamePreview" class="responsive"> 
                          <div class = "textPreview">
                          <h2>Un meurtre à Londres</h2>
                          <p class ="textexplanation">Plongez en pleine Angleterre Victorienne<br> où votre but sera de résoudre le meurtre 
                          <br>du jeune Edward O\'Neill <br> Mais attention, il faudra être très attentif <br>aux instructions du détéctive
                          <br>et être rapide avant que le meurtrier vous échappe !<br>Saurez-vous y parvenir ?<br>
                              <p class="marginBoutonJouer">
                                  <a href="/index.php/jouer" class="boutonJouer">JOUER</a>
                              </p>
                          </div>
                          <div class="slidecontainer">
                          <div class ="slider"> <!--slider avec images du jeu-->
                          <div class="slide"><img src="/images/game/hidden.png" alt="Image de fond"></div>
                          <div class="slide"><img src="/images/game/menustart.png" alt="Image de fond du menu de démarage"></div>
                          <div class="slide"><img src="/images/game/map.png" alt="Carte"></div>
                          <div class="slide"><img src="/images/game/instructions.png" alt="Fond des instructions"></div>
                          </div>
                        </div>
                      </div>
                      <div>
                      <div id="fondIcons">
                        <img src="/images/london-g7db731864_1920.jpg" alt="Fond de Londres" class="responsive">
                      </div>
                      <div class="gameIcons"> <!---rectangle avec icones + petit textes-->
                        <div class="Cerebrale">
                            <img src="/images/brain.png" alt="Image de cerveau" class="images">
                            <p>Un serious game captivant qui vous fera réfléchir !</p>
                        </div>
                        <div class="Loupe">
                            <img src="/images/loupe.png" alt="Image de loupe" class="images">
                            <p>Une enquête inédite qui vous plongera à l\'époque Victorienne</p>
                        </div>
                        <div class="Inspector">
                            <img src="/images/inspector.png" alt="Image d\'inspecteur" class="images">
                            <p>Aidez l\'inspecteur à résoudre cette enquête remplie d\'action !</p>
                        </div>
                        <div class="Langue"><!---texte Langue-->
                            <img src="/images/langue.png" alt="Image de dictionnaire" class="images">
                            <p>Apprendre l\'anglais tout en s\'amusant, tel est le but de ce Serious game</p>
                        </div>
                      </div>
                    </div>';
    }
}
?>
