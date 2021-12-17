// var brushColor;
// let slider;
// let strokeType //= ROUND;

// function draw() {
//  if (mouseIsPressed) {
//    if (mouseX <= 50) {
//      if (mouseY <= 50) {
//        brushColor = color(0, 0, 255);
//      } else if (mouseY <= 100) {
//        brushColor = color(66, 244, 194);
//      } else if (mouseY <= 150) {
//        brushColor = color(255, 0, 199);
//      } else if (mouseY <= 200) {
//        brushColor = color(249, 99, 0);
//      } else if (mouseY <= 250) {
//        strokeType = PROJECT;
//      } else if (mouseY <= 300) {
//        strokeType = ROUND;
//     }
//    }
//    strokeCap(strokeType)
//    push();
//    strokeWeight(slider.value())
//    stroke(brushColor)
//    line(mouseX, mouseY, pmouseX, pmouseY);
//    pop();
//  }

//  //noStroke();
//  //start coding for your color squares here!
//  stroke(color(0));
//  fill(0, 0, 255);
//  rect(0, 0, 50, 50);
//  fill(66, 244, 194);
//  rect(0, 50, 50, 50);
//  fill(255, 0, 199);
//  rect(0, 100, 50, 50);
//  fill(249, 99, 0);
//  rect(0, 150, 50, 50)

//  fill(255);
//  rect(0,200,50,50)
//   fill(brushColor);
//  rect(12.5,212.5,25,25)
// fill(255);
//  rect(0,250,50,50)
//   fill(brushColor);
//  ellipse(25,275,25,25)
//  print(brushColor);

// }














var rate = 1;
let button;






var brushColor;
let slider;
let strokeType //= ROUND;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  hue = 0;

  button = createButton("Export Art");
  button.mousePressed(art);

  button = createButton("Clear");
  button.mousePressed(clearButton);

  // colorPicker = createColorPicker('#0f131a');
  // colorPicker.mouseClicked(cP);








  brushColor = color(50);
  slider = createSlider(0, 50, 1);
  slider.position(50, 10);
  slider.style('width', '250px');
  strokeType = ROUND;


}

function art(){
  noLoop();
  save("My-Art");
}

function clearButton(){
  clear()
  background("white")
}




// function cP(){
//   (colorPicker.color());
//   // colorPicker.mouseClicked();
// }



function mouseDragged() {
 if (mouseIsPressed) {
   if (mouseX <= 100) {
     if (mouseY <= 100) {
       brushColor = color("#e23030");
     } else if (mouseY <= 100) {
       brushColor = color("#f7a538");
     } else if (mouseY <= 150) {
       brushColor = color("#feef57");
     } else if (mouseY <= 200) {
       brushColor = color("#379444");
     } else if (mouseY <= 250) {
       brushColor = color("#49bcdc");
     } else if (mouseY <= 250) {
       brushColor = color("#b793c4");
     } else if (mouseY <= 250) {
       brushColor = color("#ef9cc6");
     } else if (mouseY <= 250) {



       strokeType = PROJECT;
     } else if (mouseY <= 300) {
       strokeType = ROUND;
    }
   }
   strokeCap(strokeType)
   push();
   strokeWeight(slider.value())
   stroke(brushColor)
   line(mouseX, mouseY, pmouseX, pmouseY);
   pop();
 }

  stroke(color("black"));
 fill("#e23030");         //red
 rect(0, 0, 50, 50);

 fill("#f7a538");         //orange
 rect(0, 50, 50, 50);

 fill("#feef57");         //yellow
 rect(0, 100, 50, 50);

 fill("#379444");         //green
 rect(0, 150, 50, 50)

 fill("#49bcdc");         //blue
 rect(0, 200, 50, 50)

 fill("#b793c4");         //purple
 rect(0, 250, 50, 50)

 fill("#ef9cc6");         //pink
 rect(0, 300, 50, 50)




  fill(255);
  rect(0,200,50,50)
  fill(brushColor);

  rect(12.5,212.5,25,25)
  fill(255);
  rect(0,250,50,50)

  fill(brushColor);
  ellipse(25,275,25,25)
  print(brushColor);


  // if (rainbow) {
  //   if (hue > 360) {
  //       hue = 0;
  //   } else {
  //       hue += rate;
  //   }
  // }

  // colorMode(HSL, 360);
  // noStroke();
  // fill(0);
  // ellipse(mouseX, mouseY, 25, 25);
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




