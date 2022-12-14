export {rulesFindTheMurderer,instructionsForTheMurdererGame ,findTheMurdererGame,victoryScreenFindTheMurderer}; 

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
            this.load.image("witessInterrogation","../images/game/background/witnessinterrogation1.2.png");
            this.load.image("PlayButton","../images/playbutton.png");
        }

        create() {
            var witnessInterogation = this.add.image(400,300, 'witessInterrogation');
            
             
            var playButtonImg2 = this.add.image(400,435, 'PlayButton');
            var playButtonCircle2 = this.add.circle (400,435,23,0x032d3d, 0.8);
            playButtonCircle2.setName("playButtonCircle2");

            var playButtonContainer2 = this.add.container(0,0,[playButtonCircle2 ,playButtonImg2]);
            playButtonContainer2.setInteractive(new Phaser.Geom.Circle(400,435,23), Phaser.Geom.Circle.Contains);
            playButtonContainer2.setName("playButtonContainer2");
            
            
            playButtonContainer2.on('pointerdown', function() {
                //ici mettre la voix qui décrit le/la meurtrier/e
            })
            
            playButtonContainer2.on('pointerover', function() {
                playButtonCircle2.setFillStyle(0x356c18, 0.8)
            });
            
            playButtonContainer2.on('pointerout', function() {
                playButtonCircle2.setFillStyle(0x032d3d, 0.8)
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
            //this.scene.scene.start('le choix du meurtrier game');
            });
        
            findMurdererContainer.on('pointerover', function() {
                findMurdererRect.setFillStyle(0x356c18,0.8)
            });

            findMurdererContainer.on('pointerout', function() {
                findMurdererRect.setFillStyle(0x032d3d,0.8)
            });
        }

        update() {
            // Used to update your game. This function runs constantly
        }
}


//Victory Screen Scene 
class victoryScreenFindTheMurderer extends Phaser.Scene {

    constructor () {
        super('victoryScreenFindTheMurderer');
    }

    preload() {
        this.load.image("victoryScreen","../images/game/background/victoryScreen.jpg");
    }

    create() {
    
        //adding the background
        var victoryScreen = this.add.image(400,300, 'victoryScreen');
        
        //adding the victory container
        var victoryText = this.add.text(-220,-40, "Incredible ! You found the correct house !\n\n   We need to investigate the inside now.",{ fontSize : 24 , fontFamily: 'Georgia, Times, serif'});
        var victoryRect = this.add.rectangle(0,0,500,150,0x032d3d, 0.85);
        victoryText.setTint(0xc2baac);
        victoryRect.setName("victoryRect");
        var victoryRectStyle = this.add.rectangle(0,0,500,150);
        victoryRectStyle.setStrokeStyle(2,0x000000);
        
        var victoryContainer = this.add.container(400,250,[victoryRect ,victoryText,victoryRectStyle]);
        victoryContainer.setInteractive(new Phaser.Geom.Rectangle(-250,-75,500,150), Phaser.Geom.Rectangle.Contains);
        victoryContainer.setName("victoryContainer");   
        
    }

    update() {
        // Used to update your game. This function runs constantly
    }
    
}