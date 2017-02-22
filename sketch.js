var ang;
var col;


function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
  frameRate(24);
  background(0);
  colorMode(RGB);
}

function draw() {
  translate(width/2,height/2);
  
   from = color(0,0,255);
   to = color(255,0,0);


  push();
  rotate(frameCount*5);
  noFill();
  stroke(lerpColor(to,from, (frameCount%240)/240));
  rect(0, 0, 150, 150);
  pop();

    for(ang=0;ang<360;ang+=60)
    {
      for(var i=0;i<=1; i+=1/6){
        
        col=(lerpColor(from, to, i));
        
        wheel(ang,col);
      }
    }

}

function wheel(ang,col){
  rotate(ang);
 stroke(col);
  line(0,0,100*cos(frameCount*5)+130,100*sin(frameCount*5)+130);
  
}



