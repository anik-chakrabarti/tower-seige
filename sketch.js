const Engine = Matter.Engine ;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body ;

var engine,world ;
var polygon, sling;
var block1, block2, block3, block4, block5, block6, block7 ;
var block8, block9, block10, block11, block12, block13, block14, block15, block16; 
var ground ;

function setup(){

    engine = Engine.create();
    world = engine.world;

    createCanvas(850,380) ;

    polygon = new Polygon(150,250);

    block1 = new Block(200,50,20,20);
    block2 = new Block(180,70,20,20);
    block3 = new Block(200,70,20,20);
    block4 = new Block(220,70,20,20);
    block5 = new Block(160,90,20,20);
    block6 = new Block(180,90,20,20);
    block7 = new Block(200,90,20,20);
    block8 = new Block(220,90,20,20);
    block9 = new Block(240,90,20,20);
    block10 = new Block(260,110,20,20);
    block11 = new Block(140,110,20,20);
    block12 = new Block(160,110,20,20);
    block13 = new Block(180,110,20,20);
    block14 = new Block(200,110,20,20);
    block15 = new Block(220,110,20,20);
    block16 = new Block(240,110,20,20);

    ground = new Ground(200,120,300,10);

    sling = new SlingShot(polygon.body,{x:200, y:250});

}

function draw(){
    background(0);
    Engine.update(engine);

    polygon.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    ground.display();

    sling.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}
