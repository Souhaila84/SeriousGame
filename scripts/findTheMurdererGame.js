/** 
 *  @fileOverview This file contains 6 classes rulesFindTheMurderer,instructionsForTheMurdererGame ,findTheMurdererGame ,guessTheMurderer ,victoryScreenFindTheMurderer,youLooseToFindTheMurderer. Theses 6 classes represent the findTheMurderer game and there also is the timePlayed var that is exported for the timer.
 *
 *  @author Bouveret Victor
 */

export {rulesFindTheMurderer,instructionsForTheMurdererGame ,findTheMurdererGame ,guessTheMurderer ,victoryScreenFindTheMurderer,youLooseToFindTheMurderer, timePlayed}; 


/** 
 *  @fileOverview This file contains 1 import, it is the timer from gapFill.js to assure that the timer is running correctly
 *
 *  @author Bouveret Victor
 */

import timer from "./gapFill.js";


var suspectNumber = 0;
var proposalNumber = 0;

var timePlayed = null;

//Rules screen 
/**
 * This class is the rules scene for the findTheMurderer game.
 * @author Bouveret Victor
 * @extends Phaser.Scene
 */
class rulesFindTheMurderer extends Phaser.Scene {

    constructor () {
        super('rulesFindTheMurderer');
    }

    preload() {
        this.load.image("Rulesbackground","../images/game/background/rulesBackground.jpg");
    }

