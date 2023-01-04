/** 
 *  @fileOverview This file contains 4 classes mapGame, rulesMap, victoryScreenMap, tryAgainScreenMap. Theses 4 classes represent the Map game.
 *
 *  @author Bouveret Victor
 */

export {rulesMap, victoryScreenMap, tryAgainScreenMap, mapGame};

/**
 * This is a number declared here, to be usable in all the code.
 * @author Bouveret Victor
 * @name proposalNumber
 */
var proposalNumber = 0;

/**
* This fuction call with await will sleep the program for a given time
* @param {int} ms - The time to sleep in ms
*/

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Rules screen 

/**
 * This class is the rules scene for the mapGame game.
 * @author Bouveret Victor
 * @extends Phaser.Scene
 */

class rulesMap extends Phaser.Scene {

    constructor () {
        super('rulesMap');
    }

    preload() {
        this.load.image("Rulesbackground","../images/game/background/rulesBackground.jpg");
    }
    
    create() {
        
        //Rules Part 
        /**
         * adding the background to the rulesMap scene.
         * @author Bouveret Victor
         * @name rulesBackground
         * @name {Phaser.GameObjects.Image}
         */
        var rulesBackground = this.add.image(400,300, 'Rulesbackground');
        
        //adding start container to the rules screen
        
        /**
         * this is the text that will be in the start Container of the rulesMap scene. 
         * @author Bouveret Victor
         * @name startText
         * @type {Phaser.GameObjects.Text}
         */
        var startText = this.add.text(-38,-18, "Start !",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});
        
        /**
         * this is the rectangle that will be in the start Container of the rulesMap scene. 
         * @author Bouveret Victor
         * @name startRect
         * @type {Phaser.Geom.Rectangle}
         */
        var startRect = this.add.rectangle(0,0,200,50,0x7b6c4f, 0.8);
        startText.setTint(0xc2baac);
        startRect.setName("startRect");
        
        /**
         * this is a styling for the startRect that will be in the start Container of the rulesMap scene. 
         * @author Bouveret Victor
         * @name startRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var startRectStyle = this.add.rectangle(0,0,200,50);
        startRectStyle.setStrokeStyle(2,0x000000);
        
        /**
         * this is the first container of rulesMap scene. 
         * @author Bouveret Victor
         * @name startContainer
         * @type {Phaser.GameObjects.Container}
         */
        var startContainer = this.add.container(400,450,[startRect ,startText,startRectStyle]);
        startContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);
        startContainer.setName("startContainer");   
        
        //adding the rules in the rules screen
        /**
         * this is the text that will be displaying the rules of the game in the rules Container of the rulesMap scene. 
         * @author Bouveret Victor
         * @name rulesText
         * @type {Phaser.GameObjects.Text}
         */
        var rulesText = this.add.text(-190,-110, "In this game you have to find the \nright path with the help of \ninstructions that will be displayed\non the right of your screen. After \nthat, click on the location you \nthink right and submit your choice, \nyou only have one right location per try. \n\nGood luck !",
        { fontSize : 20, fontFamily: 'Georgia, Times, serif'});
        
        rulesText.setTint(0xc2baac);
        
        /**
         * this is the rectangle that will be in the rules Container of the rulesMap scene. 
         * @author Bouveret Victor
         * @name rulesRect
         * @type {Phaser.Geom.Rectangle}
         */
        var rulesRect = this.add.rectangle(0,0,400,250,0x7b6c4f, 0.8);
        rulesRect.setName("rulesRect");
        
        /**
         * this is the styling of the rulesRect rectangle that will in the rules Container of the rulesMap scene.
         * @author Bouveret Victor
         * @name rulesRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var rulesRectStyle = this.add.rectangle(0,0,400,250);
        rulesRectStyle.setStrokeStyle(2,0x000000);
        
        /**
         * this is the second container of rulesMap scene. 
         * @author Bouveret Victor
         * @name rulesContainer
         * @type {Phaser.GameObjects.Container}
         */
        var rulesContainer = this.add.container(400,200,[rulesRect ,rulesText,rulesRectStyle]);

        rulesContainer.setName("rulesContainer");
        
        /**
         * the fonction inside this will be executed when the cursor of the user will be pressed. 
         * @author Bouveret Victor
         */
        startContainer.on("pointerdown", function(){
            /**
             * here, this line of code is going to lead us to the mapGame scene if the startContainer is clicked on.
             * @author Bouveret Victor
             */
            this.scene.scene.start('mapGame');
        });
        
        startContainer.on('pointerover', function() {
            startRect.setFillStyle(0xa88c6c,0.8)
        });
        
        startContainer.on('pointerout', function() {
            startRect.setFillStyle(0x7b6c4f,0.8)
        });
    }

    update() {
        // Used to update your game. This function runs constantly
    }
}



