var size;
var padding;
var innerSize;
var colorScheme;


import { getColorScheme } from './utils/colors';
import { getRandomNumber as rndm, getRandomArrayItem } from './utils/random';

window.setup = function() {
  colorMode(HSB, 360, 100, 100, 100);
  size = min(windowWidth, windowHeight)
  padding = size / 15;
  innerSize = size - padding * 2;

  colorScheme = getColorScheme(7);

  background(255)
  createCanvas(size, size);

  noLoop();

}

window.draw = function() {
  background(255)
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


  noFill();
  rect(padding, padding, innerSize, innerSize)
}

window.mousePressed = function() {
  redraw();
}

window.keyPressed = function() {
  //save();
}