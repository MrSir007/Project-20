var wall, thickness;
var bullet, speed, weight

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  
  bullet.velocityX = speed;
}

function draw() {
  background("gainsboro");

  console.log(bullet.x)
  result();

  drawSprites();
}

function result() {
  var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
  if (stop(bullet,wall)) {
    bullet.x = 1150;
    if (damage <= 10) {
      bullet.shapeColor = color("Green");
    }
    if (damage > 10) {
      bullet.shapeColor = color("Red");
    }
  }
}

function stop(object1,object2) {
  if (object1.x + object1.width >= object2.x) {
    return true;
  } else {
    return false;
  }
}