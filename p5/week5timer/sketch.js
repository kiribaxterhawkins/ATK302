var timer = 0;
var myState=0;
var myBackground;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBackground= color(random(255), random(255), random(255));
}

function draw() {
  switch(myState){
    case 0:
      textSize(50);
      background(myBackground);
      text("case 0", 200,200);
      timer++;
      if(timer>=200){
         myState=1;
         myBackground=color(random(255), random(255), random(255));
         timer=0;}
    break;

    case 1:
      textSize(50);
      background(myBackground);
      text("case 1", 200,200);
      timer++;
      if(timer>=200){
         myState=2;
         myBackground=color(random(255), random(255), random(255));
         timer=0;}
    break;

    case 2:
      textSize(50);
      background(myBackground);
      text("case 2", 200,200);
      timer++;
      if(timer>=200){
         myState=0;
         myBackground=color(random(255), random(255), random(255));
         timer=0;}
    break;
  }
}
