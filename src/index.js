var rnd;
var canvas;
var center;
let yoff = 0.0; // 2nd dimension of perlin noise


import { getCirclePoints } from './utils/circle'
import { getRandomArrayItem } from './utils/random'
var pc = [
  "0b090a-161a1d-660708-a4161a-ba181b-e5383b-b1a7a6-d3d3d3-f5f3f4-ffffff",
  "757bc8-8187dc-8e94f2-9fa0ff-ada7ff-bbadff-cbb2fe-dab6fc-ddbdfc-e0c3fc",
  "2d00f7-6a00f4-8900f2-a100f2-b100e8-bc00dd-d100d1-db00b6-e500a4-f20089",
  "007f5f-2b9348-55a630-80b918-aacc00-bfd200-d4d700-dddf00-eeef20-ffff3f",
  "ffadad-ffd6a5-fdffb6-caffbf-9bf6ff-a0c4ff-bdb2ff-ffc6ff-fffffc",
  "0466c8-0353a4-023e7d-002855-001845-001233-33415c-5c677d-7d8597-979dac",
  "7400b8-6930c3-5e60ce-5390d9-4ea8de-48bfe3-56cfe1-64dfdf-72efdd-80ffdb",
  "233d4d-fe7f2d-fcca46-a1c181-619b8a",
  "03071e-370617-6a040f-9d0208-d00000-dc2f02-e85d04-f48c06-faa307-ffba08",
  "f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0",
  "03045e-023e8a-0077b6-0096c7-00b4d8-48cae4-90e0ef-ade8f4-caf0f8",
  "d9ed92-b5e48c-99d98c-76c893-52b69a-34a0a4-168aad-1a759f-1e6091-184e77",
  "f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529",
  "0b132b-1c2541-3a506b-5bc0be-6fffe9",
  "201e1f-ff4000-faaa8d-feefdd-50b2c0",
  "011627-fdfffc-2ec4b6-e71d36-ff9f1c",
  "3d348b-7678ed-f7b801-f18701-f35b04",
  "03071e-370617-6a040f-9d0208-d00000-dc2f02-e85d04-f48c06-faa307-ffba08-/0466c8-0353a4-023e7d-002855-001845-001233-33415c-5c677d-7d8597-979dac"
]
var _color;

class Ring {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.points = getCirclePoints(0, 0, d, random(100,200));
    this.lines = [];
    this.color = color(random(_color));
    this.alpha = random(0,255);
    this.rotation = random(0, 360);
    this.strokeWeight = random(0,1)
  }
  draw() {
    push();
    translate(center.x, center.y);
    rotate(this.rotation)
    this.color.setAlpha(this.alpha)
    stroke(this.color)
    strokeWeight(this.strokeWeight)
    var start = int(random(0,this.points.length - 1));
    var end = int(random(0,this.points.length - 1));
    var realStart = min(start, end);
    var realEnd = max(start, end);
    for(var i=this.points.length - 1; i >= 0; i--) {
      //circle(this.points[i].x, this.points[i].y, 2)
      if(i > realStart && i < realEnd) {
        if(this.points[i - 1]) {
          const p1 = this.points[i];
          const p2 = this.points[i - 1];
          var l = line(p1.x, p1.y, p2.x, p2.y)
        } else {
          const p2 = this.points[this.points.length - 1];
          const p1 = this.points[0];
          var l = line(p1.x, p1.y, p2.x, p2.y)
        }
        this.lines.push(l)
      }
    }
    pop()
  }
  rotate() {
    this.rotation = this.rotation- .01
  }
}

window.preload = function() {
  rnd = map(fxrand(), 0, 1, 0, 10000);
  noiseSeed(rnd);
  randomSeed(rnd);
  //noLoop()
}

var numberToDraw;
var s = 0;
var rings = [];
var heightToDraw;
var b;
var _xoff;
var _yoff;
window.setup = function() {

  _xoff = random(0.001, 0.002);
  _yoff = random(0.0005, 0.001);
  var m = min(windowWidth, windowHeight);
  canvas = createCanvas(windowWidth, windowHeight);
  center = createVector(m/random(1,2), m/random(2,4));
  s = random(min(windowWidth, windowHeight)/3, min(windowWidth, windowHeight)/2);
  _color = getRandomArrayItem(pc).split("-").map((s) => `#${s}`);

  // for(var j = 0; j < 10; j++){
  //   for(var i = 0; i < windowWidth*2; i+=random(8,10)){
  //     var c = new Ring(center.x, center.y, 0 + i);
  //     rings.push(c);
  //   }
  // }

  // rings.forEach((r) => {
  //   r.draw();
  // });
  var bg = random(1);
  if(bg > .5){
    b = 0;
  } else {
    b = 255
  }
  background(b)
  numberToDraw = random(3000,5000);
  heightToDraw = random(.4,1.7)
  frameRate(180)
}

var iteration = 0;

window.draw = function() {
  // background(0)
  // rings.forEach((r) => {
  //   r.rotate();
  //   r.draw();
  // // });
  if(iteration < numberToDraw) {
    fill(255);
    stroke(0);
    iteration = iteration + 1;
    //fill(0)
    //rect(5,5, 100, 100)
    //fill(255)
    //text(iteration, 10,20)
    noFill()
    var ccc = color(random(_color))
    ccc.setAlpha(random(0,20))
    strokeWeight(random(1.5))
    stroke(ccc)

     // We are going to draw a polygon out of the wave points
     beginShape();

     let xoff = 0; 

     // Iterate over horizontal pixels
     for (let x = 0; x <= width; x += 1) {
       let y = map(noise(xoff, yoff), 0, 1, 0, windowHeight);
       vertex(x, y);
       xoff += _xoff;
     }

     yoff += _yoff;
     vertex(width+100, height+1);
     vertex(0-100, height+1);
     endShape(CLOSE);
  }




}

window.mousePressed = function() {
  //pause();
}

window.keyPressed = function(e) {
  if(e.key === 's')(
    save(`shuhblam.jpg`)
  )
}


