class mapGame extends Phaser.Scene 
{
    constructor ()
    {
        super();
    }

    preload () 
    {
        this.load.image('Map', '../images/mapformapgame.png')
        this.load.image('Greenping','../images/mappinggreen.png')
        this.load.image('Redping', '../images/mappingred.png')
    }
    
    create()
    {
        this.add.image(400,300, 'Map');
        this.add.image(100,100, 'Greenping');
        this.add.image(200,200, 'Redping');
    }
}


const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: [ mapGame ]
};

const game = new Phaser.Game(config);