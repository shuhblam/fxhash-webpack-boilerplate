var rnd;
var canvas;
var center;

window.preload = function() {
  rnd = map(fxrand(), 0, 1, 0, 10000);
  noiseSeed(rnd);
  randomSeed(rnd);
}

window.setup = function() {
  canvas = createCanvas(windowWidth, windowHeight);
  center = createVector(windowWidth/2, windowHeight/2);
}

window.draw = function() {
  noFill();
  background(255)
  circle(center.x, center.y, 10)
}

window.mousePressed = function() {
  redraw();
}

window.keyPressed = function(e) {
  if(e.key === 's')(
    save(`shuhblam.jpg`)
  )
}


