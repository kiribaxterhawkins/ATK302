var x=0;

function setup() {
  createCanvas(800,800);
}

function draw() {
  background(100);

  fill(255);
  textSize(100);
  text('fuck word', x, 200);
  x+=2;
  if (x>800){
    x=0;
  }
}
