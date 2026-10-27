let currentkey = '1';
let bgc;
let gkcount;
let poscount;
let s;
let h;
let c;
let rx = 400;
let ry = 300;

function preload() {

  h = loadImage("images/wave.png");

}


function setup() {
    createCanvas(800, 600);
    background(255);
    smooth();

    gkcount = 20;

  /////   COLOR PICKER   /////
  myPicker = createColorPicker(255);
  myPicker.position(800,250);
  myPicker.size(75,50);

  /////   SIZE SLIDER   /////
  slider = createSlider(1,100);
  slider.position(450,280);
  slider.size(300);

    bgc = color(255);
    gkcount = 20;
    // poscount = 0;

}

function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
      clear_print();
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
    }
}

function keyPressed() {
  // finding the key choice even if you down click on mouse.
currentkey = key;

}

 // wrapper function ( no parameters or arguments )
function drawChoice() {

  /*
   the key mapping if statements that you can change to do anything you want.
   just make sure each key option has the a stroke or fill and then what type of 
   graphic function. The 'key' global property contains whatever key was last pressed
  */
 // if the key has a actual key value , we update currentkey
 
 if (key == "") {
   console.log("Hi " + currentkey);
  } else {
    currentkey = key;
  }

   let c = myPicker.color();

switch(currentkey) {
case '1':
  console.log("1");  // black line
  drawline(color(c), mouseX, mouseY, pmouseX, pmouseY);

  break;
case '2':
  console.log("2");  // teal line (standard)
  drawline(color("teal"), mouseX, mouseY, pmouseX, pmouseY);
  break;


case '3':
  console.log("3");  //wave brush (my own brush)
  wwavebrush(color(c), mouseX, mouseY);
  break;


case '4':
  console.log("4");  // air brush (own brush)

  wairbrush(color(c), mouseX, mouseY);
  break;


case '5':
  console.log("5");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;


case '6':
    console.log("6");  // example
    drawFatLine(color(c), mouseX, mouseY);

    if (gkcount > 50 ) {
        // resetting the size
        gkcount = 1;
    } else {
       // making bigger
        gkcount+= .5;
    }

 break;

default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

function drawline( k,  lx, ly,  px, py) {
  
  let s = slider.value();
  strokeWeight(s);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}

function drawFatLine( k,  lx, ly,  px, py) {
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py);
}

function speedLine(k,  lx, ly) {
   let s = slider.value();
  console.log("Size is " + s);
  
  if (frameCount % 240 == 0 || frameCount == 0) {
    rx = random(width);
    ry = random(height);
  }

  if (frameCount % 5 == 0) {
    strokeWeight(s/3);
    stroke(k);
    line(lx,ly, rx,ry);
  }
}


function wwavebrush(k, lx,ly) {

  let s = slider.value();
  console.log("Size is " + s);

  tint(k);
  image(h, lx - s/2,ly - s/2, s,s);
 

}

function wairbrush( k,  lx, ly) {

  let s = slider.value();
  console.log("Size is " + s);
  
  fill(k,100);
  noStroke();
  for (let i = 0; i < 100; i++) {
    ellipse(lx + random(-s,s),ly + random(-s,s),1);
  }

}


function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}




function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }

}
