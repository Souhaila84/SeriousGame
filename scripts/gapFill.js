export {rulesGapFill,gapFill};

var score = 0;

class rulesGapFill extends Phaser.Scene {

    constructor () {
        super('rulesGapFill');
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
        startRect.setName("startRect");
        var startRectStyle = this.add.rectangle(0,0,200,50);
        startRectStyle.setStrokeStyle(2,0x000000);
        
        var startContainer = this.add.container(400,450,[startRect ,startText,startRectStyle]);
        startContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);
        startContainer.setName("startContainer");   
        
        //adding the rules in the rules screen
        var rulesText = this.add.text(-190,-90, "In this game you have to fill the gaps \nin the discussion that Mr.Roquette heard. \nWhen all the gaps will be filled with \nthe correct answers, you'll be able to \nplay the next game !\n\nGood luck !",{ fontSize : 16 });
        rulesText.setTint(0xc2baac);
        var rulesRect = this.add.rectangle(0,0,400,200,0x7b6c4f, 0.8);
        rulesRect.setName("rulesRect");
        var rulesRectStyle = this.add.rectangle(0,0,400,200);
        rulesRectStyle.setStrokeStyle(2,0x000000);
        
        var rulesContainer = this.add.container(400,200,[rulesRect ,rulesText,rulesRectStyle]);
        rulesContainer.setInteractive(new Phaser.Geom.Rectangle(-200,-100,400,200), Phaser.Geom.Rectangle.Contains);
        rulesContainer.setName("rulesContainer");
        
        startContainer.on("pointerup", function(){
            this.scene.scene.start('gapFill');
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



class gapFill extends Phaser.Scene {
    
    constructor () 
    
    {
        super('gapFill');  // construct with a name to call this scene after
    }
    
    preload(){
        this.load.image('living', '../images/game/background/gapFillBackground.jpg');
        this.load.image('detec', '../images/game/detective1.png');
        this.load.image('sprite', '../images/game/_.png');
    }

    create()
    {
        this.add.image(400, 300, 'living')
        this.add.image(300,420, 'detec')

        
        var text1 = this.add.text(230,25, "Find out what the inspector heard ",{
            color: "white",
            fontStyle: "bold",
            
        });
        text1.setName("text1");

        var text2 = this.add.text(325,60, "List of Words ",{
            color: "white",  
        });

        var text3 = this.add.text(200,90, "-ruckus -known -bullet -decided -eyes -flat \n         -safety -dead -mess",{
            color: "white",   
        });

        var text4 = this.add.text(200,175, "Edward O'Neill was found      on March 2 1884 at 10pm.\nA neighbour heard a       and found Edward O'Neill \nwith a       between his      and immediately notified \nthe police. \nOnce the police arrived in the      ,they found a     .",{
            color: "white",
            lineSpacing: '10',
        });
        var text5 = this.add.text(200,330, "In those time of lack of        in the town of London.\nThe police         to call a well      french inspector,\n Marcel Roquette.",{
            color: "white",
            lineSpacing: '10',
        });
            
        var sprite = this.add.sprite(460, 190, 'sprite').setInteractive()
        var textSprite12
        var isFalse = false
        
        sprite.on('pointerdown', function(pointer){
            console.log(this);
            let person = prompt("entre le mot", "");
            
            if (person == "dead") {
                var textSprite1 = this.scene.add.text(440,175,person,{
                    color: "white",
                    fontStyle: "bold",
                });
                score +=1;
                this.setVisible(false);
                if (isFalse)
                    textSprite12.setVisible(false);
            }
            else {
                if (isFalse){
                    this.scene.children.getByName("textSprite12").destroy();
                }
                else{
                    isFalse = true;
                }
                textSprite12 = this.scene.add.text(440,175,person,{
                color: "red",
                fontStyle: "bold",
                });
                textSprite12.setName("textSprite12");
            }
            
            
        });
        sprite.on('pointerout', function (pointer) {
            this.clearTint();
        });
        sprite.on('pointerup', function (pointer) {
            this.clearTint();

        });


        var sprite2 = this.add.sprite(420, 220, 'sprite').setInteractive()
        var textSprite22
        var isFalse2 = false    

        sprite2.on('pointerdown', function(pointer){
            console.log(this);
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
        sprite2.on('pointerup', function (pointer) {
            this.clearTint();
        });

        var sprite3 = this.add.sprite(295, 245, 'sprite').setInteractive()
        var textSprite32
        var isFalse3 = false

        sprite3.on('pointerdown', function(pointer){
            console.log(this);
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
        sprite3.on('pointerup', function (pointer) {
            this.clearTint();
        });

        var sprite4 = this.add.sprite(460, 245, 'sprite').setInteractive()
        var textSprite42
        var isFalse4 = false

        sprite4.on('pointerdown', function(pointer){
            console.log(this);
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
        sprite4.on('pointerup', function (pointer) {
            this.clearTint();
        });

        var sprite5 = this.add.sprite(520, 300, 'sprite').setInteractive()
        var textSprite52
        var isFalse5 = false 

        sprite5.on('pointerdown', function(pointer){
            console.log(this);
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
        sprite5.on('pointerup', function (pointer) {
            this.clearTint();
        });

        var sprite6 = this.add.sprite(700, 300, 'sprite').setInteractive()
        var textSprite62
        var isFalse6 = false

        sprite6.on('pointerdown', function(pointer){
            console.log(this);
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
        sprite6.on('pointerup', function (pointer) {
            this.clearTint();
        });

        var sprite7 = this.add.sprite(470, 345, 'sprite').setInteractive()
        var textSprite72
        var isFalse7 = false

        sprite7.on('pointerdown', function(pointer){
            console.log(this);
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
        sprite7.on('pointerup', function (pointer) {
            this.clearTint();
        });

        var sprite8 = this.add.sprite(340, 375, 'sprite').setInteractive()
        var textSprite82 
        var isFalse8 = false;

        sprite8.on('pointerdown', function(pointer){
            console.log(this);
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
        sprite8.on('pointerup', function (pointer) {
            this.clearTint();
        });

        
        var sprite9 = this.add.sprite(550, 375, 'sprite').setInteractive()
        var textSprite92
        var isFalse9 = false

        sprite9.on('pointerdown', function(pointer){
            console.log(this);
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
        sprite9.on('pointerup', function (pointer) {
            this.clearTint();
        });
    }
    
    update(){
        if (score > 8) {
            var text = this.add.text(350,550, "Let's go to the crime scene !",{
                color: "white",
            });
            this.children.getByName("text1").setVisible(false);
            
            this.scene.start('rulesMap');
        } 
    }
}