import {startMenu} from "./startMenu.js"
import {gapFill,rulesGapFill} from "./gapFill.js"
import {rulesMap, victoryScreenMap, tryAgainScreenMap, mapGame} from "./mapGame.js"
import {rulesHiddenObjects,hiddenObjects, victoryScreenHiddenObjects} from "./hiddenobjects.js"
import {translateGame, translateGameRules, victoryScreentranslateGame} from "./translateGame.js"
import {rulesFindTheMurderer, instructionsForTheMurdererGame , findTheMurdererGame,victoryScreenFindTheMurderer} from "./findTheMurdererGame.js"


const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: [startMenu,rulesGapFill,gapFill,rulesMap,mapGame,tryAgainScreenMap,victoryScreenMap, rulesHiddenObjects, hiddenObjects, victoryScreenHiddenObjects, translateGameRules, translateGame,victoryScreentranslateGame, rulesFindTheMurderer, instructionsForTheMurdererGame, findTheMurdererGame, victoryScreenFindTheMurderer]
};

const game = new Phaser.Game(config);
