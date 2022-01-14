var size;
var padding;
var innerSize;
var colorScheme;
var center;
var iris;

var xCenter;
var yCenter;

var _c;
var da; 
import { getColorScheme } from './utils/colors';
import { line1 } from './utils/lines';
import { getRandomNumber as rndm, getRandomInt, getRandomArrayItem, getRandomNumber } from './utils/random';
var scale = .5

window.setup = function() {
  blendMode(LIGHTEST)
  colorMode(HSB, 360, 100, 100, 100);
  size = min(windowWidth, windowHeight)
  padding = size / 30;
  innerSize = size - padding * 2;

  colorScheme = getColorScheme();
  colorScheme.push('#ffffff')
  center = size / 2

  xCenter = windowWidth/2;
  yCenter = windowHeight/2
  background(255)
  let cnv = createCanvas(windowWidth, windowHeight);
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




  iris = int(getRandomNumber(0,360))

  window.$fxhashFeatures = {
    iris
  }

}

const generate = function() {
  noFill()
  var c = color('#fff');
  c.setAlpha(10)
  stroke(c)

  //rect(padding, padding, innerSize, innerSize);
  var points = []


  for(var i=.5; i < rndm(1, 1.7); i+=.124){
    points.push(...new CircleWithPoints(scale*i))
  }

  points.push(...new CircleWithPoints(scale*2.1))

  fill(iris, 100, 100, 1)
  stroke(255)
  strokeWeight(0);
  circle(xCenter, yCenter, innerSize * (scale * 1.9))

  points.forEach((p) => {
    var p2 = getRandomArrayItem(points);
    stroke(c)
    strokeWeight(.09);
    line(p[0] + xCenter, p[1] + yCenter, p2[0] + xCenter, p2[1] + yCenter)
  });
  for(var i=1; i < 2.1; i+=.2){
    fill(getRandomInt(0, 360), int(getRandomNumber((90,100))),int(getRandomNumber((90,100))), 1)
    strokeWeight();
    //circle(xCenter, yCenter, innerSize * (scale * i))
  }
  fill(0, 0, 0, getRandomNumber(1, 20))
  circle(xCenter, yCenter, innerSize * (scale * getRandomNumber(.1, 1.9)))

  fill(0, 0, 0, 20)
  circle(xCenter, yCenter, innerSize * (scale * getRandomNumber(.1, 1.2)))
}


function drawInnerEye(){


}


class CircleWithPoints {
  constructor(scale, _da, _dx){
    noFill()
    stroke(255)
    strokeWeight(1);
    //point(center, center);
  
    var xoff = 0;

    var randomNum = fxrand();
    var da = 0.05
    if(randomNum < .25){
      da = 0.25
    } else if (randomNum >= .25 && randomNum < .5){
      da = 0.15
    } else if (randomNum >= .5 && randomNum < .76){
      da = 0.2
    }

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