    create() {
        
        //Rules Part 
        //adding the rules background
         /**
         * adding the background to the rulesFindTheMurderer scene.
         * @author Bouveret Victor
         * @name rulesBackground
         * @name {Phaser.GameObjects.Image}
         */
        var rulesBackground = this.add.image(400,300, 'Rulesbackground');
        
        
        //adding start container to the rules screen
        
         /**
         * this is the text that will be in the start Container in the findTheMurderer scene.
         * @author Bouveret Victor
         * @name startText
         * @type {Phaser.GameObjects.Text}
         */
        var startText = this.add.text(-38,-17, "Start !",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});
        
        
        /**
         * this is the rectangle that will be in the start Container in the findTheMurderer scene.
         * @author Bouveret Victor
         * @name startRect
         * @type {Phaser.Geom.Rectangle}
         */
        var startRect = this.add.rectangle(0,0,200,50,0x7b6c4f, 0.8);
        startText.setTint(0xc2baac);

        
         /**
         * this is a styling for the startRect that will be in the start Container in the findTheMurderer scene.
         * @author Bouveret Victor
         * @name startRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var startRectStyle = this.add.rectangle(0,0,200,50);
        startRectStyle.setStrokeStyle(2,0x000000);
        
        
         /**
         * this is the first container that will lead the user into the next scene. 
         * @author Bouveret Victor
         * @name startContainer
         * @type {Phaser.GameObjects.Container}
         */
        var startContainer = this.add.container(400,450,[startRect ,startText,startRectStyle]);
        startContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);  
        
        
        
         /**
         * adding the text that will be in the rulesContainer in the findTheMurderer scene.
         * @author Bouveret Victor
         * @name rulesText
         * @name {Phaser.GameObjects.Text}
         */
        var rulesText = this.add.text(-190,-90, "In this game you have listen to \nthe person speaking and find \nwho is the murderer between all the\ncharacters that will be displayed \non your screen, then click on the \nsuspect and finish the investigation !\n\nGood luck !",{ fontSize : 20, fontFamily: 'Georgia, Times, serif' });
        rulesText.setTint(0xc2baac);
        
        
        /**
         * this is the rectangle that will be in the rulesContainer in the findTheMurderer scene.
         * @author Bouveret Victor
         * @name rulesRect
         * @type {Phaser.Geom.Rectangle}
         */
        var rulesRect = this.add.rectangle(0,0,400,200,0x7b6c4f, 0.8);
        
        
        /**
         * this is a styling for the rulesRect that will be in the rulesContainer in the findTheMurderer scene.
         * @author Bouveret Victor
         * @name rulesRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var rulesRectStyle = this.add.rectangle(0,0,400,200);
        rulesRectStyle.setStrokeStyle(2,0x000000);
        
        
        /**
         * this is the container that will display the rules int the scene. 
         * @author Bouveret Victor
         * @name rulesContainer
         * @type {Phaser.GameObjects.Container}
         */
        var rulesContainer = this.add.container(400,200,[rulesRect ,rulesText,rulesRectStyle]);
        
        
        
         /**
         * the fonction inside this will be executed when the cursor of the user will be pressed. 
         * @author Bouveret Victor
         */
        startContainer.on("pointerdown", function(){
            /**
             * here, this line of code is going to lead us to the instructionsForTheMurderer  scene if the startContainer is clicked on.
             * @author Bouveret Victor
             */
            this.scene.scene.start('instructionsForTheMurdererGame');
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


/**
 * This class is the instructions scene for the findTheMurderer game.
 * @author Bouveret Victor
 * @extends Phaser.Scene
 */
class instructionsForTheMurdererGame extends Phaser.Scene {
    
    constructor () 
    {
        super('instructionsForTheMurdererGame');  // construct with a name to call this scene after
    }
    
    preload() 
    {
        /**
        * This is the lines of code that will add the images to our scene.
        * @author Bouveret Victor
        */
        this.load.image("instructionsBackground","../images/game/background/rulesBackground.jpg");
        this.load.image("playButton","../images/playbutton.png")
    }
    
    create() 
    {
        /**
         * adding the background to the instructionsForTheMurdererGame scene.
         * @author Bouveret Victor
         * @name instructionsBackground
         * @name {Phaser.GameObjects.Image}
         */
        var instructionsBackground = this.add.image(400,300, 'instructionsBackground');
        
        //creating the playButton container
        /**
         * adding the play image to the instructionsForTheMurdererGame scene.
         * @author Bouveret Victor
         * @name playButton
         * @name {Phaser.GameObjects.Image}
         */
        var playButtonImg = this.add.image(0,0, 'playButton');
        
        /**
         * this is the circle that will be in the Container that will display the playButton in the instructionsForTheMurdererGame scene.
         * @author Bouveret Victor
         * @name playButtonCircle
         * @type {Phaser.Geom.Circle}
         */
        var playButtonCircle = this.add.circle (0,0,23,0x032d3d, 0.8);
        playButtonCircle.setName("playButtonCircle");
        
        
        /**
         * this is the container that will display the first exemple of a playButton in the instructionsForTheMurdererGame scene. 
         * @author Bouveret Victor
         * @name playButtonContainer
         * @type {Phaser.GameObjects.Container}
         */
        var playButtonContainer = this.add.container(400,425,[playButtonCircle ,playButtonImg]);
        playButtonContainer.setInteractive(new Phaser.Geom.Circle(400,450,23), Phaser.Geom.Circle.Contains);
        playButtonContainer.setName("playButtonContainer");   
    
        
        
        /**
         * adding the instructionText and the instructionText to the instructionsForTheMurdererGame scene.
         * @author Bouveret Victor
         * @name instructionsText
         * @name {Phaser.GameObjects.Text}
         */
        var instructionsText = this.add.text(-240 ,-110, "Now we need to listen what the witness \nhave to tell us ! \nShe/He is going to describe the murderer \nand we will need to find him/her \nbetween four suspects according to the \ndescription that the witness gave us.",{ fontSize : 20 , fontFamily: 'Georgia, Times, serif'});
        var instructionsText2 = this.add.text(-240, 50, "Listen what does she/he have to \nsay by clicking the play button.", { fontSize : 20 , fontFamily: 'Georgia, Times, serif'});
        
        
         /**
         * this is the rectangle that will be in the instructionsContainer in the instructionsForTheMurdererGame scene.
         * @author Bouveret Victor
         * @name instructionsRect
         * @type {Phaser.Geom.Rectangle}
         */
        var instructionsRect = this.add.rectangle(0,0,525,250,0x032d3d, 0.85);
        instructionsText.setTint(0xc2baac);
        instructionsText2.setTint(0xc2baac);
        instructionsRect.setName("instructionsRect");
        
        
        /**
         * this is the rectangle that will create the border around the instructionsRect in the instructionsForTheMurdererGame scene.
         * @author Bouveret Victor
         * @name instructionsRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var instructionsRectStyle = this.add.rectangle(0,0,525,250);
        instructionsRectStyle.setStrokeStyle(2,0x000000);
        
        
        /**
         * this is the container that will display the instructions of the findTheMurdererGame in the instructionsForTheMurdererGame scene. 
         * @author Bouveret Victor
         * @name instructionsContainer
         * @type {Phaser.GameObjects.Container}
         */
        var instructionsContainer = this.add.container(400,215,[instructionsRect ,instructionsText,instructionsText2,instructionsRectStyle]);
        instructionsContainer.setInteractive(new Phaser.Geom.Rectangle(-250,-125,525,250), Phaser.Geom.Rectangle.Contains);
        instructionsContainer.setName("instructionsContainer");   
        
        
        
        //creating the IGotIt container 
        /**
         * adding the text that will be in the iGotItContainer in the instructionsForTheMurdererGame scene.
         * @author Bouveret Victor
         * @name iGotItText
         * @name {Phaser.GameObjects.Text}
         */
        var iGotItText = this.add.text(-43,-16, "Got it !",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});
        
        
         /**
         * this is the rectangle that will be in the iGotItContainer in the instructionsForTheMurdererGame scene.
         * @author Bouveret Victor
         * @name iGotItRect
         * @type {Phaser.Geom.Rectangle}
         */
        var iGotItRect = this.add.rectangle(0,0,200,50,0x032d3d, 0.8);
        iGotItText.setTint(0xc2baac);
        iGotItRect.setName("iGotItRect");
        
        
         /**
         * this is the rectangle that will create the border around the iGotItRect in the instructionsForTheMurdererGame scene.
         * @author Bouveret Victor
         * @name iGotItRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var iGotItRectStyle = this.add.rectangle(0,0,200,50);
        iGotItRectStyle.setStrokeStyle(2,0x000000);
        
        
        /**
         * this is the container that will display the iGotItButton that will be clickable by the user to go in the next scene. 
         * @author Bouveret Victor
         * @name iGotItContainer
         * @type {Phaser.GameObjects.Container}
         */
        var iGotItContainer = this.add.container(400,520,[iGotItRect ,iGotItText,iGotItRectStyle]);
        iGotItContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);
        iGotItContainer.setName("iGotItContainer");   
            
        
        /**
         * the fonction inside this will be executed when the cursor of the user will be pressed. 
         * @author Bouveret Victor
         */
        iGotItContainer.on("pointerdown", function(){
            /**
             * there, you have the line of code that is going to lead the user to the findTheMurdererGame scene if the iGotItContainer is clicked on.
             * @author Bouveret Victor
             */
            this.scene.scene.start('findTheMurdererGame');
        });
             /**
             * there, you have two lines that will create the "effects" for the iGotItContainer.
             * @author Bouveret Victor
             */
            iGotItContainer.on('pointerover', function() {
                iGotItRect.setFillStyle(0x356c18,0.8)
            });

            iGotItContainer.on('pointerout', function() {
                iGotItRect.setFillStyle(0x032d3d,0.8)
            });
        
    }   
    
    update() 
    {
        // Used to update your game. This function runs constantly
    }
}


