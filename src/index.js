window.$fxhashFeatures = {
  padding: padding,
  scheme: "", 
}

var x1;
var y1;
var x2;
var y2;
var padding;
var size;

function rand(min, max) {
  if(!min || !max) return fxrand()
  return fxrand() * (max - min) + min;
}

function randPadding() {

}

function init(){
  x1 = 0;
  y1 = 0;
  x2 = 0;
  y2 = 0;
};


window.setup = function() {

  size = min(windowWidth, windowHeight)
  console.log(fxhash)
  background(255)
  createCanvas(size, size);
  blendMode(MULTIPLY);
  padding = int(rand(3,20))

  noLoop();
}

window.draw = function(){
  background(255)
  clear();
  init();


  while(x1 < size - padding*rand(1,2) + size/8){
    var x1p = rand()*rand(1,2);
    var x2p = rand()*rand(1,2);
    x1 = x1 + padding*x1p;
    x2 = x2 + padding*x2p;
    line(x1, y1, x2, size)
  }
  
  init();

  while(y1 < size - padding*rand(1,2) + size/8){
    var y1p = rand()*rand(1,2);
    var y2p = rand()*rand(1,2);
    y1 = y1 + padding*y1p;
    y2 = y2 + padding*y2p;
    line(x1, y1, size, y2)
  }
  
  window.$fxhashFeatures = {
    "loom room": padding,
  }

  console.log($fxhashFeatures)
}
window.mousePressed = function() {
  redraw();
}

window.keyPressed = function() {
  //save();
}
        