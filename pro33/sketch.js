const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var snow = [];
var maxDrops = 100


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  snow1 = new snow(20,20,20)


  for(var i = 0; i<maxDrops; i++){
  snow.push(new snow(random(0,400),random(0,400),5))
  }
  
  
      
  }


}

function draw() {
  background(255,255,255);  
  drawSprites();
  snow1.display();
}