class findTheMurdererGame extends Phaser.Scene {

 constructor () 
        {
            super('findTheMurdererGame');
        }

        preload() 
        {
            
             /**
             * here, you have 4 audio proposals that will be used for the oral compehension in the game.
             * @author Bouveret Victor
             */
             var audioproposals = ["../audio/firstone.mp3","../audio/secondone.mp3","../audio/thirdone.mp3","../audio/fourthone.mp3"];
            /**
             * Random number betwin 0 and 3 wich correspond to the current instruction
             * @author Bouveret Victor
             * @name proposalNumber
             * @type {int}
             */
            proposalNumber = Math.floor(Math.random() * 4);
            
            /**
             * adding all the images and only the audio that have been choose randomly.
             * @author Bouveret Victor
             */
            this.load.image("witessInterrogation","../images/game/background/witnessinterrogation1.2.png");
            this.load.image("playButtonImg2","../images/playbutton.png");
            this.load.image("pauseButton","../images/pausebutton.png");
            this.load.audio("audiotheme",audioproposals[proposalNumber]);
        }

        create() {
            
            /**
             * adding the background to the findTheMurderer scene.
             * @author Bouveret Victor
             * @name vitnessInterogation
             * @name {Phaser.GameObjects.Image}
             */
            var witnessInterogation = this.add.image(400,300, 'witessInterrogation');
            
            //creating the playbutton container.
            /**
             * adding the play image to the playButtonContainer that will play the audio if clicked on.
             * @author Bouveret Victor
             * @name playButtonImg2
             * @name {Phaser.GameObjects.Image}
             */
            var playButtonImg2 = this.add.image(400,435, 'playButtonImg2');
            
            
            /**
             * adding the circle to the playButtonContainer that will play the audio.
             * @author Bouveret Victor
             * @name playButtonCircle2
             * @type {Phaser.Geom.Circle}
             */
            var playButtonCircle2 = this.add.circle (400,435,23,0x032d3d, 0.8);
            playButtonCircle2.setName("playButtonCircle2");

            
            /**
             * this is the container that will play the audio if the user clicks on it, and it will aslo resume the audio if the audio was paused. 
             * @author Bouveret Victor
             * @name playButtonContainer2
             * @type {Phaser.GameObjects.Container}
             */
            var playButtonContainer2 = this.add.container(0,-50,[playButtonCircle2 ,playButtonImg2]);
            playButtonContainer2.setInteractive(new Phaser.Geom.Circle(400,435,23), Phaser.Geom.Circle.Contains);
            playButtonContainer2.setName("playButtonContainer2");
            
            
            
            //creating the pausebutton container.
            /**
             * adding the pause image to the pauseButtonContainer that will to pause the audio if clicked on.
             * @author Bouveret Victor
             * @name pauseButtonImg
             * @name {Phaser.GameObjects.Image}
             */
            var pauseButtonImg = this.add.image(400,435, 'pauseButton');
            
            
            /**
             * adding the circle to the pauseButtonContainer that will to pause the audio if clicked on.
             * @author Bouveret Victor
             * @name pauseButtonCircle
             * @type {Phaser.Geom.Circle}
             */
            var pauseButtonCircle = this.add.circle (400,435,23,0x032d3d, 0.8);
            pauseButtonCircle.setName("pauseButtonCircle");

            
            /**
             * this is the container that will pause the audio if the user clicks on it.
             * @author Bouveret Victor
             * @name pauseButtonContainer
             * @type {Phaser.GameObjects.Container}
             */
            var pauseButtonContainer = this.add.container(0,-50,[pauseButtonCircle ,pauseButtonImg]);
            pauseButtonContainer.setInteractive(new Phaser.Geom.Circle(400,435,23), Phaser.Geom.Circle.Contains);
            pauseButtonContainer.setName("pauseButtonContainer");
            
            
            //setting the visibility of the pauseButtonContainer to false.
            pauseButtonContainer.visible = false;
            
            
            /**
             * this is the music that will be audible in the scene.
             * @author Bouveret Victor
             * @name music
             * @type {Phaser.Audio}
             */
            var music = this.sound.add("audiotheme");
            
        
            /**
             * this function will allow the user to play the audio by clicking on the playButtonContainer2 or to resume it after it has been paused.
             * @author Bouveret Victor
             */
            playButtonContainer2.on('pointerdown', function() {
                console.log(proposalNumber);
                playButtonContainer2.visible = false;
                pauseButtonContainer.visible = true;
                if(music.isPaused) {
                    music.resume();
                }
                   
                else {
                   music.play()
                   }
            })
            
            
            /**
            * these functions are here to add some effects to our buttons.
            * @author Bouveret Victor
            */
            playButtonContainer2.on('pointerover', function() {
                playButtonCircle2.setFillStyle(0x356c18, 0.8)
            });
            
            playButtonContainer2.on('pointerout', function() {
                playButtonCircle2.setFillStyle(0x032d3d, 0.8)
            });
            
            /**
             * this function will allow the user to pause the audio by clicking on the pauseButtonContainer
             * @author Bouveret Victor
             */
            pauseButtonContainer.on('pointerdown', function() {
                playButtonContainer2.visible = true;
                pauseButtonContainer.visible = false;
                music.pause();
            })

            /**
            * same that for the effects on the playButtonContainer2 but here, with the pauseButtonContainer.
            * @author Bouveret Victor
            */
            pauseButtonContainer.on('pointerover', function() {
                pauseButtonCircle.setFillStyle(0x356c18, 0.8)
            });
            
            pauseButtonContainer.on('pointerout', function() {
                pauseButtonCircle.setFillStyle(0x032d3d, 0.8)
            });
            
            
            /**
             * This is the text that will be in the findMurdererContainer in the instructionsForTheMurdererGame scene.
             * @author Bouveret Victor
             * @name findMurdererText
             * @name {Phaser.GameObjects.Text}
             */
            var findMurdererText = this.add.text(-189,-16, "Lets find who is the murderer !",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});
            
            
            /**
             * This is the rectangle that will be in the findMurdererContainer in the instructionsForMurdererGame scene.
             * @author Bouveret Victor
             * @name findMurdererRect
             * @type {Phaser.Geom.Rectangle}
             */
            var findMurdererRect = this.add.rectangle(0,0,410,50,0x032d3d, 0.8);
            findMurdererText.setTint(0xc2baac);
            findMurdererRect.setName("findMurdererRect");
            
            
            /**
             * This is the rectangle that will surround the findMurdererRect to add some effects in the instructionsForMurdererGame scene.
             * @author Bouveret Victor
             * @name findMurdererRectStyle
             * @type {Phaser.Geom.Rectangle}
             */
            var findMurdererRectStyle = this.add.rectangle(0,0,410,50);
            findMurdererRectStyle.setStrokeStyle(2,0x000000);

            
            /**
             * this is the container that will send the user on the next scene (guessTheMurderer scene) if the he clicks on it.
             * @author Bouveret Victor
             * @name findMurdererContainer
             * @type {Phaser.GameObjects.Container}
             */
            var findMurdererContainer = this.add.container(400,520,[findMurdererRect ,findMurdererText,findMurdererRectStyle]);
            findMurdererContainer.setInteractive(new Phaser.Geom.Rectangle(-205,-25,410,50), Phaser.Geom.Rectangle.Contains);
            findMurdererContainer.setName("findMurdererContainer");   
            
            
            /**
             * this function will send the user in the guessTheMurderer scene if he clicks on the findMurdererContainer, it also stop the audio if it is still playing.
             * @author Bouveret Victor
             */
            findMurdererContainer.on("pointerdown", function(){
            music.stop();
            this.scene.scene.start('guessTheMurderer');
            });
        
            
            /**
             * these two functions are here to add some effects to the findTheMurdererContainer.
             * @author Bouveret Victor
             */
            findMurdererContainer.on('pointerover', function() {
                findMurdererRect.setFillStyle(0x356c18,0.8)
            });

