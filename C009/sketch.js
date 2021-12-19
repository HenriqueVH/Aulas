var bloco;
function setup() {
  createCanvas(400, 400);

  bloco = createSprite(200, 200, 40, 40);
}

function draw() {
  background("black");

  drawSprites();

}
// https://keycode.info//
function keyPressed() {
  if (keyCode === UP_ARROW) {
    bloco.y -= 5;

  }
  if (keyCode === DOWN_ARROW) {
    bloco.y += 5;

  }
  if (keyCode === LEFT_ARROW) {
    bloco.x -= 5;

  }
  if (keyCode === RIGHT_ARROW) {
    bloco.x += 5;

  }
}
