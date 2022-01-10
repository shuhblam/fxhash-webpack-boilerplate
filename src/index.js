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
  innerSize = int(size - padding * 2);

  colorScheme = getColorScheme();

  background(255)
  createCanvas(size, size);

  noLoop();
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
  background(`255`)
  var arr = [];
  for(var i = 4; i < 250; i = i+4){
    arr.push(i)
  }
  var sections = getRandomArrayItem(arr);
  var xSections = innerSize / sections;
  var ySections = innerSize / sections;
  var x = 0 + padding;
  var y = 0 + padding;
  rect(padding, padding, innerSize, innerSize)



  var scheme = JSON.parse(JSON.stringify(colorScheme));
  scheme.push('#ffffff')
  console.log(scheme)
  for(var i = 0; i < sections; i++){
    for(var j = 0; j < sections; j++){

      var color = getRandomArrayItem(scheme);
      //console.log(color)
      fill(`${color}`);
      stroke(`${color}`)
      rect(x, y, xSections, ySections);
      x += xSections;

    }
    x = 0 + padding;
    y += ySections;
  }

  noFill();

}

window.mousePressed = function() {
  redraw();
}

window.keyPressed = function() {
  //save();
}