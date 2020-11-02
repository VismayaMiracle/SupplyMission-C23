var helicopterIMG,helicopter;
var package,ground;
var rectangle1,rectangle2,rectangle3;
var engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload(){
	helicopterIMG=loadImage("helicopter.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	

	rectangle1= new Rectangle(300,640,20,100) //  adjusted the position-okk
	rectangle2= new Rectangle (400,680,200,20)
	rectangle3= new Rectangle(500,640,20,100)
	

	package = new Package(400,200)

	ground = new Rectangle(width/2,690,width,20)
		
 helicopter = createSprite(400,200,30,30)
 helicopter.addImage(helicopterIMG)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	
fill("brown")
 ground.display();

 fill ('red')
 rectangle1.display()
 rectangle2.display()
 rectangle3.display()

 package.display()
 
 keyPressed();

 drawSprites();
 
//image(helicopterIMG,width/2 , 200 , 250 ,100) //adjusted according to the size of helicopter needed
}


function keyPressed() {
 package.release();


 if (keyCode === LEFT_ARROW) {
  helicopter.x=helicopter.x-2;

  }

   if (keyCode === RIGHT_ARROW) {
	helicopter.x=helicopter.x+2;
  }
}

 if (keyCode === LEFT_ARROW) {
  helicopter.x=helicopter.x-2;

  }

   if (keyCode === RIGHT_ARROW) {
	helicopter.x=helicopter.x+2;
  }


  
  
  