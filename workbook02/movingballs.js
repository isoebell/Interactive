let circles = []; // Array to store circle objects

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  // Create five circles with different sizes and colors
  let colors = ['red', 'blue', 'yellow', 'white', '#FFA500'];
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let radius = random(20, 50);
    let color = colors[i]; // Use specific color from the colors array
    circles.push(new Circle(x, y, radius, color));
  }
}


function draw() {
  background(0);
  
  // Update and display each circle
  for (let circle of circles) {
    circle.update();
    circle.display();
  }
}

function mouseClicked() {
  // Check if mouse is inside any circle
  for (let circle of circles) {
    if (circle.contains(mouseX, mouseY)) {
      // If clicked, start moving the circle
      circle.startMoving();
    }
  }
}

function randomColor() {
  // Generate a random color
  return color(random(255), random(255), random(255));
}

class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = 0; // Speed in x-direction
    this.speedY = 0; // Speed in y-direction
    this.isMoving = false; // Flag to indicate if the circle is moving
    this.color = color; // Color of the circle
  }
  
  update() {
    // Update circle position if it is moving
    if (this.isMoving) {
      this.x += this.speedX;
      this.y += this.speedY;
      
      // Bounce off edges
      if (this.x < 0 || this.x > width) {
        this.speedX *= -1;
      }
      if (this.y < 0 || this.y > height) {
        this.speedY *= -1;
      }
    }
  }
  
  display() {
    // Display the circle with its color
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2);
  }
  
  contains(x, y) {
    // Check if given point (x, y) is inside the circle
    let d = dist(x, y, this.x, this.y);
    return d < this.radius;
  }
  
  startMoving() {
    // Start moving the circle
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
    this.isMoving = true;
  }
}
