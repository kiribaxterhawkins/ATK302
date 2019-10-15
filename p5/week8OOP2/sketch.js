var cars=[];
var frogPos;

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER); //or imagemode(CENTER);
  for(var i=0; i<40; i++){
    cars.push(new Car());
  }
  frogPos = createVector(width/2, height-10);
}



function draw() {
  background(100);
  for(var i=0; i<cars.length; i++){
    cars[i].drive();
    cars[i].display();
    //collision detection
    if(cars[i].pos.dist(frogPos)<50){
        cars.splice(i,1);
    }
  }
  //frog
  fill(47, 224, 94);
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys(); //this moves the frog
}

function Car(){
  //attributes
    this.r=random(255);
    this.g=random(255);
    this.b=random(255);
    this.pos= createVector(random(width), random(width));
    this.vel= createVector(random(-5,5), random(-5,5));
  //methods
    this.display=function(){
      noStroke();
      fill(this.r,this.g,this.b);
      rect(this.pos.x, this.pos.y, 80, 45);
      ellipse(this.pos.x-10, this.pos.y+30, 20,20);
      ellipse(this.pos.x+10, this.pos.y+30, 20,20);
    }//
    this.drive=function(){
      this.pos.add(this.vel);
      if (this.pos.x>width) this.pos.x=0;
      if (this.pos.x<0) this.pos.x=width;
      if (this.pos.y>height) this.pos.y=0;
      if (this.pos.y<0) this.pos.y=height;
    }
}

function checkForKeys(){
  if(keyIsDown(LEFT_ARROW)) frogPos.x= frogPos.x -5;
  if(keyIsDown(RIGHT_ARROW)) frogPos.x= frogPos.x +5;
  if(keyIsDown(UP_ARROW)) frogPos.y= frogPos.y -5;
  if(keyIsDown(DOWN_ARROW)) frogPos.y= frogPos.y +5;
}
