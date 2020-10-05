const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,100);
    box2 = new Box(920,320,70,100);
    
    pig1 = new Pig(810,350);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    
    //box5 = new Box(920,220,70,70);
    //pig2 =new Pig(150,150);
    //log1 =new Log(810,220,90,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    //pig2.display();
log1.display();
}