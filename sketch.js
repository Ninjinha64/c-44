var mario,marioImg;
var Nuvens;

function preload (){
marioImg = loadImage("./assets/Mario.gif");


}

function setup (){
createCanvas(windowWidth,windowHeight);
mario = createSprite(50,height-40,20,50);

}

function draw (){
background("purple");
drawSprites ( );

}