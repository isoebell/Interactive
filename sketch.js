function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,255);
  imageMode(CENTER);
  capture=createCapture(VIDEO);
  capture.hide();
}

function draw() {
  
  if (mouseIsPressed){
    image(capture, mouseX, mouseY, img.width/4, img.height/4);
}
else{
  image(capture, width/2, height/2);
}
  filter(DILATE, 2);
}
