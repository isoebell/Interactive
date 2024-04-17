function setup() {
createCanvas(windowWidth, windowHeight);
background(0,0,255);
frameRate(100);// adjusts how many frames a second, adjusts the continuity of the lines, circles etc being drawn
}


function draw() {
  fill(0,0,255);
  stroke(255, 255, 0);
  circle(mouseX, mouseY, 100);
fill(255,0,0);
//stroke(255,255,0);
square(mouseY, mouseX, 100);
}

