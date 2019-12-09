var font

function setup() {
  createCanvas(800,800);
  font = loadFont("assets/Playbook-Fill.otf");

}

function draw() {
  background(0);
  //textFont(font, 100);
  text('woah whats good', 50, 50,100);
  fill('red');

  textSize(20);
  text('cool');
}
