

class jeu2 extends Phaser.Scene {
     preload ()
    {
    this.load.image('bg', '../site_sae/images/scene.jpg');
}

    create ()
{
    this.add.image(0, 0, 'bg');
}

    update ()
{
}

}

var config = {
    type: Phaser.AUTO,
    parent: 'jeu',
    width: 800,
    height: 600,
    scene: [jeu2]
};

var game = new Phaser.Game(config);