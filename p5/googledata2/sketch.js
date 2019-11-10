var namesArray = [];
var bana;
var font;
var hot;


function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1s8NDPj9Vi07EOPw-Rz05uOTBHHHfbcKS0r8DY_J4_Ag'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(800,600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);


  hot = loadImage("assets/dog.jpg");
  bana = loadImage("assets/banan.jpg");
  font = loadFont("assets/OVERLOAB.ttf");
}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].Name, data[i].food)) ;
   }

}


function draw() {
  background('blue');

  // // iterate through the namesArray and display the objects!
  for (let i = 0 ; i < namesArray.length ; i++) {
    namesArray[i].display() ;
  }

}


// my circle class
function Circle(myName, myFood) {
  this.pos = createVector(random(width), random(height));
  this.name = myName;
  this.food = myFood;


  this.display = function() {
    if (this.food == "banana"){
    image(bana, this.pos.x, this.pos.y, 100, 100);
  } else{
    image(hot, this.pos.x, this.pos.y, 100, 100);
  }
    fill('red');
    textFont(font, 20);
    text(this.name, this.pos.x, this.pos.y);
  }

}
