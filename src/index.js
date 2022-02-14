var rnd;
var canvas;
var center;
var yoff = 0;

window.preload = function() {
  rnd = map(fxrand(), 0, 1, 0, 10000);
  noiseSeed(rnd);
  randomSeed(rnd);
}

import { internalIP } from 'webpack-dev-server';
import { getColorScheme } from './colors/moma'

class Arc {
  constructor(size, x,y, increment, c, s) {
    this.s = s;
    this.size = size;
    this.x = x;
    this.y = y;
    this.pi1 = random(TWO_PI);
    this.pi2 = random(TWO_PI);
    this.pi3 = random(PI)
    this.originalRotation = PI / random(3.0);
    this.rotation = this.originalRotation;
    this.speed = random(.005)
    this.direction = random(1);
    this.weight = random(increment);
    this.alpha = random(255);
    this.color = color(random(c));
    this.alphaIncrement = random([true, false])
  }
  draw() {
    push();
    if(this.alphaIncrement){
      this.alpha += random(2,5)
    }

    if(!this.alphaIncrement){
      this.alpha -= random(2,5)
    }


    if(this.alpha > 255){
      this.alphaIncrement = false
    }
    if(this.alpha < 0){
      this.alphaIncrement = true
    }
    this.color.setAlpha(this.alpha)
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
  getColor(){
    return this.color
  }
  getPi(){
    return this.pi3
  }
}

var arcs = [];
var bg;
var c;
window.setup = function() {
  _xoff = random(0.001, 0.003);
  _yoff = random(0.03, 0.01);

  c = getColorScheme();
  var bgc = JSON.parse(JSON.stringify(c));
  bgc.push('#000')
  bgc.push('#fff')
  bgc.push('#000')
  bgc.push('#fff')
  bgc.push('#000')
  bgc.push('#fff')
  bgc.push('#000')
  bgc.push('#000')
  bgc.push('#fff')
  bgc.push('#000')
  bgc.push('#fff')
  bgc.push('#000')
  bgc.push('#fff')
  bgc.push('#000')
  bg = random(bgc);
  var s = min(windowWidth, windowHeight);
  iterationDown = s/2;
  canvas = createCanvas(windowWidth, windowHeight);
  center = createVector(windowWidth/2, s/2);
  //noFill();
  var maybe = random(1);
  if(maybe > .5){
    var fullscreen = true;
    var increment = random(5,20);
    for(var k = 0; k< 2; k++){
      //var _cc = [random(center.x*2), random(center.y*2)]
        for(var i=0; i< s*2.5; i = i + increment) {
          //arcs.push(new Arc(i, _cc[0], _cc[1], increment, c, s))
          arcs.push(new Arc(i, center.x, center.y, increment, c, s))
          
        }
    }
  } else {
    var fullscreen = false;
    var increment = random(5,10);
    for(var k = 0; k< 3; k++){
      //var _cc = [random(center.x*2), random(center.y*2)]
        for(var i=0; i< s; i = i + increment) {
          //arcs.push(new Arc(i, _cc[0], _cc[1], increment, c, s))
          arcs.push(new Arc(i, center.x, center.y, increment, c, s))
          
        }
    }
  }
  window.$fxhashFeatures = {
    background: bg,
    increment: int(increment),
    colors: c.join('-'),
    fullscreen
  }
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



  arcs.forEach((a) => {
    push();
    var weight = a.getWeight();
    var size = a.getSize();
    var oR = a.getOriginalRotation();
    var pi = a.getPi()
    translate(center.x,center.y);

    stroke(a.getColor())
    strokeWeight(weight)
    //arc(0, 0, size, size, 0, pi);

    pop();
  });

  //iterationDown = iterationDown + 1;
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


