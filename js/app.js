//Hidden game-over modal which pops up when player reaches water
let gameOverModal = document.createElement('div');
gameOverModal.className = 'modal';
document.body.appendChild(gameOverModal);

// Enemies our player must avoid
let Enemy = function(xCord, yCord, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
  this.x = xCord;
  this.y = xCord;
  this.height = 65;
  this.width = 65;
  this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  if ((this.x + this.speed * dt) > 505)
    this.x = 0;
  else
    this.x = this.x + this.speed * dt;
  this.render();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [new Enemy(0, 0, 40), new Enemy(0, 0, 50), new Enemy(300, 0, 60), new Enemy(100, 0, 100), new Enemy(100, 0, 70), new Enemy(200, 0, 25)];
class Player {
  constructor() {
    this.sprite = 'images/player.png';
    this.x = 300;
    this.y = 450;
    this.height = 65;
    this.width = 65;
  }

// Put player back to starting position
  resetPosition(){
    this.x = 300;
    this.y = 450;
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(code) {
    console.log("key pressed:" + code);
    switch (code) {
      case 'up':
        if (this.y - 83 > 0)
          this.y = this.y - 83;
        else
          this.y = 0;

        this.render();
        break;
      case 'down':
        if (this.y + 83 < 450)
          this.y = this.y + 83;
        else
          this.y = 450;

        this.render();
        break;
      case 'left':
        if (this.x - 101 > 0)
          this.x = this.x - 101;
        else
          this.x = 0;
        this.render();
        break;
      case 'right':
        if (this.x + 101 < 400)
          this.x = this.x + 101;
        else
          this.x = 400;
        this.render();
        break;
    }

  }
}

// Place the player object in a variable called player

let player = new Player();
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
