export {timeRankingPage}; 

import {timePlayed} from "./findTheMurdererGame.js";

class timeRankingPage extends Phaser.Scene {

    constructor () {
        super('timeRankingPage');
    }

    preload() {
        this.load.image("timeRankingBackground","../images/game/background/timeRankingBackground.jpg");
    }

    create() {
        
        var secondes = ((timePlayed / 1000)% 60);
        var minutes = (Math.floor((timePlayed / 1000) / 60));
        var affichageMinutesSecondes = (minutes + " min et " + secondes + " secondes");
        console.log(affichageMinutesSecondes);
        //Rules Part
        //adding the rules background
        var timeRankingground = this.add.image(400,300, 'timeRankingBackground');
        
        //adding start container to the rules screen
        
        var timeRankingText = this.add.text(-84,-13, "Return to Menu",{ fontSize : 24 , fontFamily: 'Georgia, Times, serif'});
        var timeRankingRect = this.add.rectangle(0,0,200,50,0x7b6c4f, 0.8);
        timeRankingText.setTint(0xc2baac);

        var timeRankingRectStyle = this.add.rectangle(0,0,200,50);
        timeRankingRectStyle.setStrokeStyle(2,0x000000);
        
        var timeRankingContainer = this.add.container(400,450,[timeRankingRect ,timeRankingText,timeRankingRectStyle]);
        timeRankingContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);   
        
        //adding the rules in the rules screen
        var rankingText = this.add.text(-260,-135, "Alec6 : 10.08 minutes",{ fontSize : 20, fontFamily: 'Georgia, Times, serif' });
        rankingText.setTint(0xc2baac);
        var rankingRect = this.add.rectangle(0,0,550,300,0x7b6c4f, 0.9);
        
        var rankingRectStyle = this.add.rectangle(0,0,550,300);
        rankingRectStyle.setStrokeStyle(2,0x000000);
        
        var rankingContainer = this.add.container(400,200,[rankingRect ,rankingText,rankingRectStyle]);
        
        timeRankingContainer.on("pointerdown", function(){
            location.reload();
        });
        
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