//Victory Screen Scene 

/**
 * This class is the victoryScreenMap scene for the mapGame game.
 * @author Bouveret Victor
 * @extends Phaser.Scene
 */

class victoryScreenMap extends Phaser.Scene {

    constructor () {
        super('victoryScreenMap');     
    }

    preload() {
        this.load.image("victoryScreen","../images/game/background/victoryScreen.jpg");
    }

    create() {
    
        //adding the background
    
        /**
         * adding the background to the victoryScreenMap scene.
         * @author Bouveret Victor
         * @name victoryScreen
         * @name {Phaser.GameObjects.Image}
         */
        var victoryScreen = this.add.image(400,300, 'victoryScreen');
        
        //adding the victory container
        
        /**
         * this is the text that will be in the victory Container of the victoryScreenMap scene. 
         * @author Bouveret Victor
         * @name victoryText
         * @type {Phaser.GameObjects.Text}
         */
        var victoryText = this.add.text(-220,-40, "Incredible ! You found the correct house !\n\n   We need to investigate the inside now.",{ fontSize : 20 , fontFamily: 'Georgia, Times, serif'});
        
        /**
         * this is the rectangle that will be in the victory Container of the victoryScreenMap scene. 
         * @author Bouveret Victor
         * @name victoryRect
         * @type {Phaser.Geom.Rectangle}
         */
        var victoryRect = this.add.rectangle(0,0,500,150,0x032d3d, 0.85);
        victoryText.setTint(0xc2baac);

        /**
         * this is the styling of the victoryRect rectangle that will be in the victory Container of the victoryScreenMap scene. 
         * @author Bouveret Victor
         * @name victoryRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var victoryRectStyle = this.add.rectangle(0,0,500,150);
        victoryRectStyle.setStrokeStyle(2,0x000000);
        
         /**
         * this is the first container of victoryScreenMap scene. 
         * @author Bouveret Victor
         * @name victoryContainer
         * @type {Phaser.GameObjects.Container}
         */
        var victoryContainer = this.add.container(400,250,[victoryRect ,victoryText,victoryRectStyle]);

        
        //adding the enter container 
        
        /**
         * this is the text that will be in the enter Container of the victoryScreenMap scene. 
         * @author Bouveret Victor
         * @name enterText
         * @type {Phaser.GameObjects.Text}
         */
        var enterText = this.add.text(-97,-15, "Enter the house",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});
        
         /**
         * this is the rectangle that will be in the enter Container of the victoryScreenMap scene. 
         * @author Bouveret Victor
         * @name enterRect
         * @type {Phaser.Geom.Rectangle}
         */
        var enterRect = this.add.rectangle(0,0,236,50,0x032d3d, 0.85);
        enterText.setTint(0xc2baac);

        /**
         * this is the styling of the enterRect rectangle that will be in the enter Container of the victoryScreenMap scene. 
         * @author Bouveret Victor
         * @name enterRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var enterRectStyle = this.add.rectangle(0,0,236,50);
        enterRectStyle.setStrokeStyle(2,0x000000);
        
         /**
         * this is the second container of victoryScreenMap scene. 
         * @author Bouveret Victor
         * @name enterContainer
         * @type {Phaser.GameObjects.Container}
         */
        var enterContainer = this.add.container(400,450,[enterRect ,enterText,enterRectStyle]);
        enterContainer.setInteractive(new Phaser.Geom.Rectangle(-115,-25,236,50), Phaser.Geom.Rectangle.Contains);

        /**
         * the fonction inside this will be executed when the cursor of the user will be pressed. 
         * @author Bouveret Victor
         */
        enterContainer.on("pointerdown", function(){
             /**
             * here, this line of code is going to lead us to the rulesHiddenObjects scene that is the next playable game if the enterContainer is clicked on after winning the mapGame game.
             * @author Bouveret Victor
             */
            this.scene.scene.start('rulesHiddenObjects');  
        });
        
        enterContainer.on('pointerover', function() {
            enterRect.setFillStyle(0x356c18,0.85)
        });
        
        enterContainer.on('pointerout', function() {
            enterRect.setFillStyle(0x032d3d,0.85)
        });
        
    }

    update() {
        // Used to update your game. This function runs constantly
    }
    
}



//Try again screen

/**
 * This class is the tryAgainScreenMap scene for the mapGame game.
 * @author Bouveret Victor
 * @extends Phaser.Scene
 */
class tryAgainScreenMap extends Phaser.Scene {

    constructor () {
        super('tryAgainScreenMap');
    }

    preload() {
    this.load.image("tryAgainBackground","../images/game/background/tryAgainBackground.jpg");
    }

