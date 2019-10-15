var pumpkin;
//var x = 0;
//var y = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  frameRate(20);
}

function preload(){
  pumpkin = loadImage("assets/pumpkin.jpg");
}

function draw() {
    background(255);
  image(pumpkin, 0, 0);
//  push(); //you have to use push and pop before, pop restores the pre conditions
//    translate(x,y);
//    x += 3;
//    if(x>width-200){
//      x=0;
//    }
  var frame = frameCount % 5;
  var projectory = map(frame, 0, , 0, TWO_PI);
  var cos_a = cos(projectory);
  var sin_a = sin(projectory);
  // Equivalent to rotate(angle);
//  applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
applyMatrix(-sin_a, cos_a, sin_a, cos_a, random(width),random(height));
  bat();
//  pop();
}

function bat(){
  // bat
  fill(0);
  triangle(372, 108, 358, 76, 352, 114);
  triangle(329, 115, 310, 88, 315, 126);
  ellipse(346, 138, 70, 70);
  quad(356, 120, 397, 75, 435, 103, 359, 132);
  quad(330, 134, 258, 114, 267, 167, 338, 141);

  fill('red');
  ellipse(334, 128, 10, 10);
  ellipse(357, 126, 10, 10);
}
