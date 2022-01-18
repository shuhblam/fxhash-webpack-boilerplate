import { line2 } from "./utils/lines";

var rnd;
var canvas;
var center;
var size;
var ha = 3e3;
var h;
var e;
var w;
var padding = 5;

function drawWithinBounds(x1, y1, x2, y2, type, space) {
  console.log(type, space, x1, y1, x2, y2);


  if(type === 'h') {
    var subDivision = int(random(2,5));
    var sectionWidth = x2 / subDivision;
    for(var i=0; i<x2; i += sectionWidth){

      line(i, y1, i, y2, 20)
    }
  }

  if( type=== 'w'){
    var subDivision = int(random(2,5));
    var sectionWidth = y2 / subDivision;
    for(var i=0; i<y2; i += sectionWidth){

      line(x1, i, x2, i, 20)
    }
  }

}


function drawGrid(type){
  // devide by width
  var subDivision = int(random(2,5));

  if(type === 'h'){
    var space = h / subDivision;
    for(var i=0; i < h; i += space){
      stroke(255);
      rect(0,i,w,space)
      stroke(255, 0, 0);
      drawWithinBounds(0, i, w, i+space, 'h', space)
    }
    return;
  }
  // else
  var subDivision = int(random(2,5));
  var space = w / subDivision;
  for(var i=0; i < w; i += space) {
 
    stroke(255);
    rect(i, 0, space, h);
    stroke(255, 0, 0);
    drawWithinBounds(i, 0, i+space, h, 'w', space)
  }
}
window.preload = function() {
  rnd = map(fxrand(), 0, 1, 0, 10000);
  noiseSeed(rnd);
  randomSeed(rnd);
}

window.setup = function() {
  noFill()
  h = min(3 * windowWidth / 2, windowHeight),
  e = h / ha,
  w = 2 * h / 3,
  canvas = createCanvas(w, h);

  noLoop()
}

window.draw = function() {
  background(0)
  var widthOrHeight = random(1);


  if(widthOrHeight > .5){
    drawGrid('w')
  } else {
    drawGrid('h')
  };
}

window.mousePressed = function() {
  redraw();
}

window.keyPressed = function(e) {
  if(e.key === 's'){
    var date = new Date();

    save(`shuhblam.jpg${date.toISOString()}`)
  }
}


