// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.rand()
var rnd;

var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var padding;
var size;

function rand(min, max) { 
  return fxrand() * (max - min) + min;
}

function randPadding() {

}

window.$fxhashFeatures = {
  rnd: rnd,
  scheme: "", 
}

window.setup = function() {
  size = min(windowWidth, windowHeight)
  console.log(s)
  createCanvas(size, size);
  blendMode(MULTIPLY);
  padding = int(rand(4,20))

  while(x1 < size - padding*rand(1,2)+ size/8){
    x1 = x1 + padding*rand()*2;
    x2 = x2 + padding*rand()*2;
    line(x1, y1, x2, size)
  }
  
  x1 = 0;
  y1 = 0;
  x2 = 0;
  y2 = 0;

  while(y1 < size - padding*rand(1,2) + size/8){
    y1 = y1 + padding*rand();
    y2 = y2 + padding*rand();
    line(x1, y1, size, y2)
  }
  
  console.log(padding)
}
window.mousePressed = function() {
  redraw();
}

window.keyPressed = function() {
  //save();
}
        