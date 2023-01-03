export {rulesFindTheMurderer,instructionsForTheMurdererGame ,findTheMurdererGame ,guessTheMurderer ,victoryScreenFindTheMurderer,youLooseToFindTheMurderer}; 

var suspectNumber = 0;
var proposalNumber = 0;

//Rules screen 
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
        var rulesBackground = this.add.image(400,300, 'Rulesbackground');
        
        //adding start container to the rules screen
        
        var startText = this.add.text(-38,-18, "Start !",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});
        var startRect = this.add.rectangle(0,0,200,50,0x7b6c4f, 0.8);
        startText.setTint(0xc2baac);

        var startRectStyle = this.add.rectangle(0,0,200,50);
        startRectStyle.setStrokeStyle(2,0x000000);
        
        var startContainer = this.add.container(400,450,[startRect ,startText,startRectStyle]);
        startContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);   
        
        //adding the rules in the rules screen
        var rulesText = this.add.text(-190,-90, "In this game you have listen to \nthe person speaking and find \nwho is the murderer between all the\ncharacters that will be displayed \non your screen, then click on the \nsuspect and finish the investigation !\n\nGood luck !",{ fontSize : 20, fontFamily: 'Georgia, Times, serif' });
        rulesText.setTint(0xc2baac);
        var rulesRect = this.add.rectangle(0,0,400,200,0x7b6c4f, 0.8);
        
        var rulesRectStyle = this.add.rectangle(0,0,400,200);
        rulesRectStyle.setStrokeStyle(2,0x000000);
        
        var rulesContainer = this.add.container(400,200,[rulesRect ,rulesText,rulesRectStyle]);
        
        startContainer.on("pointerdown", function(){
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



class instructionsForTheMurdererGame extends Phaser.Scene {
    
    constructor () 
    {
        super('instructionsForTheMurdererGame');  // construct with a name to call this scene after
    }
    
    preload() 
    {
        this.load.image("Rulesbackground","../images/game/background/rulesBackground.jpg");
        this.load.image("PlayButton","../images/playbutton.png")
    }
    
    create() 
    {
        
        var rulesBackground = this.add.image(400,300, 'Rulesbackground');
        
        //creating the playButton container
        var playButtonImg = this.add.image(0,0, 'PlayButton');
        var playButtonCircle = this.add.circle (0,0,23,0x032d3d, 0.8);
        playButtonCircle.setName("playButtonCircle");
        
        var playButtonContainer = this.add.container(400,425,[playButtonCircle ,playButtonImg]);
        playButtonContainer.setInteractive(new Phaser.Geom.Circle(400,450,23), Phaser.Geom.Circle.Contains);
        playButtonContainer.setName("playButtonContainer");   
        
        var instructionsText = this.add.text(-240 ,-110, "Now we need to listen what the witness \nhave to tell us ! \nShe/He is going to describe the murderer \nand we will need to find him/her \nbetween four suspects according to the \ndescription that the witness gave us.",{ fontSize : 20 , fontFamily: 'Georgia, Times, serif'});
        var instructionsText2 = this.add.text(-240, 50, "Listen what does she/he have to \nsay by clicking the play button.", { fontSize : 20 , fontFamily: 'Georgia, Times, serif'});
        
        var instructionsRect = this.add.rectangle(0,0,525,250,0x032d3d, 0.85);
        instructionsText.setTint(0xc2baac);
        instructionsText2.setTint(0xc2baac);
        instructionsRect.setName("instructionsRect");
        var instructionsRectStyle = this.add.rectangle(0,0,525,250);
        instructionsRectStyle.setStrokeStyle(2,0x000000);
        
        var instructionsContainer = this.add.container(400,215,[instructionsRect ,instructionsText,instructionsText2,instructionsRectStyle]);
        instructionsContainer.setInteractive(new Phaser.Geom.Rectangle(-250,-125,525,250), Phaser.Geom.Rectangle.Contains);
        instructionsContainer.setName("instructionsContainer");   
        
        //creating the IGotIt container 
        var iGotItText = this.add.text(-43,-18, "Got it !",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});
        var iGotItRect = this.add.rectangle(0,0,200,50,0x032d3d, 0.8);
        iGotItText.setTint(0xc2baac);
        iGotItRect.setName("iGotItRect");
        var iGotItRectStyle = this.add.rectangle(0,0,200,50);
        iGotItRectStyle.setStrokeStyle(2,0x000000);
        
        var iGotItContainer = this.add.container(400,520,[iGotItRect ,iGotItText,iGotItRectStyle]);
        iGotItContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);
        iGotItContainer.setName("iGotItContainer");   
            
        iGotItContainer.on("pointerdown", function(){
            this.scene.scene.start('findTheMurdererGame');
        });
        
            iGotItContainer.on('pointerover', function() {
                iGotItRect.setFillStyle(0x356c18,0.8)
            });

            iGotItContainer.on('pointerout', function() {
                iGotItRect.setFillStyle(0x032d3d,0.8)
            });
        
    }   
    
    update() 
    {
        
    }
}


