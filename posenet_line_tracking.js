function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO)
  video.size(width, height);
  video.hide();
  }
  
  function draw() {
  background(0,0,255);
  if (mouseIsPressed){
  background (255, 255, 0);
  }
  video.loadPixels();
  let stepSize = 4; // Adjust the step size to control the density
  for (let y=0; y < video.height; y += stepSize){
  for (let x = 0; x < video.width; x += stepSize) {
  let index = (x + y * video.width) * 4;
  let r = video.pixels[index];
  let g = video.pixels[index+1];
  let b = video.pixels[index+2];
  let brightness = (r + g + b) / 3;
  let threshold = 50; // adjust threshold control sensitivity
  if (brightness < threshold) {
  stroke (0);
  strokeWeight(4);
  line(x, y, x + stepSize, y + stepSize);
  }
  }
  }
  }