var myState=0;

function setup() {
  createCanvas(800,800);
}

function draw() {
  switch(myState){
    case 0:
    background(255,0,0);
    rect
    break;

    case 1:
    background(0,255,0);
    break;

    case 2:
    background(0,0,255);
    break;

    case 3:
    background(255,255,0);
    break;
  }
}
//add one to my myState
//if my state goes over 2, reset it to 0
function mouseReleased(){
  //myState++;
  //if(myState>2){
  //  myState = 0;}
  myState = (myState + 1) % 4;
}
