var canvas;
var rnd;
var size;
var offset;
var padding;
var innerSize;
var y = 0;
var x = 0;
var gy = 0;
var gx = 0;
var _background;
var spacing = 20;
var iis;
import { line1, line2, line3, line4 } from './utils/lines';
import { getRandomArrayItem } from './utils/random'
window.preload = function() {
  rnd = map(fxrand(), 0, 1, 0, 10000);
  noiseSeed(rnd);
  randomSeed(rnd);
}

var bauhaus;
var rnd1;
var rnd2;
var scheme;
window.setup = function() {
  blendMode(DIFFERENCE)
  colorMode(HSB, 360, 100, 100, 100);
  size = min(windowWidth, windowHeight)
  padding = size / 50;
  innerSize = size - padding * 2;
  iis = innerSize / 20;

  canvas = createCanvas(size, windowHeight);

  background(255)
  rnd1 = random(3.5,4)
  rnd2 = random(2.5,3)
  noLoop();
}

window.draw = function() {

    background(255)
    noFill();
    stroke(0)
    strokeWeight(1)
    rect(padding, padding, innerSize, innerSize);
    strokeWeight(1)
    var center = size/2;
    circle(center, center, 30)
    gx=padding;
    gy=padding;
    var points = [];
    while (gx < innerSize) {
      gy=padding;
      while(gy < innerSize) {
        points.push({
          gx,gy
        })
        gy = gy + iis;
      }
      gx = gx + iis;
    }

    noFill()

    points.forEach((p) => {
      push()
      translate(p.gx, p.gy)
      rect(0,0, iis)
      pop()
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