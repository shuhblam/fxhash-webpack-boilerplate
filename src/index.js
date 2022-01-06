var size;

function rand(min, max) {
  if(!min || !max) return fxrand()
  return fxrand() * (max - min) + min;
}


window.setup = function() {

  size = min(windowWidth, windowHeight)
  console.log(fxhash)
  background(255)
  createCanvas(size, size);


  noLoop();
}

window.draw = function(){

}

window.mousePressed = function() {
  //redraw();
}

window.keyPressed = function() {
  //save();
}
        