const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  b1 = color(255);
  b2 = color(0);
  c1 = color(133, 202, 255);
  c2 = color(219, 248, 255);
  noLoop();


function draw() {
  background(250);
  setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
  setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);
  text("x = " + mouseX + ", y = " + mouseY, 40, 40) ;
  setGradient(0, 0, 1400, 1200, c1, c2, Y_AXIS);
  setGradient(0, 0, 1400, 1200, c2, c1, X_AXIS);




  translate(699,343);
  fill(237, 213, 76)
 noStroke();
 for (let i = 0; i < 10; i ++) {
   ellipse(0, 60, 20, 100);
   rotate(PI/5);
 }
 fill(245, 245, 142);
 ellipse(0,0, 100, 100);

 fill(41, 41, 38);
 text("I'm just a sweet lil' man", 90,0);
}

function mouseReleased(){
  console.log(mouseX + ',' + mouseY,);
  fill(41, 41, 38);
  text("just kidding fuck the sweeds", 110,15);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
} }}
