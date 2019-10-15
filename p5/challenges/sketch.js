function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke(); //camel notation, second word is capitalized
}

function draw() {
  background(100);
   text("x = " + mouseX + ", y = " + mouseY, 40, 40) ;
  ellipse(width/2, height/2, 100,100);

  if (mouseIsPressed){
    ellipse(50,50,50,50);
  } else{
    rect(25,25,50,50);
  } //if the mouse is pressed, use this code, if not, other code's running
}

function mouseReleased(){
  console.log(mouseX + ',' + mouseY,);
}
