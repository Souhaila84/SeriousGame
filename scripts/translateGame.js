var countOfVictory = 0;
var allProposals =[["There was a murder last night","Il y a eu un meurtre hier soir","Il y avais eu un meurtre hier soir","Il y a eu un menteur hier soir","il y a des meurtriers dans la nuit derniére"],
                   ["Bonjour, je cherche un homme de petite taille avec un sourire narquois et une calvitie avancée.","Hello, I am looking for a short and smirk man with a advanced baldness.","Hello, I am looking for a short and sly man with a advanced baldness.","Hello, I am looking for a short man with a sly and advanced bat.","Hello, I am looking for a tall man with a smirk."],
                   ["Monsieur Roquette est un enquêteur de renom en France","Mr. Roquette is a renowned investigator in France","Mr. Roquette is a popular investigator in France","Mr. Roquette is a celebrity in Yugoslavia","Mr. Roquette were a renowned alligator at France"]];

var actualProposal = [];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class translateGame extends Phaser.Scene {
    
    constructor () {
        super('translateGame');
    }
    /*
    This fuction create a buton for proposal
    */
    addTranslateProposal(x, y, text, font, isRigth){
        
        var justifyText = this.justify(text,17);
        
        var rect = this.add.rectangle(0,0,280,115,0xa38c6c,0.5);
        var textGameObject = this.add.text(-130,-50, justifyText,{ fontSize : font , fontFamily: 'Georgia, Times, serif' });
        
        var r2 = this.add.rectangle(0,0, 280, 115);
        r2.setStrokeStyle(2, 0x0000,0.3);
        
        var cont = this.add.container(x, y,[rect,textGameObject,r2]);
        cont.setInteractive(new Phaser.Geom.Rectangle(-140,-57,280,115), Phaser.Geom.Rectangle.Contains);
        
        cont.on('pointerover', function() {
            rect.setFillStyle(0x28942a,0.5)
        });
        
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
    
    justify(text,n){
        var justifyText = new String();
        var textArray = text.split(' ');
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
    This function create 4 proposal in random order, the rigth proposal is the first given
    */
    
    addProposals(proposals){

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
        
        var title = this.add.text(50, 25, this.justify(proposals[0],45),{ fontSize : 30 , fontFamily: 'Times, Georgia, serif' });
        title.setTintFill(0xe5e8d9);
        title.setName("proposalTilte");
    }
    
    clearScene(){
        let allObjects = this.children.list.filter(gameObject => gameObject instanceof Phaser.GameObjects.Container); //find all containers in the scene
        allObjects.forEach(object => object.destroy());
        this.children.getByName("proposalTilte").destroy();
    }
    
    onRightProposalClick(){
        this.nextPlay();
    }
    
    async onFalseProposalClick(){
        this.clearScene();

        var textBA = this.add.text(50, 40, "Mauvaise réponse",{ fontSize : 40 , fontFamily: 'Times, Georgia, serif' });
        
        await sleep(2000);
        
        textBA.destroy();
        
        this.addProposals(actualProposal);
        
    }
    restartThisGame(thisScene){
        thisScene.children.getByName("textBA").destroy();
        
        this.addProposals(actualProposal);
    }
    
    nextPlay(){
        this.clearScene();
        ++countOfVictory;
        if (countOfVictory < 3){
            actualProposal = allProposals.shift(); //update actual proposal
            this.addProposals(actualProposal); //add firsts proposals to scene
            }
        else{
            var textBA = this.add.text(50, 40, "You Won",{ fontSize : 40 , fontFamily: 'Times, Georgia, serif' });
        }
    }
    
    preload(){
        this.load.image("bg","../images/game/background/translateBackground.jpg");
    }
    
    create(){
        this.add.image(400, 300, 'bg'); //add the backgroud to scene
        
        //shuffling proposals
        for (let i = allProposals.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = allProposals[i];
                allProposals[i] = allProposals[j];
                allProposals[j] = temp;
        }
        
        actualProposal = allProposals.shift(); //update actual proposal
        this.addProposals(actualProposal); //add firsts proposals to scene
        
        this.input.on('pointerdown', function(){
            console.log("x : " + game.input.mousePointer.x);
            console.log("y : " + game.input.mousePointer.y);
        });
        
    }
    
    update(){
        
    }
}

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
        
        var startText = this.add.text(-39,-17, "Start !",{ fontSize : 32 , fontFamily: 'Georgia, Times, serif' });
        var startRect = this.add.rectangle(0,0,200,50,0x7b6c4f, 0.8);
        startText.setTint(0xc2baac);
        startRect.setName("startRect");
        var startRectStyle = this.add.rectangle(0,0,200,50);
        startRectStyle.setStrokeStyle(2,0x000000);
        
        var startContainer = this.add.container(400,450,[startRect ,startText,startRectStyle]);
        startContainer.setInteractive(new Phaser.Geom.Rectangle(-100,-25,200,50), Phaser.Geom.Rectangle.Contains);
        startContainer.setName("startContainer");
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
        var rulesText = this.add.text(-190,-90, "For this game, you have to chose the most\napropriated traduction among the 4 proposed\n\nGood Luck !",{ fontSize : 20 , fontFamily: 'Georgia, Times, serif' });
        var rulesRect = this.add.rectangle(0,0,400,200,0x7b6c4f, 0.8);
        rulesRect.setName("rulesRect");
        rulesText.setTint(0xc2baac);
        var rulesRectStyle = this.add.rectangle(0,0,400,200);
        rulesRectStyle.setStrokeStyle(2,0x000000);
        
        var rulesContainer = this.add.container(400,200,[rulesRect ,rulesText,rulesRectStyle]);
        rulesContainer.setInteractive(new Phaser.Geom.Rectangle(-200,-100,400,200), Phaser.Geom.Rectangle.Contains);
        rulesContainer.setName("rulesContainer");
    }

    update() {
        // Used to update your game. This function runs constantly
    }
    
}

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: [ rules, translateGame]
};

const game = new Phaser.Game(config);
