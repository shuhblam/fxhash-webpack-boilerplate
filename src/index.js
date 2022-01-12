var size;
var padding;
var innerSize;
var colorScheme;
var center;

var _c;
var da; 
import { getColorScheme } from './utils/colors';
import { line1 } from './utils/lines';
import { getRandomNumber as rndm, getRandomInt, getRandomArrayItem, getRandomNumber } from './utils/random';
var scale = .5

window.setup = function() {

  colorMode(HSB, 360, 100, 100, 100);
  size = min(windowWidth, windowHeight)
  padding = size / 30;
  innerSize = size - padding * 2;

  colorScheme = getColorScheme();
  colorScheme.push('#ffffff')
  center = size / 2
  background(255)
  let cnv = createCanvas(size, size);
  cnv.id('rotatorCanvas');

  _c = getRandomArrayItem(colorScheme);

  console.log(JSON.stringify({
    fxhash,
    size,
    innerSize,
    padding,
    colorScheme, 

    random: rndm()
  }, null, 2));

  noLoop();
  setInterval(() => {
    generate();
  }, 75)


}

const generate = function() {
  noFill()
  var c = color('#fff');
  c.setAlpha(1)
  stroke(c)

  rect(padding, padding, innerSize, innerSize);
  var points = []


  for(var i=1; i < 2.5; i+=1){
    points.push(...new CircleWithPoints(scale*i))
  }

  points.forEach((p) => {
    var p2 = getRandomArrayItem(points);
    strokeWeight(.09);
    line(p[0] + center, p[1] + center, p2[0] + center, p2[1] + center)
  });

  fill(getRandomInt(0,360), 100, 100, 1)
  stroke(255)
  strokeWeight(0);
  circle(center, center, innerSize * (scale *1.9))


  for(var i=1.9; i > 1; i-=.25){
    fill(getRandomInt(0,360), int(getRandomNumber((90,100))),int(getRandomNumber((90,100))), 1)
    stroke(255)
    strokeWeight(0);
    circle(center, center, innerSize * (scale * i))
  }

  fill(0, 0, 0, 20)
  circle(center, center, innerSize * (scale * getRandomNumber(.1, .9)))



}


class CircleWithPoints {
  constructor(scale){
    noFill()
    stroke(255)
    strokeWeight(1);
    //point(center, center);
  
    var xoff = 0;
    da = 0.15
    var dx = 0.01;
    var r = innerSize * scale;
    var points = [];
    for(var a=-PI /2; a < PI / 2; a += da){
      var x = r * cos(a);
      var y = r * sin(a);
      xoff += dx;
      points.push([x,y])
      //point(x,y)
    }
  
  
    var points2 = [];
    for(var a= PI/2; a <= 3*PI/2; a += da){
      var x = r * cos(a);
      var y = r * sin(a);
      xoff += dx;
      points2.push([x,y])
      //point(x,y)
    }

    return [...points, ...points2]
  }
}