            findMurdererContainer.on('pointerout', function() {
                findMurdererRect.setFillStyle(0x032d3d,0.8)
            });
            
            
            /**
             * This is the text that will be in the listenInstructionsContainer in the instructionsForMurdererGame scene.
             * @author Bouveret Victor
             * @name findMurdererText
             * @name {Phaser.GameObjects.Text}
             */
            var listenInstructionsText = this.add.text(-190,-40, "Click on the button to listen the \nwitness, you can tell him to stop at \nany time",{ fontSize : 24 , fontFamily: 'Georgia, Times, serif'});
            
            
            /**
             * This is the rectangle that will be in the listenInstructionsContainer in the instructionsForMurdererGame scene.
             * @author Bouveret Victor
             * @name listenInstructionsRect
             * @type {Phaser.Geom.Rectangle}
             */
            var listenInstructionsRect = this.add.rectangle(0,0,400, 100,0x032d3d, 0.8);
            listenInstructionsText.setTint(0xc2baac);
            listenInstructionsRect.setName("listenInstructionsRect");
            
            
            /**
             * This is the rectangle that add the effects to the listenInstructionsContainer in the instructionsForMurdererGame scene.
             * @author Bouveret Victor
             * @name listenInstructionsRectStyle
             * @type {Phaser.Geom.Rectangle}
             */
            var listenInstructionsRectStyle = this.add.rectangle(0,0,400, 100);
            listenInstructionsRectStyle.setStrokeStyle(2,0x000000);
            
            
            /**
             * this is the container that will explain explain the user how to listen to the witness.
             * @author Bouveret Victor
             * @name listenInstructionsContainer
             * @type {Phaser.GameObjects.Container}
             */
            var listenInstructionsContainer = this.add.container(400,100, [listenInstructionsRect, listenInstructionsText, listenInstructionsRectStyle]);
            listenInstructionsContainer.setInteractive(new Phaser.Geom.Rectangle(-250,-50,400,100), Phaser.Geom.Rectangle.Contains);
            listenInstructionsContainer.setName("findMurdererContainer");
        }

        update() {
            // Used to update your game. This function runs constantly
        }
}


