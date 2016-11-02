
var canvas = document.getElementById("game_canvas");
var context = canvas.getContext("2d");

var spaceship = new Image();
var enemy = new Image();
var nyan = new Image();
var projectile = new Image();
var bg = new Image();

spaceship.src = "https://a.fsdn.com/con/app/proj/partartspace/screenshots/Spaceship15.png"
enemy.src = "http://www.evilbastard.org/slight/othershipx3.GIF";
nyan.src = "https://fagamechal.files.wordpress.com/2013/02/spaceship.png"
projectile.src = "https://donaldcarling.files.wordpress.com/2016/03/general-bullet.png?w=417&h=269&crop=1"
bg.src = "https://3.bp.blogspot.com/-YJ7vMuEEYxo/Vmmyw3XN5UI/AAAAAAAAw-w/Hk6uu7gxQvE/s1600/Andromeda-Galaxy-Wallpaper-HD-18.jpg"

var game = {};
var x = 320 - 32;
var y = 480 - 128;
var aliens = [];

var aliens_x = 0; // aliens relative location
var aliens_d = 1; // 1 or -1 for direction

aliens[0] = {x: 320 -  32, y: 64, alive: true}
aliens[1] = {x: 320 +  48, y: 64, alive: true}
aliens[2] = {x: 320 - 112, y: 64, alive: true}
aliens[3] = {x: 320 - 192, y: 64, alive: true}
aliens[4] = {x: 320 + 128, y: 64, alive: true}

var bullet = {x: 0, y: 0, active: false}

var left = false;
var right = false;

// Left: 37
// Up: 38
// Right: 39
// Down: 40

document.onkeydown = function (e) {
	var keycode = e.keyCode;

	if(keycode == 37) {
		left = true;
	} else if(keycode == 39) {
		right = true;
	} else if(keycode == 32 && !bullet.active){
		bullet.x = x + 18;
		bullet.y = y;
		bullet.active = true;
	}
}

document.onkeyup = function (e) {
	var keycode = e.keyCode;

	if(keycode == 37) {
		left = false;
	} else if(keycode == 39) {
		right = false;
	}
}

game.update = function () {
	if(aliens_x > 128+32 || aliens_x < -128) aliens_d = aliens_d * -1;
	aliens_x += 0.5 * aliens_d;

	if(bullet.active) bullet.y -= 3;
	if(bullet.y < -24) bullet.active = false;

	for(var i = 0; i < aliens.length; i++){
		if ( aliens[i].alive && Math.sqrt( Math.pow((aliens[i].x+aliens_x+16)-(bullet.x+12), 2) + Math.pow(aliens[i].y+16-bullet.y+12, 2) ) <  20 ) {
   			aliens[i].alive = false;
			bullet.active = false;
		}
	}
	
	if(left) x -= 1;
	if(right) x += 1;
}

game.draw = function () {
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	if(bg.complete) {
            context.drawImage(bg, 0, 0, canvas.width, canvas.height);
        }
	
	if(spaceship.complete) {
		context.drawImage(spaceship, x, y, 64, 64);
	}
	
	if(enemy.complete) {
		for(var i = 0; i < aliens.length; i++){
			if(aliens[i].alive){
				context.drawImage(enemy, aliens[i].x + aliens_x, aliens[0].y, 32, 32);
			}
		}
	}
	
	if(projectile.complete && bullet.active){
		context.drawImage(projectile, bullet.x, bullet.y, 24, 24);
	}
}

game.run = function() {
  var loops = 0, skipTicks = 1000 / game.fps,
      maxFrameSkip = 10,
      nextGameTick = (new Date).getTime();
  
	loops = 0;
	game.update();
	game.draw();
};

// Start the game loop
window.setInterval(game.run, 0);
