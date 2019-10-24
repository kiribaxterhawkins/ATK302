var salad = [];
var footPos;
var myState = 0;
var timer = 0;
var resetTheGame;
var foot, foots, footstomp;
var lettuce;
var lettuces = [];
var win, lose, title, floor;


function setup() {
  createCanvas(900, 700);


  lettuces[0] = loadImage("assets/lettuce1.png");
  lettuces[1] = loadImage("assets/lettuce2.png");
  lettuces[2] = loadImage("assets/lettuce3.png");

  for (var i = 0; i < 5; i++) { //how spawn
    salad.push(new Car());
  }
  footPos = createVector(width / 2, height - 10);
  foots = loadImage("assets/foot.png");
  footstomp = loadImage("assets/footstomp.png");
  lettuce = loadImage("assets/lettuce1.png");
  foot = foots;

  win = loadImage("assets/win.png");
  lose = loadImage("assets/loss.png");
  title = loadImage("assets/title.png");
  floor = loadImage("assets/floor.png");

  rectMode(CENTER); //or imagemode(CENTER);
  //imageMode(CENTER);
}
//list of ideas
//how to make object orient in direction of dkeys
//die when you run into certain objects
//it takes heath& makes a noise when you run into something, and when you run out of health you die
// how to make cars avoid you

function draw() {

  switch (myState) {
    case 0: //title screen
      //probably put a picture here
      image(title, 0, 0);
      break;

    case 1: //game

      game();


      timer++;
      if (timer > 600) {
        myState = 2;
        timer = 0;
      }
      break;

    case 2: //loosing condition
      image(lose, 0, 0);
      break;

    case 3: //winning condition
      image(win, 0, 0);
      break;
  }

}

function resetTheGame() {
  salad = []; //clear the array first
  for (var i = 0; i < 5; i++) { //you gotta spawn more cars bb
    salad.push(new Car());
    this.timer = 0;
  }
}

function Car() {

  this.lettuceNum = 0;
  this.timer = 0; //flap sequence
  this.maxTimer = random(5, 15); //flap at different rates
  this.pos = createVector(random(width), random(width));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  //"this is an engine type?" oh she means attribute


  //methods
  this.display = function() {
    //image(bird, this.pos.x, this.pos.y, 150,150);
    image(lettuces[this.lettuceNum], this.pos.x, this.pos.y, 100, 100);


    this.timer = this.timer + 1;

    if (this.timer > this.maxTimer) {
      this.lettuceNum = this.lettuceNum + 1;
      this.timer = 0;
      if (this.lettuceNum > lettuces.length - 1) this.lettuceNum = 0;
    }


  }
  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    foot = foots;
  }
  if (keyCode === RIGHT_ARROW) {
    foot = footstomp;
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) footPos.x = footPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) footPos.x = footPos.x + 5;
  if (keyIsDown(UP_ARROW)) footPos.y = footPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) footPos.y = footPos.y + 5;
} //movement

function game() {
  background(100);
  image(floor, 0, 0);
  for (var i = 0; i < salad.length; i++) {
    salad[i].drive();
    salad[i].display();
    //collision detection
    if (salad[i].pos.dist(footPos) < 50) {
      salad.splice(i, 1);
    }
  }
  if (salad.length == 0) {
    myState = 3; //they won!
    timer = 0;

  }
  //frog
  fill(47, 224, 94);
  //ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys(); //this moves the frog

  image(foot, footPos.x, footPos.y, 150, 150);
}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: //lose state
      myState = 0;
      resetTheGame();
      break;

    case 3: //win state
      myState = 0;
      resetTheGame();
      break;
  }
}
