var game = new Phaser.Game(1280, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render});
var image;
function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('einstein', 'assets/pics/frog_on_uni.jpg');
    game.load.atlasJSONHash('bot', 'assets/sprites/pole.png', 'assets/sprites/pole.json');

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

    //  This sprite is using a texture atlas for all of its animation data
    var bot = game.add.sprite(200, 200, 'bot');

    //  Here we add a new animation called 'run'
    //  We haven't specified any frames because it's using every frame in the texture atlas
    bot.animations.add('run',[0,1,2,3],15,true);


    //  And this starts the animation playing by using its key ("run")
    //  15 is the frame rate (15fps)
    //  true means it will loop when it finishes
    bot.animations.play('run');
    bot.scale.setTo(10,10);

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

function render(){

	var x = 32;
    var y = 0;
    var yi = 32;

    game.debug.text('Viewport', x, y += yi);

    game.debug.text('Viewport Width: ' + game.scale.viewportWidth, x, y += yi);
    game.debug.text('window.innerWidth: ' + window.innerWidth, x, y += yi);
    game.debug.text('window.outerWidth: ' + window.outerWidth, x, y += yi);

    game.debug.text('Viewport Height: ' + game.scale.viewportHeight, x, y += yi);
    game.debug.text('window.innerHeight: ' + window.innerHeight, x, y += yi);
    game.debug.text('window.outerHeight: ' + window.outerHeight, x, y += yi);

    game.debug.text('Document', x, y += yi*2);

    game.debug.text('Document Width: ' + game.scale.documentWidth, x, y += yi);
    game.debug.text('Document Height: ' + game.scale.documentHeight, x, y += yi);

    //  Device: How to get device size.

    //  Use window.screen.width for device width and window.screen.height for device height. 
    //  .availWidth and .availHeight give you the device size minus UI taskbars. (Try on an iPhone.) 
    //  Device size is static and does not change when the page is resized or rotated.

    x = 350;
    y = 0;

    game.debug.text('Device', x, y += yi);

    game.debug.text('window.screen.width: ' + window.screen.width, x, y += yi);
    game.debug.text('window.screen.availWidth: ' + window.screen.availWidth, x, y += yi);
    game.debug.text('window.screen.height: ' + window.screen.height, x, y += yi);
    game.debug.text('window.screen.availHeight: ' + window.screen.availHeight, x, y += yi);

}