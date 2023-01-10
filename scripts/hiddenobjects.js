/** 
 *  @fileOverview This file contains 3 classes rulesHiddenObjects, hiddenObjects, victoryScreenHiddenObjects. Theses 3 classes represent the hidden objects game.
 *
 *  @author Souhaila Moumane
*/

export {rulesHiddenObjects,hiddenObjects, victoryScreenHiddenObjects};

/** 
 * The count of objects found
 * @type {int}
 */
var count = 0;

/**
 * This class creates the "instructions" screen for the hidden objects game
 * @extends Phaser.Scene
*/
class rulesHiddenObjects extends Phaser.Scene {

     /* construct with a name to call this scene after*/
    constructor () {
        super('rulesHiddenObjects');
    }

     /*
    This fuction is overide from Phaser.Scene and now it loads the background image 
    */
    preload() {
        this.load.image("Rulesbackground","../images/game/background/rulesBackground.jpg");
    }
    /*
    This fuction is overide from Phaser.Scene and now it create all the scene
    */
    create() {
        
        //Rules Part 
        /**
         * This var contains the "rules" background that is added
         * @type {(Phaser.GameObjects.image)}
         *  @author Souhaila Moumane
        */
        var rulesBackground = this.add.image(400,300, 'Rulesbackground');
        
        //adding start container to the rules screen
        /**
         * This var contains the "Start" text
         * @type {(Phaser.GameObjects.Text)}
         *  @author Souhaila Moumane
         */
        var startText = this.add.text(-38,-18, "Start !",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});

         /**
         * This var contains the rectangle that contains the "start" text
         * @type {(Phaser.GameObjects.Rectangle)}
         *  @author Souhaila Moumane
         */
        var startRect = this.add.rectangle(0,0,200,50,0x7b6c4f, 0.8);
        startText.setTint(0xc2baac);
        startRect.setName("startRect");

        /**
         * Adding an outline to the rectangle
         * @type {(Phaser.GameObjects.Rectangle)}
         *  @author Souhaila Moumane
        */
        var startRectStyle = this.add.rectangle(0,0,200,50);
        startRectStyle.setStrokeStyle(2,0x000000);
        
        /**
         * Assemble the "start" variables into a container
         * @type {(Phaser.GameObjects.container)}
         *  @author Souhaila Moumane
         */
        var startContainer = this.add.container(400,450,[startRect ,startText,startRectStyle]);
        startContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);
        startContainer.setName("startContainer");   
        
        //adding the rules in the rules screen

         /**
         * This var contains the "rules" text 
         * @type {(Phaser.GameObjects.text)}
         *  @author Souhaila Moumane
         */
        var rulesText = this.add.text(-200,-90, "In this game you have to find all \nthe proofs (objects) that will be \ndisplayed in the manuscript on your left\nAfter you found all the proofs, you will\nbe able to play the next game !\n\nGood luck !",{ fontSize : 20 ,fontFamily: 'Georgia, Times, serif'});
        rulesText.setTint(0xc2baac);

         /**
         * This var contains a rectangle where the "rules" will be placed on
         * @type {(Phaser.GameObjects.Rectangle)}
         *  @author Souhaila Moumane
         */
        var rulesRect = this.add.rectangle(0,0,420,200,0x7b6c4f, 0.8);
        rulesRect.setName("rulesRect");

        /**
         * Adding an outline to the "rules" rectangle
         * @type {(Phaser.GameObjects.Rectangle)}
         *  @author Souhaila Moumane
        */
        var rulesRectStyle = this.add.rectangle(0,0,420,200);
        rulesRectStyle.setStrokeStyle(2,0x000000);
        
        /**
         * This var assemble the "rules" variables into a container
         * @type {(Phaser.GameObjects.container)}
         *  @author Souhaila Moumane
         */
        var rulesContainer = this.add.container(400,200,[rulesRect ,rulesText,rulesRectStyle]);
        rulesContainer.setInteractive(new Phaser.Geom.Rectangle(-210,-100,420,200), Phaser.Geom.Rectangle.Contains);
        rulesContainer.setName("rulesContainer");
        
        /*
        * This function starts the "hidden objects" game once clicked on the "start" button
        * @function startContainerPointerDown
        *  @author Souhaila Moumane
        */
        startContainer.on("pointerdown", function(){
            this.scene.scene.start('hiddenObjects');
        });
        
         /*
         * This function makes the button change color when the mouse is pointed over
         * @function startContainerPointerOver
         *  @author Souhaila Moumane
         */
        startContainer.on('pointerover', function() {
            startRect.setFillStyle(0xa88c6c,0.8)
        });
        
         /*
         * This function makes the button switch back to his original color when the mouse is pointed away from the button
         * @function startContainerPointerOut
         *  @author Souhaila Moumane
         */
        startContainer.on('pointerout', function() {
            startRect.setFillStyle(0x7b6c4f,0.8)
        });
    }

    update() {      
    }
}

