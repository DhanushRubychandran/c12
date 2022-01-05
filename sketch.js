let trex, trex_running, trex_collided;

let ground, invisibleground, groundImage;

let cloud, cloudImage

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
    cloudImage= loadImage('cloud.png')
}

function setup() {
    createCanvas(600, 200);
    
    let rand=Math.round( random(1,100) )
    console.log(rand)

    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    //create an invisible ground
    invisibleground=createSprite(200,190,400,10)
    invisibleground.visible=false
}

function draw() {
    background("grey");
    //console.log(trex.y)
    //jump when the space button is pressed
    if (keyDown("space") && trex.y>161) {
        trex.velocityY = -12;
    }
    trex.velocityY = trex.velocityY + 0.8

    if (ground.x < 0) {
         ground.x = ground.width / 2;
    }

    trex.collide(invisibleground);

    spawnClouds()
    //console.log(frameCount)
    drawSprites();
}

function spawnClouds(){
    //create clouds after every 80 frames
    if(frameCount%80 === 0){
        cloud=createSprite(600,150,50,10)
        cloud.y = Math.round( random(10,60) )
        cloud.addImage(cloudImage)
        cloud.scale=0.2
        cloud.velocityX=-4

        console.log(trex.depth)
        console.log(cloud.depth)
        
        //make the depth of the cloud equal to the depth of the trex
        cloud.depth=trex.depth

        //increment the depth of the trex by 1
        trex.depth=trex.depth+1
    }  


   
}