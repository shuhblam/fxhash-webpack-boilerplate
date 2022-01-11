var size;
var padding;
var innerSize;
var colorScheme;
var center;

var _c;
import { getColorScheme } from './utils/colors';
import { line1 } from './utils/lines';
import { getRandomNumber as rndm, getRandomInt, getRandomArrayItem, getRandomNumber } from './utils/random';
var scale = getRandomNumber(0.9,1.25)
function addGrain(amount){
  loadPixels()

  for(let i=0;i<(width*pixelDensity())*(height*pixelDensity())*4;i+=4){
    let noise = map(fxrand(),0,1,-amount,amount)
    pixels[i] = pixels[i]+noise
    pixels[i+1] = pixels[i+1]+noise
    pixels[i+2] = pixels[i+2]+noise
    pixels[i+3] = pixels[i+3]+noise
  }

  updatePixels()
}

window.setup = function() {

  colorMode(HSB, 360, 100, 100, 100);
  size = min(windowWidth, windowHeight)
  padding = size / 5;
  innerSize = size - padding * 2;

  colorScheme = getColorScheme();
  colorScheme.push('#ffffff')
  center = size / 2
  background(255)
  createCanvas(size, size);
  
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

  generate();
  generate();

  addGrain(getRandomInt(8,12))
}

const generate = function() {
  fill('#000')
  rect(padding, padding, innerSize, innerSize)
  stroke(360, 100, 100, getRandomInt(100,100));
  strokeWeight(10);
  //point(center, center);

  var xoff = 0;
  var da = 0.05;
  var dx = 0.1;
  var r = getRandomInt(innerSize * scale/2, innerSize * scale/1.5);
  var x1 = (size / 2 );
  var y1 = getRandomInt(padding * 4, innerSize - padding * 2)

  strokeWeight(1);
  var points = [];
  for(var a=-PI /2; a < PI / 2; a += da){
    var x = r * cos(a);
    var y = r * sin(a);
    xoff += dx;
    points.push([x,y])
    //point(x,y)
  }

  points.forEach((p) => {
    console.log(p);
    var x2 = p[0] + center;
    var y2 = p[1] + center;
    var newC = getRandomArrayItem(colorScheme);
    var c = color(newC);
    c.setAlpha(getRandomInt(10,50))
    stroke(c);
    line1(x1,y1, x2, y2, getRandomInt(20,60))

  })

  //circle(x1, y1, 100);


  var x3 = size /2;
  var y3 = getRandomInt(innerSize - padding * 2, padding * 4 )


  var points2 = [];
  for(var a= PI/2; a <= 3*PI/2; a += da){
    var x = r * cos(a);
    var y = r * sin(a);
    xoff += dx;
    points2.push([x,y])
    //point(x,y)
  }

  points2.forEach((p) => {
    var x2 = p[0] + center;
    var y2 = p[1] + center;
    var newC = getRandomArrayItem(colorScheme);
    var c = color(newC);
    c.setAlpha(getRandomInt(10,50))
    stroke(c);
    line1(x3,y3, x2, y2,  getRandomInt(20,60))
  })

}