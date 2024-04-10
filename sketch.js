const phi = 137.5;
let n = 0;
let c = 2;
let resetButton;
let cv, ctx;

window.onload = function() {
  setup();
  setInterval(draw, 20);
}

const setup = function() {
  cv = document.querySelector('canvas');
  ctx = cv.getContext('2d');
  cv.background('black');
  ctx.translate(cv.width / 2, cv.height / 2);
}

const draw = function() {
  //background("black");
  let a = n * phi * Math.PI / 180;
  let r = c * Math.sqrt(n);
  let pos = {
    x: r * Math.cos(a),
    y: r * Math.sin(a)
  };
  let s = map(Math.sqrt(Math.pow(pos.x, 2) + Math.pow(pos.y, 2)), 0, cv.width / 2, 0, 255);
  ctx.fillStyle = hsl(Math.floor(s), 100, 100);
  ctx.strokeStyle = 'black';
  ctx.ellipse(pos.x, pos.y, 4, 4, true);
  ctx.ellipse(pos.x, pos.y, 4, 4, false);
  n++;
}