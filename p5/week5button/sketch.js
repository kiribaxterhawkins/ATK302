

function setup() {
  createCanvas(800,800);
  noStroke();
//  rectMode(CENTER); //center all rectangles
}

function draw() {
  background(100);

  fill('red');
  rect(100,100,100,100);
}

function mouseReleased(){
  if((mouseX>100)&&(mouseX<200)&&(mouseY>100)&&(mouseY<200)){
    console.log("beep");
  }
}
