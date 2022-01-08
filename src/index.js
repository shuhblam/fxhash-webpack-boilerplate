var size;
var padding;
var offset;
var c;

var minLineLength = 10;
var maxLineLength = 20;

var minNumberOfSquareWithLines = 50;
var maxNumberOfSquareWithLines = 600;


var minNumberOfCircleWithLines = 50;
var maxNumberOfCircleWithLines = 600;


import { colors } from './colors';

function rand(min, max) {
  if(min !== undefined && max === undefined){
    return fxrand(min)
  }
  if(min === undefined && max === undefined) return fxrand()
  return fxrand() * (max - min) + min;
}


window.setup = function() {
  colorMode(HSB, 360, 100, 100, 255);
  size = min(windowWidth, windowHeight)
  offset = size / 15;
  padding = size - offset;
  var idx = int(rand(0, colors.length -1))
  c = colors[idx].colors;
  console.log(idx,c);
  background(255)
  createCanvas(size, size);


  noLoop();



}

window.draw = function(){
  blendMode(MULTIPLY)
  background(255)
  noFill()
  stroke(0,0,0)
  strokeWeight(1)
  //rect(0,0,size,size)
  //rect(offset, offset, padding - offset, padding - offset)

  rect(offset*2, offset*2, padding - offset*3, padding - offset*3)
  // draw circles with lines
  for(var i=0; i < rand(minNumberOfCircleWithLines, maxNumberOfCircleWithLines); i++){
    let circle = new CircleWithLine();
    circle.display();
  }

  //draw squares with lines
  for(var i=0; i < rand(minNumberOfSquareWithLines, maxNumberOfSquareWithLines); i++){
    let square = new SquareWithLine();
    square.display();
  }

  // draw circles with lines
  for(var i=0; i < rand(minNumberOfCircleWithLines, maxNumberOfCircleWithLines); i++){
    let circle = new CircleWithLine();
    circle.display();
  }

  //draw squares with lines
  for(var i=0; i < rand(minNumberOfSquareWithLines, maxNumberOfSquareWithLines); i++){
    let square = new SquareWithLine();
    square.display();
  }

}

window.mousePressed = function() {
  redraw();
}

window.keyPressed = function() {
  save();
}

class CircleWithLine {
  constructor(){
    this.x = rand(offset * rand(1,2), padding - offset * rand());
    this.y = rand(offset * rand(1,2), padding - offset * rand());
    this.diameter = rand(5, 20);
  }
  display() {

    let r = rand() * 10;
    var col = c[int(rand(0, c.length -1))]
    var _c = color(col)

    fill(_c)
    var lineColor = color(0,0,0)
    lineColor.setAlpha(rand(20,100))
    strokeWeight(1)
    stroke(lineColor);
    drawingContext.setLineDash([rand(0,3),rand(0,5)]);
    if(r <= 2.5) {
      line(
        this.x,
        this.y+ this.diameter / 2,
        this.x,
        rand(this.y + this.diameter * minLineLength, this.y + this.diameter * maxLineLength)
      )
    }

    if(r >= 2.5 && r <= 5) {
      line(
        this.x+ this.diameter/2,
        this.y,
        rand(this.x + this.diameter * minLineLength, this.x + this.diameter * maxLineLength),
        this.y
      )
    }

    if(r >= 5 && r <= 7.5) {
      line(
        this.x - this.diameter/2,
        this.y,
        rand(this.x - this.diameter * minLineLength, this.x - this.diameter * maxLineLength),
        this.y
      )
    }

    if(r >= 7.5 && r <= 10) {
      line(
        this.x,
        this.y - this.diameter / 2,
        this.x,
        rand(this.y - this.diameter * minLineLength, this.y - this.diameter * maxLineLength)
      )
    }
    drawingContext.setLineDash([0]);
    var col = c[int(rand(0, c.length -1))]
    var _c = color(col)
    _c.setAlpha(rand(100,200))
    fill(_c)

    strokeWeight(0)
    stroke(_c)
    circle(this.x, this.y, this.diameter);
  }
}

class SquareWithLine {
  constructor(){
    this.x = rand(offset * rand(1,2), padding - offset * rand());
    this.y = rand(offset * rand(1,2), padding - offset * rand());
    this.diameter = rand(5, 15);
  }
  display() {

    let r = rand() * 10;

    // draw line
    var lineColor = color(0,0,0)
    lineColor.setAlpha(rand(20,100))
    strokeWeight(1)
    stroke(lineColor);
    drawingContext.setLineDash([rand(0,3),rand(0,5)]);
    if(r <= 2.5) {
      line(
        this.x + this.diameter / 2,
        this.y + this.diameter,
        this.x + this.diameter / 2,
        rand(this.y + this.diameter * minLineLength, this.y + this.diameter * maxLineLength)
      )
    }

    if(r >= 2.5 && r <= 5) {
      line(
        this.x + this.diameter,
        this.y + this.diameter / 2,
        rand(this.x + this.diameter * minLineLength, this.x + this.diameter * maxLineLength),
        this.y + this.diameter / 2,
      )
    }

    if(r >= 5 && r <= 7.5) {
      line(
        this.x,
        this.y + this.diameter / 2,
        rand(this.x - this.diameter * minLineLength, this.x - this.diameter * maxLineLength),
        this.y + this.diameter / 2,
      )
    }

    if(r >= 7.5 && r <= 10) {
      line(
        this.x + this.diameter / 2,
        this.y,
        this.x + this.diameter / 2,
        rand(this.y - this.diameter * minLineLength, this.y - this.diameter * maxLineLength)
      )
    }



    drawingContext.setLineDash([0]);
    var col = c[int(rand(0, c.length -1))]
    var _c = color(col)
    _c.setAlpha(rand(100,200))
    fill(_c)
    stroke(_c)
    strokeWeight(0)
    rect(this.x, this.y, this.diameter, this.diameter);

  }
}