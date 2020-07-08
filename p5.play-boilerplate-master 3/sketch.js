var wall,thickness;
var bullet,speed,width;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(233,321);
  wieght=random(30,52);
  thickness=rand(22,83);
  if (hasCollided(bullet,wall))
  {
    bullet.velocityX=0
    var damage=0.5 *wieght*speed*speed/(thickness*thickness*thickness);
    if (damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
  }
}
if (damage<10)
{
  wall.shapeColor(0,255,0);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
function hasCollided (lbullet,lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width;
   wallLeftEdge=lwall.x;
   if (bulletRightEdge>=wallLeftEdge)
   {
     return true
   }
   return false;
}