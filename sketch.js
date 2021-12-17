var hue;
// var rainbow = true;
var rate = 1;
let button;

let colorPicker;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  hue = 0;

  button = createButton("Export Art");
  button.mousePressed(art);

  button = createButton("Clear");
  button.mousePressed(clearButton);

  colorPicker = createColorPicker('#0f131a');
  colorPicker.mouseClicked(cP);

  // button = createButton("Red");
  // button.mouseClicked(red);

  // button = createButton("Orange");
  // button.mouseClicked(orange);

}

function art(){
  noLoop();
  save("My-Art");
}

function clearButton(){
  clear()
  background("white")
}

// function red(){
//   colorMode(HSL, 360);
//   noStroke();
//   fill(0, 200, 200);
//   ellipse(mouseX, mouseY, 50, 50);
// }

// function draw() {


// }




function cP(){
  (colorPicker.color());
  colorPicker.mouseClicked();
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




