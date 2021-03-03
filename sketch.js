
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var hammer1;
var stone1;
var iron1;
var rubber1,ground1;


function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//.Create the Bodies Here.
	Engine.run(engine);
	hammer1 = new Hammer(100,mouseY,120,40);
	stone1 = new Stone(200,mouseY,100,100);
	rubber1 = new Rubber(350,height-50,50);
	iron1 = new Iron(100,mouseY,400,10);
	ground1 = new Ground(10,height,800,10);	

	
}


function draw() {
  rectMode(CENTER);
  background(220);
  hammer1.x=mouseX;
  hammer1.y=mouseY;	
  
  Engine.update(engine);
  //strokeWeight(4);
  hammer1.display();
  stone1.display();
  rubber1.display();
  iron1.display();
  ground1.display();
  
}



