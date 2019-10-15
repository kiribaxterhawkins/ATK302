
function setup() {
  createCanvas(windowWidth, windowHeight);
    background(159, 229, 245);
    noStroke();
}

function draw() {

  translate(699,343);

  if(mouseIsPressed){
    fill(237, 183, 7);
   noStroke();
   smooth(); //this was supposed to be anti aliasing? idk how to do it but p5 gave me hints. idk if it worked
   for (let i = -1; i < 20; ++i) {
     ellipse(0, 60, 20, 100);
     rotate(PI/10);
  }} else{
    fill(237, 183, 7);
   noStroke();
   smooth(); //this was supposed to be anti aliasing? idk how to do it but p5 gave me hints. idk if it worked
   for (let i = -1; i < 20; ++i) {
     ellipse(0, 60, 20, 90);
     rotate(PI/10);
  }}


 smooth();
 fill(245, 245, 142);
 ellipse(0,0, 100, 100);

 fill(0);
 ellipse(0,2, 12,12);

if(mouseIsPressed){
  fill(0);
  ellipse(12,0,10,2)
}else{
  fill(0);
  ellipse(12,0, 10,10);
}



 smooth();
 fill(6, 24, 71);
 text("I'm just a sweet lil' flower boy", 150,0);

}

function mouseReleased(){


  fill(6, 24, 71);
  text("who said you cant be sweet and also commit war crimes", 152,15);

}