    create() {
        
        //adding the background
        
        /**
         * adding the background to the tryAgainScreenMap scene.
         * @author Bouveret Victor
         * @name tryAgainBackground
         * @name {Phaser.GameObjects.Image}
         */
        var tryAgainBackground = this.add.image(400,300, 'tryAgainBackground');
        
        //adding "you lost" container
        
        /**
         * this is the text that will be in the youlost Container of the tryAgainScreenMap scene. 
         * @author Bouveret Victor
         * @name youlostText
         * @type {Phaser.GameObjects.Text}
         */
        var youlostText = this.add.text(-225,-15, "Oops... Seems like it wasn't the right path...",{ fontSize : 20 , fontFamily: 'Georgia, Times, serif'});
        
        /**
         * this is the rectangle that will be in the youlost Container of the tryAgainScreenMap scene. 
         * @author Bouveret Victor
         * @name youlostRect
         * @type {Phaser.Geom.Rectangle}
         */
        var youlostRect = this.add.rectangle(0,0,500,150,0x351d0d, 0.85);
        youlostText.setTint(0xc2baac);

         /**
         * this is the styling for the youlostRect rectangle that will be in the youlost Container of the tryAgainScreenMap scene. 
         * @author Bouveret Victor
         * @name youlostRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var youlostRectStyle = this.add.rectangle(0,0,500,150);
        youlostRectStyle.setStrokeStyle(2,0x000000);
        
         /**
         * this is the the first container of the tryAgainScreenMap scene. 
         * @author Bouveret Victor
         * @name youlostContainer
         * @type {Phaser.GameObjects.Container}
         */
        var youlostContainer = this.add.container(400,250,[youlostRect ,youlostText, youlostRectStyle]);
        
        
        //adding the try again container 
        
         /**
         * this is the text that will be in the tryAgain Container of the tryAgainScreenMap scene. 
         * @author Bouveret Victor
         * @name tryAgainText
         * @type {Phaser.GameObjects.Text}
         */
        var tryAgainText = this.add.text(-41,-13, "Try again !",{ fontSize : 20 , fontFamily: 'Georgia, Times, serif'});
        
        /**
         * this is the rectangle that will be in the tryAgain Container of the tryAgainScreenMap scene. 
         * @author Bouveret Victor
         * @name tryAgainRect
         * @type {Phaser.Geom.Rectangle}
         */
        var tryAgainRect = this.add.rectangle(0,0,200,50,0x351d0d, 0.85);
        tryAgainText.setTint(0xc2baac);

         /**
         * this is the styling for the tryAgainRect rectangle that will be in the tryAgain Container of the tryAgainScreenMap scene. 
         * @author Bouveret Victor
         * @name tryAgainRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var tryAgainRectStyle = this.add.rectangle(0,0,200,50);
        tryAgainRectStyle.setStrokeStyle(2,0x000000);
        
        /**
         * this is the the second container of the tryAgainScreenMap scene, it allows the user to try again if he lost the game.
         * @author Bouveret Victor
         * @name tryAgainContainer
         * @type {Phaser.GameObjects.Container}
         */
        var tryAgainContainer = this.add.container(275,450,[tryAgainRect ,tryAgainText,tryAgainRectStyle]);
        tryAgainContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);
        
        //styling tryAgainContainer 
            
        /**
         * the fonction inside this will be executed when the cursor of the user will be pressed. 
         * @author Bouveret Victor
         */
        tryAgainContainer.on("pointerdown", function(){
            /**
             * this line of code will lead the user back to the mapGame game. 
             * @author Bouveret Victor
             */
            this.scene.scene.start('mapGame');
        });
        
        tryAgainContainer.on('pointerover', function() {
            tryAgainRect.setFillStyle(0x5d4a3d,0.85)
        });
        
        tryAgainContainer.on('pointerout', function() {
            tryAgainRect.setFillStyle(0x351d0d,0.85)
        });

        
        //adding the return to menu container
        
         /**
         * this is the text that will be in the returnToMenu Container of the tryAgainScreenMap scene. 
         * @author Bouveret Victor
         * @name returnToMenuText
         * @type {Phaser.GameObjects.Text}
         */
        var returnToMenuText = this.add.text(-67,-13, "Return to Menu",{ fontSize : 20 , fontFamily: 'Georgia, Times, serif'});
        
        /**
         * this is the rectangle that will be in the returnToMenu Container of the tryAgainScreenMap scene. 
         * @author Bouveret Victor
         * @name returnToMenuRect
         * @type {Phaser.Geom.Rectangle}
         */
        var returnToMenuRect = this.add.rectangle(0,0,200,50,0x351d0d, 0.85);
        returnToMenuText.setTint(0xc2baac);

