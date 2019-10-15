var yoda

function setup() {
  createCanvas(800,800);
  yoda = loadImage("assets/yoda.png");
}

function draw() {
  tint(0, 153, 204);
  image(yoda,0,0);

}
