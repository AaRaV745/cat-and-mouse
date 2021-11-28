
function preload() {
bg = loadImage ("images/garden.png");
catImg1 = loadAnimation("images/cat1.png")
catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
catImg3 = loadAnimation("images/cat4.png")
mouseImg1 = loadAnimation("images/mouse1.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
   mouse = createSprite(200,600);
   mouse.scale = 0.15;
   mouse.addAnimation("mousestanding",mouseImg1);
   cat = createSprite(900,600)
   cat.scale = 0.15;
   cat.addAnimation("catsleeping",catImg1)

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width-mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("catLastImg",catImg3);
    cat.x = 300;
    cat.sclae = 0.2;
    cat.changeAnimation("catLastImg")

    mouse.addAnimation("mouseLastImg",mouseImg3);
    mouse.scale = 0.15
    mouse.changeAnimation("mouseLastImg");
}   
    drawSprites();
}


function keyPressed(){
mouse.addAnimation("mouseTeasing",mouseImg2);
mouse.changeAnimation("mouseTeasing");
cat.velocityX = -2;
cat.addAnimation("catRunning",catImg2);
cat.changeAnimation("catRunning",)


}
