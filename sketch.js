var bg,doctorImg;
var virusImg,scp1Img,scp2Img,scaryPplImg;
var maskImg;
var life=0;
var maskGroup,virusGroup;

function preload(){
  bg=loadImage("hospital.jpg");
doctorImg=loadAnimation("doctor1.png","doctor2.png","doctor1.png");
scaryPplImg = loadAnimation("scp1.png","scp12.png");
virusImg=loadImage("virus.png");
//sp1Img=loadImage("sp1.png");
//sp2Img=loadImage("sp2.png");
maskImg=loadImage("mask.png");
}
function setup(){
 var canvas = createCanvas(800,800);

/*bg = createSprite(200,200);
bg.addImage("background.png");*/

doctor = createSprite(190, displayHeight - 200);
doctor.addAnimation("running",doctorImg);
doctor.scale=1;

virusGroup = new Group();
maskGroup = new Group();
scpGroup = new Group();

}





function draw() {
  background(bg);
createVirus();
createMask();
createScaryPpl();

doctor.velocityX=0;
if(keyDown(LEFT_ARROW)){
  doctor.velocityX=-1;
  
}
if(keyDown(RIGHT_ARROW)){
  doctor.velocityX=1;
  
}

if (virusGroup.isTouching(doctor)){
life = life - 1
}


if(maskGroup.isTouching(doctor)){
  life = life + 1;
}




  drawSprites();
  textSize(20);
  fill("blue");
  text("Life: "+ life,700,30);
}

function createVirus(){
  if(World.frameCount%50===0){
    var virus=createSprite(100,0,10,50);
    virus.addImage(virusImg);
    virus.scale=0.1;
    virus.x=Math.round(random(10,700));
    virus.velocityY=5;
    virus.lifetime = 200;
virusGroup.add(virus);
  }
}


function createMask(){
  if(World.frameCount%50===0){
    var mask=createSprite(100,0,10,50);
    mask.addImage(maskImg);
    mask.scale=0.1;
    mask.x=Math.round(random(10,700));
    mask.velocityY=5;
    mask.lifetime = 300;
maskGroup.add(mask);
  }
}

function createScaryPpl(){
  if(World.frameCount%50===0){
    var scp=createSprite(100,0,10,50);
    scp.addAnimation(scaryPplImg);
    scp.scale=0.1;
    scp.x=Math.round(random(10,700));
    scp.velocityY=5;
    scp.lifetime = 300;
    scpGroup.add(scp);
  }
}