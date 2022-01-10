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
  var color = getRandomArrayItem(["f94144","f3722c","f8961e","f9c74f","90be6d","43aa8b","577590","ff0000","ff8700","ffd300","deff0a","a1ff0a","0aff99","0aefff","147df5","580aff","be0aff"]);
  console.log(JSON.stringify({
    fxhash,
    size,
    innerSize,
    padding,
    colorScheme, 
    color,
    random: rndm()
  }, null, 2));


  const line2 = (x1, y1, x2, y2, weight) => {
    for (var i = 0; i < weight * 5; i++) {
      var theta = rndm(TWO_PI);
      var nx1 = x1 + rndm(weight / 2) * cos(theta);
      var ny1 = y1 + rndm(weight / 2) * sin(theta);
      var nx2 = x2 + rndm(weight / 2) * cos(theta);
      var ny2 = y2 + rndm(weight / 2) * sin(theta);
      strokeWeight(0.5);
      line(nx1, ny1, nx2, ny2);
    }
  }

  noFill();

  //rect(padding, padding, innerSize, innerSize)
  var x = 0;
  var y;
  var spacing = 17;
  var pos1 = int(rndm(0,5))
  var pos2 = int(rndm(5,8))
  var pos3 = int(rndm(7,9))
  var pos4 = int(rndm(9,16.1))

  for (var i = 0; x < (innerSize); i++){
    stroke(0)
    line2(padding + x, padding, padding + x, innerSize + padding, 5);
    if(
      x >= innerSize/16 * pos1 && 
      x <= (innerSize/16) * pos2

      || 

      x >= innerSize/16 * pos3 && 
      x <= (innerSize/16) * pos4
    ){
      stroke(`#${color}`)
      line2(padding + x, padding + innerSize / 8, padding + x, innerSize - innerSize / 32, 5);

      // if( pos< 0.3){
      // } else if( pos >= 0.3 < 0.6){
      //   line2(padding + x, padding + innerSize / 8, padding + x, innerSize - innerSize / 32, 5);
      // } else {
      //   line2(padding + x, padding + innerSize / 8, padding + x - spacing, innerSize - innerSize / 32, 5);
      // }
    }

    x = x + spacing;
  }

  //rect(0, 0, size, size);
  
}

window.mousePressed = function() {
  redraw();
}

window.keyPressed = function() {
  //save();
}