
function setup() {
  createCanvas(400,400);
  background(rgb(231, 215, 245));
  box = createSprite(200,200,30,30);
}

function draw() {

  if (keyIsDown(RIGHT_ARROW)){
    background(rgb(31, 1, 56));
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    background(rgb(91, 5, 163));
    
  }
 
    if (keyIsDown(UP_ARROW)) {
    background(rgb(123, 4, 222));
   
  }

  if (keyIsDown(DOWN_ARROW)) {
    background(rgb(184, 99, 255));
  }
  
  drawSprites();
}

