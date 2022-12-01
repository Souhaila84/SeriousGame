import {translateGame, translateGameRules} from "./translateGame.js"
import {rulesHiddenObjects,hiddenObjects,victoryScreenHiddenObjects} from "./hiddenobjects.js"
import {rulesMap, victoryScreenMap, tryAgainScreenMap, mapGame} from "./mapGame.js"
import {startMenu} from "./startMenu.js"
//import {gapFill,rulesGapFill} from "./gapFill.js"

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: [ startMenu,rulesMap,mapGame,tryAgainScreenMap,victoryScreenMap, rulesHiddenObjects, hiddenObjects, victoryScreenHiddenObjects, translateGameRules, translateGame]
};

const game = new Phaser.Game(config);
