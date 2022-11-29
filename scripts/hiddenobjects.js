
class translateGame extends Phaser.Scene {
    //ussing super constructor
    
    preload(){
        this.load.image("bg","../images/game/background/scene+.jpg") //scene
        this.load.image("wine", "../images/game/objets/wine_2.png") //wine
        this.load.image("gloves", "../images/game/objets/gloves3.png") //gloves
        this.load.image("necklace", "../images/game/objets/necklacee.png") //necklace
        this.load.image("cuestick", "../images/game/objets/cuestick2bg.png") //cuestick
        this.load.image("sunglasses", "../images/game/objets/sunglasses2.png") //sunglasses
        this.load.image("gun", "../images/game/objets/gun2.png") //gun
        this.load.image("parchemin", "../images/game/objets/parchemin2.png") //parchemin
        this.load.image("rope", "../images/game/objets/rope2.png") //rope
        this.load.image("violon", "../images/game/objets/violon2.png") //newspaper
        this.load.image("blanket", "../images/game/objets/blanket.png") //blanket
        this.load.image("drink", "../images/game/objets/drink.png") //drink
        this.load.image("hat", "../images/game/objets/hat.png") //hat
        this.load.image("briefcase", "../images/game/objets/bri4.png") //briefcase
        this.load.image("cat", "../images/game/objets/cat2.png") //cat
        this.load.image("books", "../images/game/objets/books.png") //books
        this.load.image("doll", "../images/game/objets/doll3.png") //dolls
        this.load.image("painting", "../images/game/objets/painting.png") //painting
        this.load.image("blood", "../images/game/objets/sang.png") //blood
        this.load.image("flowers", "../images/game/objets/flowers2.png") //flowers
        this.load.audio("theme", 
                        ["../audio/hidden_objects.ogg",
                         "../audio/hidden_objects.mp3"]);//theme song

    }
    
    create(){
        //ajout de scène et images 
        this.add.image(400, 300, 'bg'); //scene
        var wine = this.add.image(400, 300, 'wine').setInteractive();//wine
        var gloves = this.add.image(700, 550, 'gloves').setInteractive(); //gloves
        var necklace = this.add.image(100, 550, 'necklace').setInteractive(); //necklace
        var cuestick = this.add.image(150, 40, 'cuestick').setInteractive(); //cuestick
        var sunglasses = this.add.image(250, 380, 'sunglasses').setInteractive(); //sunglasses
        this.add.image(85, 270, 'parchemin'); //parchemin
        this.add.image(590, 490, 'violon'); //violon
        this.add.image(655, 400, 'painting'); //painting
        this.add.image(570, 390, 'blanket'); //blanket
        var rope = this.add.image(570, 370, 'rope').setInteractive(); //rope
        var drink = this.add.image(340, 400, 'drink').setInteractive(); //drink
        this.add.image(270, 230, 'hat'); //hat
        this.add.image(470, 450, 'briefcase'); //briefcase
        this.add.image(480, 480, 'cat'); //cat
        this.add.image(550, 550, 'books'); //books
        this.add.image(90, 520, 'doll'); //dolls
        var gun = this.add.image(690, 390, 'gun').setInteractive(); //gun
        this.add.image(300, 120, 'blood'); //blood
        this.add.image(430, 550, 'flowers'); //flowers
        var music = this.sound.add('theme'); //musique
        music.play
        ({
            loop: true
        });
    
       
                
        //liste d'objets à trouver
        var textw = this.add.text(60, 140, 'wine', '#ffff00').setInteractive(); //liste_wine
        var textg = this.add.text(50, 160, 'gloves').setInteractive(); //liste_gloves
        var textn = this.add.text(40, 180, 'necklace').setInteractive(); //liste_necklace
        var textc = this.add.text(30, 200, 'cue stick').setInteractive(); //liste_cue_stick
        var texts = this.add.text(30, 220, 'sunglasses').setInteractive(); //liste_sunglasses
        var textgu = this.add.text(60, 240, 'gun').setInteractive(); //liste_gun
        var textsc = this.add.text(30, 260, 'spilled cup').setInteractive(); //liste_knife
        var textr = this.add.text(55, 280, 'rope').setInteractive(); //liste_rope
        
        //  quand on clique dessus, l'objet(image et texte) disparait 
        wine.on('pointerdown', function (pointer) { 

        this.setVisible(false);
        textw.setVisible(false);

    });
        
         gloves.on('pointerdown', function (pointer) { 

         this.setVisible(false);
         textg.setVisible(false);

    });
        
        
         necklace.on('pointerdown', function (pointer) { 

         this.setVisible(false);
         textn.setVisible(false);

    });
        
            cuestick.on('pointerdown', function (pointer) { 

            this.setVisible(false);
            textc.setVisible(false);

    });
        
            sunglasses.on('pointerdown', function (pointer) { 

            this.setVisible(false);
            texts.setVisible(false);

    });
        
            gun.on('pointerdown', function (pointer) { 

            this.setVisible(false);
            textgu.setVisible(false);

    });
        

            drink.on('pointerdown', function (pointer) { 

            this.setVisible(false);
            textsc.setVisible(false);

    });
        
            rope.on('pointerdown', function (pointer) { 

            this.setVisible(false);
            textr.setVisible(false);

    });    
        
   
    }
    
}

const config = {
    type: Phaser.AUTO,
    parent: 'jeu',
    width: 800,
    height: 600,
    scene: [ translateGame ]
};

const game = new Phaser.Game(config);