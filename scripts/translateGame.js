
class translateGame extends Phaser.Scene {
    //ussing super constructor
    
    preload(){
        this.load.image("bg","../images/game/background/translateBackground.jpg")
    }
    
    create(){
        this.add.image(0, 0, 'bg');
        
        var rect = this.add.rectangle(0,0,400,70,0xff0000);
        var text = this.add.text(-100,-30,"hello word",{ fontSize : 50 , fontFamily: 'Georgia, Times, serif' });
        
        var cont = this.add.container(config.width/2,config.height/2,[rect,text]);
        
        cont.setInteractive(new Phaser.Geom.Rectangle(0,0,400,70), Phaser.Geom.Rectangle.Contains);
        
        cont.on('pointerover', function() {
            rect.setFillStyle(0x00ff00)
        });
        
        
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