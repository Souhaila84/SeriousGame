export {rulesFindTheMurderer,finTheMurdererGame ,victoryScreenFindTheMurderer}; 

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
        
        var startText = this.add.text(-38,-18, "Start !",{ fontSize : 32 , fontFamily: 'Georgia, Times, serif'});
        var startRect = this.add.rectangle(0,0,200,50,0x7b6c4f, 0.8);
        startText.setTint(0xc2baac);

        var startRectStyle = this.add.rectangle(0,0,200,50);
        startRectStyle.setStrokeStyle(2,0x000000);
        
        var startContainer = this.add.container(400,450,[startRect ,startText,startRectStyle]);
        startContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);   
        
        //adding the rules in the rules screen
        var rulesText = this.add.text(-190,-90, "In this game you have listen to \nthe person speaking and find \nwho is the murderer between all the\ncharacters that will be displayed \non your screen, then click on the \nsuspect and finish the investigation !\n\nGood luck !",{ fontSize : 24, fontFamily: 'Georgia, Times, serif' });
        rulesText.setTint(0xc2baac);
        var rulesRect = this.add.rectangle(0,0,400,200,0x7b6c4f, 0.8);
        
        var rulesRectStyle = this.add.rectangle(0,0,400,200);
        rulesRectStyle.setStrokeStyle(2,0x000000);
        
        var rulesContainer = this.add.container(400,200,[rulesRect ,rulesText,rulesRectStyle]);
        
        startContainer.on("pointerdown", function(){
            this.scene.scene.start('findTheMurdererGame');
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



class finTheMurdererGame extends Phaser.Scene {
    
    constructor () 
    {
        super('findTheMurdererGame');  // construct with a name to call this scene after
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
        var playButtonCircle = this.add.circle (0,0,23,0x7b6c4f, 0.8);
        playButtonCircle.setName("playButtonCircle");
        
        var playButtonContainer = this.add.container(400,450,[playButtonCircle ,playButtonImg]);
        playButtonContainer.setInteractive(new Phaser.Geom.Circle(400,450,23), Phaser.Geom.Circle.Contains);
        playButtonContainer.setName("playButtonContainer");   
        
        var instructionsText = this.add.text(-240 ,-110, "Now we need to listen what the witness \nhave to tell us ! \nShe/He is going to describe the murderer \nand we will need to find him/her \nbetween four suspects according to the \ndescription that the witness gave us.",{ fontSize : 24 , fontFamily: 'Georgia, Times, serif'});
        var instructionsText2 = this.add.text(-240, 50, "Listen what does she/he have to \nsay by clicking the play button.", { fontSize : 24 , fontFamily: 'Georgia, Times, serif'});
        var instructionsRect = this.add.rectangle(0,0,525,250,0x032d3d, 0.85);
        instructionsText.setTint(0xc2baac);
        instructionsText2.setTint(0xc2baac);
        instructionsRect.setName("instructionsRect");
        var instructionsRectStyle = this.add.rectangle(0,0,525,250);
        instructionsRectStyle.setStrokeStyle(2,0x000000);
        
        var instructionsContainer = this.add.container(400,250,[instructionsRect ,instructionsText,instructionsText2,instructionsRectStyle]);
        instructionsContainer.setInteractive(new Phaser.Geom.Rectangle(-250,-125,525,250), Phaser.Geom.Rectangle.Contains);
        instructionsContainer.setName("instructionsContainer");   
    }   
    
    update() 
    {
        
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