var rnd;
var canvas;
var center;
var x=0;
var y=0;
var v1;
var v2;
var size;

var ww;
var wh;

var boxMinScale = 20;
var boxMaxScale = 50;

var debugmode = true;

var count = 0;


import { getRandomArrayItem } from './utils/random'
var color;
import { midpoint, intersect } from './utils/math'
class fxBox {
  constructor(vanishPoint1, vanishPoint2) {
    this.v1v = vanishPoint1;
    this.v2v = vanishPoint2;
    this.spineX = null;
    this.spineY1 = null;
    this.spineY2 = null;
    this.spineHeight = null;
    this.location = null;
    this.a = null;
    this.b = null;
    this.v1a = [];
    this.v1b = [];
    this.v1c = [];
    this.v2a = [];
    this.v2b = [];
    this.v2c = [];
    this.diff1 = null;
    this.diff2 = null;
  }

  // main line in the center of the box
  generateSpine() {
    this.spineX  = int(random(this.v1v.x, this.v2v.x));
    this.spineHeight = wh / int(random(boxMinScale, boxMaxScale));
    this.spineY1 = int(random(wh));
    this.spineY2 = this.spineY1 + this.spineHeight;

    // first point to connect to vanishing line
    this.a = createVector(this.spineX, this.spineY1)
    // second point to connecto to vanishing line
    this.b = createVector(this.spineX, this.spineY2);
  }

  drawSpine(){
    // generate main part of the box
    this.generateSpine();
    if(debugmode){
      //text(`${this.a.x}, ${this.a.y}`, this.a.x, this.a.y)
      //text(`${this.a.x}, ${this.b.y}`, this.a.x + 4, this.b.y)

      if(this.spineY2 > this.v1v.y && this.spineY1 > this.v1v.y) {
        this.location = 'below';
        //text(`below`, this.spineX, this.spineY1 + this.spineHeight / 2)
      }
  
      if(this.spineY2 < this.v1v.y && this.spineY1 < this.v1v.y){
        this.location = 'above';
        //text(`above`, this.spineX, this.spineY1 + this.spineHeight / 2)
      }
    }

  }

  drawFirstVanishingLine() {
    let v1;
    let diff;
    var m1 = midpoint(this.a, this.v1v);
    var m1Theta = Math.atan2(this.a.y - this.v1v.y, this.a.x - this.v1v.x) * 180 / Math.PI;
    var m2 = midpoint(this.b, this.v1v);
    var m2Theta = Math.atan2(this.b.y - this.v1v.y, this.b.x - this.v1v.x) * 180 / Math.PI;
    if(this.location == 'above'){
      diff = (m2Theta - ((m1Theta - m2Theta)/random(2.5,3)));
    }
    if(this.location == 'below'){
      diff = (m1Theta - ((m2Theta - m1Theta)/random(2.5,3)));
    }

    v1 = p5.Vector.fromAngle(radians(diff), windowWidth);

    // text(m1Theta, m1.x, m1.y)
    // circle(m1.x, m1.y, 10);
    // circle(m1.x, m1.y, 10);
    // text(diff, m1.x, m1.y)
    // text(m2Theta, m2.x, m2.y)
    // circle(m2.x, m2.y, 10);
    //console.log(this.location, diff)
    this.diff1 = diff;
    var v1cv = createVector(v1.x + this.v1v.x, v1.y + this.v1v.y)
    this.v1a = [this.a, this.v1v]
    this.v1b = [this.b, this.v1v];
    this.v1c = [this.v1v, v1cv]
    // this.v1al = line(this.a.x, this.a.y, this.v1v.x, this.v1v.y);
    // this.v1bl = line(this.b.x, this.b.y, this.v1v.x, this.v1v.y);
    // this.v1cl = line(this.v1v.x, this.v1v.y, v1cv.x, v1cv.y);
  }