class findTheMurdererGame extends Phaser.Scene {

 constructor () 
        {
            super('findTheMurdererGame');
        }

        preload() 
        {
             var audioproposals = ["../audio/firstone.mp3","../audio/secondone.mp3","../audio/thirdone.mp3","../audio/fourthone.mp3"];
            /*
             * Random number betwin 0 and 3 wich correspond to the current instruction
             * @author Bouveret Victor
             * @name proposalNumber
             * @name {int}
             */
            proposalNumber = Math.floor(Math.random() * 4);
            /**
             * adding the current instruction on scene
             * @author Bouveret Victor
             * @name instructionsText
             * @name {Phaser.GameObjects.Text}
             */
            
            this.load.image("witessInterrogation","../images/game/background/witnessinterrogation1.2.png");
            this.load.image("playButton","../images/playbutton.png");
            this.load.image("pauseButton","../images/pausebutton.png");
            this.load.audio("audiotheme",audioproposals[proposalNumber]);
        }

        create() {
            var witnessInterogation = this.add.image(400,300, 'witessInterrogation');
            
            //creating the playbutton container.
            var playButtonImg2 = this.add.image(400,435, 'playButton');
            var playButtonCircle2 = this.add.circle (400,435,23,0x032d3d, 0.8);
            playButtonCircle2.setName("playButtonCircle2");

            var playButtonContainer2 = this.add.container(0,-50,[playButtonCircle2 ,playButtonImg2]);
            playButtonContainer2.setInteractive(new Phaser.Geom.Circle(400,435,23), Phaser.Geom.Circle.Contains);
            playButtonContainer2.setName("playButtonContainer2");
            
            //creating the pausebutton container.
            var pauseButtonImg = this.add.image(400,435, 'pauseButton');
            var pauseButtonCircle = this.add.circle (400,435,23,0x032d3d, 0.8);
            pauseButtonCircle.setName("pauseButtonCircle");

            var pauseButtonContainer = this.add.container(0,-50,[pauseButtonCircle ,pauseButtonImg]);
            pauseButtonContainer.setInteractive(new Phaser.Geom.Circle(400,435,23), Phaser.Geom.Circle.Contains);
            pauseButtonContainer.setName("pauseButtonContainer");
            
            pauseButtonContainer.visible = false;
            
            var music = this.sound.add("audiotheme");
            
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
            
            playButtonContainer2.on('pointerover', function() {
                playButtonCircle2.setFillStyle(0x356c18, 0.8)
            });
            
            playButtonContainer2.on('pointerout', function() {
                playButtonCircle2.setFillStyle(0x032d3d, 0.8)
            });
            
            pauseButtonContainer.on('pointerdown', function() {
                playButtonContainer2.visible = true;
                pauseButtonContainer.visible = false;
                music.pause();
            })
            
            pauseButtonContainer.on('pointerover', function() {
                pauseButtonCircle.setFillStyle(0x356c18, 0.8)
            });
            
            pauseButtonContainer.on('pointerout', function() {
                pauseButtonCircle.setFillStyle(0x032d3d, 0.8)
            });
            

            var findMurdererText = this.add.text(-189,-16, "Lets find who is the murderer !",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});
            var findMurdererRect = this.add.rectangle(0,0,410,50,0x032d3d, 0.8);
            findMurdererText.setTint(0xc2baac);
            findMurdererRect.setName("findMurdererRect");
            var findMurdererRectStyle = this.add.rectangle(0,0,410,50);
            findMurdererRectStyle.setStrokeStyle(2,0x000000);

