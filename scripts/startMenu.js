export {startMenu};



class startMenu extends Phaser.Scene {

    constructor () {
        super('startMenu');
    }

    preload() {
        this.load.image("startMenuBackground","../images/game/background/startMenuBackground.jpg");
        this.load.image("startMenuTitle","../images/game/startMenuTitle.png");
        this.load.image("startMenuStartButton","../images/game/startMenuStartButton.png");
    }
rules
    create() {
        
        //Rules Part 
        //adding the start background
        var startBackground = this.add.image(400,300, 'startMenuBackground');
        
        //adding start title
        var startTitle = this.add.image(550,150,'startMenuTitle');
        
        //adding start button
        var startButton = this.add.image(400,500,'startMenuStartButton');
        startButton.setInteractive();
        startButton.on('pointerover', function() {
            startButton.setTint(0xafbdac);
        });
        
        startButton.on('pointerout', function() {
            startButton.clearTint();
        });
        startButton.on('pointerdown', function() {
            var allScenes = ['rulesGapFill','rulesMap','rulesHiddenObjects','translateGameRules','rulesFindTheMurderer']; // all progression lvl strating scene
            var nextSceneIndex;
            
            // get the progression lvl from data base
            $.ajax({
                url: '../php/progressLevel.php',
                type : "POST",
                async: false,
                data: {'fuction': "readLevel"},
                success: function(data){
                    nextSceneIndex = parseInt(data);
                }
            });
            
            // prevent errors
            if (nextSceneIndex > 4){
                nextSceneIndex = 0;
            }
            this.scene.scene.start(allScenes[nextSceneIndex]); //change scene whit progression or not
            this.scene.scene.start(allScenes[0]);
        });
       
    }

    update() {
        // Used to update your game. This function runs constantly
    }
    
}