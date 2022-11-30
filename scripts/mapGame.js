var proposalNumber = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Rules screen 
class rules extends Phaser.Scene {

    constructor () {
        super('rules');
    }

    preload() {
        this.load.image("Rulesbackground","../images/game/background/rulesBackground.jpg");
    }
rules
    create() {
        
        //Rules Part 
        //adding the rules background
        var rulesBackground = this.add.image(400,300, 'Rulesbackground');
        
        //adding start container to the rules screen
        
        var startText = this.add.text(-38,-18, "Start !",{ fontSize : 32 , fontFamily: 'Georgia, Times, serif'});
        var startRect = this.add.rectangle(0,0,200,50,0x7b6c4f, 0.8);
        startText.setTint(0xc2baac);
        startRect.setName("startRect");
        var startRectStyle = this.add.rectangle(0,0,200,50);
        startRectStyle.setStrokeStyle(2,0x000000);
        
        var startContainer = this.add.container(400,450,[startRect ,startText,startRectStyle]);
        startContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);
        startContainer.setName("startContainer");   
        
        //adding the rules in the rules screen
        var rulesText = this.add.text(-190,-90, "In this game you have to find the \nright path with the help of \ninstructions that will be displayed\non the right of your screen. After \nthat, click on the location you \nthink right and submit your choice, \nyou only have one right location \nper try. \n\nGood luck !",{ fontSize : 16 });
        rulesText.setTint(0xc2baac);
        var rulesRect = this.add.rectangle(0,0,400,200,0x7b6c4f, 0.8);
        rulesRect.setName("rulesRect");
        var rulesRectStyle = this.add.rectangle(0,0,400,200);
        rulesRectStyle.setStrokeStyle(2,0x000000);
        
        var rulesContainer = this.add.container(400,200,[rulesRect ,rulesText,rulesRectStyle]);
        rulesContainer.setInteractive(new Phaser.Geom.Rectangle(-200,-100,400,200), Phaser.Geom.Rectangle.Contains);
        rulesContainer.setName("rulesContainer");
        
