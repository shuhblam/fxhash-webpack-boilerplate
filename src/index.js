var size;
var padding;
var offset;
var c;

import { colors } from './colors';


function rand(min, max) {
  if(min !== undefined && max === undefined){
    return fxrand(min)
  }
  if(min === undefined && max === undefined) return fxrand()
  return fxrand() * (max - min) + min;
}

function getColorScheme(size) {
  if(size) {
    var mc = colors.filter((c) => {
      console.log(c)
      return c.colors.length >= 8;
    })

    var idx = int(rand(0, mc.length -1))
    return mc[idx].colors;
  }

  var idx = int(rand(0, colors.length -1))
  return colors[idx].colors;
}

function getRandomArrayItem(arr){
  var idx = int(rand(0, arr.length -1))
  return arr[idx];
}


window.setup = function() {
  colorMode(HSB, 360, 100, 100, 100);
  size = min(windowWidth, windowHeight)
  offset = size / 15;
  padding = size - offset;
  
  c = getColorScheme(7);
  background(255)
  createCanvas(size, size);

  noLoop();

}

window.draw = function() {
  var split = int(rand(6,25));
  var splitSize = size / split;
  var rowY = 0;
  window.$fxhashFeatures = {
    rows: split
  }
  for(var i = 0; i < split; i++){
    var row = new Row(splitSize, rowY, size);
    row.display();
    rowY += splitSize;
  }
}

window.mousePressed = function() {
  //redraw();
}

window.keyPressed = function() {
  //save();
}

class Row {
  constructor(height, rowY, width){
    this.x = 0;
    this.y1 = rowY;
    this.height = height;
    this.width = width;
  }
  display(){
    console.log(this.x, this.y1, this.height, this.width)
    for(var i = 0; i <= this.width; i++) {
      var l = new Rect(this.x, this.y1, height,)
      l.display();
      this.x += 1;
    }
  }
}

class Rect {
  constructor(x, y, height){
    this.x = x;
    this.y = y;
    this.height = height;
  }
  display() {
    noStroke();
    let _c = color(getRandomArrayItem(c))

    fill(_c)
    rect(this.x, this.y, 1, this.height)
    //console.log(this.x, this.y, this.height)
  }
}