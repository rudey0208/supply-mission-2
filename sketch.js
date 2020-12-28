var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var leftSprite, leftBody, baseSprite, baseBody, rightSprite, rightBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 packagePos=width/2-100;
	 packageY=610
	 leftSprite=createSprite(packagePos, packageY, 20,100);
	 leftSprite.shapeColor="red";
	 leftBody=Bodies.rectangle(packagePos+20,packageY,20,100,{isStatic:true})
	 World.add(world,leftBody);
 
	 baseSprite=createSprite(packagePos+100, packageY+40, 200,20);
	 baseSprite.shapeColor="red";
	 baseBody=Bodies.rectangle(packagePos+100,packageY+40,200,20,{isStatic:true})
	 World.add(world,baseBody);
 
	 rightSprite=createSprite(packagePos+200, packageY, 20,100);
	 rightSprite.shapeColor="red";
	 rightBody=Bodies.rectangle(packagePos+180,packageY,20,100,{isStatic:true})
	 World.add(world,rightBody);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		 helicopterSprite.x=helicopterSprite.x-20;
		  translation={x:-20,y:0}
		   Matter.Body.translate(packageBody, translation) }
		    else if (keyCode === RIGHT_ARROW) {
				 helicopterSprite.x=helicopterSprite.x+20;
				  translation={x:20,y:0}
				   Matter.Body.translate(packageBody, translation) 
				        }
    else if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  

    
  }
}