  drawSecondVanishingLine(){
    var m1 = midpoint(this.a, this.v2v);
    var m1Theta = Math.atan2(this.a.y - this.v2v.y, this.a.x - this.v2v.x) * 180 / Math.PI;
    var m2 = midpoint(this.b, this.v2v);
    var m2Theta = Math.atan2(this.b.y - this.v2v.y, this.b.x - this.v2v.x) * 180 / Math.PI;

    if(this.location == 'above') {
      var diff = (m2Theta - ((m1Theta - m2Theta)/random(2.5,3)));
    }

    if(this.location == 'below'){
      var diff = (m1Theta - ((m2Theta - m1Theta)/random(2.5,3)));
    }

    let v1 = p5.Vector.fromAngle(radians(diff), windowWidth);

    // text(m2Theta, m2.x, m2.y);
    // circle(m2.x, m2.y, 10);
    // text(m1Theta, m1.x, m1.y);
    // circle(m1.x, m1.y, 10);
    this.diff2 = diff;
    var v2cv = createVector(v1.x + this.v2v.x, v1.y + this.v2v.y)
    this.v2a = [this.a, this.v2v]
    this.v2b = [this.b, this.v2v];
    this.v2c = [this.v2v, v2cv]
    // this.v2al = line(this.a.x, this.a.y, this.v2v.x, this.v2v.y);
    // this.v2bl = line(this.b.x, this.b.y, this.v2v.x, this.v2v.y);
    // this.v2cl = line(this.v2v.x, this.v2v.y, v2cv.x, v2cv.y);
  }

  drawVanishingLines(){
    fill(0, random(0, 200))
    noStroke()
    this.drawFirstVanishingLine();
    this.drawSecondVanishingLine();
  }

  calculateIntersections(){

    if(this.location === 'above'){
      var i1 = intersect(this.v1b, this.v2c);
      var i2 = intersect(this.v1c, this.v2c);
      var i3 = intersect(this.v2b, this.v1c);



      strokeWeight(1)
      // line(i1.x, i1.y+this.spineHeight*2, i1.x, i1.y - this.spineHeight*2);
      // line(i3.x, i3.y+this.spineHeight*2, i3.x, i3.y - this.spineHeight*2)
      var i4 = intersect(this.v1a, [{
        x: i1.x,
        y: i1.y
      },{
        x: i1.x,
        y: i1.y - this.spineHeight*2
      }]);

      var i5 = intersect(this.v2a, [{
        x: i3.x,
        y: i3.y
      },{
        x: i3.x,
        y: i3.y - this.spineHeight*2
      }]);
      fill(random(125), random(0, 200))
      beginShape();
      vertex(i1.x, i1.y);
      vertex(i4.x, i4.y);
      vertex(this.a.x, this.a.y);
      vertex(this.b.x, this.b.y);
      endShape(CLOSE);
      fill(0, random(0, 200))
      beginShape();
      vertex(i5.x, i5.y);
      vertex(i3.x, i3.y);
      vertex(this.b.x, this.b.y);
      vertex(this.a.x, this.a.y);
      endShape(CLOSE);

      fill(200, random(0, 200))
      beginShape();
      vertex(i1.x, i1.y);
      vertex(i2.x, i2.y);
      vertex(i3.x, i3.y);
      vertex(this.b.x, this.b.y);
      endShape(CLOSE);

      // circle(i4.x, i4.y, 10);
      // circle(i5.x, i5.y, 10)
      // circle(i1.x, i1.y, 10);
      // circle(i2.x, i2.y, 10);
      // circle(i3.x, i3.y, 10);
      // circle(this.b.x, this.b.y, 10);



    }

    if(this.location === 'below'){
      var i1 = intersect(this.v2c, this.v1a);
      var i2 = intersect(this.v1c, this.v2c);
      var i3 = intersect(this.v2a, this.v1c);
      // line(i1.x, i1.y-this.spineHeight*2, i1.x, i1.y + this.spineHeight*2);
      // line(i3.x, i3.y-this.spineHeight*2, i3.x, i3.y + this.spineHeight*2)


      var i4 = intersect(this.v1b, [{
        x: i1.x,
        y: i1.y
      },{
        x: i1.x,
        y: i1.y - this.spineHeight*2
      }]);


      var i5 = intersect(this.v2b, [{
        x: i3.x,
        y: i3.y
      },{
        x: i3.x,
        y: i3.y - this.spineHeight*2
      }]);

      fill(random(100), random(0, 200))
      beginShape();
      vertex(i1.x, i1.y);
      vertex(this.a.x, this.a.y);
      vertex(this.b.x, this.b.y);
      vertex(i4.x, i4.y);
      endShape(CLOSE);

      fill(random(10), random(0, 200))
      beginShape();
      vertex(this.a.x, this.a.y);
      vertex(i3.x, i3.y);
      vertex(i5.x, i5.y);
      vertex(this.b.x, this.b.y);
      endShape(CLOSE);

      fill(200, random(0, 200))
      beginShape();
      vertex(i1.x, i1.y);
      vertex(i2.x, i2.y);
      vertex(i3.x, i3.y);
      vertex(this.a.x, this.a.y);
      endShape(CLOSE);

      // circle(i4.x, i4.y, 10);
      // circle(i5.x, i5.y, 10);
      // circle(i1.x, i1.y, 10);
      // circle(i2.x, i2.y, 10);
      // circle(i3.x, i3.y, 10);
      // circle(this.a.x, this.a.y, 10);

    }

  }