        /**
         * this is the styling for the returnToMenuRect rectangle that will be in the returnToMenu Container of the tryAgainScreenMap scene. 
         * @author Bouveret Victor
         * @name returnToMenuRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var returnToMenuRectStyle = this.add.rectangle(0,0,200,50);
        returnToMenuRectStyle.setStrokeStyle(2,0x000000);
        
        /**
         * this is the the third container of the tryAgainScreenMap scene, it allows the user to return to the game menu if he doesn't want to play anymore. 
         * @author Bouveret Victor
         * @name returnToMenuContainer
         * @type {Phaser.GameObjects.Container}
         */
        var returnToMenuContainer = this.add.container(525,450,[returnToMenuRect ,returnToMenuText,returnToMenuRectStyle]);
        returnToMenuContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);

        //styling the returnToMenuContainer 
        
         /**
         * the fonction inside this will be executed when the cursor of the user will be pressed. 
         * @author Bouveret Victor
         */
        returnToMenuContainer.on("pointerdown", function(){
             /**
             * this line of code will lead the user back to the startMenu scene. 
             * @author Bouveret Victor
             */
            this.scene.scene.start("startMenu");
        });
        
        returnToMenuContainer.on('pointerover', function() {
            returnToMenuRect.setFillStyle(0x5d4a3d,0.85)
        });
        
        returnToMenuContainer.on('pointerout', function() {
            returnToMenuRect.setFillStyle(0x351d0d,0.85)
        });
        
    }

    update() {
        // Used to update your game. This function runs constantly
    }
    
}



//Game screen 

/**
 * This class is the main scene for the mapGame game.
 * @author Bouveret Victor
 * @extends Phaser.Scene
 */

class mapGame extends Phaser.Scene 
{   
    
    constructor ()
    {
        super('mapGame');
    }
    
    preload () 
    {
        this.load.image('Map', '../images/mapformapgame.PNG')
        this.load.image('Greenping','../images/mappinggreen.png')
        this.load.image('Redping', '../images/mappingred.png')
        this.load.image('Start', '../images/mapstart.png')
        this.load.image('Gps user', '../images/usergpsicon.png')
        this.load.image('Rulesbackground', '../images/rulesbackground.jpg')
    }
    
