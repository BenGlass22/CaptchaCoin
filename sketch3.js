
let head;

function preload() {
  // Load model with normalise parameter set to true
  head = loadModel('head.obj', true);
}

function setup() {
  let canvas = createCanvas(1200, 800, WEBGL);
  canvas.parent("sketch-parent")
}

function draw() {
  background(255);
  //normalMaterial(); // For effect

  const FACE_TRANSLATE = 300
  const ROTATE_Y = 10
  push();
    translate(-FACE_TRANSLATE, 0, 0);
    rotateX(9.3)
    rotateY(-ROTATE_Y);
    rotateX(map(mouseY, 0, height, -1, 1, true))
    scale(2);
    model(head);
  pop();

  push();
    translate(FACE_TRANSLATE, 0, 0);
    rotateX(9.3);
    rotateY(ROTATE_Y);
    rotateX(map(mouseY, 0, height, -1, 1, true))
    scale(2);
    model(head);
  pop();
}