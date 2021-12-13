
let head;

function preload() {
  // Load model with normalise parameter set to true
  head = loadModel('head.obj', true);
}
function windowResized(){
  resizeCanvas(800, 800);
}
function setup() {
  let canvas = createCanvas(800, 800, WEBGL);
  //canvas.parent("sketch-parent");
  canvas.position (0,0);
  canvas.style('z-index','-1');
}

function draw() {
  background(255);
  scale(2); // Scaled to make model fit into canvas
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount = mouseY * 0.01);
  //rotateY(frameCount * 0.01);
  //normalMaterial(); // For effect
  rotateX(9.3);
  rotateY(-9.4 - mouseY/20);
  model(head);
}