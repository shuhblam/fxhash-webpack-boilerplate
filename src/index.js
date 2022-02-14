var rnd;
var canvas;
var center;

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
window.setup = function() {
  bg = random(['#000', '#fff']);
  var c = getColorScheme()
  var increment = random(1,20);
  var s = min(windowWidth, windowHeight)
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


  stroke(0)

}

window.draw = function() {
  noFill();
  background(bg);


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

}

window.mousePressed = function() {
  redraw();
}

window.keyPressed = function(e) {
  if(e.key === 's')(
    save(`shuhblam.jpg`)
  )
}


