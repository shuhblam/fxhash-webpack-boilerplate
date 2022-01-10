var size;
var padding;
var innerSize;
var colorScheme;


import { getColorScheme } from './utils/colors';
import { getRandomNumber as rndm, getRandomArrayItem } from './utils/random';
import EllipticLeaf from './Leaf/EllipticLeaf'
window.setup = function() {
  colorMode(HSB, 360, 100, 100, 100);
  size = min(windowWidth, windowHeight)
  padding = size / 15;
  innerSize = size - padding * 2;

  colorScheme = getColorScheme(7);

  background(255)
  createCanvas(size, size);

  //noLoop();
  var color = getRandomArrayItem(colorScheme);
  console.log(JSON.stringify({
    fxhash,
    size,
    innerSize,
    padding,
    colorScheme, 
    color,
    random: rndm()
  }, null, 2));
}

window.draw = function() {

  background(255)

  noFill();
  stroke(0)
  strokeWeight(1);

  // square that shows the padding
  rect(padding, padding, innerSize, innerSize)

  //var start = createVector(size/2, padding);
  if(mouseIsPressed){
    var start = createVector(mouseX, mouseY);
  } else {
    var start = createVector(size/2, padding);
  }

  var end = createVector(size/2, size/2);
  var leaf = new EllipticLeaf(start, end);
}

window.mousePressed = function() {
  redraw();
}

window.keyPressed = function() {
  //save();
}

