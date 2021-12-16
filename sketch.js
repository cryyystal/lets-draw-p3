

var hue;
var rainbow = true;
var rate = 1;
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  hue = 0;

  button = createButton("Export My Masterpiece");
  button.mousePressed(masterpiece);

}

function masterpiece(){
  noLoop();
  save("My-Masterpiece");
}





function draw() {


}











function mouseDragged() {
  if (rainbow) {
    if (hue > 360) {
        hue = 0;
    } else {
        hue += rate;
    }
  }
  colorMode(HSL, 360);
  noStroke();
  fill(hue, 200, 200);
  ellipse(mouseX, mouseY, 25, 25);
}

function keyPressed() {
  if (keyCode == 82) {
    hue = 0;
    rainbow = false;
  }
  if (keyCode == 71) {
    hue = 125;
    rainbow = false;
  }
  if (keyCode == 66) {
    hue = 200;
    rainbow = false;
  }
  if (keyCode == 32) {
    rainbow = true;
    rate *= 2;
  }
}




