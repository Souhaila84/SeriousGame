export {rulesHiddenObjects,hiddenObjects, victoryScreenHiddenObjects};

var count = 0;

var count = 0;

/*
This class creates the "instructions" screen for the hidden objects game
*/
class rulesHiddenObjects extends Phaser.Scene {

     /* construct with a name to call this scene after*/
    constructor () {
        super('rulesHiddenObjects');
    }

     /*
    This fuction loads the background image
    */
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
        startRect.setName("startRect");
        var startRectStyle = this.add.rectangle(0,0,200,50);
        startRectStyle.setStrokeStyle(2,0x000000);
        
        var startContainer = this.add.container(400,450,[startRect ,startText,startRectStyle]);
        startContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);
        startContainer.setName("startContainer");   
        
        //adding the rules in the rules screen

        var rulesText = this.add.text(-200,-90, "In this game you have to find all \nthe proofs (objects) that will be \ndisplayed in the manuscript on your left\nAfter you found all the proofs, you will\nbe able to play the next game !\n\nGood luck !",{ fontSize : 20 ,fontFamily: 'Georgia, Times, serif'});
        rulesText.setTint(0xc2baac);
        var rulesRect = this.add.rectangle(0,0,420,200,0x7b6c4f, 0.8);
        rulesRect.setName("rulesRect");
        var rulesRectStyle = this.add.rectangle(0,0,420,200);
        rulesRectStyle.setStrokeStyle(2,0x000000);
        
        var rulesContainer = this.add.container(400,200,[rulesRect ,rulesText,rulesRectStyle]);
        rulesContainer.setInteractive(new Phaser.Geom.Rectangle(-210,-100,420,200), Phaser.Geom.Rectangle.Contains);
        rulesContainer.setName("rulesContainer");
        
        startContainer.on("pointerdown", function(){
            this.scene.scene.start('hiddenObjects');
        });
        
        startContainer.on('pointerover', function() {
            startRect.setFillStyle(0xa88c6c,0.8)
        });
        
        startContainer.on('pointerout', function() {
            startRect.setFillStyle(0x7b6c4f,0.8)
        });
    }

     /* 
    Used to update your game. This function runs constantly
    */
    update() {
        
    }
}


class hiddenObjects extends Phaser.Scene {
    
    constructor () {
        super('hiddenObjects');   /* construct with a name to call this scene after*/
    }
    
    preload(){
        this.load.image("backgroundHidenObjects","../images/game/background/scene+.jpg") //scene
        this.load.image("wine", "../images/game/items/wine_2.png") //wine
        this.load.image("gloves", "../images/game/items/gloves3.png") //gloves
        this.load.image("necklace", "../images/game/items/necklacee.png") //necklace
        this.load.image("cuestick", "../images/game/items/cuestick2bg.png") //cuestick
        this.load.image("sunglasses", "../images/game/items/sunglasses2.png") //sunglasses
        this.load.image("gun", "../images/game/items/gun2.png") //gun
        this.load.image("parchemin", "../images/game/items/parchemin2.png") //parchemin
        this.load.image("rope", "../images/game/items/rope2.png") //rope
        this.load.image("violon", "../images/game/items/violon2.png") //newspaper
        this.load.image("blanket", "../images/game/items/blanket.png") //blanket
        this.load.image("drink", "../images/game/items/drink.png") //drink
        this.load.image("hat", "../images/game/items/hat.png") //hat
        this.load.image("briefcase", "../images/game/items/bri4.png") //briefcase
        this.load.image("cat", "../images/game/items/cat2.png") //cat
        this.load.image("books", "../images/game/items/books.png") //books
        this.load.image("doll", "../images/game/items/doll3.png") //dolls
        this.load.image("painting", "../images/game/items/painting.png") //painting
        this.load.image("blood", "../images/game/items/sang.png") //blood
        this.load.image("flowers", "../images/game/items/flowers2.png") //flowers
        this.load.audio("theme", 
                        ["../audio/hidden_objects.ogg",
                         "../audio/hidden_objects.mp3"]);//theme song

    }
    
