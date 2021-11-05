const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let ground;
let lander;
var lander_img;
var bg_img;
var astronaut 
var edges
var engine;
var world ;

var point = 0; 

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
 
}

function setup() {
  createCanvas(windowWidth , windowHeight);
 
  engine = Engine.create();
  world = engine.world;

  frameRate(80);

  lander = createSprite(100,500,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  ground = createSprite(500,540,2000,10);

  astronaut = new Astro(710,450,50,50);



  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  
  background(51);
  image(bg_img,0,0);

ground.visible = false ;

bg_img.scale = 200;
  push()
  fill(255);
  
  pop();

  if(keyWentDown("SPACE")){
    lander.velocityY = 0 ;
    lander.velocityX = 0 ;
  }
edges=createEdgeSprites();

lander.bounceOff [0];
lander.bounceOff[1];
lander.bounceOff[2];
lander.bounceOff[3];

  if(keyWentDown(DOWN_ARROW)){
    lander.velocityY =  2 ;
     }

     if(keyWentDown(RIGHT_ARROW)){
      lander.velocityX = 2 ;
      
       }

       if(keyWentDown(LEFT_ARROW)){
        lander.velocityX = -2 ;
         }

  if(keyWentDown(UP_ARROW) ){
 lander.velocityY = -3 ; 
  }

  if(lander.y  <5){
    lander.velocityY=lander.velocityY+0.08
  }

  if(lander.x >200 && lander.x < 220 && lander.y > 160 && lander.y < 170){
lander.destroy();
textSize(20)
fill("White")
text("Game Over" , 500,200)

 }

 if(lander.x >705 && lander.x < 715 && lander.y > 445 && lander.y < 455){
  astronaut.destroy();

  point = point+1 ;
  textSize (15) ; 
  fill("White");
  text("Astronauts Onboard " ,+point , 200,200)
  
   }

  
console.log(lander.x,lander.y) ;
  //fall down
 // vy +=g;
//  lander.position.y+=vy;

lander.collide(ground);
//camera.position.x = windowWidth

astronaut.display() ;

  drawSprites();
}


