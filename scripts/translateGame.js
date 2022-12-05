export {translateGame, translateGameRules, victoryScreentranslateGame};

/** 
* The count of successful translation
* @type {int} 
*/
var countOfVictory = 0;
/*
* Array of all string array of differents proposals and the sentence to translate wich is in position 0 in array
* @type {string[]|Array}
*/
var allProposals =[["There was a murder last night","Il y a eu un meurtre hier soir","Il y avais eu un meurtre hier soir","Il y a eu un menteur hier soir","il y a des meurtriers dans la nuit derniére"],
                   ["Bonjour, je cherche un homme de petite taille avec un sourire narquois et une calvitie avancée.","Hello, I am looking for a short and smirk man with a advanced baldness.","Hello, I am looking for a short and sly man with a advanced baldness.","Hello, I am looking for a short man with a sly and advanced bat.","Hello, I am looking for a tall man with a smirk."],
                   ["Monsieur Roquette est un enquêteur de renom en France","Mr. Roquette is a renowned investigator in France","Mr. Roquette is a popular investigator in France","Mr. Roquette is a celebrity in Yugoslavia","Mr. Roquette were a renowned alligator at France"]];
/*
* The string array of current proposal
* @type {string[]}
*/
var actualProposal = [];
/**
* This fuction call with await will sleep the program for a given time
* @param {int} ms - The time to sleep in ms
*/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * This class is the main scene for the translate game
 * @extends Phaser.Scene
 */
class translateGame extends Phaser.Scene {
    /**
    * Construct a new scene with 'translateGame' name to call this scene after
    */
    constructor () {
        super('translateGame');  // construct with a name to call this scene after
    }
    
    /**
    * This fuction create a buton for proposal
    * @param {number} x - The x value.
    * @param {number} y - The y value.
    * @param {string} font - The font that will be used.
    * @param {boolean} isRigth - True to generate the right proposal and false to generate a wrong proposal.
    */
    addTranslateProposal(x, y, text, font, isRigth){
        /** 
        * This var is the text to good format
        * @type {(string)} 
        */
        var justifyText = this.justify(text,17);
        
        /** 
        * This var containt the background rectangle of the proposal
        * @type {(Phaser.GameObjects.Rectangle)} 
        */
        var rect = this.add.rectangle(0,0,280,115,0xa38c6c,0.5);
        /** 
        * This var containt the text gameObject of the proposal
        * @type {(Phaser.GameObjects.Text)} 
        */
        var textGameObject = this.add.text(-130,-50, justifyText,{ fontSize : font , fontFamily: 'Georgia, Times, serif' });
        /** 
        * This var containt the outline rectangle of the proposal
        * @type {(Phaser.GameObjects.Rectangle)} 
        */
        var rectOutline = this.add.rectangle(0,0, 280, 115);
        rectOutline.setStrokeStyle(2, 0x0000,0.3);
        /** 
        * This var containt the container who contain all memembers of the proposal (rect, textGameObject, rectOutline)
        * @type {(Phaser.GameObjects.Container)} 
        */
        var cont = this.add.container(x, y,[rect,textGameObject,rectOutline]);
        cont.setInteractive(new Phaser.Geom.Rectangle(-140,-57,280,115), Phaser.Geom.Rectangle.Contains);
        
        /**
        * Fuction for event pointerover of this proposal, change color of rect
        */
        cont.on('pointerover', function() {
            rect.setFillStyle(0x28942a,0.5)
        });
        /**
        * Fuction for event pointerout of this proposal, re-establish color of rect
        */
        cont.on('pointerout', function() {
            rect.setFillStyle(0xa38c6c,0.5)
        });
        
        
        if (isRigth){
            cont.on('pointerdown',this.onRightProposalClick, this);    
        }
        else{
            cont.on('pointerdown',this.onFalseProposalClick, this);
        }
    }
    
