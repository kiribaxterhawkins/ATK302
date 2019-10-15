var x = 0 ;
var y = 0 ;
var y1 = 0;
var x1 = 0;
function setup() {
  createCanvas(200,200);
}

function draw() {
  background(100);
//  rect(x, y, 10, 10);
//  x = x + 1 ; //x++
//  y++;
//  if(x>width) {
//    x = 0};
//  if(x>height) {
//    x = 0};

  rect(x1, y1, 10, 10);
    x1+=5;
      if (x1 > width) {
        x1 = random(width);
    y1+=5;
      if (y1 > height) {
        y1 = random(height);
      }
  }

}
