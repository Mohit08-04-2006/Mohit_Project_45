var alienship, alienImg1, alienImg2, alienImg3;
var bg, bg_img;
var blast;
var jet, jetImg;
var laser, bluel, redl, greenl, orangel;

function preload(){
  blast = loadAnimation("Images/Blast_(1).png","Images/Blast_(2).png","Images/Blast_(3).png","Images/Blast_(4).png","Images/Blast_(5).png","Images/Blast_(6).png","Images/Blast_(7).png","Images/Blast_(8).png","Images/Blast_(9).png");
  alienImg1 = loadImage("Images/Alienship1.png");
  alienImg2 = loadImage("Images/Alienship2.png");
  alienImg3 = loadImage("Images/Alienship3.png");
  bg_img = loadImage("Images/bkImg.png");
  jetImg = loadImage("Images/jet.png");
  bluel = loadImage("Images/blueLaser.png");
  redl = loadImage("Images/redLaser.png");
  greenl = loadImage("Images/greenLaser.png");
  orangel = loadImage("Images/orangeLaser.png");

}

function setup() {
 createCanvas(displayWidth,displayHeight);
 bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
 bg.addImage(bg_img);
 bg.velocityY = 6;

 jet = createSprite(displayWidth/2,displayHeight-180,30,40);
 jet.addImage(jetImg);
 jet.scale = 0.08;

}

function draw() {
  background(22,14,71);

 if (bg.y>displayHeight*3){
    bg.y = displayHeight/2;
 }

 jet.x = mouseX;

 spawnAliens();
  
  drawSprites()
  fill("green");
  textSize(20);
  text("x="+mouseX,displayWidth-200,displayHeight-250);
  text("y="+mouseY,displayWidth-200,displayHeight-220);

}

function spawnAliens(){
  if (frameCount%100 == 0){
     alienship = createSprite(random(displayWidth-1100,displayWidth-150),0,30,40);
     alienship.velocityY = 6;
     var rand = Math.round(random(1,3));

     switch (rand){
       case 1: alienship.addImage(alienImg1);
               alienship.scale = 0.08;
       break;
       case 2: alienship.addImage(alienImg2);
               alienship.scale = 0.08;
       break;
       case 3: alienship.addImage(alienImg3);
               alienship.scale = 0.08;
       break;
     }

     alienship.lifetime = 75;
  }

}