    /*
    * This function create and add to scene 4 proposal in random order, the rigth proposal is the first given
    * @param {string[]} proposals - The text of proposals array to add on the scene and the first string is the sentence to translate.
    */
    addProposals(proposals){
        /** 
        * This var containt the texts proposals and an associated boolean representing whether the proposition is correct or not (there is only one true proposition among the 4). Ussing this structure because it's more efficient to associate bool with a proposal that do 2 method, for false or true proposals.
        * @type {String|boolean[]} 
        */
        var proposalsBool = [[proposals[1],true],[proposals[2],false],[proposals[3],false],[proposals[4],false]];

        //shuffling proposals
        for (let i = proposalsBool.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = proposalsBool[i];
                proposalsBool[i] = proposalsBool[j];
                proposalsBool[j] = temp;
        }
        this.addTranslateProposal(230,250,proposalsBool[0][0],25,proposalsBool[0][1]);
        this.addTranslateProposal(230,450,proposalsBool[1][0],25,proposalsBool[1][1]);
        this.addTranslateProposal(570,250,proposalsBool[2][0],25,proposalsBool[2][1]);
        this.addTranslateProposal(570,450,proposalsBool[3][0],25,proposalsBool[3][1]);
        /** 
        * The Text game object of the sentence to translate
        * @type {Phaser.GameObjects.Text} 
        */
        var title = this.add.text(50, 25, this.justify(proposals[0],45),{ fontSize : 30 , fontFamily: 'Times, Georgia, serif' });
        title.setTintFill(0xe5e8d9);
        title.setName("proposalTilte");
    }
    
    /*
    * This function return the given string but with '\n' between words and with n lines length
    * @param {string} text - The String to justify
    * @param {int} n - The line length for the justify text
    * @returns {String} The text but justified with the associate line length
    */
    justify(text,n){
        /** 
        * Create a new String for the return text
        * @type {String} 
        */
        var justifyText = new String();
        /** 
        * A array with all words of the String to justify
        * @type {String[]} 
        */
        var textArray = text.split(' ');
        /** 
        * Count the current lineLength 
        * @type {int} 
        */
        var lineLength = 0;
        
        for (let i =0; i < textArray.length; ++i){
            lineLength += textArray[i].length + 1;
            
            if (lineLength > n){
                textArray[i] = textArray[i] +'\n';
                lineLength = 0;
            }
            else{
                textArray[i] += ' ';
            }
        }
        
        textArray.forEach(element => justifyText += element);  
        
        return justifyText;
    }
    /*
    * This function is called by clicking on a right proposal
    */
    onRightProposalClick(){
        this.nextPlay();
    }
    
    /*
    * This function is called by clicking on a false proposal, it will display for 2 seconds the text "Mauvaise réponse" on the scene. It's an async function because it's call await for sleep.
    */
    async onFalseProposalClick(){
        this.clearScene();

        var textBA = this.add.text(50, 40, "Mauvaise réponse",{ fontSize : 40 , fontFamily: 'Times, Georgia, serif' });
        
        await sleep(2000);
        
        textBA.destroy();
        
        this.addProposals(actualProposal);
        
    }
    
    /*
    * this function manages the victory of a translation, it increases the victory counter and if it exceeds 3, it changes the scene to "victoryScreentranslateGame"
    */
    nextPlay(){
        this.clearScene();
        ++countOfVictory;
        if (countOfVictory < 3)
        {
            actualProposal = allProposals.shift(); //update actual proposal
            this.addProposals(actualProposal); //add firsts proposals to scene
        }
        
        else
        {
            this.scene.start("victoryScreentranslateGame");
        }
    }
    /*
    * this function destroy all objects on the scene, except the background
    */
    clearScene(){
        let allObjects = this.children.list.filter(gameObject => gameObject instanceof Phaser.GameObjects.Container); //find all containers in the scene
        allObjects.forEach(object => object.destroy());
        this.children.getByName("proposalTilte").destroy();
    }
    
    
    preload(){
        this.load.image("backgroundTranslateGame","../images/game/background/translateBackground.jpg");
    }
    
