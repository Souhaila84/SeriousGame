/** 
 *  @fileOverview This file contains 2 classes rulesGapFill, gapFill. Theses 2 classes represent the gapFill game.
 *
 *  @author William Goujon
 */
var timer = new Date();
export default timer; // for the timer

export {rulesGapFill,gapFill};
/*
* initialise the variable score to count the good answer
* @type {int}
* @author William Goujon
*/
var score = 0;
/**
 * This class is the rules scene for the gapFill. It contains a text that explains the rules of this game
 * @extends Phaser.Scene
 * @author William Goujon
 * @author Victor Bouveret
 */
class rulesGapFill extends Phaser.Scene {
    
    constructor () {
        super('rulesGapFill');
    }

    /*This function loads the background image*/
    preload() {
        this.load.image("Rulesbackground","../images/game/background/rulesBackground.jpg");
    }
    /*This function create the functionality of the scene*/
    create() {
        
        // set the progression lvl from data base
        $.ajax({
            url: '../php/progressLevel.php',
            type : "POST",
            data: {'fuction': "increaseLevel", 'lvl' : 0},
        });
        
        //Rules Part 
        //adding the rules background
        var gapFillRulesBackground = this.add.image(400,300, 'Rulesbackground'); //Add the image 
        
        //adding start container to the rules screen
        /*
        *  text start for start button in gapFill start scene
        * @type {Phaser.GameObject.Text}
        * @author William Goujon
        */
        var gapFillStartText = this.add.text(-38,-18, "Start !",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif'});
        /*
        * background rectangle of start button in gapFill start scene
        * @type {Phaser.GameObject.Rectangle}
        * @author William Goujon
        */
        var gapFillStartRect = this.add.rectangle(0,0,200,50,0x7b6c4f, 0.8);
        gapFillStartText.setTint(0xc2baac);
        gapFillStartRect.setName("gapFillStartRect"); //set the name of the varialbe gapFillStartText
        
        /*
        * This rectangle is used for the outline of start button in gapFIll start scene
        * @type {Phaser.GameObject.Rectangle}
        * @author William Goujon
        * @author Victor Bouveret
        */
        var gapFillStartRectStyle = this.add.rectangle(0,0,200,50);
        gapFillStartRectStyle.setStrokeStyle(2,0x000000);
        
        var gapFillStartContainer = this.add.container(400,450,[gapFillStartRect ,gapFillStartText,gapFillStartRectStyle]);
        gapFillStartContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);
        gapFillStartContainer.setName("gapFillStartContainer");   
        
        //adding the rules in the rules screen
        /*
        * This variable contains a text which explain the rules of gapFill 
        * @type {Phaser.GameObject.Text}
        * @author William Goujon
        */
        var gapFillRulesText = this.add.text(-200,-90, "In this game you have to fill the gaps \nin the discussion that Mr.Roquette heard. \nWhen all the gaps will be filled with \nthe correct answers, you'll be able to \nplay the next game !\n\nGood luck !",{ fontSize : 20, fontFamily: 'Georgia, Times, serif'});
        gapFillRulesText.setTint(0xc2baac);
        /*
        * This variable contains a rectangle which is the background of rules text 
        * @type {Phaser.GameObject.Rectangle}
        * @author William Goujon
        */
        var gapFillRulesRect = this.add.rectangle(0,0,420,200,0x7b6c4f, 0.8);
        gapFillRulesRect.setName("gapFillRulesRect");
        /*
        * This variable contains a rectangle which is the outline of rules text
        * @type {Phaser.GameObject.Rectangle}
        * @author William Goujon
        */
        var gapFillRulesRectStyle = this.add.rectangle(0,0,420,200);
        gapFillRulesRectStyle.setStrokeStyle(2,0x000000);
        
        var gapFillRulesContainer = this.add.container(400,200,[gapFillRulesRect ,gapFillRulesText,gapFillRulesRectStyle]);
        gapFillRulesContainer.setInteractive(new Phaser.Geom.Rectangle(-210,-100,400,200), Phaser.Geom.Rectangle.Contains);
        gapFillRulesContainer.setName("gapFillRulesContainer");
        
        gapFillStartContainer.on("pointerdown", function(){
            this.scene.scene.start('gapFill');  
        });
        
        gapFillStartContainer.on('pointerover', function() {
            gapFillStartRect.setFillStyle(0xa88c6c,0.8)
        });
        
        gapFillStartContainer.on('pointerout', function() {
            gapFillStartRect.setFillStyle(0x7b6c4f,0.8)
        });
    }

    update() {
        // Used to update your game. This function runs constantly
    }
}