    create()
    {         
        //adding the map 
        
         /**
         * adding the background to the mapGame scene.
         * @author Bouveret Victor
         * @name map
         * @name {Phaser.GameObjects.Image}
         */
        var map = this.add.image(400,300, 'Map');
                
        //Game Part
        //adding the green pings
        
         /**
         * adding the first greenping (there is 2 more) to the mapGame scene and setting their visibility to false.
         * @author Bouveret Victor
         * @name greenping
         * @name {Phaser.GameObjects.Image}
         */
        var greenping = this.add.image(210,148, "Greenping");
        greenping.setName("Greenping");
        greenping.visible = false;
        var greenping2 = this.add.image(287,323, "Greenping");
        greenping2.setName("Greenping2");
        greenping2.visible = false;
        var greenping3 = this.add.image(455,433 , "Greenping");
        greenping3.setName("Greenping3");
        greenping3.visible = false;
        
        
        //adding  the red pings
        
        /**
         * adding the first redping (there is 2 more) to the mapGame scene.
         * @author Bouveret Victor
         * @name redping
         * @name {Phaser.GameObjects.Image}
         */
        var redping = this.add.image(210,148, "Redping");
        redping.setName("Redping")
        var redping2 = this.add.image(287,323, "Redping");
        redping2.setName("Redping2")
        var redping3 = this.add.image(455,433, "Redping");
        redping3.setName("Redping3")
        
        
        //adding the start stuff
        
        /**
         * adding the start image (and also the gpsuser image) to the mapGame scene.
         * @author Bouveret Victor
         * @name redping, gpsuser
         * @name {Phaser.GameObjects.Image}
         */
        var start = this.add.image(60,410, "Start");
        var gpsuser = this.add.image(58,442, "Gps user")
        
        /**
         * adding the r3 rectangle to the mapGame scene.
         * @author Bouveret Victor
         * @name r3
         * @name {Phaser.Geom.Rectangle}
         */
        var r3 = this.add.rectangle(60,400, 109, 40);
        r3.setStrokeStyle(2, 0x504a4a);
        
        
        //adding the instructions 
        
        /**
         * adding the r1 rectangle to the mapGame scene.
         * @author Bouveret Victor
         * @name r1
         * @name {Phaser.Geom.Rectangle}
         */
        var r1 = this.add.rectangle(750,315, 300, 450, 0x0008, 0.7);
        
        /**
         * adding the r2 rectangle to the mapGame scene.
         * @author Bouveret Victor
         * @name r2
         * @name {Phaser.Geom.Rectangle}
         */
        var r2 = this.add.rectangle(750,315, 300, 450);
        r2.setStrokeStyle(2, 0x0000);
        
        /**
         * adding the title text to the mapGame scene.
         * @author Bouveret Victor
         * @name title
         * @name {Phaser.GameObjects.Text}
         */
        var title = this.add.text(650,110,"Instructions :", {fontSize : 18, fontFamily: 'Georgia, Times, serif' });
        
        
        //adding submit container 
        
        
        /**
         * adding text in the subContainer that will appear in the mapGame scene.
         * @author Bouveret Victor
         * @name subText
         * @name {Phaser.GameObjects.Text}
         */
        var subText = this.add.text(-28,-10, "Submit",{ fontSize : 18 , fontFamily: 'Georgia, Times, serif' });
        
        /**
         * adding a rectangle in the subContainer that will appear in the mapGame scene.
         * @author Bouveret Victor
         * @name subRect
         * @name {Phaser.Geom.Rectangle}
         */
        var subRect = this.add.rectangle(0,0,150,35,0x1b499b);
        subRect.setName("subRect");
        
        /**
         * adding the subContainer in the mapGame scene.
         * @author Bouveret Victor
         * @name subContainer
         * @name {Phaser.GameObjects.Container}
         */
        var subContainer = this.add.container(700, 570,[subRect ,subText]);
        subContainer.setInteractive(new Phaser.Geom.Rectangle(-75,-17,150,35), Phaser.Geom.Rectangle.Contains);
        subContainer.setName("subContainer");

        
        //adding yes/no container 
        
        /**
         * adding text in the yesNoContainer that will appear after clicking on the subContainer in the mapGame scene.
         * @author Bouveret Victor
         * @name yesNoText
         * @name {Phaser.GameObjects.Text}
         */
        var yesNoText = this.add.text(-80,-100, "Are you sure ?" ,{ fontSize : 30 , fontFamily: 'Georgia, Times, serif' });
        
        /**
         * adding a rectangle in the yesNoContainer that will appear after clicking on the subContainer in the mapGame scene.
         * @author Bouveret Victor
         * @name yesNoRect
         * @name {Phaser.Geom.Rectangle}
         */
        var yesNoRect = this.add.rectangle(0,0,500,300,0x0008, 0.75);
        yesNoRect.setName("yesNoRect");
        
        /**
         * adding a styling to the yesNoRect rectangle in the yesNoContainer that will appear after clicking on the subContainer in the mapGame scene.
         * @author Bouveret Victor
         * @name yesNoRectStyle
         * @name {Phaser.Geom.Rectangle}
         */
        var yesNoRectStyle = this.add.rectangle(0,0,500,300);
        yesNoRectStyle.setStrokeStyle(2, 0x00000);
        
        /**
         * adding the yesNoContainer in the mapGame scene that will be visible after clicking on the subContainer in the mapGame scene.
         * @author Bouveret Victor
         * @name yesNoContainer
         * @name {Phaser.GameObjects.Container}
         */
        var yesNoContainer = this.add.container(300,300,[yesNoRect, yesNoText, yesNoRectStyle]);
        yesNoContainer.setInteractive(new Phaser.Geom.Rectangle(-250, -150,500,300), Phaser.Geom.Rectangle.Contains);
        yesNoContainer.setName("yesNoContainer");

        
        //adding the yes container to the yes/no container
        
        /**
         * adding text in the yesContainer that will appear in the yesNoContainer in the mapGame scene.
         * @author Bouveret Victor
         * @name yesText
         * @name {Phaser.GameObjects.Text}
         */
        var yesText = this.add.text(-18,-11, "Yes !" ,{ fontSize : 20 , fontFamily: 'Georgia, Times, serif' });
        
        /**
         * adding a rectangle in the yesContainer that will appear in the yesNoContainer in the mapGame scene.
         * @author Bouveret Victor
         * @name yesRect
         * @name {Phaser.Geom.Rectangle}
         */
        var yesRect = this.add.rectangle(0,0, 100,50, 0x1b499b);
        yesRect.setName("yesRect");
        
        /**
         * adding a styling to the yesRect rectangle in the yesContainer that will appear in the yesNoContainer in the mapGame scene.
         * @author Bouveret Victor
         * @name yesRectStyle
         * @name {Phaser.Geom.Rectangle}
         */
        var yesRectStyle = this.add.rectangle(0,0,100,50);
        yesRectStyle.setStrokeStyle(2, 0x00000)
        
         /**
         * adding the yesContainer in the mapGame scene that will be visible after clicking on the subContainer in the mapGame scene.
         * @author Bouveret Victor
         * @name yesContainer
         * @name {Phaser.GameObjects.Container}
         */
        
        var yesContainer = this.add.container(420,400, [yesRect, yesText, yesRectStyle]);
        yesContainer.setInteractive(new Phaser.Geom.Rectangle(-50,-25,100,50), Phaser.Geom.Rectangle.Contains);
        yesContainer.setName("yesContainer");
        
        
        //adding the no container to the yes/no container 
        
         /**
         * adding text in the noContainer that will appear in the yesNoContainer in the mapGame scene.
         * @author Bouveret Victor
         * @name noText
         * @name {Phaser.GameObjects.Text}
         */
        var noText = this.add.text(-11,-11, "No" ,{ fontSize : 20 , fontFamily: 'Georgia, Times, serif' });
        
        /**
         * adding a rectangle in the noContainer that will appear in the yesNoContainer in the mapGame scene.
         * @author Bouveret Victor
         * @name noRect
         * @name {Phaser.Geom.Rectangle}
         */
        var noRect = this.add.rectangle(0,0, 100,50, 0x1b499b);
        noRect.setName("noRect");
        
        /**
         * adding a styling to the noRect rectangle in the noContainer that will appear in the yesNoContainer in the mapGame scene.
         * @author Bouveret Victor
         * @name noRectStyle
         * @name {Phaser.Geom.Rectangle}
         */
        var noRectStyle = this.add.rectangle(0,0,100,50);
        noRectStyle.setStrokeStyle(2, 0x00000);
        
        /**
         * adding the noContainer that will be visible after clicking on the subContainer in the mapGame scene.
         * @author Bouveret Victor
         * @name noContainer
         * @name {Phaser.GameObjects.Container}
         */
        var noContainer = this.add.container(170, 400, [noRect, noText, noRectStyle]);
        noContainer.setInteractive(new Phaser.Geom.Rectangle(-50,-25,100,50), Phaser.Geom.Rectangle.Contains);
        noContainer.setName("noContainer");
        
        
        //adding all the yes/no stuff into a container 
        
        /**
         * adding the popupContainer that will include all the precedents containers (yesNoContainer, noContainer and yesContainer)in the mapGame scene.
         * @author Bouveret Victor
         * @name popupContainer
         * @name {Phaser.GameObjects.Container}
         */
        var popupContainer = this.add.container(0,0, [yesNoContainer, noContainer, yesContainer]);
        popupContainer.setInteractive(new Phaser.Geom.Rectangle(-250, -150,500,300), Phaser.Geom.Rectangle.Contains);
        popupContainer.setName("popupContainer");
        popupContainer.visible = false;
        
        //adding advert container 
    
        /**
         * adding a rectangle in the advertContainer that will appear if the user select more than one location in the mapGame scene.
         * @author Bouveret Victor
         * @name advertRect
         * @name {Phaser.Geom.Rectangle}
         */
        var advertRect = this.add.rectangle(360,310, 400,50, 0xff0000, 0.9);
        advertRect.setName("advertRect");
        
        /**
         * adding a styling to the advertRect rectangle in the advertContainer that will appear if the user select more than one location in the mapGame scene.
         * @author Bouveret Victor
         * @name advertRectStyle
         * @name {Phaser.Geom.Rectangle}
         */
        var advertRectStyle = this.add.rectangle(360,310,400,50);
        advertRectStyle.setStrokeStyle(2, 0x00000);
        
         /**
         * adding text in the advertContainer that will appear if the user select more than one location in the mapGame scene.
         * @author Bouveret Victor
         * @name advertText
         * @name {Phaser.GameObjects.Text}
         */
        var advertText = this.add.text(180,300, "You need to choose only one location !",{ fontSize : 22 , fontFamily: 'Georgia, Times, serif'});
        advertText.setTint(0x000000);
        
        /**
         * adding the advertContainer that will be visile if the user select more than one location and clicked on the subContainer in the mapGame scene.
         * @author Bouveret Victor
         * @name advertContainer
         * @name {Phaser.GameObjects.Container}
         */
        var advertContainer = this.add.container(0, 0,[advertRect ,advertText, advertRectStyle]);
        advertContainer.visible = false;        
        
        
        //adding the second advert container 

        /**
         * adding a rectangle in the advertContainer2 that will appear if the user did not selected any location in the mapGame scene.
         * @author Bouveret Victor
         * @name advertRect2
         * @name {Phaser.Geom.Rectangle}
         */
        var advertRect2 = this.add.rectangle(360,310, 400,50, 0xff0000, 0.9);
        advertRect2.setName("advertRect2");
        
        /**
         * adding a styling to the advertRect2 rectangle in the advertContainer2 that will appear if the user did not selected any location in the mapGame scene.
         * @author Bouveret Victor
         * @name advertRectStyle2
         * @name {Phaser.Geom.Rectangle}
         */
        var advertRectStyle2 = this.add.rectangle(360,310,400,50);
        advertRectStyle2.setStrokeStyle(2, 0x00000);
        
        /**
         * adding text in the advertContainer2 that will appear if the user did not selected any location in the mapGame scene.
         * @author Bouveret Victor
         * @name advertText2
         * @name {Phaser.GameObjects.Text}
         */
        var advertText2 = this.add.text(200,300, "You need to choose one location !",{ fontSize : 22 , fontFamily: 'Georgia, Times, serif'});
        advertText2.setTint(0x000000);
        
        /**
         * adding the advertContainer2 that will be visile if the user did not selected any location and clicked on the subContainer in the mapGame scene.
         * @author Bouveret Victor
         * @name advertContainer2
         * @name {Phaser.GameObjects.Container}
         */
        var advertContainer2 = this.add.container(0, 0,[advertRect2 ,advertText2, advertRectStyle2]);  
        advertContainer2.visible = false;
        
        
        //Instructions text
        
        /**
         * All diferents instructions wich will be used randomly
         * @author Bouveret Victor
         * @name proposals
         * @name {String[]}
         */
        var proposals = ["- First, turn left \n  when you exit \n  my office\n\n- Then turn left \n  to Wood Street \n\n- Continue straight \n  forward through \n  Gresham Street \n\n- Then turn right \n\n- And finally, \n  on your left you \n  should see the \n  building we are \n  looking for !",
                         "- First, turn left \n  when you exit \n  my office\n\n- Then turn left, \n  and turn right \n  into the alley, \n  and take it \n\n- When you get out \n  of the alley, \n  turn left to \n  Milk Street \n\n- Then turn right, \n  and right again \n  into the next \n  avenue, it should \n  be King Street \n\n- Turn right and \n  right again in the \n  alley, and you \n  should see the \n  right house !" ,
                         "- First, turn left \n  when you exit \n  my office\n\n- Then go straight \n  past the church \n  and turn left \n  in King Street \n\n- Then turn right \n\n- Go straight past \n  the first road \n  on your right \n\n- After that, turn \n  right to Old Jewry \n\n- Then turn left, \n  and left again, \n  and you should \n  be in front of \n  the building we \n  are looking for !"];
        /**
         * Random number betwin 0 and 3 wich correspond to the current instruction
         * @author Bouveret Victor
         * @name proposalNumber
         * @name {int}
         */
        proposalNumber = Math.floor(Math.random() * 3);
        /**
         * adding the current instruction on scene
         * @author Bouveret Victor
         * @name instructionsText
         * @name {Phaser.GameObjects.Text}
         */
        var instructionsText = this.add.text(605,150, proposals[proposalNumber], {fontSize: 14});
        
        
        //adding handler
        
        redping.setInteractive();
        redping2.setInteractive();
        redping3.setInteractive();
        greenping.setInteractive();
        greenping2.setInteractive();
        greenping3.setInteractive();
        
        redping.on('clicked', this.redClickHandler);
        redping2.on('clicked', this.redClickHandler2);
        redping3.on('clicked', this.redClickHandler3);
        greenping.on('clicked', this.greenClickHandler);
        greenping2.on('clicked', this.greenClickHandler2);
        greenping3.on('clicked', this.greenClickHandler3);
        
        
        //creating subContainer features
        
        /**
         * Change the subRect color
         * @function 
         * @name subCOntainerPointerOver
         * @author Bouveret Victor
         */
        subContainer.on('pointerover', function() {
            this.scene.children.getByName("subContainer").getByName("subRect").setFillStyle(0x17b833);
        });
        /**
         * Re establish the subRect color
         * @function 
         * @name subCOntainerPointerOut
         * @author Bouveret Victor
         */
        subContainer.on('pointerout', function() {
            this.scene.children.getByName("subContainer").getByName("subRect").setFillStyle(0x1b499b);
        });
        /**
         * When click on subcontainer, the function displays advert Container for 2.5 seconds or it displays the confirmation pop-up
         * @function 
         * @name subCOntainerPointerDown
         * @author Bouveret Victor
         */
        subContainer.on('pointerdown', async function() {
                if (greenping.visible && greenping2.visible || greenping2.visible && greenping3.visible || greenping3.visible && greenping.visible){
                    advertContainer.visible = true;
                    await sleep(2500);
                    advertContainer.visible = false;
                }
                else if (redping.visible && redping2.visible && redping3.visible) {
                    advertContainer2.visible = true;    
                    await sleep(2500);
                    advertContainer2.visible = false;
                }
                else 
                    popupContainer.visible = true;
        });
        
        
        //creating noContainer features
        
        /**
         * When over on "no" button in the confirmation pop up, the function change button color
         * @function 
         * @name noContainerPointerOver
         * @author Bouveret Victor
         */
        noContainer.on('pointerover', function() {
            this.scene.children.getByName("popupContainer").getByName("noContainer").getByName("noRect").setFillStyle(0x17b833);
        });
        /**
         * When no longer over on "no" button in the confirmation pop up, the function re-establish button color
         * @function 
         * @name noContainerPointerOut
         * @author Bouveret Victor
         */
        noContainer.on('pointerout', function() {
            this.scene.children.getByName("popupContainer").getByName("noContainer").getByName("noRect").setFillStyle(0x1b499b);
        });
        /**
         * When click the "no" button in the confirmation pop up, the function will display visible false the pop up
         * @function 
         * @name noContainerPointerDown
         * @author Bouveret Victor
         */
        noContainer.on('pointerdown', function(){
            popupContainer.visible = false;
        });
        
        //creating yesContainer features
        
        /**
         * When over on "yes" button in the confirmation pop up, the function change button color
         * @function 
         * @name yesContainerPointerOver
         * @author Bouveret Victor
         */
        yesContainer.on('pointerover', function() {
            this.scene.children.getByName("popupContainer").getByName("yesContainer").getByName("yesRect").setFillStyle(0x17b833);
        });
        /**
         * When no longer over on "yes" button in the confirmation pop up, the function re-establish button color
         * @function 
         * @name yesContainerPointerOut
         * @author Bouveret Victor
         */
        yesContainer.on('pointerout', function() {
            this.scene.children.getByName("popupContainer").getByName("yesContainer").getByName("yesRect").setFillStyle(0x1b499b);
        });
        /**
         * When click the "yes" button in the confirmation pop up, the function will change scene to "tryAgainScreenMap" or "victoryScreenMap" depending on whether the player won or not 
         * @function 
         * @name yesContainerPointerDown
         * @author Bouveret Victor
         */
         yesContainer.on('pointerdown', function(){
             if(greenping2.visible && proposalNumber == 0 || greenping3.visible && proposalNumber == 0 || greenping.visible && proposalNumber == 1 || greenping3.visible && proposalNumber == 1 || greenping.visible && proposalNumber == 2 || greenping2.visible && proposalNumber == 2)
                 this.scene.scene.start('tryAgainScreenMap');
             else 
                 this.scene.scene.start('victoryScreenMap');
        });
        
        
    
        this.input.on('gameobjectup', function (pointer, gameObject)
        {
            gameObject.emit('clicked', gameObject);
        }, this);
    }
    
    
    //adjusting all the pings clickhandlers
    