    create(){
        this.add.image(400, 300, 'backgroundTranslateGame'); //add the backgroud to scene
        
        //shuffling proposals
        for (let i = allProposals.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = allProposals[i];
                allProposals[i] = allProposals[j];
                allProposals[j] = temp;
        }
        
        actualProposal = allProposals.shift(); //update actual proposal
        this.addProposals(actualProposal); //add firsts proposals to scene
        
    }
    
    update(){
        
    }
}
/**
 * This class is the rules scene for the translate game. She contain a text which explain the rules of this game
 * @extends Phaser.Scene
 */
class translateGameRules extends Phaser.Scene {
    /**
    * Construct a new scene with 'translateGameRules' name to call this scene after
    */
    constructor () {
        super('translateGameRules');
    }

    preload() {
        this.load.image("TranslateRulesbackground","../images/game/background/rulesBackground.jpg");
    }
    
    create() {
        
        //Rules Part 
        
        /**
         * adding the background of the rulesMap scene.
         * @name rulesBackground
         * @type {Phaser.GameObjects.Image}
         */
        var rulesBackground = this.add.image(400,300, 'TranslateRulesbackground');
        
        //adding start container to the rules screen
        
        /**
         * this is the text that will be in the start Container of the translate rules scene. 
         * @name startText
         * @type {Phaser.GameObjects.Text}
         */
        var startText = this.add.text(-44,-17, "Start !",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif' });
         /**
         * this is the rectangle that will be in the start Container of the translate rules scene. 
         * @name startRect
         * @type {Phaser.GameObjects.Rectangle}
         */
        var startRect = this.add.rectangle(0,0,215,50,0x7b6c4f, 0.8);
        startText.setTint(0xc2baac);
        /**
         * this is a styling for the startRect that will be in the start Container of the translate rules scene. 
         * @name startRectStyle
         * @type {Phaser.GameObjects.Rectangle}
         */
        var startRectStyle = this.add.rectangle(0,0,215,50);
        startRectStyle.setStrokeStyle(2,0x000000);
         /**
         * this is the first container of translate rules scene wich contain startRect, startText, stratRectStyle. 
         * @name startContainer
         * @type {Phaser.GameObjects.Container}
         */
        var startContainer = this.add.container(400,450,[startRect ,startText,startRectStyle]);
        startContainer.setInteractive(new Phaser.Geom.Rectangle(-107,-25,215,50), Phaser.Geom.Rectangle.Contains);

        startContainer.on("pointerdown", function(){
            this.scene.scene.start('translateGame');
        });
        
        startContainer.on('pointerover', function() {
            startRect.setFillStyle(0xa88c6c,0.8)
        });
        
        startContainer.on('pointerout', function() {
            startRect.setFillStyle(0x7b6c4f,0.8)
        });
        
        //adding the rules in the rules screen
        
        /**
         * this is the text that will be displaying the rules of the game in the rules Container of the translate rules scene. 
         * @name rulesText
         * @type {Phaser.GameObjects.Text}
         */
        var rulesText = this.add.text(-195,-75, "For this game, you have to chose \nthe most apropriated traduction \namong the 4 proposed. \nThere are 3 traductions to do.\n\nGood Luck !",{ fontSize : 20 , fontFamily: 'Georgia, Times, serif' });
        /**
         * this is the rectangle that will be in the rules Container of the translate rules scene. 
         * @name rulesRect
         * @type {Phaser.GameObjects.Rectangle}
         */
        var rulesRect = this.add.rectangle(0,0,420,170,0x7b6c4f, 0.8);
        
        rulesText.setTint(0xc2baac);
        /**
         * this is the styling of the rulesRect rectangle that will in the rules Container of the translate rules scene. 
         * @name rulesRectStyle
         * @type {Phaser.GameObjects.Rectangle}
         */
        var rulesRectStyle = this.add.rectangle(0,0,420,170);
        rulesRectStyle.setStrokeStyle(2,0x000000);
        /**
         * this is the second container of translate rules scene. Wich contain rulesRect, rulesText and rulesRectStyle
         * @name rulesContainer
         * @type {Phaser.GameObjects.Container}
         */
        var rulesContainer = this.add.container(400,200,[rulesRect ,rulesText,rulesRectStyle]);
    }

    update() {
        // Used to update your game. This function runs constantly
    }
    
}

/**
 * This class is the won scene for the translate game. She contain a text which explain the rest of the story
 * @extends Phaser.Scene
 */
class victoryScreentranslateGame extends Phaser.Scene {
    /**
    * Construct a new scene with 'victoryScreentranslateGame' name to call this scene after
    */
    constructor () {
        super('victoryScreentranslateGame');
    }

