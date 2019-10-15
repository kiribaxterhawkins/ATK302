var song1;

function setup() {
  createCanvas(800,800);
  background(255);
  song1.play(); //always put the song.play in setup

}
function preload(){
    song1 = loadSound("assets/dcinoot-Memo.mp3");

}

function draw() {

}

function mouseReleased(){
  song1.stop();
}
