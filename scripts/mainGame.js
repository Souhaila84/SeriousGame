import {translateGame, translateGameRules} from "./translateGame.js"
import {hiddenObjects} from "./hiddenobjects.js"
import {rulesMap, victoryScreenMap, tryAgainScreenMap, mapGame} from "./mapGame.js"

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: [rulesMap,mapGame,tryAgainScreenMap,victoryScreenMap, hiddenObjects ,translateGameRules, translateGame]
};

const game = new Phaser.Game(config);
