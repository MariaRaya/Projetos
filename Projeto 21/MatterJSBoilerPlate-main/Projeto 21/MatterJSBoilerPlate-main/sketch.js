
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;
var ball; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(30, 50, 20, ball_options);
	World.add(world, ball);

	ground_ = new ground (width/2, 670, width*2, 20);
	ground1_ = new ground (780,10,width*2,20);
	ground2_ = new ground (790,350,20,height - 40);
	ground3_ = new ground (10,350,20,height - 40);
	leftSide = new ground(450,610,15,100);
	rigthSide = new ground (650,610, 15, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(50, 149, 168));
  
  fill("black");
  ellipse(ball.position.x, ball.position.y, 20);

  ground2_.show();
  ground3_.show();
  ground_.show();
  ground1_.show();
  leftSide.show();
  rigthSide.show();

  if (keyCode == UP_ARROW){
	força();
}
  
  drawSprites();
 
}

function força(){
	Body.applyForce(ball,{x:0,y:0},{x:1, y: 1});
}