            var findMurdererContainer = this.add.container(400,520,[findMurdererRect ,findMurdererText,findMurdererRectStyle]);
            findMurdererContainer.setInteractive(new Phaser.Geom.Rectangle(-205,-25,410,50), Phaser.Geom.Rectangle.Contains);
            findMurdererContainer.setName("findMurdererContainer");   
             
            findMurdererContainer.on("pointerdown", function(){
            this.scene.scene.start('guessTheMurderer');
            });
        
            findMurdererContainer.on('pointerover', function() {
                findMurdererRect.setFillStyle(0x356c18,0.8)
            });

            findMurdererContainer.on('pointerout', function() {
                findMurdererRect.setFillStyle(0x032d3d,0.8)
            });
            
            var listenInstructionsText = this.add.text(-190,-40, "Click on the button to listen the \nwitness, you can tell him to stop at \nany time",{ fontSize : 24 , fontFamily: 'Georgia, Times, serif'});
            var listenInstructionsRect = this.add.rectangle(0,0,400, 100,0x032d3d, 0.8);
            listenInstructionsText.setTint(0xc2baac);
            listenInstructionsRect.setName("listenInstructionsRect");
            var listenInstructionsRectStyle = this.add.rectangle(0,0,400, 100);
            listenInstructionsRectStyle.setStrokeStyle(2,0x000000);
            
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
        var guessTheMurdererscreen = this.add.image(400,300, 'guessTheMurdererScreen');
        
        //adding the victory container
        var guessTheMurdererText = this.add.text(-240,-40, "Remember the description that the witness gave\nyou ? Now we need to find the murderer between \nthese four suspects !",{ fontSize : 22 , fontFamily: 'Georgia, Times, serif'});
        var guessTheMurdererRect = this.add.rectangle(0,0,500,100,0x032d3d, 0.85);
        guessTheMurdererText.setTint(0xc2baac);
        guessTheMurdererRect.setName("guessTheMurdererRect");
        var guessTheMurdererRectStyle = this.add.rectangle(0,0,500,100);
        guessTheMurdererRectStyle.setStrokeStyle(2,0x000000);
        
        var guessTheMurdererContainer = this.add.container(400,100,[guessTheMurdererRect ,guessTheMurdererText,guessTheMurdererRectStyle]);
        guessTheMurdererContainer.setInteractive(new Phaser.Geom.Rectangle(-250,-75,500,150), Phaser.Geom.Rectangle.Contains);
        guessTheMurdererContainer.setName("guessTheMurdererContainer");
        
        
        var firstSuspect = this.add.image(400,350, 'firstSuspect');
        firstSuspect.setName("firstSuspect");
        var secondSuspect = this.add.image(400,350, 'secondSuspect');
        secondSuspect.setName("secondSuspect");
        var thirdSuspect = this.add.image(400,350, 'thirdSuspect');
        thirdSuspect.setName("thirdSuspect");
        var fourthSuspect = this.add.image(400,350, 'fourthSuspect');
        fourthSuspect.setName("fourthSuspect");
        
        this.children.getByName("firstSuspect").visible = false;
        this.children.getByName("secondSuspect").visible = true;
        this.children.getByName("thirdSuspect").visible = false;
        this.children.getByName("fourthSuspect").visible = false;
        
        var leftArrow = this.add.image(200,350, 'leftarrow');
        leftArrow.setInteractive();
        var rightArrow = this.add.image(600,350, 'rightarrow');
        rightArrow.setInteractive();
        
        rightArrow.on('pointerdown', function() {
            if(suspectNumber >= 3){
                suspectNumber = 0;
            }

            else {
                suspectNumber += 1;
            }
        })

        rightArrow.on ('pointerover', function() {
            rightArrow.setTint(0x00ff00);
        })

        rightArrow.on ('pointerout', function() {
            rightArrow.clearTint();
        })


        leftArrow.on('pointerdown', function() {
            if (suspectNumber <= 0){
                suspectNumber = 3;
            }

            else {
                suspectNumber += -1;
            }
        })

        leftArrow.on ('pointerover', function() {
            leftArrow.setTint(0x00ff00);
        })

        leftArrow.on ('pointerout', function() {
            leftArrow .clearTint();
        })
        
