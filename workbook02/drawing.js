function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0,0,255);
    }
    
    
    function draw() {
    background(0,0,255, .8)
      stroke(255,0,0);
      strokeWeight(5);
      line(mouseX,mouseY,pmouseX, pmouseY);
    }