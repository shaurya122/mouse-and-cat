var bg;
var cat1;
var cat2;
var mouse1;
var mouse2;
var tom;
var jerry;
var cat3;
var mouse3;

function preload() {
    bg=loadImage("images/garden.png");
    cat1=loadAnimation("images/cat1.png");
    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    cat3=loadAnimation("images/cat4.png");

    mouse1=loadAnimation("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3=loadAnimation("images/mouse4.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(800,600,10,10);
    tom.addAnimation("tom1",cat1);
    tom.scale=0.2

    jerry=createSprite(300,600,10,10);
    jerry.addAnimation("jerry1",mouse1);
    jerry.scale=0.2;

}

function draw() {

    background(bg);
    if(tom.x - jerry.x < (tom.width - jerry.width)/2) {
       tom.velocityX=0;
       tom.addAnimation("tomLastImage", cat3);
        tom.x =320; tom.scale=0.2; 
        tom.changeAnimation("tomLastImage");
         jerry.addAnimation("jerryLastImage", mouse3);
          jerry.scale=0.15;
     jerry.changeAnimation("jerryLastImage");
     }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){ tom.velocityX = -5; 
    tom.addAnimation("tomRunning", cat2); 
    tom.changeAnimation("tomRunning");
     jerry.addAnimation("jerryTeasing", mouse2);
   jerry.frameDelay = 25; 
   jerry.changeAnimation("jerryTeasing");

}


}