        var confirmText = this.add.text(-126,-16, "Confirm your choice",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});
        var confirmRect = this.add.rectangle(0,0,300,50,0x032d3d, 0.8);
        confirmText.setTint(0xc2baac);
        confirmRect.setName("findMurdererRect");
        var confirmRectStyle = this.add.rectangle(0,0,300,50);
        confirmRectStyle.setStrokeStyle(2,0x000000);

        var confirmContainer = this.add.container(400,520,[confirmRect ,confirmText,confirmRectStyle]);
        confirmContainer.setInteractive(new Phaser.Geom.Rectangle(-150,-25,300,50), Phaser.Geom.Rectangle.Contains);
        confirmContainer.setName("confirmContainer");   

        confirmContainer.on('pointerover', function() {
            confirmRect.setFillStyle(0x356c18,0.8)
        });

        confirmContainer.on('pointerout', function() {
            confirmRect.setFillStyle(0x032d3d,0.8)
        });

        confirmContainer.on('pointerdown', function(){
        if(suspectNumber == 0 && proposalNumber == 0 || suspectNumber == 1 && proposalNumber == 1 || suspectNumber == 2 && proposalNumber == 2 || suspectNumber == 3 && proposalNumber == 3)
            this.scene.scene.start('victoryScreenFindTheMurderer');
        else 
            this.scene.scene.start('youLooseToFindTheMurderer');
        });

    }

    update() {
        // Used to update your game. This function runs constantly
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
        var victoryScreen = this.add.image(400,300,'victoryFindtheMurderer');
        var detective = this.add.image(300,420,"detectiveTranslate");
        
        //adding the victory container
        var victoryText = this.add.text(-220,-65, "Great job ! you found the murderer. You are a\n\ngreat assistant, come see me again whenever\n\nyou like to help me in my investigations !",{ fontSize : 22 , fontFamily: 'Georgia, Times, serif'});
        var victoryRect = this.add.rectangle(0,0,500,150,0x032d3d, 0.85);
        victoryText.setTint(0xc2baac);
        victoryRect.setName("victoryRect");
        var victoryRectStyle = this.add.rectangle(0,0,500,150);
        victoryRectStyle.setStrokeStyle(2,0x000000);
        
        var victoryContainer = this.add.container(400,250,[victoryRect ,victoryText,victoryRectStyle]);
        victoryContainer.setInteractive(new Phaser.Geom.Rectangle(-250,-75,500,150), Phaser.Geom.Rectangle.Contains);
        victoryContainer.setName("victoryContainer");
        
        var finishText = this.add.text(-100,-16, "Go back home...",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});
        var finishRect = this.add.rectangle(0,0,250,50,0x032d3d, 0.8);
        finishText.setTint(0xc2baac);
        finishRect.setName("findMurdererRect");
        var finishRectStyle = this.add.rectangle(0,0,250,50);
        finishRectStyle.setStrokeStyle(2,0x000000);

        var finishContainer = this.add.container(400,520,[finishRect ,finishText,finishRectStyle]);
        finishContainer.setInteractive(new Phaser.Geom.Rectangle(-125,-25,250,50), Phaser.Geom.Rectangle.Contains);
        finishContainer.setName("finishContainer");   

        finishContainer.on('pointerover', function() {
            finishRect.setFillStyle(0x356c18,0.8)
        });

        finishContainer.on('pointerout', function() {
            finishRect.setFillStyle(0x032d3d,0.8)
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
        var youLoose = this.add.image(400,300,'youLooseToFindTheMurdererScreen'); 
        var detective = this.add.image(300,420,"detectiveTranslate");

        
        var youLooseText = this.add.text(-220,-65, "Unfortunately... this was not the person that \n\nwe were looking for... It was great to investigate \n\nwith you but I have to leave.",{ fontSize : 22 , fontFamily: 'Georgia, Times, serif'});
        var youLooseRect = this.add.rectangle(0,0,500,150,0x555555, 0.85);
        youLooseText.setTint(0xc2baac);
        youLooseRect.setName("victoryRect");
        var youLooseRectStyle = this.add.rectangle(0,0,500,150);
        youLooseRectStyle.setStrokeStyle(2,0x000000);
        
        var youLooseContainer = this.add.container(400,250,[youLooseRect ,youLooseText,youLooseRectStyle]);
        youLooseContainer.setInteractive(new Phaser.Geom.Rectangle(-250,-75,500,150), Phaser.Geom.Rectangle.Contains);
        youLooseContainer.setName("youLooseContainer");
    
    }

    update() {
        // Used to update your game. This function runs constantly
    }
    
    
    
}