//GuessTheMurderer Screen Scene 
class guessTheMurderer extends Phaser.Scene {

    constructor () {
        super('guessTheMurderer');
    }

    
    //function preload is used to load all the images used for this part of the game.
    preload() {
        this.load.image("guessTheMurdererScreen","../images/game/background/findTheMurdererBackground.jpg");
        this.load.image("firstSuspect","../images/yellowpepper.png");
        this.load.image("secondSuspect","../images/radish.png");
        this.load.image("thirdSuspect","../images/broccoli.png");
        this.load.image("fourthSuspect","../images/eggplant.png");
        this.load.image("leftarrow","../images/leftarrow.png");
        this.load.image("rightarrow","../images/rightarrow.png");
    }

    create() {
        
        //adding the background
        /**
         * adding the background to the guessTheMurderer scene.
         * @author Bouveret Victor
         * @name instructionsBackground
         * @name {Phaser.GameObjects.Image}
         */
        var guessTheMurdererscreen = this.add.image(400,300, 'guessTheMurdererScreen');
        
        
        //adding the victory container
        /**
         * This text will be contained in the guessTheMurdererContainer
         * @author Bouveret Victor
         * @name guessTheMurdererText
         * @name {Phaser.GameObjects.Text}
         */
        var guessTheMurdererText = this.add.text(-240,-40, "Remember the description that the witness gave\nyou ? Now we need to find the murderer between \nthese four suspects !",{ fontSize : 22 , fontFamily: 'Georgia, Times, serif'});
        
        
        /**
         * This rectangle will be contained in the guessTheMurdererContainer.
         * @author Bouveret Victor
         * @name guessTheMurdererRect
         * @type {Phaser.Geom.Rectangle}
         */
        var guessTheMurdererRect = this.add.rectangle(0,0,500,100,0x032d3d, 0.85);
        guessTheMurdererText.setTint(0xc2baac);
        guessTheMurdererRect.setName("guessTheMurdererRect");
        
        
        /**
         * This rectangle will add some effects to the guessTheMurdererRect that will be contained in the guessTheMurdererContainer.
         * @author Bouveret Victor
         * @name guessTheMurdererRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var guessTheMurdererRectStyle = this.add.rectangle(0,0,500,100);
        guessTheMurdererRectStyle.setStrokeStyle(2,0x000000);
        
        
        /**
         * this is the container that will explain what you need to do in this part of the game.
         * @author Bouveret Victor
         * @name guessTheMurdererContainer
         * @type {Phaser.GameObjects.Container}
         */
        var guessTheMurdererContainer = this.add.container(400,100,[guessTheMurdererRect ,guessTheMurdererText,guessTheMurdererRectStyle]);
        guessTheMurdererContainer.setInteractive(new Phaser.Geom.Rectangle(-250,-75,500,150), Phaser.Geom.Rectangle.Contains);
        guessTheMurdererContainer.setName("guessTheMurdererContainer");
        
        
        /**
         * this is all the images that we are going to need for the choosing the suspect part of the game.
         * @author Bouveret Victor
         * @name firstSuspect, secondSuspect, thirdSuspect, fourthSuspect
         * @name {Phaser.GameObjects.Image}
         */
        var firstSuspect = this.add.image(400,350, 'firstSuspect');
        firstSuspect.setName("firstSuspect");
        var secondSuspect = this.add.image(400,350, 'secondSuspect');
        secondSuspect.setName("secondSuspect");
        var thirdSuspect = this.add.image(400,350, 'thirdSuspect');
        thirdSuspect.setName("thirdSuspect");
        var fourthSuspect = this.add.image(400,350, 'fourthSuspect');
        fourthSuspect.setName("fourthSuspect");
        
        
        //setting all the suspects visibility to false except the first one.
        this.children.getByName("secondSuspect").visible = false;
        this.children.getByName("thirdSuspect").visible = false;
        this.children.getByName("fourthSuspect").visible = false;
        
        
        /**
         * this is the arrows images that we are going to need to choose between suspects.
         * @author Bouveret Victor
         * @name leftArrow, rightArrow
         * @name {Phaser.GameObjects.Image}
         */
        var leftArrow = this.add.image(200,350, 'leftarrow');
        leftArrow.setInteractive();
        var rightArrow = this.add.image(600,350, 'rightarrow');
        rightArrow.setInteractive();
        
        
         /**
         * this function here is going to increment the suspectNumber by 1 each time the user clicks on it, so the suspects images are going to change, and, if the suspectNummber reach 3 the next click will reset it to 0.
         * @author Bouveret Victor
         */
        rightArrow.on('pointerdown', function() {
            if(suspectNumber >= 3){
                suspectNumber = 0;
            }

            else {
                suspectNumber += 1;
            }
        })

        
        /**
         * same as always, these functions right here are used to add some effects to the rightArrow when the pointer comes across it.
         * @author Bouveret Victor
         */
        rightArrow.on ('pointerover', function() {
            rightArrow.setTint(0x00ff00);
        })

        rightArrow.on ('pointerout', function() {
            rightArrow.clearTint();
        })


        /**
         * here we have almost the same function than for the rightArrow, but this time it decrement the suspectNumber for each click, also if the suspect number reaches 0, it will become 3.
         * @author Bouveret Victor
         */
        leftArrow.on('pointerdown', function() {
            if (suspectNumber <= 0){
                suspectNumber = 3;
            }

            else {
                suspectNumber += -1;
            }
        })

        
        /**
         * exactly the same effects than for the rightArrow.
         * @author Bouveret Victor
         */
        leftArrow.on ('pointerover', function() {
            leftArrow.setTint(0x00ff00);
        })

        leftArrow.on ('pointerout', function() {
            leftArrow .clearTint();
        })
        
        
        /**
         * This text will be contained in the confirmTheGuessContainer
         * @author Bouveret Victor
         * @name confirmTheGuessText
         * @name {Phaser.GameObjects.Text}
         */
        var confirmTheGuessText = this.add.text(-126,-16, "Confirm your choice",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});
        
        
        /**
         * This rectangle will be contained in the confirmTheGuessContainer.
         * @author Bouveret Victor
         * @name confirmTheGuessRect
         * @type {Phaser.Geom.Rectangle}
         */
        var confirmTheGuessRect = this.add.rectangle(0,0,300,50,0x032d3d, 0.8);
        confirmTheGuessText.setTint(0xc2baac);
        confirmTheGuessRect.setName("confirmTheGuessRect");
        
        
        /**
         * Here, this rectangle is going to add borders on the confirmTheGuessRect to add some more effects.
         * @author Bouveret Victor
         * @name confirmTheGuessRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var confirmTheGuessRectStyle = this.add.rectangle(0,0,300,50);
        confirmTheGuessRectStyle.setStrokeStyle(2,0x000000);

        
        /**
         * this is the container that will be used to confirm the guess of the user, after that, the user will eather win, or loose.
         * @author Bouveret Victor
         * @name guessTheMurdererContainer
         * @type {Phaser.GameObjects.Container}
         */
        var confirmTheGuessContainer = this.add.container(400,520,[confirmTheGuessRect ,confirmTheGuessText ,confirmTheGuessRectStyle]);
        confirmTheGuessContainer.setInteractive(new Phaser.Geom.Rectangle(-150,-25,300,50), Phaser.Geom.Rectangle.Contains);
        confirmTheGuessContainer.setName("confirmTheGuessContainer");   

        
        /**
         * style effects, again.
         * @author Bouveret Victor
         */
        confirmTheGuessContainer.on('pointerover', function() {
            confirmTheGuessRect.setFillStyle(0x356c18,0.8)
        });