/**
 * This class is the main scene for the gapFill. It contains all the game.
 * @extends Phaser.Scene
 * @author William Goujon
 */
class gapFill extends Phaser.Scene {
    
    constructor () 
    
    {
        super('gapFill'); 
    }
    /*This function loads the image of the game*/
    preload(){
        this.load.image('living', '../images/game/background/gapFillBackground.jpg');/*Load background */
        this.load.image('detec', '../images/game/characters/detective1.png');/*Load the detective image */
        this.load.image('sprite', '../images/game/_.png');/*Load the sprite image */
        this.load.image('skipArrow', '../images/game/skipArrow.png');/*Load the skip image */
    }
    /*This function create the functionality of the scene*/
    create()
    {
        this.add.image(400, 300, 'living') //Add the image for the background
        this.add.image(300,420, 'detec') //Add the image of the detective

        /*
        * Add the text instruction of the game gapFill
        * @type {Phaser.GameObject.Text}
        * @author William Goujon
        */
        var text1 = this.add.text(230,25, "Find out what the inspector heard ",{
            color: "white",//set the text color in white 
            fontStyle: "bold",
            
        });
        text1.setName("text1"); //set a name of text1
        
        var text2 = this.add.text(325,60, "List of Words ",{
            color: "white",  
        });
        /* 
        * Add the text with the words list in gapFill game
        * @type {Phaser.GameObject.Text}
        * @author William Goujon
        */
        var text3 = this.add.text(200,90, "-ruckus -known -bullet -decided -eyes -flat \n         -safety -dead -mess",{
            color: "white",   
        });
        /* 
        * Add the text to make the text paragraph with color white in gapFill game
        * @type {Phaser.GameObject.Text}
        * @author William Goujon
        */
        var text4 = this.add.text(200,175, "Edward O'Neill was found      on March 2 1884 at 10pm.\nA neighbour heard a       and found Edward O'Neill \nwith a       between his      and immediately notified \nthe police. \nOnce the police arrived in the      ,they found a     .",{
            color: "white",
            lineSpacing: '10',
        });

        var text5 = this.add.text(200,330, "In those time of lack of        in the town of London.\nThe police         to call a well      french inspector,\n Marcel Roquette.",{
            color: "white",
            lineSpacing: '10',
        });
        /*
        * create and add a sprite which allows you to add the missing words in gapFill game
        * @type {Phaser.GameObject.Sprite}
        * @author William Goujon
        */
        var sprite = this.add.sprite(460, 190, 'sprite').setInteractive() //Add position and interactive image
        /*
        * create a text who display the wrongs words in gapFill game
        * @type {Phaser.GameObject.Text}
        * @author William Goujon
        */
        var textSprite12 
        var isFalse = false
        
        /*
        * event on input plugin for each touched Game object
        * @function gapFillSpritePointerdown
        * @author William Goujon
        */ 
        sprite.on('pointerdown', function(pointer){
            /*
            * create a prompt to create a text box in gapFill game
            * @type {String}
            * @author William Goujon
            */ 
            let person = prompt("entre le mot", ""); 
            
            if (person == "dead") {
                var textSprite1 = this.scene.add.text(440,175,person,{ 
                    color: "white", 
                    fontStyle: "bold",
                });
                score +=1; //Update the variable score when there is a good answer
                this.setVisible(false); //Hide the sprite
                if (isFalse)
                    textSprite12.setVisible(false);//Hide the textSprite
            }
            else {
                if (isFalse){
                    this.scene.children.getByName("textSprite12").destroy(); //Destroy the textsprite to replace the textsprite, if the variable isFalse = False
                }
                else{
                    isFalse = true;
                }
                textSprite12 = this.scene.add.text(440,175,person,{ //add a textsprite when the word is not dead
                color: "red", //color the text on red
                fontStyle: "bold",
                });
                textSprite12.setName("textSprite12");//set a name of the textsprite  
            }
            
            
        });
        /*
        * event on input plugin for each touched Game object
        * @function gapFillSpritePointerout
        * @author William Goujon
        */
        sprite.on('pointerout', function (pointer) { 
            this.clearTint();
        });
        /*
        * event on input plugin for each touched Game object
        * @function gapFillSpritePointerdownSecond
        * @author William Goujon
        */
        sprite.on('pointerdown', function (pointer) { 
            this.clearTint();

        });


        var sprite2 = this.add.sprite(420, 220, 'sprite').setInteractive()
        var textSprite22
        var isFalse2 = false    

        sprite2.on('pointerdown', function(pointer){
            let person = prompt("entre le mot", "");
            if (person == "ruckus") {
                var textSprite2 = this.scene.add.text(390,203,person,{
                    color: "white",
                    fontStyle: "bold", 
                });
                score +=1;
                this.setVisible(false);
                if (isFalse2)
                    textSprite22.setVisible(false);
            }
            else {
                if (isFalse2){
                    this.scene.children.getByName("textSprite22").destroy();
                }
                else{
                    isFalse2 = true;
                }
                textSprite22 = this.scene.add.text(390,203,person,{
                color: "red",
                fontStyle: "bold",
                });
                textSprite22.setName("textSprite22");
            }         
        });
        sprite2.on('pointerout', function (pointer) {
            this.clearTint();
        });
        sprite2.on('pointerdown', function (pointer) {
            this.clearTint();
        });

        var sprite3 = this.add.sprite(295, 245, 'sprite').setInteractive()
        var textSprite32
        var isFalse3 = false

        sprite3.on('pointerdown', function(pointer){
            let person = prompt("entre le mot", "");
            if (person == "bullet") {
                var textSprite3 = this.scene.add.text(263,228,person,{
                    color: "white",
                    fontStyle: "bold", 
                });
                score +=1;
                this.setVisible(false);
                if(isFalse3)
                    textSprite32.setVisible(false);
            }
            else {
                if (isFalse3){
                    this.scene.children.getByName("textSprite32").destroy();
                }
                else{
                    isFalse3 = true;
                }
                textSprite32 = this.scene.add.text(263,228,person,{
                color: "red",
                fontStyle: "bold",
                });
                textSprite32.setName("textSprite32");
            }           
        });
        sprite3.on('pointerout', function (pointer) {
            this.clearTint();
        });
        sprite3.on('pointerdown', function (pointer) {
            this.clearTint();
        });

        var sprite4 = this.add.sprite(460, 245, 'sprite').setInteractive()
        var textSprite42
        var isFalse4 = false

        sprite4.on('pointerdown', function(pointer){
            let person = prompt("entre le mot", "");
            if (person == "eyes") {
                var textSprite4 = this.scene.add.text(440,228,person,{
                    color: "white",
                    fontStyle: "bold",
                });
                score +=1;
                this.setVisible(false);
                if(isFalse4)
                    textSprite42.setVisible(false);
            }
            else {
                if (isFalse4){
                    this.scene.children.getByName("textSprite42").destroy();
                }
                else{
                    isFalse4 = true;
                }
                textSprite42 = this.scene.add.text(440,228,person,{
                color: "red",
                fontStyle: "bold",
                });
                textSprite42.setName("textSprite42");
            }           
        });
        sprite4.on('pointerout', function (pointer) {
            this.clearTint();
        });
        sprite4.on('pointerdown', function (pointer) {
            this.clearTint();
        });

        var sprite5 = this.add.sprite(520, 300, 'sprite').setInteractive()
        var textSprite52
        var isFalse5 = false 

        sprite5.on('pointerdown', function(pointer){
            let person = prompt("entre le mot", "");
            if (person == "flat") {
                var textSprite5 = this.scene.add.text(500,285,person,{
                    color: "white",
                    fontStyle: "bold",                    
                });
                score +=1;
                this.setVisible(false);
                if(isFalse5)
                    textSprite52.setVisible(false);
            }
            else {
                if (isFalse5){
                    this.scene.children.getByName("textSprite52").destroy();
                }
                else{
                    isFalse5 = true;
                }
                textSprite52 = this.scene.add.text(500,285,person,{
                color: "red",
                fontStyle: "bold",
                });
                textSprite52.setName("textSprite52");
            }           
        });
        sprite5.on('pointerout', function (pointer) {
            this.clearTint();
        });
        sprite5.on('pointerdown', function (pointer) {
            this.clearTint();
        });

        var sprite6 = this.add.sprite(700, 300, 'sprite').setInteractive()
        var textSprite62
        var isFalse6 = false

        sprite6.on('pointerdown', function(pointer){
            let person = prompt("entre le mot", "");
            if (person == "mess") {
                var textSprite6 = this.scene.add.text(680,285,person,{
                    color: "white",
                    fontStyle: "bold",  
                });
                score +=1;
                this.setVisible(false);
                if(isFalse6)
                    textSprite62.setVisible(false);
            }
            else {
                if (isFalse6){
                    this.scene.children.getByName("textSprite62").destroy();
                }
                else{
                    isFalse6 = true;
                }
                textSprite62 = this.scene.add.text(680,285,person,{
                color: "red",
                fontStyle: "bold",
                });
                textSprite62.setName("textSprite62");
            }          
        });
        sprite6.on('pointerout', function (pointer) {
            this.clearTint();
        });
        sprite6.on('pointerdown', function (pointer) {
            this.clearTint();
        });

        var sprite7 = this.add.sprite(470, 345, 'sprite').setInteractive()
        var textSprite72
        var isFalse7 = false

        sprite7.on('pointerdown', function(pointer){
            let person = prompt("entre le mot", "");
            if (person == "safety") {
                var textSprite7 = this.scene.add.text(440,330,person,{
                    color: "white",
                    fontStyle: "bold",
                });
                score +=1;
                this.setVisible(false);
                if(isFalse7)
                    textSprite72.setVisible(false);
            }
            else {
                if (isFalse7){
                    this.scene.children.getByName("textSprite72").destroy();
                }
                else{
                    isFalse7 = true;
                }
                textSprite72 = this.scene.add.text(440,330,person,{
                color: "red",
                fontStyle: "bold",
                });
                textSprite72.setName("textSprite72");
            }           
        });
        sprite7.on('pointerout', function (pointer) {
            this.clearTint();
        });
        sprite7.on('pointerdown', function (pointer) {
            this.clearTint();
        });

        var sprite8 = this.add.sprite(340, 375, 'sprite').setInteractive()
        var textSprite82 
        var isFalse8 = false;

        sprite8.on('pointerdown', function(pointer){
            let person = prompt("entre le mot", "");
            if (person == "decided") {
                var textSprite8 = this.scene.add.text(305,358,person,{
                    color: "white",
                    fontStyle: "bold",  
                });
                score +=1;
                this.setVisible(false);
                if(isFalse8)
                textSprite82.setVisible(false);
            }
            else {
                if (isFalse8){
                    this.scene.children.getByName("textSprite82").destroy();
                }
                else{
                    isFalse8 = true;
                }
                textSprite82 = this.scene.add.text(305,358,person,{
                color: "red",
                fontStyle: "bold",
                });
                textSprite82.setName("textSprite82");
            }           
        });
        sprite8.on('pointerout', function (pointer) {
            this.clearTint();
        });
        sprite8.on('pointerdown', function (pointer) {
            this.clearTint();
        });

        
        var sprite9 = this.add.sprite(550, 375, 'sprite').setInteractive()
        var textSprite92
        var isFalse9 = false

        sprite9.on('pointerdown', function(pointer){
            let person = prompt("entre le mot", "");
            if (person == "known") {
                var textSprite9 = this.scene.add.text(530,358,person,{
                    color: "white",
                    fontStyle: "bold",  
                });
                score +=1;
                this.setVisible(false);
                if(isFalse9)
                    textSprite92.destroy();
            }
            else {
                if (isFalse9){
                    this.scene.children.getByName("textSprite92").destroy();
                }
                else{
                    isFalse9 = true;
                }
                textSprite92 = this.scene.add.text(530,358,person,{
                color: "red",
                fontStyle: "bold",
                });
                textSprite92.setName("textSprite92");
            }           
        });
        sprite9.on('pointerout', function (pointer) {
            this.clearTint();
        });
        sprite9.on('pointerdown', function (pointer) {
            this.clearTint();
        });
        
        
        
    }
    /*This function update the scene*/ 
    update(){
        //if (score > 0) { //for skip
        if (score > 8) { 
            /*
            * Add text if all answer are correct in GapFill game
            * @type {Phaser.GameObject.text}
            * @author William Goujon
            */ 
            var text = this.add.text(350,550, "Let's go to the crime scene !",{
                color: "white",
            });
            this.children.getByName("text1").setVisible(false);//Hide the text instruction of the game 
            
            // skip the game
        
            var skipArrow = this.add.image(0,0,'skipArrow');//Add button when all answer are correct 
        
            var skipRect = this.add.rectangle(0,0,120,120,0x7b6c4f, 0.8);//Create variable skipRect
            skipRect.setName("skipRect");//set name of the variable
            var skipRectStyle = this.add.rectangle(0,0,120,120);
                skipRectStyle.setStrokeStyle(2,0x000000);

            var skipContainer = this.add.container(700,500,[skipRect, skipArrow ,skipRectStyle]);//create variable skipContainer which includes other variable 
            skipContainer.setInteractive(new Phaser.Geom.Rectangle(-60,-60,120,120), Phaser.Geom.Rectangle.Contains);
            skipContainer.setName("skipContainer");

            skipContainer.on("pointerdown", function(){
                this.scene.scene.start('rulesMap');//when the button is activate, change a scene
            }); 

            skipContainer.on('pointerover', function() {
                skipRect.setFillStyle(0xa88c6c,0.8)
            });

            skipContainer.on('pointerout', function() {
                skipRect.setFillStyle(0x7b6c4f,0.8)
            });
        } 
    }
}