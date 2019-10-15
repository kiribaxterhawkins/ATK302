var score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  bgColor= color(random(255), random(255), random(255));
  pg = createGraphics(10, 10);
}

function draw() {
  //background(bgColor);
  textSize(20);
  text(score, 25, 30);
  text("\"peepee poopoo\"", width/2, height/2, 200, 200)
  //
  pg.ellipse(mouseX, mouseY, 20, 20);
  pg.background(100);
}

function mousePressed(){
  ellipse(mouseX, mouseY, 20, 20);
}

function mouseReleased(){
  bgColor= color(random(255), random(255), random(255));
  score = score + 1;
  background(bgColor);
}
