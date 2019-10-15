var song1;

function preload(){ //preload loads first and doesn't go onto setup before it's laoded
  song1=loadSound('assets/memo.mp3');
}


function setup() {
  createCanvas(800, 800);
  song1.play();

}

function mouseReleased(){
  if (song1.isPlaying())
  {
    song1.pause();
  }
  else{
      song1.play();
    }}
