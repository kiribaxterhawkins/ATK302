var myState=0;
var timer= 200;
var x=0;
var vel=3;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background(100);
  fill('#F7FF3C');
  rect(width/2, height/2, 150, 400);

  switch(myState){
    case 0:
      fill('grey');
      ellipse(width/2, height/2 - 120, 100, 100); //top
      ellipse(width/2, height/2, 100, 100); //middle

      fill('green');
      ellipse(width/2, height/2 +120, 100, 100); //bottom

      doTimer(1, 75);
      vel=1;
    break;

    case 1:
      fill('grey');
      ellipse(width/2, height/2 - 120, 100, 100); //top
      ellipse(width/2, height/2 +120, 100, 100); //bottom

      fill('yellow');
      ellipse(width/2, height/2, 100, 100); //middle

      doTimer(2, 50);
      vel=3;
    break;

    case 2:
      fill('grey');
      ellipse(width/2, height/2, 100, 100); //middle
      ellipse(width/2, height/2 +120, 100, 100); //bottom

      fill('red');
      ellipse(width/2, height/2 - 120, 100, 100); //top

      doTimer(0, 100);
      vel=0;
    break;
  }
  //animate a car
    fill('purple');
    rect(x, height-100, 80, 50);
      x=x+vel;
      if(x>width){
        x=0;
    }
}

function doTimer(whatstate, whattime){
  timer--;
  if(timer<0){
    timer = whattime;
    myState = whatstate;
  }
}
