
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}
	

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(20,650,2500,30);

	bin = new Bin(800,520,100,20);
	
		

	Engine.run(engine);
    paper1 = new Paper(150,450,40);
}


function draw() {
	background("white");
	Engine.update(engine);
  rectMode(CENTER);
 // background(0);
  ground.display();
  bin.display();
  paper1.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:128,y:-175});
  
	}
}
