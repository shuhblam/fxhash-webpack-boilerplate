var rnd;
var canvas;
var center;
var yoff = 0;

window.preload = function() {
  rnd = map(fxrand(), 0, 1, 0, 10000);
  noiseSeed(rnd);
  randomSeed(rnd);
}

import { getColorScheme } from './colors/moma'

class Arc {
  constructor(size, x,y, increment, c, s) {
    this.s = s;
    this.size = size;
    this.x = x;
    this.y = y;
    this.pi1 = random(TWO_PI);
    this.pi2 = random(TWO_PI);
    this.originalRotation = PI / random(3.0);
    this.rotation = this.originalRotation;
    this.speed = random(.01)
    this.direction = random(1);
    this.weight = random(increment*.5)
    var _c = color(random(c));
    _c.setAlpha(random(255))
    this.color = _c
  }
  draw() {
    push();

    translate(this.x,this.y);
    stroke(this.color)
    strokeWeight(this.weight)
    if(this.direction > .5){
      this.rotation = this.rotation - this.speed;
      // if(this.x > this.s){
      //   this.x = this.x - random(10);
      // }
      // if(this.x < 0){
      //   this.x = this.x + random(10);
      // }

      // if(this.y > this.s){
      //   this.y = this.y - random(10);
      // }
      // if(this.y < 0){
      //   this.y = this.y + random(10);
      // }

    } else {
      this.rotation = this.rotation + this.speed;
      // this.x = this.x + random(.2);
      // this.y = this.y - random(.1);
    }

    rotate(this.rotation)

    arc(0, 0, this.size, this.size, min(this.pi1, this.pi2), max(this.pi1, this.pi2));
    pop();
  }
  getWeight(){
    return this.weight;
  }
  getSize(){
    return this.size;
  }
  getOriginalRotation(){
    return this.originalRotation
  }
}

var arcs = [];
var bg;
var c;
window.setup = function() {
  _xoff = random(0.001, 0.003);
  _yoff = random(0.03, 0.01);
  bg = random(['#000', '#fff']);
  c = getColorScheme()
  var increment = random(2,5);
  var s = min(windowWidth, windowHeight);
  iterationDown = s/2;
  canvas = createCanvas(s, s);
  center = createVector(s/2, s/2);
  //noFill();
  for(var k = 0; k< random(2,4); k++){
    //var _cc = [random(center.x*2), random(center.y*2)]
      for(var i=0; i< s; i = i + increment) {
        //arcs.push(new Arc(i, _cc[0], _cc[1], increment, c, s))
        arcs.push(new Arc(i, center.x, center.y, increment, c, s))
        
      }
  }
      console.log(arcs)


}

var iterationDown;
var _xoff;
var _yoff;


window.draw = function() {
  noFill();
  background(bg)
  arcs.forEach((a) => {
    a.draw();
  });



  // arcs.forEach((a) => {
  //   push();
  //   var weight = a.getWeight();
  //   var size = a.getSize();
  //   var oR = a.getOriginalRotation;
  //   translate(center.x,center.y);

  //   stroke(0)
  //   strokeWeight(weight)
  //   arc(0, 0, size, size, 0, PI);
  //   rotate(oR);
  //   pop();
  // });

  iterationDown = iterationDown + 1;
  //fill(0)
  //rect(5,5, 100, 100)

  //text(iteration, 10,20)

  // var ccc = color(random(c))


  // stroke(ccc)
  // strokeWeight(random(1,2))
  //  // We are going to draw a polygon out of the wave points
  //  beginShape();

  // let xoff = 0; 
  // fill(ccc)
  //  // Iterate over horizontal pixels
  // for (let x = 0; x <= width; x += 1) {
  //     let y = map(noise(xoff, yoff), 0, 1, iterationDown, iterationDown+iterationDown );
  //     vertex(x, y);
  //     xoff += _xoff;
  // }
  // console.log(yoff)
  //  yoff += _yoff;
  //  vertex(width+100, height+10);
  //  vertex(0-100, height+10);
  //  endShape(CLOSE);
}

window.mousePressed = function() {
  redraw();
}

window.keyPressed = function(e) {
  if(e.key === 's')(
    save(`shuhblam.jpg`)
  )
}


