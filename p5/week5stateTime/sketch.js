var timer = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255));

}

function draw() {
  timer--;
  if(timer<=0){
     background(random(255), random(255), random(255));
     timer=200;
  }
}
