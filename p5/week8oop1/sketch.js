var x=0;
var myCar; //declare/ define an object
var myCar1;
var vel=3;

function setup() {
  createCanvas(800,800);
  myCar= new Car(); //spawn an object - - a class always goes after NEW
  myCar1= new Car();
}
//
function draw() {
  background(100);
  //rect(x,100,100,50); //this code makes it go across the screen
  //x=x+1; //x=x+1;
  //if(x>width) x=0;

  myCar.display();
  myCar.drive();

  myCar1.display();
  myCar1.drive();

}
//our car class - classes are capitalized
function Car(){
  //attributes (what is the car)
  this.x = random(width); //every car's position starts at 0
  this.y = random(height);
  this.vel = random(5);
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


  //methods (things the car does)
  this.display = function(){
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, 100, 50);
  }
  this.drive=function(){
    this.x = this.x + this.vel;
    if(this.x > width){
      this.x = 0;
    }
    this.y = this.y + this.vel;
    if(this.y>height){
      this.y=0;
    }
  }
}
