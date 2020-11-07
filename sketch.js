var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,World.height);
  wall.shapeColor = color(80,80,80);
  
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
}

function draw() {
  background("gainsboro");

  console.log(car.x)
  result();

  drawSprites();
}

function result() {
  if ((car.x + 50) >= wall.x) {
    car.velocityX = 0;
    var deformation = (0.5 *weight * speed * speed) / 22500;
    if (deformation < 100) {
      car.shapeColor = color("Green");
    }
    if (deformation >= 100 && deformation < 180) {
      car.shapeColor = color("Yellow");
    }
    if (deformation > 180) {
      car.shapeColor = color("Red");
    }
  }
}

// function stop(object1,object2) {
//   if (object1.x + object1.width == object2.x) {
//     return true;
//   } else {
//     return false;
//   }
// }