const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){

}
function setup(){
    createCanvas(800,700);
    engine=Engine.create();
    world=engine.world;

    leftpart=new Dustbin(750,650,25,80);
    rightpart=new Dustbin(750,700,25,80);
    middlepart=new Dustbin(750,675,25,80);
    paper= new Paper(100,350,20,20);
    launcher1 = new Launcher(paper.body,{x:200,y:50});
    ground=new Ground(400,700,800,10);

}



function draw(){
   background("white");
Engine.update(engine);
leftpart.display();
ground.display();
    launcher1.display();
    paper.display();
    rightpart.display();
    middlepart.display();
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
   launcher1.fly();
}
function keyPressed(){
    if(keyCode===32){
        Launcher.attach(Paper.body)
    }
}
