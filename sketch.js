
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	boyImg=loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;

	ground1=new Ground(400,495,800,10);
  //tree1=new Tree(600,250,400,480);
  tree1=new Tree(550,250,230,230);
 
	mango1=new Mango(550,100,30);
	mango2=new Mango(550,200,40);
	mango3=new Mango(650,160,40);
	mango4=new Mango(450,220,35);
	mango5=new Mango(500,150,35);
  mango6=new Mango(720,190,35);
  
  stone1=new Stone(140,400,30);

  launcher=new Launcher(stone1.body,{x:140,y:330});
	Engine.run(engine);
  
}


function draw() {
  background("lightgray");
 // Engine.update(engine);
  drawSprites();
 
  textSize(20);
  fill("black")
  text("Press Space to get another Chance to Play!!",50 ,50);

  ground1.display();
  image(boyImg,100,250,200,300);

  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

 
stone1.display();
  
launcher.display();

detectCollision(stone1,mango1);
detectCollision(stone1,mango2);
detectCollision(stone1,mango3);
detectCollision(stone1,mango4);
detectCollision(stone1,mango5);
detectCollision(stone1,mango6);
}

function mouseDragged(){
  Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function detectCollision(vstone,vmango){
  var mangopos=vmango.body.position;
  var stonepos=vstone.body.position;

  var distance=dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y);

  if(distance<=vmango.radius+vstone.radius){
    Matter.Body.setStatic(vmango.body,false);
  }
}

function keyPressed(){
  if(keyCode===32){
    launcher.attach();
  }
}