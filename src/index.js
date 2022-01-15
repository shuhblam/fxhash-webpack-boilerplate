var canvas;
var rnd;

import { line1, line2, line3, line4 } from './utils/lines'

window.preload = function() {
  rnd = map(fxrand(), 0, 1, 0, 10000);
  noiseSeed(rnd);
  randomSeed(rnd);
}

window.setup = function() {
  //colorMode(HSB, 360, 100, 100, 100);
  background(255)
  canvas = createCanvas(windowWidth, windowHeight);
  noLoop();
}

window.draw = function() {
  var weights = [1, 2, 3, 5, 8, 13, 21, 34];
  var y = 0;
  weights.forEach((weight) => {
    y += 20 + weight;
    line4(30, y, 230, y, weight, 1)
  })
}

window.mousePressed = function() {
  redraw();
}

window.keyPressed = function(e) {
  if(e.key === 's')(
    save(`shuhblam.jpg`)
  )
}