var runner, runnerImage, edges;
var pathImage, path;

function preload(){  //Carrega a imagem
  runnerImage = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

// Estrada
  path = createSprite(197,200,400,600);
  path.addImage("ground",pathImage);
  path.scale = 0.8;

// Atleta
  runner = createSprite(200,350,20,50);
  runner.addAnimation("running", runnerImage); 
  runner.scale = 0.05;

  edges = createEdgeSprites();
}


function draw(){
  //definir a cor do plano de fundo 
  background(rgb(35, 94, 47));

  path.velocityY = 2;  //Movimento da estrada
  if(path.y > 400){
    path.y = path.height / 5;
  } 

// Movimento do atleta
  if(keyDown(RIGHT_ARROW)){
    runner.x = runner.x + 1;
  }

  if(keyDown(LEFT_ARROW)){
    runner.x = runner.x - 1;
  }

  if(keyDown(UP_ARROW)){
    runner.y = runner.y - 1;
  }

  if(keyDown(DOWN_ARROW)){
    runner.y = runner.y + 1;
  }

  if(runner.x >= 290){
    runner.x = 290;
  }

  if(runner.x <= 110){
    runner.x = 110;
  }

  if(runner.y <= -5){
    runner.y = 400;
  }

  drawSprites(); 

}