        confirmTheGuessContainer.on('pointerout', function() {
            confirmTheGuessRect.setFillStyle(0x032d3d,0.8)
        });

        
        /**
         * Here, there is the function that is used to know if the user won or not, if he won the timer take the var timePlayed and it will be exported to the last scene after this one. But if the user loose, he will need to try the level again.
         * @author Bouveret Victor
         */
        confirmTheGuessContainer.on('pointerdown', function(){
        if(suspectNumber == 0 && proposalNumber == 0 || suspectNumber == 1 && proposalNumber == 1 || suspectNumber == 2 && proposalNumber == 2 || suspectNumber == 3 && proposalNumber == 3) {
            timePlayed = new Date() - timer;
            this.scene.scene.start('victoryScreenFindTheMurderer');
        }
        else 
            this.scene.scene.start('youLooseToFindTheMurderer');
        });
    }

    // Used to update your game. This function runs constantly
    update() {
        
        /**
         * Here there is a switch case that is used to show the right suspect for the right suspectNumber.
         * @author Bouveret Victor
         */
        switch (suspectNumber) {
            case 0:
                this.children.getByName("firstSuspect").visible = true;
                this.children.getByName("fourthSuspect").visible = false;
                this.children.getByName("secondSuspect").visible = false;
                break;
            case 1:
                this.children.getByName("secondSuspect").visible = true;
                this.children.getByName("thirdSuspect").visible = false;
                this.children.getByName("firstSuspect").visible = false;
                break;
            case 2:
                this.children.getByName("thirdSuspect").visible = true;
                this.children.getByName("fourthSuspect").visible = false;
                this.children.getByName("secondSuspect").visible = false;
                break;
            case 3:
                this.children.getByName("fourthSuspect").visible = true;
                this.children.getByName("thirdSuspect").visible = false;
                this.children.getByName("firstSuspect").visible = false;
                break;
        }
    }
    
}