    preload() {
        this.load.image("victoryTranslateBackground","../images/game/background/victoryScreentranslateGameBackground.jpg");
        this.load.image("detectiveTranslate","../images/game/detective1.png");
    }
    
    create() {
        
        //Victory Part 
        //adding the victory background
        
        /**
         * the background Image for the victory scene
         * @name rulesBackground
         * @type {Phaser.GameObjects.Image}
         */
        var rulesBackground = this.add.image(400,300, 'victoryTranslateBackground');
        
        /**
         * the detective sprite wich is added to the scene
         * @name detective
         * @type {Phaser.GameObjects.Image}
         */
        var detective = this.add.image(300,420,"detectiveTranslate");
        
        //adding start container to the rules screen
        
        /**
         * the gameObject text for strat button
         * @name startText
         * @type {Phaser.GameObjects.Text}
         */
        var startText = this.add.text(-147,-17, "Question the witness !",{ fontSize : 28 , fontFamily: 'Georgia, Times, serif' });
        /**
         * the background of start button 
         * @name startRect
         * @type {Phaser.GameObjects.Rectangle}
         */
        var startRect = this.add.rectangle(0,0,340,50,0x7b6c4f, 0.8);
        startText.setTint(0xc2baac);
        /**
         * the outline of start button 
         * @name startRectStyle
         * @type {Phaser.GameObjects.Rectangle}
         */
        var startRectStyle = this.add.rectangle(0,0,340,50);
        startRectStyle.setStrokeStyle(2,0x000000);
        /**
         * the container wich contain all elements of the button (startText, startRect and startRectStyle)
         * @name startContainer
         * @type {Phaser.GameObjects.Container}
         */
        var startContainer = this.add.container(400,450,[startRect ,startText,startRectStyle]);
        startContainer.setInteractive(new Phaser.Geom.Rectangle(-170,-25,340,50), Phaser.Geom.Rectangle.Contains);
        
        startContainer.on("pointerdown", function(){
            this.scene.scene.start('rulesFindTheMurderer');
        }); 
        
        startContainer.on('pointerover', function() {
            startRect.setFillStyle(0xa88c6c,0.8)
        });
        
        startContainer.on('pointerout', function() {
            startRect.setFillStyle(0x7b6c4f,0.8)
        });
        
        //adding the victory in the rules screen
        
        /**
         * the text wich explain the rest of the story and introduce the next game
         * @name winText
         * @type {Phaser.GameObjects.Text}
         */
        var winText = this.add.text(-200,-90, "Merci pour les traductions, mais \nil est 16 h 45 et nous devons interroger un \ntémoin, ce qui nous apportera sûrement \nles derniers indices dont nous \navons besoin pour trouver le meurtrier.",{ fontSize : 20 , fontFamily: 'Georgia, Times, serif' });
        /**
         * the background of winText
         * @name winRect
         * @type {Phaser.GameObjects.Rectangle}
         */
        var winRect = this.add.rectangle(0,0,420,200,0x7b6c4f, 0.8);
        winText.setTint(0xc2baac);
        /**
         * the outline of winText
         * @name winRectStyle
         * @type {Phaser.GameObjects.Rectangle}
         */
        var winRectStyle = this.add.rectangle(0,0,420,200);
        winRectStyle.setStrokeStyle(2,0x000000);

    }

    update() {
        // Used to update your game. This function runs constantly
    }
    
}