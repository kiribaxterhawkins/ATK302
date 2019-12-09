var myState=0;
var bart;
var bart1;
var bart2;
var bart3;
var bart4;
var timer=0;
var font;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  bart = loadImage("assets/barttitle.JPG");
  bart1 = loadImage("assets/bart.JPG");
  bart2 = loadImage("assets/bartthesequel.JPG");
  bart3 = loadImage("assets/bartsgettingworse.JPG");
  bart4 = loadImage("assets/bartbutinhell.JPG");
  font = loadFont('assets/fontowo.ttf');
}

function draw() {
background(100);
  switch(myState){
    case 0:
      image(bart, windowWidth/2, windowHeight/2);
      if (mouseIsPressed) {
        myState = 1;
      }
      textFont(font);
      text("press mouse to advance :)", 800, 670);
    break;

    case 1:
      image(bart1, windowWidth/2, windowHeight/2);
      timer++;
      if (timer>100){
        myState=2;
        timer=0;
      }
    break;

    case 2:
      image(bart2, windowWidth/2, windowHeight/2);
      timer++;
      if (timer>100){
        myState=3;
        timer=0;
      }
    break;

    case 3:
      image(bart3, windowWidth/2, windowHeight/2);
      timer++;
      if (timer>100){
        myState=4;
        timer=0;
      }
    break;

    case 4:
      image(bart4, windowWidth/2, windowHeight/2);
      timer++;
      if (timer>100){
        myState=4;
        timer=0;
      }
    break;

    case 5:
      image(bart5, windowWidth/2, windowHeight/2);
      if (mouseIsPressed) {
        myState = 0;
      }
    break;

  }
}
