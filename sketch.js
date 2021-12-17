var hue;
var rainbow = true;
var rate = 1;
let button;
let img;
let c = color(255, 204, 0);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  hue = 0;

  button = createButton("Export My Art");
  button.mousePressed(art);








  // button = createButton("Red");
  // button.mouseClicked(red);

  // button = createButton("Orange");
  // button.mouseClicked(orange);

}

function art(){
  noLoop();
  save("My-Art");
}

function red(){
  colorMode(HSL, 360);
  noStroke();
  fill(0, 200, 200);
  ellipse(mouseX, mouseY, 50, 50);
}

// function orange(){
//   if (mouseIsPressed === true) {
//   colorMode(hsl,);
//   noStroke();
//   fill();
//   ellipse(mouseX, mouseY, 25, 25);
// }

// function draw() {


// }

function orange(){
  rect()
}






function mouseDragged() {

  // if (rainbow) {
  //   if (hue > 360) {
  //       hue = 0;
  //   } else {
  //       hue += rate;
  //   }
  // }

  colorMode(HSL, 360);
  noStroke();
  fill(0);
  ellipse(mouseX, mouseY, 25, 25);
}


// function keyPressed() {
//   if (keyCode == 82) {
//     hue = 0;
//     rainbow = false;
//   }
//   if (keyCode == 71) {
//     hue = 125;
//     rainbow = false;
//   }
//   if (keyCode == 66) {
//     hue = 200;
//     rainbow = false;
//   }
//   if (keyCode == 32) {
//     rainbow = true;
//     rate *= 2;
//   }
// }




