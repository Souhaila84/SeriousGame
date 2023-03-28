/** 
 *  @fileOverview This file contains 1 class, timeRankingPage. This class represent the timeRanking page"
 *
 *  @author Bouveret Victor
 */

export {timeRankingPage}; 


/** 
 *  @fileOverview This file contains 1 import, it is the timePlayed var from "findTheMurdererGame.js".
 *
 *  @author Bouveret Victor
 */
import {timePlayed} from "./findTheMurdererGame.js";


/**
 * This class is the last scene of our game, here the user will see how much time did he spent on his run.
 * @author Bouveret Victor
 * @extends Phaser.Scene
 */
class timeRankingPage extends Phaser.Scene {

    constructor () {
        super('timeRankingPage');
    }

    preload() {
        this.load.image("timeRankingBackground","../images/game/background/timeRankingBackground.jpg");
    }

    create() {
        
        // the game is finished, so reset the progression lvl in data base
        $.ajax({
            url: '../index.php/progressLevel',
            type : "POST",
            data: {'fuction': "resetLevel"},
        });
        
        //updating time in data base
        var ajaxData = {
            "timePlayed" : timePlayed
        }

        $.ajax({
            async: false,
            url: '../index.php/timeWriter',
            type : "POST",
            data : ajaxData,
        });

        /**
         * here we are creating two variables, seconds and minutes, we are making some maths to have a good and nice looking time at the end, and after that we end up with the playingTimeDisplay that is our final var to see how much time did the user spend on his run.
         * @author Bouveret Victor
         */
        var seconds = Math.floor((timePlayed / 1000)% 60);
        var minutes = (Math.floor((timePlayed / 1000) / 60));
        var playingTimeDisplay = (minutes + " min et " + seconds + " secondes");
        
        var timeRankString = "Il n'y a pas de score"; //init the timeRankString if theire is no raw in DB
        
        $.ajax({
            url: '../index.php/timeReader',
            type : "POST",
            async: false,
            success: function(data){
                timeRankString = data;
            }
        });
        
        /**
         * adding the background to the timeRankingPage scene.
         * @author Bouveret Victor
         * @name timeRankingground
         * @name {Phaser.GameObjects.Image}
         */
        var timeRankingground = this.add.image(400,300, 'timeRankingBackground');
        

        /**
         * this is the text that will be in the timeRankingContainer.
         * @author Bouveret Victor
         * @name timeRankingText
         * @type {Phaser.GameObjects.Text}
         */
        var timeRankingText = this.add.text(-84,-13, "Return to Menu",{ fontSize : 24 , fontFamily: 'Georgia, Times, serif'});
        
        
        /**
         * this is the rectangle that will be in the timeRankingContainer.
         * @author Bouveret Victor
         * @name timeRankingRect
         * @type {Phaser.Geom.Rectangle}
         */
        var timeRankingRect = this.add.rectangle(0,0,200,50,0x7b6c4f, 0.8);
        timeRankingText.setTint(0xc2baac);

        
        /**
         * this is the rectangle that display an effect with a border arround the timeRankingRect in the timeRankingContainer.
         * @author Bouveret Victor
         * @name timeRankingRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var timeRankingRectStyle = this.add.rectangle(0,0,200,50);
        timeRankingRectStyle.setStrokeStyle(2,0x000000);
        
        
        /**
         * this is the first container that will allow the user to click on "Return to Menu".
         * @author Bouveret Victor
         * @name timeRankingContainer
         * @type {Phaser.GameObjects.Container}
         */
        var timeRankingContainer = this.add.container(400,450,[timeRankingRect ,timeRankingText,timeRankingRectStyle]);
        timeRankingContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);   
        
        
        
         /**
         * this is the text that will be in the rankingContainer.
         * @author Bouveret Victor
         * @name rankingText
         * @type {Phaser.GameObjects.Text}
         */
        var rankingText = this.add.text(-260,-135, timeRankString,{ fontSize : 20, fontFamily: 'Georgia, Times, serif'});
        rankingText.setTint(0xc2baac);
        rankingText.fontWeight = 'bold';
        
        
         /**
         * this is the rectangle that will be in the rankingContainer.
         * @author Bouveret Victor
         * @name rankingRect
         * @type {Phaser.Geom.Rectangle}
         */
        var rankingRect = this.add.rectangle(0,0,550,300,0x7b6c4f, 0.9);
        
        
        /**
         * this is the rectangle that display an effect with a border arround the rankingRect in the rankingContainer.
         * @author Bouveret Victor
         * @name rankingRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var rankingRectStyle = this.add.rectangle(0,0,550,300);
        rankingRectStyle.setStrokeStyle(2,0x000000);
        
        
        var yourRankingText = this.add.text(-260, 110, "Vous avez fini le jeu en " + minutes + " minutes et " + seconds + " secondes." ,{ fontSize : 20, fontFamily: 'Georgia, Times, serif'});
        yourRankingText.setTint(0xc2baac);
        yourRankingText.fontWeight = 'bold';
        
         /**
         * this is the container that will contain the user username and his best time to finish the game.
         * @author Bouveret Victor
         * @name rankingContainer
         * @type {Phaser.GameObjects.Container}
         */
        var rankingContainer = this.add.container(400,200,[rankingRect ,rankingText, yourRankingText, rankingRectStyle]);
        
        
         /**
         * Here, this function will reload our website page to send the user back onto the main menu after timeRankingContainer has been clicked on.
         * @author Bouveret Victor
         */
        timeRankingContainer.on("pointerdown", function(){
            location.reload();
        });
        
        
        /**
         * style effects for the timeRankingContainer.
         * @author Bouveret Victor
         */
        timeRankingContainer.on('pointerover', function() {
            timeRankingRect.setFillStyle(0xa88c6c,0.8)
        });
        
        timeRankingContainer.on('pointerout', function() {
            timeRankingRect.setFillStyle(0x7b6c4f,0.8)
        });
    }

    update() {
        // Used to update your game. This function runs constantly
    }
}