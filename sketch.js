var player,gameState;
var sun,co,fertilizer,water;
var human;
var sunImage,coImage,ferImage,waterImage, humanImage;
var seed,sapling,sTree,bTree, bgImage;
var buttonImage, titleImage;


function preload(){
sunImage = loadImage("sunImage.png");
coImage = loadImage("CO2Image.png");
ferImage = loadImage("fertilizerImage.png");
waterImage = loadImage("waterImage.png");
seed = loadImage("seedImage.png");
sapling = loadImage("saplingImage.png");
sTree = loadImage("smallTreeImage.png");
bTree = loadImage("bigTreeImage.png");
bgImage = loadImage("backgroundImage.png");
humanImage = loadImage("humanImage.png");
buttonImage = loadImage("PlayButtonImage.png");
titleImage = loadImage("titleImage.png");
}

function setup() {
  createCanvas(windowWidth-50,windowHeight-50);
  gameState = "start";

  button = createSprite(width/2, 400, 80, 50);
  button.addImage("buttonImage",buttonImage);
  button.scale = 0.2;

 title = createSprite(width/2,200,50,50);
 title.addImage("titleImage",titleImage);
}

function draw() {
  background(bgImage);
  
  if(mousePressedOver(button)){
    button.visible = false;
    title.visible = false;
    gameState = "round1";
  }
  if(gameState === "round1"){

    player = createSprite(600,height-80,30,10);
    player.addImage("seedImage",seed);
    player.scale = 0.1;
    if(keyDown(UP_ARROW)){
      player.y = player.y-10;
    }
    if(keyDown(DOWN_ARROW)){
      player.y = player.y+10;
    }
    if(keyDown(RIGHT_ARROW)){
      player.x = player.x+10;
    }
    if(keyDown(LEFT_ARROW)){
      player.X = player.x-10;
    }

  }
  drawSprites();
}