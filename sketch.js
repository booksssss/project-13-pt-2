var bow , arrow,  background, red, Redbg, Bluebg, Greenbg, Pinkbg;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  
  
  
  
  
  
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  // textSize(20);
  // text("Score:  " +score,50,375);
  
  Redbg = createGroup();
  Bluebg = createGroup();
  Greenbg = createGroup();
  Pinkbg = createGroup();
  arrowGroup = createGroup();
  // balloonsGroup.add(red);
  // balloonsGroup.add(blue);
  // balloonsGroup

}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
    
    
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,5));
  
  if (World.frameCount % 60 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    
  }
  else if (select_balloon == 2) {
    blueBalloon();
  }
  else if (select_balloon == 3) {
    greenBalloon();
  }
  else { 
    pinkBalloon()
  }


  
}
if (Redbg.isTouching(arrowGroup) ) {
  score = score+1 
  Redbg.destroyEach()
  arrowGroup.destroyEach()
}
if (Bluebg.isTouching(arrowGroup) ) {
  score = score+2
  Bluebg.destroyEach()
  arrowGroup.destroyEach()
}

if (Pinkbg.isTouching(arrowGroup) ) {
  score = score+1.5
  Pinkbg.destroyEach()
  arrowGroup.destroyEach()
}

if (Greenbg.isTouching(arrowGroup) ) {
  score = score+2.5
  Greenbg.destroyEach()
  arrowGroup.destroyEach()
}
drawSprites();
textSize(20);
    text ("Score: "+score, 200,20);
 }


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}



function redBalloon() {
   red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  Redbg.add(red);
 

}

function blueBalloon() {
   blue = createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale =0.1
  Bluebg.add(blue);
  
}

function greenBalloon() {
   green = createSprite(5,Math.round(random(20,370)),10,10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale =0.1
  Greenbg.add(green);
}
function pinkBalloon() {
   pink = createSprite(5,Math.round(random(20,370)),10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 4;
  pink.lifetime = 150;
  pink.scale =1.3
  Pinkbg.add(pink);

}
// drawSprites();
// textSize(20);
//     text ("Score: "+score, 200,20);
//  }


 