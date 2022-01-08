var size;
var padding;
var offset;
var colorScheme;

import { getColorScheme } from './colors';
import { getRandomNumber as rndm, getRandomArrayItem } from './random';

window.setup = function() {
  colorMode(HSB, 360, 100, 100, 100);
  size = min(windowWidth, windowHeight)
  offset = size / 15;
  padding = size - offset;

  colorScheme = getColorScheme(7);
  var color = getRandomArrayItem(colorScheme);
  background(255)
  createCanvas(size, size);

  noLoop();

  console.log({
    fxhash,
    size,
    offset,
    padding,
    colorScheme, 
    color,
    random: rndm()
  })
}

window.draw = function() {
 // init
}

window.mousePressed = function() {
  //redraw();
}

window.keyPressed = function() {
  //save();
}