/**
 * This class is the main scene for the hidden objects game
 * @extends Phaser.Scene
 *  @author Souhaila Moumane
 */
class hiddenObjects extends Phaser.Scene {
    
    /* construct with a name to call this scene after*/
    constructor () {
        super('hiddenObjects'); 
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
        this.load.image("timer", "../images/game/items/clock.png")//timer

    }

    
    /*
    This function adds the, previously loaded, images and sets their position on the scene
    */
    create(){
        //adding images
        this.add.image(400, 300, 'backgroundHidenObjects'); //scene
        /**
         * The following variables contains the images that need to be found
         * @type {(Phaser.GameObjects.image)}
         * @author Souhaila Moumane
         * @name itemsGameObjectsImages
        */
        var wine = this.add.image(400, 300, 'wine').setInteractive();//wine
        var gloves = this.add.image(700, 550, 'gloves').setInteractive(); //gloves
        var necklace = this.add.image(100, 550, 'necklace').setInteractive(); //necklace
        var cuestick = this.add.image(150, 40, 'cuestick').setInteractive(); //cuestick
        var sunglasses = this.add.image(250, 380, 'sunglasses').setInteractive(); //sunglasses
        this.add.image(570, 390, 'blanket'); //blanket 
        var rope = this.add.image(570, 370, 'rope').setInteractive(); //rope
        var drink = this.add.image(340, 400, 'drink').setInteractive(); //drink
        this.add.image(655, 400, 'painting'); //painting
        var gun = this.add.image(690, 390, 'gun').setInteractive(); //gun
        this.add.image(85, 270, 'parchemin'); //parchemin
        this.add.image(590, 490, 'violon'); //violon
        this.add.image(270, 230, 'hat'); //hat
        this.add.image(470, 450, 'briefcase'); //briefcase
        this.add.image(480, 480, 'cat'); //cat
        this.add.image(550, 550, 'books'); //books
        this.add.image(90, 520, 'doll'); //dolls
        this.add.image(300, 120, 'blood'); //blood
        this.add.image(430, 550, 'flowers'); //flowers
        this.add.image(85, 360, 'timer'); //time
        this.chrono = 300;
        this.textchrono = this.add.text(65, 370, formatTime(this.chrono));
        var timedEvent = this.time.addEvent({
            delay: 1000,
            callback: onEvent,
            callbackScope: this,
            loop: true,
          });
          function formatTime(seconds){
            // Minutes
            var minutes = Math.floor(seconds/60);
            // Seconds
            var partInSeconds = seconds%60;
            // Adds left zeros to seconds
            partInSeconds = partInSeconds.toString().padStart(2,'0');
            // Returns formated time
            return `${minutes}:${partInSeconds}`;
        }
        
        
        function onEvent ()
        {
            this.chrono -= 1; // One second
            this.textchrono.setText(formatTime(this.chrono));
        }
       
       /** 
        * The texts are associated with the variables of the same name and are placed in order to form a list 
        * @type {(Phaser.GameObjects.text)}
        * @author Souhaila Moumane
        * @name itemsGameObjectsTexts
       */         
        //objects list to find 
        var textw = this.add.text(60, 140, 'wine').setInteractive(); //liste_wine
        var textg = this.add.text(50, 160, 'gloves').setInteractive(); //liste_gloves
        var textn = this.add.text(40, 180, 'necklace').setInteractive(); //liste_necklace
        var textc = this.add.text(30, 200, 'cue stick').setInteractive(); //liste_cue_stick
        var texts = this.add.text(30, 220, 'sunglasses').setInteractive(); //liste_sunglasses
        var textgu = this.add.text(60, 240, 'gun').setInteractive(); //liste_gun
        var textsc = this.add.text(30, 260, 'spilled cup').setInteractive(); //liste_knife
        var textr = this.add.text(55, 280, 'rope').setInteractive(); //liste_rope
        
        
        /* 
        * The following "var.on" functions makes the objects, and the text associated to them, diseappar once clicked on
        * @name itemsClickHandlers
        * @author Souhaila Moumane
        */
        wine.on('pointerdown', function (pointer) { 

        this.setVisible(false);
        textw.setVisible(false);
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
     This function is overide from Phaser.Scene and now it makes the "victory screen" scene appear when all the objects are found (count == 8)
    */
    update() {
        if(count == 8){  
            this.scene.start('victoryScreenHiddenObjects');
        }
    }

    
}

/** 
 * This class creates a scene that displays when the player wins the game 
 * @extends Phaser.Scene
 * @author Souhaila Moumane
 * @author Alexis Mariotti
*/
//Victory Screen Scene 
class victoryScreenHiddenObjects extends Phaser.Scene {

    /**
    * Construct a new scene with 'victoryScreenHiddenObjects' name to call this scene after
    */
    constructor () {
        super('victoryScreenHiddenObjects');     
    }

     /*
    This fuction loads the background image of the victory screen
    */
    preload() {
        this.load.image("victoryScreenHiddenObject","../images/game/background/victoryScreenHiddenObjects.jpg");
    }

    create() {
    
        /**
         *  This var contains the "victory" background that is added
         * @type {(Phaser.GameObjects.image)}
         * @author Souhaila Moumane
         * @author Alexis Mariotti
        */
        var victoryScreen = this.add.image(400,300, 'victoryScreenHiddenObject');
        
        /**
         * This var contains the victory text
         * @type {(Phaser.GameObjects.text)}
         * @author Souhaila Moumane
         * @author Alexis Mariotti
         */
        var victoryText = this.add.text(-245,-60, "Incredible ! You found 8 clues, with them the \ninvestigation will be able to move forward !\nBut durring this time, the inspector Marcel \nRoquette found a mistery book, but this book \nis in English and he is not able to translate it,\nhelp him!",{ fontSize : 20 , fontFamily: 'Georgia, Times, serif'});
       
        /**
         * This var contains a rectangle where the victory text will be placed on
         * @type {(Phaser.GameObjects.rectangle)}
         * @author Souhaila Moumane
         * @author Alexis Mariotti
         */
        var victoryRect = this.add.rectangle(0,15,520,180,0x273d34, 0.85);
        victoryText.setTint(0xc2baac);
        
        /**
         * This var contains the outline of the rectangle
         * @type {(Phaser.GameObjects.rectangle)}
         * @author Souhaila Moumane
         * @author Alexis Mariotti
         */
        var victoryRectStyle = this.add.rectangle(0,15,520,180);

        //Sets the victory rectangle outline's colour and style
        victoryRectStyle.setStrokeStyle(2,0x000000);
        
        /**
         * This var assemble the variables into a container
         * @type {(Phaser.GameObjects.container)}
         * @author Souhaila Moumane
         */
        var victoryContainer = this.add.container(400,100,[victoryRect ,victoryText,victoryRectStyle]);
        
        /**
         * This var contains the 'transition to the next game' text
         * @type {(Phaser.GameObjects.text)}
         * @author Souhaila Moumane
         * @author Alexis Mariotti
         */
        var enterText = this.add.text(-120,-17, "Interpret this book",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});

        /**
         * This var contains a rectangle where the 'transition to the next game' text will be placed on
         * @type {(Phaser.GameObjects.rectangle)}
         * @author Souhaila Moumane
         * @author Alexis Mariotti
         */
        var enterRect = this.add.rectangle(0,0,270,50,0x273d34, 0.85);
        enterText.setTint(0xc2baac);

         /**
         * This var contains the outline of the rectangle
         * @type {(Phaser.GameObjects.rectangle)}
         * @author Souhaila Moumane
         * @author Alexis Mariotti
         */
        var enterRectStyle = this.add.rectangle(0,0,270,50);


        enterRectStyle.setStrokeStyle(2,0x000000);
        
        /**
         * This var assemble the variables into a container
         * @type {(Phaser.GameObjects.container)}
         * @author Souhaila Moumane
         * @author Alexis Mariotti
         */
        var enterContainer = this.add.container(400,500,[enterRect ,enterText,enterRectStyle]);

        
        enterContainer.setInteractive(new Phaser.Geom.Rectangle(-135,-25,270,50), Phaser.Geom.Rectangle.Contains);

        /*
        * This function makes the button switch into the next game once clicked on
        * @function enterContainerPointerDown
        * @author Souhaila Moumane
        * @author Alexis Mariotti
        */
        enterContainer.on("pointerdown", function(){
            this.scene.scene.start('translateGameRules');  
        });
        /*
        * This function makes the button change color when the mouse is pointed over
        * @function enterContainerPointerOver
        * @author Souhaila Moumane
        * @author Alexis Mariotti
        */
        enterContainer.on('pointerover', function() {
            enterRect.setFillStyle(0xbead5f,0.85)
        });
        /*
        * This function makes the button switch back to his original color when the mouse is pointed away from the button
        * @function enterContainerPointerOut
        * @author Souhaila Moumane
        * @author Alexis Mariotti
        */
        enterContainer.on('pointerout', function() {
            enterRect.setFillStyle(0x273d34,0.85)
        });
        
    }

    update() {
    }
    
}

       
