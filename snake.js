let snake;
let food;
let gridSize = 20;
let cols, rows;
let points = 0;
let highScore = 0;
let gameStarted = false;
let gameOver = false;

// Add an event listener for key presses
document.addEventListener("keydown", function(event) {
    // Check if the pressed key is an arrow key
    if(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        // Prevent the default behavior (scrolling)
        event.preventDefault();
    }
});

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / gridSize);
  rows = floor(height / gridSize);
  frameRate(10);
  snake = new Snake();
  spawnFood();
}

function draw() {
  background(0, 0, 255);
  
  if (gameStarted) {
    if (!gameOver) {
      snake.update();
      snake.display();
  
      if (snake.eat(food)) {
        points += 5;
        spawnFood();
        snake.grow();
      }
  
      fill(255);
      textSize(20);
      textAlign(LEFT);
      text("Points: " + points, 20, height - 20);
      textAlign(RIGHT);
      text("High Score: " + highScore, width - 20, height - 20);
  
      noStroke();
      fill(255, 0, 0);
      rect(food.x, food.y, gridSize, gridSize);
    } else {
      fill(255);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Game Over :( Press any key to play again", width / 2, height / 2);
    }
  } else {
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Press any key to start", width / 2, height / 2);
  }
}

function keyPressed() {
  gameStarted = true;
  if (!gameOver) {
    if (keyCode === UP_ARROW && snake.yspeed !== 1) {
      snake.dir(0, -1);
    } else if (keyCode === DOWN_ARROW && snake.yspeed !== -1) {
      snake.dir(0, 1);
    } else if (keyCode === LEFT_ARROW && snake.xspeed !== 1) {
      snake.dir(-1, 0);
    } else if (keyCode === RIGHT_ARROW && snake.xspeed !== -1) {
      snake.dir(1, 0);
    }
  } else {
    points = 0;
    snake.reset();
    gameOver = false;
  }
}

function spawnFood() {
  let col = floor(random(cols));
  let row = floor(random(rows));
  food = createVector(col * gridSize, row * gridSize);
}

class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(floor(cols / 2) * gridSize, floor(rows / 2) * gridSize);
    this.xspeed = 1;
    this.yspeed = 0;
  }
  
  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xspeed * gridSize;
    head.y += this.yspeed * gridSize;
    this.body.push(head);
    
    if (this.collide()) {
      if (points > highScore) {
        highScore = points;
      }
      gameOver = true;
    }
  }
  
  display() {
    fill(255, 255, 0);
    for (let i = 0; i < this.body.length; i++) {
      rect(this.body[i].x, this.body[i].y, gridSize, gridSize);
    }
  }
  
  dir(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  
  eat(pos) {
    let head = this.body[this.body.length - 1];
    if (head.x === pos.x && head.y === pos.y) {
      return true;
    }
    return false;
  }
  
  collide() {
    let head = this.body[this.body.length - 1];
    for (let i = 0; i < this.body.length - 1; i++) {
      if (head.x === this.body[i].x && head.y === this.body[i].y) {
        return true;
      }
    }
    if (head.x >= width || head.x < 0 || head.y >= height || head.y < 0) {
      return true;
    }
    return false;
  }
  
  reset() {
    this.body = [];
    this.body[0] = createVector(floor(cols / 2) * gridSize, floor(rows / 2) * gridSize);
    this.xspeed = 1;
    this.yspeed = 0;
  }
  
  grow() {
    let tail = this.body[this.body.length - 1].copy();
    this.body.push(tail);
  }
}
