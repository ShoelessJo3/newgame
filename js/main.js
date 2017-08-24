var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update});
var image;
function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('einstein', 'assets/pics/ra_einstein.png');

}

function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    //  and assign it to a variable
    
    image = game.add.sprite(0, 0, 'einstein');
    game.physics.enable(image, Phaser.Physics.ARCADE);

    image.body.velocity.x=150;
    

    game.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	game.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	game.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    //  Stop the following keys from propagating up to the browser
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.SPACEBAR ]);


}

function update(){

	if(game.leftKey.isDown)
	{
		image.body.velocity.x=-150;
	}
	if(game.rightKey.isDown)
	{
		image.body.velocity.x=150;
	}
	if(game.spaceKey.isDown)
	{
		image.body.velocity.x=0;
	}
}