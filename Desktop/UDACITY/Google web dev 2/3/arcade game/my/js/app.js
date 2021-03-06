// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.x = x;//x-horisontal
    this.y = y;//y-vertical
    this.speed = speed;//random
    // The image/sprite for our enemies, this uses
    // a helper provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // Width and Height of a bug
    this.width = 80;
    this.height = 50;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x+=this.speed*dt;

    if (this.x > 500){
      this.x=-50; //reset the enemies position after they move off the canvas
      this.speed = 100 + Math.random()* 200; //give 100+random speed to bugs
    };

    //if there is a collision player reset to start position
    if (player.x < this.x + this.width &&
        player.x + this.width > this.x &&
        player.y < this.y + this.height &&
        player.y + this.height > this.y) {
          player.x = 202;
          player.y = 405;
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.player = 'images/char-cat-girl.png';
};

Player.prototype.update = function (dt){
};
//draw player on the screen
Player.prototype.render = function (){
  ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

var tile_width = 101;
    tile_height = 83;
Player.prototype.handleInput = function (keyPress){
  if (keyPress === 'left' && this.x > 0){//press left arrow, but not exceed border
    this.x -= tile_width;//left 1 tile
    console.log('left');
  }
  if (keyPress === 'right' && this.x < 404){//press right arrow, but not exceed  border
    this.x += tile_width;//right 1 tile
    console.log('right');
  }
  if (keyPress === 'up' && this.y > 0){//press up arrow, but not exceed border
    this.y -= tile_height;//up 1 tile
    console.log('up');
  }
  if (keyPress === 'down' && this.y < 405){//press down arrow, but not exceed  border
    this.y += tile_height;//down 1 tile
    console.log('down');
  }

  //reset players position after timeout after player reches 0 on y axes(end of game)
  if (this.y < 0) {
    setTimeout(function(){
      player.x = 202;
      player.y = 405;
      alert("You are a winner!");
    }, 600);
  };
};
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [
    new Enemy(-50, 55, 50),
    new Enemy(-50, 140, 25),
    new Enemy(-50, 225, 75)
];

// Place the player object in a variable called player

var player = new Player(202, 405);
