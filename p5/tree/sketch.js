var x = 200

function setup() {
    createCanvas(1300, 600);
    background(172, 216, 230);
    noStroke();
}

function draw() {
  background(172, 216, 230);
  noStroke();

  fill(255, 253, 209);
  ellipse(74, 74, 72, 72);

  fill(86, 97, 54);
  arc(500, 300, 400, 400, PI, TWO_PI);

  fill(86, 97, 54);
  arc(800, 250, 200, 200, PI, TWO_PI);

  fill(33, 38, 20);
  rect(0, 500, 1300, 120);

  fill(28, 24, 22);
  quad(480, 290, 535, 290, 560, 535, 489, 535,);

  fill(28, 24, 22);
  quad(810, 250, 777, 250, 755, 509, 822, 509);

  fill(255, 255, 255);
  ellipse(x, 160, 150, 50);
//  x = x + 1 ;       -- this is animation stuff
  //if (x > 1300) x = 0;
}
function mouseReleased(){
  console.log(mouseX + ',' + mouseY,);
}
