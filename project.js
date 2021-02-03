// set up canvas with size
function setup() {
  createCanvas(400, 400);
}
// Stamp Maker

emotion = 0;
function draw(){
  background(0);
}
drawBackground();

function drawStamp() {
  strokeWeight(4);
  fill(255,255,0);
  ellipse(mouseX,mouseY,100,100);
  
  fill(0,0,0);
  ellipse(mouseX-20,mouseY-10,15,15);
  ellipse(mouseX+20,mouseY-10,15,15);
  
  noFill();
  strokeWeight(1);
  line(mouseX-3,mouseY-45, mouseX+2,mouseY-40);
  line(mouseX+2,mouseY-40,mouseX-2,mouseY-35);
  line(mouseX-2,mouseY-35, mouseX+2, mouseY-30);
  line(mouseX+2, mouseY-30, mouseX-2, mouseY - 20);
  
  
  ellipse(mouseX-20,mouseY-10,40,40);
  ellipse(mouseX+20,mouseY-10,40,40);
  
  if(emotion === 0){
    arc(mouseX,mouseY +20, 30,30,0,Math.PI);
  }
  
  if(emotion === 1){
    line (mouseX +20, mouseY +20,mouseX -20, mouseY +20);
  }
  if(emotion === 2){
    ellipse(mouseX,mouseY +30, 30,30);
  }
  
}

function mouseClicked(){
    drawStamp();
    emotion = Math.floor(random(3));
    
}
