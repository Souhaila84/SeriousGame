import {translateGame, translateGameRules} from "./translateGame.js"
import {hiddenObjects} from "./hiddenobjects.js"

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: [ hiddenObjects ,translateGameRules, translateGame]
};

const game = new Phaser.Game(config);
