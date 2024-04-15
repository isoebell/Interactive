let song; // Declare song variable
let fft; // Declare Fast Fourier Transform (FFT) variable

function preload() {
  // Load the song
  song = loadSound('KraftwerkComputerLoveTrimmed.mp3', onSongLoaded, onSongLoadError);
}

function onSongLoaded() {
  console.log('Song loaded successfully!');
}

function onSongLoadError() {
  console.error('Error loading the song.');
}

function setup() {
  createCanvas(800, 600);
  
  // Initialize the FFT object
  fft = new p5.FFT();
}

function draw() {
  background(30);
  
  // Analyze the audio spectrum
  let spectrum = fft.analyze();
  
  // Draw circles based on the spectrum
  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    let r = map(amp, 0, 255, 10, 100); // Map amplitude to circle radius
    let x = random(width); // Random x position within canvas width
    let y = random(height); // Random y position within canvas height
    
    // Set circle color based on frequency
    let freqColor = map(i, 0, spectrum.length, 0, 255);
    fill(freqColor, 100, 255);
    
    // Draw circle
    ellipse(x, y, r, r);
  }
}