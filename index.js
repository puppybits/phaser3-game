var root = 'https://cdn.jsdelivr.net/gh/puppybits/phaser3-game@master/'
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var platforms;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', root+'assets/sky.png');
    this.load.image('ground', root+'assets/platform.png');
    this.load.image('star', root+'assets/star.png');
    this.load.image('bomb', root+'assets/bomb.png');

    // add preload code below this line


    
}

function create ()
{
    this.add.image(400, 300, 'sky');
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    // add create code below this line




}

function update ()
{
    // add update code below this line




}
