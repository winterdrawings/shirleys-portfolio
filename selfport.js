function setup() {
  createCanvas(600, 600);
  background(230, 230, 250);
 
}

function draw() {
  //hair
     fill (0); //blabk
    rect (125,90,350,550,200);
  
  //head
  fill(255, 208, 163);
  ellipse(300, 300 ,299, 375);
  
  //left eye
  fill(250);
  ellipse(230, 250, 50, 38);
  
   //left pupil - balck
  fill(0);
  ellipse(230, 250, 25, 30);
  
  //left iris- brown
  fill(139, 69, 19);
  circle(230, 250, 16);
  
  //right eye
  strokeWeight(0);
  fill(250);
  ellipse(360, 250, 50, 38);
  
  //right pupil
  fill(0);
  ellipse(362, 250, 25, 30);
  
  //right iris
  fill(139, 69, 19);
  circle(362, 250, 16);
  
   //nose
    stroke(1);
    noFill();
  
  //mouth
  fill(255, 182, 193);
  arc(300,370, 80, 40, 0, PI, CHORD)
}
