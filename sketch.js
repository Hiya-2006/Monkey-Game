

var banana ,bananaImage,  obstacleImage
var monkey , monkey_running
var FoodGroup, obstacleGroup
var score, ground
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  

  
}



function setup() {
  createCanvas(600, 400);
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  
 
  
   FoodGroup=new Group();
  obstacleGroup=new Group();

  
}


function draw() {
   
  background("white");
  ground.x=ground.width/2
  //stroke("white")
  //textSize(20)
  //fill("white")
  //text("Score: "+ score,500,500)
  
  stroke("black")
  textSize(20)
  fill("black")
  //doubt to be asked
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime, 100, 50)
  
  
if(keyDown("space")&& monkey.y >= 200){
   monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
   monkey.collide(ground);
  SpawnFoodGroup();
  obstacles();
   drawSprites();
}

function SpawnFoodGroup(){
  if (frameCount % 80 === 0) {
    var food = createSprite(600,120,40,10);
    food.y = Math.round(random(120,200)); 
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    food.lifetime=200
    FoodGroup.add(food);
    food.depth = monkey.depth;
    monkey.depth = food.depth + 1;
}
}

function obstacles()
{
   if(frameCount % 300 === 0) 
   {
    var obstacle = createSprite(600,310,10,40);
    obstacle.velocityX = -4
     obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2;
    obstacle.lifetime = 210;
    obstacleGroup.add(obstacle);
   
    }

}




