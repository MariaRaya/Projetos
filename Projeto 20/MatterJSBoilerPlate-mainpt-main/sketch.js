
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var bloco1;
var bloco2;
var bloco3;
var solo;


function setup() {
  createCanvas(800,700);

  engine = Engine.create();
  world = engine.world;
  
   var bloco1_options = {
    restitution: 0.5,
	friction: 0.02,
    frictionAir:0
  }

  var bloco2_options = {
    restitution: 0.7,
	friction: 0.01,
    frictionAir:0.1
  }

  var bloco3_options = {
    restitution: 0.01,
	friction: 1,
    frictionAir:0.3
  }

   
   var solo_options ={
     isStatic: true
   };
  
  
   bloco1 = Bodies.circle(400,10,10,bloco1_options);
   World.add(world, bloco1);

   bloco2 = Bodies.rectangle(110,50,60,50,bloco2_options);
   World.add(world, bloco2);

   bloco3 = Bodies.circle (600, 30, 20, bloco3_options);
   World.add(world, bloco3);

   solo = Bodies.rectangle(400,690,800,20,solo_options);
   World.add(world,solo);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  fill("blue");
  stroke(20);

  ellipse(bloco1.position.x,bloco1.position.y,10);
  ellipse(bloco3.position.x,bloco3.position.y,20);
  rect(bloco2.position.x,bloco2.position.y,60,50);

  fill("yellow");

  rect(solo.position.x,solo.position.y,800,20);
 
  

  
  
}