    /**
     * This fuction is the click handler of redping and it will change redping to greenping
     * @author Bouveret Victor
     */
    redClickHandler (redping)
    {
            redping.off('clicked', this.clickHandler);
            redping.setVisible(false);
            this.scene.children.getByName("Greenping").visible = true;
            this.scene.children.getByName("Greenping").on('clicked',this.scene.greenClickHandler);            
    }
    /**
     * This fuction is the click handler of redping2 and it will change redping2 to greenping2
     * @author Bouveret Victor
     */
        redClickHandler2 (redping2)
    {
            redping2.off('clicked', this.clickHandler);
            redping2.visible = false;
            this.scene.children.getByName("Greenping2").visible = true;
            this.scene.children.getByName("Greenping2").on('clicked',this.scene.greenClickHandler2);
    }
    /**
     * This fuction is the click handler of redping3 and it will change redping3 to greenping3
     * @author Bouveret Victor
     */
        redClickHandler3 (redping3)
    {
            redping3.off('clicked', this.clickHandler);
            redping3.visible = false;
            this.scene.children.getByName("Greenping3").visible = true;
            this.scene.children.getByName("Greenping3").on('clicked',this.scene.greenClickHandler3);
    }
    /**
     * This fuction is the click handler of greenping and it will change greenping to redping
     * @author Bouveret Victor
     */
     greenClickHandler (greenping)
    {
            greenping.off('clicked', this.clickHandler);
            greenping.setVisible(false);
            this.scene.children.getByName("Redping").visible = true;
            this.scene.children.getByName("Redping").on('clicked',this.scene.redClickHandler);
    }
    /**
     * This fuction is the click handler of greenping2 and it will change greenping2 to redping2
     * @author Bouveret Victor
     */
        greenClickHandler2 (greenping2)
    {
            greenping2.off('clicked', this.clickHandler);
            greenping2.visible = false;
            this.scene.children.getByName("Redping2").visible = true;
            this.scene.children.getByName("Redping2").on('clicked',this.scene.redClickHandler2);
    }
    /**
     * This fuction is the click handler of greenping3 and it will change greenping3 to redping3
     * @author Bouveret Victor
     */
        greenClickHandler3 (greenping3)
    {
            greenping3.off('clicked', this.clickHandler);
            greenping3.visible = false;
            this.scene.children.getByName("Redping3").visible = true;
            this.scene.children.getByName("Redping3").on('clicked',this.scene.redClickHandler3);   
    }
        
}