  draw(){
    this.drawSpine();
    this.drawVanishingLines();
    //console.log(this.diff1, this.diff2)
    if(this.diff2 > 160) return
    if(this.diff2 < -160) return
    this.calculateIntersections();

    stroke(0)
    strokeWeight(1)
    //line(this.spineX,this.spineY1,this.spineX,this.spineY2);
    noStroke()
  }

}

window.preload = function() {
  rnd = map(fxrand(), 0, 1, 0, 10000);
  noiseSeed(rnd);
  randomSeed(rnd);
}

function initTwoPointPerspective() {

  // first vanish point
  v1 = createVector(random(0-windowWidth, windowWidth*2), random(windowHeight*2, 0-windowHeight));
  // second vanish point
  v2 = createVector(random(windowWidth, windowWidth*2), random(windowHeight*2, 0-windowHeight*2));

  if(debugmode){
    // circle(v1.x, v1.y, 5);
    // circle(v2.x, v2.y, 5);
    // text(`${v1.x}, ${v1.y}`, v1.x + 20, v1.y)
    // text(`${v2.x}, ${v2.y}`, v2.x - 50, v2.y)
    // text(`horizon`, center.x + 100, center.y + 20)
    // line(0, center.y, windowWidth, center.y);
    // line(center.x, 0, center.x, wh);
  }

}

window.setup = function() {
  blendMode(DIFFERENCE)
  ww = windowWidth;
  wh = windowHeight;

  canvas = createCanvas(ww, wh);
  center = createVector(ww/2, wh/2);
  angleMode(DEGREES)
  color = getRandomArrayItem([
    [130, 216, 213],
    [94, 200, 229],
    [255,142,145],
    [255, 232, 0],
    [255, 102, 94],
    [187, 118, 207],
    [242, 205, 207]
  ]);
  console.log(color)
  //noLoop();

}

window.draw = function() {

  if(count > 249 && count <= min(ww, wh)*1.3){
    noFill()
    stroke(random(color[0]), random(color[1]), random(color[2]), random(200,255))
    strokeWeight(random(1,2))
    circle(center.x, center.y, (min(ww, wh)/random(2,3)) - (count + random(1,2)));
    stroke(random(color[0]), random(color[1]), random(color[2]), random(200,255))
    strokeWeight(random(1,2))
    circle(center.x, center.y, (min(ww, wh)/random(1,2)) - (count + random(1,10)));
    stroke(random(color[0]), random(color[1]), random(color[2]), random(0,100))
    strokeWeight(random(1,2))
    circle(center.x, center.y, (min(ww, wh)/random(1,2)) - (count + random(1,100)));
    count++

    if(count > min(ww, wh)*1.3) {
      count = 250;
    }
  }
  //background(255)
  if(count < 250){
    initTwoPointPerspective();

    for(var i=0; i < random(1000, 2000); i++){
      var box = new fxBox(v1, v2);
      box.draw();
    }
    count++
  }



}

window.mousePressed = function() {
  redraw();
}

window.keyPressed = function(e) {
  if(e.key === 's'){
    save(`shuhblam.jpg`)
  }

  if(e.key === 'd'){
    debugmode = !debugmode
    redraw()
  }

  if(e.key === 'r'){
    redraw()
  }
}


