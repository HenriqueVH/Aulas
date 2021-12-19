//referencia para bibliotecas p5.js: https://p5js.org/libraries/

var dino, dinoImg, dinoAnima;  
var bordas;
var solo, soloImg;
var soloInvi;
var nuvem;

function preload(){
  dinoImg = loadImage("trex1.png");
  dinoAnima = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  soloImg = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200);
  
  dino = createSprite(60, 140, 30, 50);
  //dino.addImage(dinoImg);
  dino.addAnimation("correndo", dinoAnima);
  dino.scale = 0.6;
  bordas = createEdgeSprites();
  
  solo = createSprite(110, 190, 200, 20);
  solo.velocityX = -4;
  solo.addImage(soloImg);

  soloInv = createSprite(110, 196, 200, 3);
  soloInv.visible = false;

  nuvem = createSprite(600, random(0, 115), 50, 30);
  nuvem.velocityX = -1;
}

function draw(){
  background("white");
  drawSprites();
  // controles dino :
  if(keyDown("space")){
    dino.velocityY = -10;
  }
  //dino.velocityY = dino.velocityY + 0.8;
  dino.velocityY += 0.8;
  //dino.collide(bordas[3]);
  dino.collide(soloInv);
  console.log(solo.x);
  //atividade: fazer o solo ser reiniciado -> solo infinito!!!
  if (solo.x <= 0){
    solo.x = solo.width/2;
  }
  //console.log(frameCount);
  if(frameCount%150 === 0){
  nuvem = createSprite(600, random(0, 115), 50, 30);
  nuvem.velocityX = -1;
  }
  textSize(24);
  text(mouseX+","+mouseY, mouseX, mouseY);
    
}