<?php
namespace View;
include_once 'View.php';

class ViewGamePage extends View
{
    public function __construct($layout)
    {
        parent::__construct($layout);

        $this->title= 'Jouer';

        $this->content = "
            <script src='../libraries/phaser.js'></script>
            <script type='module' src='../scripts/startMenu.js'></script>
            <script type='module' src='../scripts/translateGame.js'></script>
            <script type='module' src='../scripts/hiddenobjects.js'></script>
            <script type='module' src='../scripts/mapGame.js'></script>
            <script type='module' src='../scripts/mainGame.js'></script>
            <link href='/css/gamePage.css' rel='stylesheet'>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
            <div id='gameSection'>
                <div id='game'>
                </div>
                <div class='encadrementErrorMessage'>
                    <div id='errorMessage'>
                        <h2>
                            <strong id='titleErrorMessage'>Oups... Il semblerait que le jeu soit indisponible avec la résolution actuelle <br>de votre appareil :(</strong>
                        </h2>
                        <p class='textErrorMessage'>
                            En revanche, il est disponible sur tous les ordinateurs mais aussi la plupart des tablettes.<br><br>Si vous avez la possibilité de tourner votre appareil en mode paysage, cela pourrait résoudre le problème.<br><br>Alors si jamais le scénario ci-dessous vous plaît, n'hésitez pas à aller tester le jeu sur un des appareils cités ci-dessus ou à tourner votre appareil !
                        </p>
                    </div>
                </div>
                <div class='encadrementScenario'>
                    <div id='scenario'>
                        <h2>
                            <strong id='titleScenario'>Scenario</strong>
                        </h2>
                        <p class='textScenario' id='enFrancais'>
                            Londres, 1884 en plein pendant la révolution industrielle britannique sous le règne de la reine Victoria.
                            L'inspecteur français Marcel Roquette vous appelle pour l'aider à combler ses lacunes en anglais afin de résoudre un enquête.<br><br>
                            Vous incarnerez l'assistant de l'inspecteur afin de résoudre le meurtre d'Edward O'Neill. Pendant tout le long de l'histoire vous aiderez
                            l'inspecteur dans les différentes missions afin de trouver qui est le meurtrier.<br><br>
                            Arriverez vous à trouver le meurtrier ou passera t-il entre les mailles du filet ?
                        </p>
                        <p class='textScenario' id='enAnglais' hidden>
                            London, 1884, in the middle of the british industrial revolution, under the reign of queen Victoria.
                            The french inspector Marcel Roquette calls you to help him with his bad english in order to solve a case.<br><br>
                            You will portray the inspector's assistant to solve the murder of Edward O'Neill. Throughout the story, you will help the inspector
                            on his missions to find who is the murderer.<br><br>
                            Will you find the murderer or will he escape from you ?
                        </p>
                        <input type='image' id='entofr' hidden src='../images/france.png' width='50' height='35'>
                        <input type='image' id='frtoen' src='../images/england.png' width='50' height='35'>
                        <script src='../scripts/scenario.js'></script>
                    </div>
                </div>
            </div>
            
            <div id='commentsSection'>
            
                <ul id='comments'>
                    <script>
                        $.ajax({
                            url: '/index.php/gameCommentField',
                            success: function(data){
                                $('#commentsSection').prepend(data);
                            }
                        });
                    </script>
            
                    <script>
                        $.ajax({
                            url: '/index.php/gameCommentReader',
                            success: function(data){
                                $('#comments').html(data);
                            }
                        });
                    </script>
                </ul>
            </div> ";
    }
}
?>
