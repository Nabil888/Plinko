const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var divisions = [];
var particles = [];
var plinkos = [];
var divisionHeight = 300;
function preload(){

}

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,790,480,20);
  for(var i = 0; i<= width; i+=80){
    divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight))
  }
  for(var l = 40; l<=width; l+=50){
    plinkos.push(new Plinko(l,75));
  }

  for(var l = 15; l<=width-10; l+=50){
    plinkos.push(new Plinko(l,175));
  }
  for(var l = 40; l<= width;l+=50){
    plinkos.push(new Plinko(l,275));
  }
  for(var l = 15; l<= width-10;l+=50){
    plinkos.push(new Plinko(l,375));
  }
  
}
  

function draw() {
  background(0);  
  
  Engine.update(engine);

  if(frameCount%40 === 0){
    particles.push(new Particle(random(width/2-100,width/2+100),10,10));
  }
  for (var i = 0; i<divisions.length;i++){
    divisions[i].display();
  }
  ground.display();
  for(var l = 0; l<plinkos.length; l++){
    plinkos[l].display();
  }
  for(var j = 0; j<particles.length;j+=1){
  particles[j].display();
  }
}