    /*
    This function adds the, previously loaded, images and sets their position on the scene
    */
    create(){
        //ajout de scène et images 
        this.add.image(400, 300, 'backgroundHidenObjects'); //scene
        /*The "setInteractives" variables will diseappar once clicked on*/
        var wine = this.add.image(400, 300, 'wine').setInteractive();//wine
        var gloves = this.add.image(700, 550, 'gloves').setInteractive(); //gloves
        var necklace = this.add.image(100, 550, 'necklace').setInteractive(); //necklace
        var cuestick = this.add.image(150, 40, 'cuestick').setInteractive(); //cuestick
        var sunglasses = this.add.image(250, 380, 'sunglasses').setInteractive(); //sunglasses
        var rope = this.add.image(570, 370, 'rope').setInteractive(); //rope
        var drink = this.add.image(340, 400, 'drink').setInteractive(); //drink
        var gun = this.add.image(690, 390, 'gun').setInteractive(); //gun
        this.add.image(85, 270, 'parchemin'); //parchemin
        this.add.image(590, 490, 'violon'); //violon
        this.add.image(655, 400, 'painting'); //painting
        this.add.image(570, 390, 'blanket'); //blanket 
        this.add.image(270, 230, 'hat'); //hat
        this.add.image(470, 450, 'briefcase'); //briefcase
        this.add.image(480, 480, 'cat'); //cat
        this.add.image(550, 550, 'books'); //books
        this.add.image(90, 520, 'doll'); //dolls
        this.add.image(300, 120, 'blood'); //blood
        this.add.image(430, 550, 'flowers'); //flowers
        /*var music = this.sound.add('theme'); //musique
        music.setVolume(0.5);
        music.play
        ({
            loop: true
        });*/
    
       
       /*
       The texts are associated with the variables of the same name and will form a list 
       */         
        //liste d'objets à trouver
        var textw = this.add.text(60, 140, 'wine').setInteractive(); //liste_wine
        var textg = this.add.text(50, 160, 'gloves').setInteractive(); //liste_gloves
        var textn = this.add.text(40, 180, 'necklace').setInteractive(); //liste_necklace
        var textc = this.add.text(30, 200, 'cue stick').setInteractive(); //liste_cue_stick
        var texts = this.add.text(30, 220, 'sunglasses').setInteractive(); //liste_sunglasses
        var textgu = this.add.text(60, 240, 'gun').setInteractive(); //liste_gun
        var textsc = this.add.text(30, 260, 'spilled cup').setInteractive(); //liste_knife
        var textr = this.add.text(55, 280, 'rope').setInteractive(); //liste_rope
        
        
        /* 
          The following "var.on" functions makes the objects, and the text associated to them, diseappar once clicked on
        */
        //  quand on clique dessus, l'objet(image et texte) disparait 
        wine.on('pointerdown', function (pointer) { 

        this.setVisible(false);
        textw.setVisible(false);
        /* add 1 to "count" when the object is found*/
        count += 1;
    });
        
         gloves.on('pointerdown', function (pointer) { 

         this.setVisible(false);
         textg.setVisible(false);
         count += 1;
    });
        
        
         necklace.on('pointerdown', function (pointer) { 

         this.setVisible(false);
         textn.setVisible(false);
         count += 1;

    });
        
            cuestick.on('pointerdown', function (pointer) { 

            this.setVisible(false);
            textc.setVisible(false);
            count += 1;
    });
        
            sunglasses.on('pointerdown', function (pointer) { 

            this.setVisible(false);
            texts.setVisible(false);
            count += 1;
    });
        
            gun.on('pointerdown', function (pointer) { 

            this.setVisible(false);
            textgu.setVisible(false);
            count += 1;
    });
        

            drink.on('pointerdown', function (pointer) { 

            this.setVisible(false);
            textsc.setVisible(false);
            count += 1;
    });
        
            rope.on('pointerdown', function (pointer) { 

            this.setVisible(false);
            textr.setVisible(false);
            count += 1;
    });    
        
                
        
    }
    /*
     This function switches scene when all the objects are found (count == 8)
    */
    update() {
        if(count == 8){  
            this.scene.start('victoryScreenHiddenObjects');
        }
    }
    
}

/*
 This class creates a scene that displays when the player wins the game 
*/
//Victory Screen Scene 
class victoryScreenHiddenObjects extends Phaser.Scene {

    constructor () {
        super('victoryScreenHiddenObjects');     
    }

    preload() {
        this.load.image("victoryScreenHiddenObject","../images/game/background/victoryScreenHiddenObjects.jpg");
    }

    create() {
    
        /*Adds the background*/
        //adding the background
        var victoryScreen = this.add.image(400,300, 'victoryScreenHiddenObject');
        
        /*Adds a rectangle containing the victory text*/
        //adding the victory container
        var victoryText = this.add.text(-245,-60, "Incredible ! You found 8 clues, with them the \ninvestigation will be able to move forward !\nBut durring this time, the inspector Marcel \nRoquette found a mistery book, but this book \nis in English and he is not able to translate it,\nhelp him!",{ fontSize : 20 , fontFamily: 'Georgia, Times, serif'});
        var victoryRect = this.add.rectangle(0,15,520,180,0x273d34, 0.85);
        /*Sets the text color to beige*/
        victoryText.setTint(0xc2baac);
        
        /*Adding an outline to the rectangle*/
        var victoryRectStyle = this.add.rectangle(0,15,520,180);

        /*Sets the victory rectangle outline's colour and style*/
        victoryRectStyle.setStrokeStyle(2,0x000000);

        /*Assemble the victory variables into a container*/
        var victoryContainer = this.add.container(400,100,[victoryRect ,victoryText,victoryRectStyle]);
        
        /*Adds a rectangle containing the text - transition to the next game*/
        //adding the enter container 
        var enterText = this.add.text(-120,-17, "Interpret this book",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});
        var enterRect = this.add.rectangle(0,0,270,50,0x273d34, 0.85);
         /*Sets the text color to beige*/
        enterText.setTint(0xc2baac);

        /*Adding an outline to the enter rectangle*/
        var enterRectStyle = this.add.rectangle(0,0,270,50);

        /*Sets the enter rectangle outline's colour and style*/
        enterRectStyle.setStrokeStyle(2,0x000000);
        
         /*Assemble the enter variables into a container*/
        var enterContainer = this.add.container(400,500,[enterRect ,enterText,enterRectStyle]);

        /*Transform the enter rectangle into an interactive button*/
        enterContainer.setInteractive(new Phaser.Geom.Rectangle(-135,-25,270,50), Phaser.Geom.Rectangle.Contains);

        /*This function makes the button switch into the next game once clicked on*/
        enterContainer.on("pointerdown", function(){
            this.scene.scene.start('translateGameRules');  
        });
        
        enterContainer.on('pointerover', function() {
            enterRect.setFillStyle(0xbead5f,0.85)
        });
        
        enterContainer.on('pointerout', function() {
            enterRect.setFillStyle(0x273d34,0.85)
        });
        
    }

    update() {
        // Used to update your game. This function runs constantly
    }
    
}

       
