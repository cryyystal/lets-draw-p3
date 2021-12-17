

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













// Drawing mechanism & colour bar help from:
//https://stackoverflow.com/questions/69482566/how-to-paint-in-p5-js-with-switching-the-paint-brushes
var rate = 1;
let button;

var brushColor;
let slider;
let strokeType

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");

  button = createButton("Export Art");
  button.mousePressed(art);

  button = createButton("Clear");
  button.mousePressed(clearButton);

  brushColor = color(50);
  slider = createSlider(0, 50, 1);
  slider.position(450, 985);
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


//you might have to click a colour multiple times cause it doesn't respond immediately
function mouseDragged() {
 if (mouseIsPressed) {
   if (mouseX <= 50) {
     if (mouseY <= 50) {
       brushColor = color("#e23030");   //red
     } else if (mouseY <= 100) {
       brushColor = color("#f7a538");   //orange
     } else if (mouseY <= 150) {
       brushColor = color("#feef57");   //yellow
     } else if (mouseY <= 200) {
       brushColor = color("#379444");   //green
     } else if (mouseY <= 250) {
       brushColor = color("#49bcdc");   //blue
     } else if (mouseY <= 300) {
       brushColor = color("#b793c4");   //purple
     } else if (mouseY <= 350) {
       brushColor = color("#ef9cc6");   //pink
     } else if (mouseY <= 400) {
       brushColor = color("white");     //white
     } else if (mouseY <= 450) {
       brushColor = color("#0f131a");   //black
     } else if (mouseY <= 500) {
       brushColor = color("#878787");   //grey
     } else if (mouseY <= 550) {




       strokeType = PROJECT;
     } else if (mouseY <= 600) {
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

 fill("white");           //white
 rect(0, 350, 50, 50)

  fill("#0f131a");        //black
 rect(0, 400, 50, 50)

  fill("#878787");        //grey
 rect(0, 450, 50, 50)




  fill(255);
  rect(0,500,50,50)
  fill(brushColor);

  rect(12.5,512.5,25,25)
  fill(255);
  rect(0,550,50,50)

  fill(brushColor);
  ellipse(25,575,25,25)
  print(brushColor);

}



