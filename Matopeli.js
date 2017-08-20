var grid = 15;
var mato;
var ruoka;

function setup() {
  createCanvas(300, 300);
  frameRate(10);
  mato = new Mato();
  ruoka = new Ruoka();
}

function draw() {
  background(50);
  mato.update();
  ruoka.update();
  mato.show();
  ruoka.show();
}

function keyPressed() {
  if (keyCode === UP_ARROW && mato.yspeed !== 1) {
    mato.dir(0, -1);
  }
  else if (keyCode === DOWN_ARROW && mato.yspeed !== -1) {
    mato.dir(0, 1);
  }
  else if (keyCode === LEFT_ARROW && mato.xspeed !== 1) {
    mato.dir(-1, 0);
  }
  else if (keyCode === RIGHT_ARROW && mato.xspeed !== -1) {
    mato.dir(1, 0);
  }
}
