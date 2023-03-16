/** 
 *  @fileOverview This file is the file which is called by the html code, that's why it calls all the scenes and instantiates them in a Phaser.Game object.
 *
 *  @author Alexis Mariotti
 *  @author Victor Bouveret
 */

//import all scenes

import {startMenu} from "./startMenu.js"
import {gapFill,rulesGapFill} from "./gapFill.js"
import {rulesMap, victoryScreenMap, tryAgainScreenMap, mapGame} from "./mapGame.js"
import {rulesHiddenObjects,hiddenObjects, outOfTime,victoryScreenHiddenObjects} from "./hiddenobjects.js"
import {translateGame, translateGameRules, victoryScreentranslateGame} from "./translateGame.js"
import {rulesFindTheMurderer, instructionsForTheMurdererGame , findTheMurdererGame, guessTheMurderer,victoryScreenFindTheMurderer,youLooseToFindTheMurderer} from "./findTheMurdererGame.js"
import {timeRankingPage} from "./timeRanking.js"


/**
* The config of the game wich call all scenes and set the canva size at 800x600
* @author Alexis Mariotti
* @author Victor Bouveret
*/
const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: [startMenu,rulesGapFill,gapFill,rulesMap,mapGame,tryAgainScreenMap,victoryScreenMap,rulesHiddenObjects,hiddenObjects, outOfTime,victoryScreenHiddenObjects, translateGameRules, translateGame,victoryScreentranslateGame, rulesFindTheMurderer, instructionsForTheMurdererGame, findTheMurdererGame, guessTheMurderer,victoryScreenFindTheMurderer,youLooseToFindTheMurderer,timeRankingPage]
};
/**
* The Phaser.Game object of this game. It's the script which turn in the html page
* @type {Phaser.Game}
* @name game
* @author Alexis Mariotti
*/
const game = new Phaser.Game(config);