        startContainer.on("pointerup", function(){
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
class victoryScreen extends Phaser.Scene {

    constructor () {
        super('victoryScreen');     
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
        
        
        //adding the enter container 
        var enterText = this.add.text(-68,-13, "Enter the house",{ fontSize : 20 , fontFamily: 'Georgia, Times, serif'});
        var enterRect = this.add.rectangle(0,0,200,50,0x032d3d, 0.85);
        enterText.setTint(0xc2baac);
        enterRect.setName("enterRect");
        var enterRectStyle = this.add.rectangle(0,0,200,50);
        enterRectStyle.setStrokeStyle(2,0x000000);
        
        var enterContainer = this.add.container(400,450,[enterRect ,enterText,enterRectStyle]);
        enterContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);
        enterContainer.setName("enterContainer");  
        
        /*enterContainer.on("pointerup", function(){
            this.scene.scene.start('Inserer le niveau FindObjects ici');   AJOUTER LE NIVEAU JUSTE LA !!!!
        });*/
        
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
class tryAgainScreen extends Phaser.Scene {

    constructor () {
        super('tryAgainScreen');
    }

    preload() {
    this.load.image("tryAgainBackground","../images/game/background/tryAgainBackground.jpg");
    }

    create() {
        
        //adding the background
        var tryAgainBackground = this.add.image(400,300, 'tryAgainBackground');
        
        //adding "you loose" container
        var youlooseText = this.add.text(-225,-15, "Oops... Seems like it wasn't the right path...",{ fontSize : 24 , fontFamily: 'Georgia, Times, serif'});
        var youlooseRect = this.add.rectangle(0,0,500,150,0x351d0d, 0.85);
        youlooseText.setTint(0xc2baac);
        youlooseRect.setName("youlooseRect");
        var youlooseRectStyle = this.add.rectangle(0,0,500,150);
        youlooseRectStyle.setStrokeStyle(2,0x000000);
        
        var youlooseContainer = this.add.container(400,250,[youlooseRect ,youlooseText,youlooseRectStyle]);
        youlooseContainer.setInteractive(new Phaser.Geom.Rectangle(-250,-75,500,150), Phaser.Geom.Rectangle.Contains);
        youlooseContainer.setName("youlooseContainer");   
        
        
        //adding the try again container 
        var tryAgainText = this.add.text(-41,-13, "Try again !",{ fontSize : 20 , fontFamily: 'Georgia, Times, serif'});
        var tryAgainRect = this.add.rectangle(0,0,200,50,0x351d0d, 0.85);
        tryAgainText.setTint(0xc2baac);
        tryAgainRect.setName("tryAgainRect");
        var tryAgainRectStyle = this.add.rectangle(0,0,200,50);
        tryAgainRectStyle.setStrokeStyle(2,0x000000);
        
        var tryAgainContainer = this.add.container(275,450,[tryAgainRect ,tryAgainText,tryAgainRectStyle]);
        tryAgainContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);
        tryAgainContainer.setName("tryAgainContainer");  
        
        //styling tryAgainContainer 
             
        tryAgainContainer.on("pointerup", function(){
            this.scene.scene.start('mapGame');
        });
        
        tryAgainContainer.on('pointerover', function() {
            tryAgainRect.setFillStyle(0x5d4a3d,0.85)
        });
        
        tryAgainContainer.on('pointerout', function() {
            tryAgainRect.setFillStyle(0x351d0d,0.85)
        });

        
        //adding the return to menu container
        var returnToMenuText = this.add.text(-67,-13, "Return to Menu",{ fontSize : 20 , fontFamily: 'Georgia, Times, serif'});
        var returnToMenuRect = this.add.rectangle(0,0,200,50,0x351d0d, 0.85);
        returnToMenuText.setTint(0xc2baac);
        returnToMenuRect.setName("returnToMenuRect");
        var returnToMenuRectStyle = this.add.rectangle(0,0,200,50);
        returnToMenuRectStyle.setStrokeStyle(2,0x000000);
        
        var returnToMenuContainer = this.add.container(525,450,[returnToMenuRect ,returnToMenuText,returnToMenuRectStyle]);
        returnToMenuContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);
        returnToMenuContainer.setName("returnToMenuContainer"); 

        //styling the returnToMenuContainer 
        
       /* returnToMenuContainer.on("pointerup", function(){
            this.scene.scene.start();       AJOUTER LE MENU ICI QUAND ON POURRA !!!!!!!!
        });*/
        
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
        
        var map = this.add.image(400,300, 'Map');
                
        //Game Part
        //adding the green pings
        
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
        
        var redping = this.add.image(210,148, "Redping");
        redping.setName("Redping")
        var redping2 = this.add.image(287,323, "Redping");
        redping2.setName("Redping2")
        var redping3 = this.add.image(455,433, "Redping");
        redping3.setName("Redping3")
        
        
        //adding the start stuff
        
        var start = this.add.image(60,410, "Start");
        var gpsuser = this.add.image(58,442, "Gps user")
        var r3 = this.add.rectangle(60,400, 109, 40);
        r3.setStrokeStyle(2, 0x504a4a);
        
        
        //adding the instructions 
        
        var r1 = this.add.rectangle(750,315, 300, 450, 0x0008, 0.7);
            var r2 = this.add.rectangle(750,315, 300, 450);
            r2.setStrokeStyle(2, 0x0000);
        var titre = this.add.text(650,110,"Instructions :", {fontSize : 18, fontFamily: 'Georgia, Times, serif' });
        
        
        //adding submit container 
        
        var subText = this.add.text(-28,-10, "Submit",{ fontSize : 18 , fontFamily: 'Georgia, Times, serif' });
        var subRect = this.add.rectangle(0,0,150,35,0x1b499b);
        subRect.setName("subRect");
        
        var subContainer = this.add.container(700, 570,[subRect ,subText]);
        subContainer.setInteractive(new Phaser.Geom.Rectangle(-75,-17,150,35), Phaser.Geom.Rectangle.Contains);
        subContainer.setName("subContainer");

        
        //adding yes/no container 
        
        var yesNoText = this.add.text(-80,-100, "Are you sure ?" ,{ fontSize : 30 , fontFamily: 'Georgia, Times, serif' });
        var yesNoRect = this.add.rectangle(0,0,500,300,0x0008, 0.75);
        yesNoRect.setName("yesNoRect");
        var yesNoRectStyle = this.add.rectangle(0,0,500,300);
        yesNoRectStyle.setStrokeStyle(2, 0x00000);
        
        
        var yesNoContainer = this.add.container(300,300,[yesNoRect, yesNoText, yesNoRectStyle]);
        yesNoContainer.setInteractive(new Phaser.Geom.Rectangle(-250, -150,500,300), Phaser.Geom.Rectangle.Contains);
        yesNoContainer.setName("yesNoContainer");

        
        //adding the yes container to the yes/no container
        
        var yesText = this.add.text(-18,-11, "Yes !" ,{ fontSize : 20 , fontFamily: 'Georgia, Times, serif' });
        var yesRect = this.add.rectangle(0,0, 100,50, 0x1b499b);
        yesRect.setName("yesRect");
        var yesRectStyle = this.add.rectangle(0,0,100,50);
        yesRectStyle.setStrokeStyle(2, 0x00000)
        
        var yesContainer = this.add.container(420,400, [yesRect, yesText, yesRectStyle]);
        yesContainer.setInteractive(new Phaser.Geom.Rectangle(-50,-25,100,50), Phaser.Geom.Rectangle.Contains);
        yesContainer.setName("yesContainer");
        
        
        //adding the no container to the yes/no container 
        
        var noText = this.add.text(-11,-11, "No" ,{ fontSize : 20 , fontFamily: 'Georgia, Times, serif' });
        var noRect = this.add.rectangle(0,0, 100,50, 0x1b499b);
        noRect.setName("noRect");
        var noRectStyle = this.add.rectangle(0,0,100,50);
        noRectStyle.setStrokeStyle(2, 0x00000);
        
        var noContainer = this.add.container(170, 400, [noRect, noText, noRectStyle]);
        noContainer.setInteractive(new Phaser.Geom.Rectangle(-50,-25,100,50), Phaser.Geom.Rectangle.Contains);
        noContainer.setName("noContainer");
        
        
        //adding all the yes/no stuff into a container 
        
        var popupContainer = this.add.container(0,0, [yesNoContainer, noContainer, yesContainer]);
        popupContainer.setInteractive(new Phaser.Geom.Rectangle(-250, -150,500,300), Phaser.Geom.Rectangle.Contains);
        popupContainer.setName("popupContainer");
        popupContainer.visible = false;
        
        //adding advert container 
    
        var advertRect = this.add.rectangle(360,310, 400,50, 0xff0000, 0.9);
        advertRect.setName("advertRect");
        var advertRectStyle = this.add.rectangle(360,310,400,50);
        advertRectStyle.setStrokeStyle(2, 0x00000);
        var advertText = this.add.text(180,300, "You need to choose only one location !",{ fontSize : 22 , fontFamily: 'Georgia, Times, serif'});
        advertText.setTint(0x000000);
        
        var advertContainer = this.add.container(0, 0,[advertRect ,advertText, advertRectStyle]);
        advertContainer.visible = false;        
        
        
        //adding the second advert container 
        
        var advertRect2 = this.add.rectangle(360,310, 400,50, 0xff0000, 0.9);
        advertRect2.setName("advertRect2");
        var advertRectStyle2 = this.add.rectangle(360,310,400,50);
        advertRectStyle2.setStrokeStyle(2, 0x00000);
        var advertText2 = this.add.text(200,300, "You need to choose one location !",{ fontSize : 22 , fontFamily: 'Georgia, Times, serif'});
        advertText2.setTint(0x000000);
        
        var advertContainer2 = this.add.container(0, 0,[advertRect2 ,advertText2, advertRectStyle2]);  
        advertContainer2.visible = false;
        
        
        //Instructions text
        
        var proposals = ["- First, turn left \n  when you exit \n  my office\n\n- Then turn left \n  to Wood Street \n\n- Continue straight \n  forward trough \n  Gresham Street \n\n- Then turn right \n\n- And finally, \n  on your left you \n  should see the \n  building we are \n  looking for !",
                         "- First, turn left \n  when you exit \n  my office\n\n- Then turn left, \n  and turn right \n  into the alley, \n  and take it \n\n- When you get out \n  of the alley, \n  turn left to \n  Milk Street \n\n- Then turn right, \n  and right again \n  into the next \n  avenue, it should \n  be King Street \n\n- Turn right and \n  right again in the \n  alley, and you \n  should see the \n  right house !" ,
                         "- First, turn left \n  when you exit \n  my office\n\n- Then go straight \n  past the church \n  and turn left \n  in King Street \n\n- Then turn right \n\n- Go straight past \n  the first road \n  on your right \n\n- After that, turn \n  right to Old Jewry \n\n- Then turn left, \n  and left again, \n  and you should \n  be in front of \n  the building we \n  are looking for !"];
        
        proposalNumber = Math.floor(Math.random() * 3);
        var instructionsText = this.add.text(605,150, proposals[proposalNumber], {fontSize: 14});
        
        
        
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
        
        subContainer.on('pointerover', function() {
            this.scene.children.getByName("subContainer").getByName("subRect").setFillStyle(0x17b833);
        });
        
        subContainer.on('pointerout', function() {
            this.scene.children.getByName("subContainer").getByName("subRect").setFillStyle(0x1b499b);
        });
        
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
        
        noContainer.on('pointerover', function() {
            this.scene.children.getByName("popupContainer").getByName("noContainer").getByName("noRect").setFillStyle(0x17b833);
        });
        
        noContainer.on('pointerout', function() {
            this.scene.children.getByName("popupContainer").getByName("noContainer").getByName("noRect").setFillStyle(0x1b499b);
        });
        
        noContainer.on('pointerdown', function(){
            popupContainer.visible = false;
        });
        
        //creating noContainer features
        yesContainer.on('pointerover', function() {
            this.scene.children.getByName("popupContainer").getByName("yesContainer").getByName("yesRect").setFillStyle(0x17b833);
        });
        
        yesContainer.on('pointerout', function() {
            this.scene.children.getByName("popupContainer").getByName("yesContainer").getByName("yesRect").setFillStyle(0x1b499b);
        });
        
         yesContainer.on('pointerup', function(){
             if(greenping2.visible && proposalNumber == 0 || greenping3.visible && proposalNumber == 0 || greenping.visible && proposalNumber == 1 || greenping3.visible && proposalNumber == 1 || greenping.visible && proposalNumber == 2 || greenping2.visible && proposalNumber == 2)
                 this.scene.scene.start('tryAgainScreen');
             else 
                 this.scene.scene.start('victoryScreen');
        });
        
        
    
        this.input.on('gameobjectup', function (pointer, gameObject)
        {
            gameObject.emit('clicked', gameObject);
        }, this);
    }
    
    
    //adjusting all the pings clickhandlers
    
    redClickHandler (redping)
    {
            redping.off('clicked', this.clickHandler);
            redping.setVisible(false);
            this.scene.children.getByName("Greenping").visible = true;
            this.scene.children.getByName("Greenping").on('clicked',this.scene.greenClickHandler);            
    }
    
        redClickHandler2 (redping2)
    {
            redping2.off('clicked', this.clickHandler);
            redping2.visible = false;
            this.scene.children.getByName("Greenping2").visible = true;
            this.scene.children.getByName("Greenping2").on('clicked',this.scene.greenClickHandler2);
    }
    
        redClickHandler3 (redping3)
    {
            redping3.off('clicked', this.clickHandler);
            redping3.visible = false;
            this.scene.children.getByName("Greenping3").visible = true;
            this.scene.children.getByName("Greenping3").on('clicked',this.scene.greenClickHandler3);
    }
    
     greenClickHandler (greenping)
    {
            greenping.off('clicked', this.clickHandler);
            greenping.setVisible(false);
            this.scene.children.getByName("Redping").visible = true;
            this.scene.children.getByName("Redping").on('clicked',this.scene.redClickHandler);
    }
    
        greenClickHandler2 (greenping2)
    {
            greenping2.off('clicked', this.clickHandler);
            greenping2.visible = false;
            this.scene.children.getByName("Redping2").visible = true;
            this.scene.children.getByName("Redping2").on('clicked',this.scene.redClickHandler2);
    }
    
        greenClickHandler3 (greenping3)
    {
            greenping3.off('clicked', this.clickHandler);
            greenping3.visible = false;
            this.scene.children.getByName("Redping3").visible = true;
            this.scene.children.getByName("Redping3").on('clicked',this.scene.redClickHandler3);   
    }
        
}


const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: [ rules,mapGame,tryAgainScreen,victoryScreen]
};

const game = new Phaser.Game(config);