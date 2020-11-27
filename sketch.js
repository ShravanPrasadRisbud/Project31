const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);

  plinko = createSprite();


}

function draw() {
  background(255,255,255);  
  drawSprites();

  //for particles
  for (var j = 0; j < particles.length; j++) 
  {
      particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) 
  {
      divisions[k].display();
  }
  
  //for particles
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2+10), 10,10));
  }


//for plinkos
  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }
}
