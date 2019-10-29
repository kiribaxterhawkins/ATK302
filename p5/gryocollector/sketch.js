var cars = [];
var bunnyPos;
var alpha, beta, gamma; // orientation data
var bunnyImage;
var xPosition = 0;
var yPosition = 0;
var x = 0; // acceleration data
var y = 0;
var z = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER); //or imagemode(CENTER);
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  bunnyPos = createVector(width / 2, height - 10);


  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;

  bunnyImage = loadImage("assets/bunny.jpg");
}



function draw() {
  background('#c6f5ff'); // light blue
  bunnyPos.x = xPosition;
  bunnyPos.y = yPosition;

  image(bunnyImage, bunnyPos.x, bunnyPos.y, 50,50);
  //checkForKeys();

  push(); // before you use translate, rotate, or scale commands, push and then pop after
  translate(xPosition, yPosition); // move everything over by x,
  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad
  pop();

  for (var i = 0; i < cars.length; i++) {
    cars[i].drive();
    cars[i].display();
    //collision detection
    if (cars[i].pos.dist(bunnyPos) < 50) {
      cars.splice(i, 1);
    }
  }


  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  // DECORATIONS
// Just a bunch of text commands to display data coming in from addEventListeners
textAlign(LEFT);
textSize(20);
fill('black');
text("orientation data:", 25, 25);
textSize(15);
text("alpha: " + alpha, 25, 50);
text("beta: " + beta, 25, 70);
text("gamma: " + gamma, 25, 90);
textSize(20);
text("acceleration data:", 25, 125);
textSize(15);
text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
text("y = " + y.toFixed(2), 25, 170);
text("z = " + z.toFixed(4), 25, 190);

// MORE DECORATIONS - write that pretty ATK type on top.
fill('white');
noStroke();
textSize(300);
textAlign(CENTER);
text("atk", width / 2, height / 2);

}


function Car() {
  //attributes
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.pos = createVector(random(width), random(width));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  //methods
  this.display = function() {
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 80, 45);
    ellipse(this.pos.x - 15, this.pos.y + 30, 20, 20);
    ellipse(this.pos.x + 15, this.pos.y + 30, 20, 20);
  } //
  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}


// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
alpha = e.alpha;
beta = e.beta;
gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
// get accelerometer values
x = e.acceleration.x;
y = e.acceleration.y;
z = e.acceleration.z;
});
