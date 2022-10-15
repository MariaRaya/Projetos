
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, left, right;
var personagem, personagemIMG;
var button;

function preload(){
 personagemIMG = loadImage("personagem.png");
}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  //Mantendo o objeto parado

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, 395, width * 2, 50, options);
  World.add(world, ground);

  left = Bodies.rectangle(0, 0, 20, height * 2, options);
  World.add(world, left);

  right = Bodies.rectangle(395, 0, 20, height * 2, options);
  World.add(world, right);

  personagem = Bodies.rectangle(200,380,50,50);
  World.add(world, personagem);

  button = createImg("button.png");
  button.position(50, 50);
  button.size(50, 50);
  button.mouseClicked(ar);
  
}


function draw() 
{
  background('white');
  Engine.update(engine);

  //Desenhando o chão na tela

  rect(ground.position.x, ground.position.y, width * 2, 50);
  rect(left.position.x, left.position.y, 20, height * 2);
  rect(right.position.x, right.position.y, 20, height * 2);
  
  //Desenhando o personagem na tela

  push();
  imageMode(CENTER)
  image(personagemIMG,personagem.position.x, personagem.position.y, 50, 50);
  pop();
}

function ar(){
  Matter.Body.applyForce(personagem,{x:0,y:0},{x:0,y:-0.1});
}

