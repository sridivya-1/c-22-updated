const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,object;
function setup() {
   var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
   var object_options = {
     isStatic : true
   }
object = Bodies.rectangle(200,100,50,50,object_options);
World.add(world,object);
console.log(object);


 
}

function draw() {
  background(255,255,255);  
  rectMode(CENTER);
  Engine.update(engine);
  rect(object.position.x,object.position.y,50,50);
  drawSprites();
}