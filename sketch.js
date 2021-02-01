
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

	stone=new Stone(230,300,6);
	stone.scale=0.3;
	
	mango1=new mango(1100,100,30);




	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();

  stone.display();
  groundObject.display();
}
