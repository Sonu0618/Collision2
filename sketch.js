var fixedRect, movingRect;
var go1, go2, go3, go4;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect=createSprite(100,200,50,50);
  movingRect.shapeColor = "green";
  go1=createSprite(100, 100, 50, 50);
  go1.shapeColor = "green";
  go2=createSprite(200, 100, 50, 50);
  go2.shapeColor = "green";
  go3=createSprite(300, 100, 50, 50);
  go3.shapeColor = "green";
  go4=createSprite(400, 100, 50, 50);
  go4.shapeColor = "green";
}
function draw() {
  background("black");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, go2)){
    go2.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else{
    go2.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
  
}