//Victory Screen Scene 
class victoryScreenFindTheMurderer extends Phaser.Scene {

    constructor () {
        super('victoryScreenFindTheMurderer');
    }

    preload() {
        this.load.image("victoryFindtheMurderer","../images/game/background/victoryScreentranslateGameBackground.jpg");
        this.load.image("detectiveTranslate","../images/game/detective1.png");
    }

    create() {
    
        
        //adding the background
        /**
         * adding the background to the victoryScreenFindTheMurderer scene.
         * @author Bouveret Victor
         * @name victoryScreen
         * @name {Phaser.GameObjects.Image}
         */
        var victoryScreen = this.add.image(400,300,'victoryFindtheMurderer');
        
        
        /**
         * adding the detective in the background.
         * @author Bouveret Victor
         * @name detective
         * @name {Phaser.GameObjects.Image}
         */
        var detective = this.add.image(300,420,"detective");
        
        
        /**
         * This text will be contained in the victoryContainer
         * @author Bouveret Victor
         * @name victoryText
         * @name {Phaser.GameObjects.Text}
         */
        var victoryText = this.add.text(-220,-65, "Great job ! you found the murderer. You are a\n\ngreat assistant, come see me again whenever\n\nyou like to help me in my investigations !",{ fontSize : 22 , fontFamily: 'Georgia, Times, serif'});
        
        /**
         * This rectangle will be contained in the victoryContainer.
         * @author Bouveret Victor
         * @name victoryRect
         * @type {Phaser.Geom.Rectangle}
         */
        var victoryRect = this.add.rectangle(0,0,500,150,0x032d3d, 0.85);
        victoryText.setTint(0xc2baac);
        victoryRect.setName("victoryRect");
        
        
        /**
         * This rectangle will add a border to the victoryRect.
         * @author Bouveret Victor
         * @name victoryRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var victoryRectStyle = this.add.rectangle(0,0,500,150);
        victoryRectStyle.setStrokeStyle(2,0x000000);
        
        
        /**
         * This container is here to show the good ending dialogue to the user.
         * @author Bouveret Victor
         * @name victoryContainer
         * @type {Phaser.GameObjects.Container}
         */
        var victoryContainer = this.add.container(400,250,[victoryRect ,victoryText,victoryRectStyle]);
        victoryContainer.setInteractive(new Phaser.Geom.Rectangle(-250,-75,500,150), Phaser.Geom.Rectangle.Contains);
        victoryContainer.setName("victoryContainer");
        
        
        /**
         * This text will be contained in the finishContainer
         * @author Bouveret Victor
         * @name finishText
         * @name {Phaser.GameObjects.Text}
         */
        var finishText = this.add.text(-100,-16, "Go back home...",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});
        
        
        /**
         * This rectangle will be contained in the finishContainer.
         * @author Bouveret Victor
         * @name finishRect
         * @type {Phaser.Geom.Rectangle}
         */
        var finishRect = this.add.rectangle(0,0,250,50,0x032d3d, 0.8);
        finishText.setTint(0xc2baac);
        finishRect.setName("findMurdererRect");
        
        
        /**
         * This rectangle will add effects for the finishRect.
         * @author Bouveret Victor
         * @name finishRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var finishRectStyle = this.add.rectangle(0,0,250,50);
        finishRectStyle.setStrokeStyle(2,0x000000);

        
        /**
         * This container will lead the user to the timeRankingPage after being clicked on.
         * @author Bouveret Victor
         * @name finishContainer
         * @type {Phaser.GameObjects.Container}
         */
        var finishContainer = this.add.container(400,520,[finishRect ,finishText,finishRectStyle]);
        finishContainer.setInteractive(new Phaser.Geom.Rectangle(-125,-25,250,50), Phaser.Geom.Rectangle.Contains);
        finishContainer.setName("finishContainer");   

        
        /**
         * style effects for the finishContainer.
         * @author Bouveret Victor
         */
        finishContainer.on('pointerover', function() {
            finishRect.setFillStyle(0x356c18,0.8)
        });

