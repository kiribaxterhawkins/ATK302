var ccar;


function setup() {
  createCanvas(800, 800);
  ccar= new Car();
}

function draw() {
  background(100);
  ccar.drive();
  ccar.display();

}

function Car(){
  //attributes
    this.x = random(width);

  //methods
    this.display=function(){
      rect(this.x, 100, 100, 80);
    }
    this.drive=function(){
      this.x=this.x+5;
      if (this.x>800) this.x=0;

    }
}
