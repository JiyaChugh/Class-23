const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(200,height-20,400,20);
   box1=new Box(200,200,50,50);
   box2=new Box(240,100,40,80);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
   box1.display();
   box2.display();
}