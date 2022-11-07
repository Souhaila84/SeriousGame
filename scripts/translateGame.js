
class translateGame extends Phaser.Scene {
    //ussing super constructor
    
    
    /*
    This fuction create a buton for proposal
    */
    addTranslateProposal(x, y, text, font){
        var rect = this.add.rectangle(0,0,200,35,0xff0000);
        var text = this.add.text(-2*font*(text.length/8),-font/2, text,{ fontSize : font , fontFamily: 'Georgia, Times, serif' });
        
        var cont = this.add.container(x, y,[rect,text]);
        
        cont.setInteractive(new Phaser.Geom.Rectangle(-100,-17,200,35), Phaser.Geom.Rectangle.Contains);
        
        cont.on('pointerover', function() {
            rect.setFillStyle(0x00ff00)
        });
        
        cont.on('pointerout', function() {
            rect.setFillStyle(0xff0000)
        });
        
        cont.on('pointerup',this.clearScene, this);
    }
    
    /*
    This function create 4 proposal in random order, the rigth proposal is the first given
    */
    
    addProposals(rigthProposal,secondProposal,thirdProposal,fourthProposal){
        var proposals = [rigthProposal,secondProposal,thirdProposal,fourthProposal];
        //shuffling proposals
        for (let i = proposals.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = proposals[i];
                proposals[i] = proposals[j];
                proposals[j] = temp;
        }
        
        this.addTranslateProposal(200,200,proposals[0],25);
        this.addTranslateProposal(200,400,proposals[1],25);
        this.addTranslateProposal(600,200,proposals[2],25);
        this.addTranslateProposal(600,400,proposals[3],25);
    }
    
    clearScene(){
        let allObjects = this.children.list.filter(gameObject => gameObject instanceof Phaser.GameObjects.Container); //find all containers in the scene
        allObjects.forEach(object => object.destroy());
    }
    
    onRightProposalClick(){
        this.clearScene();
        
        
    }
    
    
    preload(){
        this.load.image("bg","../images/game/background/translateBackground.jpg")
    }
    
    create(){
        this.add.image(400, 300, 'bg');
        this.addProposals("oll","ell","ill","ylll");
        
        
        this.input.on('pointerdown', function(){
            console.log("x : " + game.input.mousePointer.x);
            console.log("y : " + game.input.mousePointer.y);
            
        });
        
    }
    
    update(){
        
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: [ translateGame ]
};

const game = new Phaser.Game(config);
