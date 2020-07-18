var Graphix,s;

function setup(){
    createCanvas(windowWidth, windowHeight);
    Graphix = createGraphics(windowWidth, windowHeight);
    Graphix.background(255);
}
function draw(){
  r = map(pwinMouseY, 0, windowWidth, 0, 255);
  g = map(pwinMouseX, 0, windowWidth, 0, 255);
  b = map(pwinMouseX, 0, windowWidth, 0, 255);
  if (mouseIsPressed){
     Graphix.stroke(r,g,b);

     if(keyDown("1")){
       s=1;
       Graphix.strokeWeight(s);
     }
     if(keyDown("2")){
      s=4;
      Graphix.strokeWeight(s);
    }
    if(keyDown("3")){
      s=8;
      Graphix.strokeWeight(s);
    }
    if(keyDown("4")){
      s=12;
      Graphix.strokeWeight(s);
    }
    if(keyDown("5")){
      s=16;
      Graphix.strokeWeight(s);
    }
    if(keyDown("6")){
      s=20;
      Graphix.strokeWeight(s);
    }
    if(keyDown("7")){
      s=24;
      Graphix.strokeWeight(s);
    }
    if(keyDown("8")){
      s=28;
      Graphix.strokeWeight(s);
    }
    if(keyDown("9")){
      s=32;
      Graphix.strokeWeight(s);
    }
     Graphix.line(mouseX,mouseY,pwinMouseX,pwinMouseY);
     
  }
  image(Graphix,0,0);
  if(keyDown("space")){
    Graphix.background(255);
  }
}