        finishContainer.on('pointerout', function() {
            finishRect.setFillStyle(0x032d3d,0.8)
        });
        
        
        /**
         * here, there is a function that will lead the user to the tomeRankingPage after a click.
         * @author Bouveret Victor
         */
        finishContainer.on('pointerdown', function() {
            this.scene.scene.start('timeRankingPage');
        }); 
    }

    update() {
        // Used to update your game. This function runs constantly
    } 
}

class youLooseToFindTheMurderer extends Phaser.Scene {

    constructor () {
        super('youLooseToFindTheMurderer');
    }

    preload() {
        this.load.image("youLooseToFindTheMurdererScreen","../images/game/background/youLooseToFindTheMurderer.jpg");
        this.load.image("detectiveTranslate","../images/game/detective1.png");
    }

    create() {
    
        //adding the background
        /**
         * adding the background to the youLooseToFindTheMurderer scene.
         * @author Bouveret Victor
         * @name youLoose
         * @name {Phaser.GameObjects.Image}
         */
        var youLoose = this.add.image(400,300,'youLooseToFindTheMurdererScreen');
        
        /**
         * adding the detective in the background.
         * @author Bouveret Victor
         * @name detective
         * @name {Phaser.GameObjects.Image}
         */
        var detective = this.add.image(300,420,"detective");

        
        
        /**
         * This text will be contained in the youLooseContainer.
         * @author Bouveret Victor
         * @name youLooseText
         * @name {Phaser.GameObjects.Text}
         */
        var youLooseText = this.add.text(-220,-65, "Unfortunately... this was not the person that \n\nwe were looking for... It was great to investigate \n\nwith you but I have to leave.",{ fontSize : 22 , fontFamily: 'Georgia, Times, serif'});
        
        
        /**
         * here, this rectangle will be contained in the youLooseContainer.
         * @author Bouveret Victor
         * @name youLooseRect
         * @type {Phaser.Geom.Rectangle}
         */
        var youLooseRect = this.add.rectangle(0,0,500,150,0x555555, 0.85);
        youLooseText.setTint(0xc2baac);
        youLooseRect.setName("youLooseRect");
        
        
        /**
         * here, there is the border effect for the youLooseRect.
         * @author Bouveret Victor
         * @name youLooseRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var youLooseRectStyle = this.add.rectangle(0,0,500,150);
        youLooseRectStyle.setStrokeStyle(2,0x000000);
        
        
        /**
         * This container will show the bad ending dialogue to the user.
         * @author Bouveret Victor
         * @name youLooseContainer
         * @type {Phaser.GameObjects.Container}
         */
        var youLooseContainer = this.add.container(400,250,[youLooseRect ,youLooseText,youLooseRectStyle]);
        youLooseContainer.setInteractive(new Phaser.Geom.Rectangle(-250,-75,500,150), Phaser.Geom.Rectangle.Contains);
        youLooseContainer.setName("youLooseContainer");
        
        
        
        /**
         * This text will be contained in the finishLooseContainer.
         * @author Bouveret Victor
         * @name finishLooseText
         * @name {Phaser.GameObjects.Text}
         */
        var finishLooseText = this.add.text(-60,-16, "Try Again",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});
        
        
        /**
         * here, there is this rectangle that will be contained in the finishLooseContainer.
         * @author Bouveret Victor
         * @name finishLooseRect
         * @type {Phaser.Geom.Rectangle}
         */
        var finishLooseRect = this.add.rectangle(0,0,200,50,0x555555, 0.8);
        finishLooseText.setTint(0xc2baac);
        finishLooseRect.setName("finishLooseRect");
        
        
        /**
         * this rectangle is the border effect for the finishLooseRect.
         * @author Bouveret Victor
         * @name finishLooseRectStyle
         * @type {Phaser.Geom.Rectangle}
         */
        var finishLooseRectStyle = this.add.rectangle(0,0,200,50);
        finishLooseRectStyle.setStrokeStyle(2,0x000000);

        
        /**
         * This containe will lead the user back to the beginning of this level after being clicked on.
         * @author Bouveret Victor
         * @name finishLooseContainer
         * @type {Phaser.GameObjects.Container}
         */
        var finishLooseContainer = this.add.container(400,520,[finishLooseRect ,finishLooseText,finishLooseRectStyle]);
        finishLooseContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);
        finishLooseContainer.setName("finishLooseContainer");
        
        
        /**
         * style effects for the finishLooseContainer.
         * @author Bouveret Victor
         */
        finishLooseContainer.on('pointerover', function() {
            finishLooseRect.setFillStyle(0x888888,0.8)
        });

        finishLooseContainer.on('pointerout', function() {
            finishLooseRect.setFillStyle(0x555555,0.8)
        });

        
        /**
         * This function right here will lead back the user to instructionsForTheMurdererGame after being clicked on.
         * @author Bouveret Victor
         */
        finishLooseContainer.on('pointerdown', function() {
            this.scene.scene.start('instructionsForTheMurdererGame');
        });
    }

    update() {
        // Used to update your game. This function runs constantly
    }
}