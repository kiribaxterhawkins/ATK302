var font

function setup() {
  createCanvas(800,800);
  font = loadFont("assets/Great-Fighter-Demo.ttf");

}

function draw() {
  background(255);
  textFont(font, 50);
  text('woah whats good', 50, 50);
  fill('red');

  textSize(20);
  text('cool');
}
