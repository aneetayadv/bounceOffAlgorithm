var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 300, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;

  movingRect = createSprite(1000, 300, 80, 50);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log("Fixed Rect x =  "+ fixedRect.x);
  console.log("Moving Rect x =  "+ movingRect.x);

  console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.width/2+fixedRect.width/2);
 
  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2 
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}