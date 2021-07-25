var  jake, jake_running, pathImg, path, left_boundary, right_boundary;

function preload(){
  //pre-load images
  jake_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  
  jake = createSprite(180, 340, 50, 100);
  jake.addAnimation("running", jake_running);
  jake.scale = 0.5;
  
  left_boundary = createSprite(0, 300, 100, 600);
  right_boundary = createSprite(390,300,80,60);
  
  left_boundary.visible = false;
  right_boundary.visible = false;
}

function draw() {
  background("blue");
  path.velocityY = 4;

    jake.x = World.mouseX;
    
    console.log(jake.x);
    
    edges = createEdgeSprites();
    jake.collide(left_boundary);
    jake.collide(right_boundary);
    jake.collide(edges[3]);
    
    //code to reset background
    if(path.y > 400 ){
      path.y = height/2;
    }
  
    drawSprites();
}
