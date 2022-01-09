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

  noStroke();
  fill(getRandomArrayItem(colorScheme))
  rect(padding, padding, innerSize, innerSize)
  fill(getRandomArrayItem(colorScheme))
  rect(padding * 2, padding* 2, innerSize - padding*2, innerSize- padding*2)

  fill(getRandomArrayItem(colorScheme))
  rect(padding * 3, padding* 3, innerSize - padding * 4, innerSize- padding * 4)

  fill(getRandomArrayItem(colorScheme))
  rect(padding * 4, padding* 4, innerSize - padding * 6, innerSize- padding * 6)


  fill(getRandomArrayItem(colorScheme))
  rect(padding * 5, padding* 5, innerSize - padding * 8, innerSize- padding * 8)

  fill(getRandomArrayItem(colorScheme))
  rect(padding * 6, padding* 6, innerSize - padding * 10, innerSize- padding * 10)

  fill(getRandomArrayItem(colorScheme))
  rect(padding * 7, padding* 7, innerSize - padding * 12, innerSize- padding * 12)
}

window.mousePressed = function() {
  redraw();
}

window.keyPressed = function() {
  //save();
}