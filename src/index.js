var canvas;
var rnd;
var size;
var offset;
var padding;
var innerSize;
var y = 0;
var x = 0;
var gy = 0;
var gx = 0;
var _background;
var spacing = 20;
var iis;
import { line1, line2, line3, line4 } from './utils/lines';
import { getRandomArrayItem } from './utils/random'
window.preload = function() {
  rnd = map(fxrand(), 0, 1, 0, 10000);
  noiseSeed(rnd);
  randomSeed(rnd);
}

var bauhaus;
var alpha;
var rnd1;
var rnd2;
var scheme;
window.setup = function() {
  colorMode(HSB, 360, 100, 100, 100);
  size = min(windowWidth, windowHeight)
  offset = size / 30;
  padding = size - offset;
  padding = size / 30;
  innerSize = size - padding * 2;
  iis = innerSize / 100;

  canvas = createCanvas(size, windowHeight);

  bauhaus = [
    [
      color(227, 63, 37),
      color(352, 87, 70),
      color(43, 88, 95),
      color('#353535'),
      ''
    ],

    [
      color('#353535'),
      color('#DA6E21'),
      color('#078395'),
      color('#62B2B8'),
      color('#B21100'),
      ''
    ],

    [
      color('#388DB2'),
      color('#F16031'),
      color('#FCB925'),
      color('#353535'),
      ''
    ],
    [
      color('#844A94'),
      color('#0B4881'),
      color('#783E8B'),
      color('#353535'),
      ''
    ],
    [
      color('#066728'),
      color('#0F5428'),
      color('#10703A'),
      color('#353535'),
      ''
    ],
    [
      color('#50A6D9'),
      color('#2C7BBD'),
      color('#1A2A4B'),
      color('#353535'),
      ''
    ],
    [
      color('#ED1A3B'),
      color('#353535'),
      color('#FEDE19'),
      color("#224099"),
      ''
    ],

    [
      color('#FBDA39'),
      color('#000000'),
      color('#F94E1D'),
      color('#1B67DE'),
      color('#F3BECD'),
      color('#353535'),
      ''
    ],

    [
      color('#0D1D11'),
      color('#03A351'),
      color('#E8834B'),
      color('#FFDD00'),
      color('#195690'),
      ''
    ],
    [
      color('#0C9F3C'),
      color('#FD2024'),
      color('#195F9B'),
      color('#F4FBF6'),
      color('#007545'),
      ''
    ],

    [
      color('#FFD600'),
      color('#F2F9F5'),
      color('#05A43E'),
      color('#0D2014'),
      color('#B53628'),
      ''
    ],

    [
      color('#245B98'),
      color('#B33928'),
      color('#FFD600'),
      color('#8C4F70'),
      color('#5C97BF'),
      ''
    ],

    [
      color('#F09B91'),
      color('#DC6743'),
      color('#017782'),
      color('#8C4F70'),
      color('#03A2DD'),
      ''
    ],

    [
      color('#019DCD'),
      color('#1D459A'),
      color('#C8652A'),
      color('#F6E706'),
      color('#EC6D20'),
      ''
    ],

    [
      color('#C64875'),
      color('#E0688B'),
      color('#EF818A'),
      color('#EFA4B8'),
      ''
    ],

    [
      color('#0078AA'),
      color('#009ED8'),
      color('#41C7E0'),
      color('#3BB0CD'),
      ''
    ],

    [
      color('#0078AA'),
      color('#009ED8'),
      color('#41C7E0'),
      color('#3BB0CD'),
      color('#C64875'),
      color('#E0688B'),
      color('#EF818A'),
      color('#EFA4B8'),
      ''
    ],

    [
      color('#FF6762'),
      color('#C31D33'),
      color('#F8333D'),
      color('#CE323D'),
      ''
    ],
    [
      color('#026E8A'),
      color('#3BBBD6'),
      color('#0585A0'),
      color('#009AB9'),
      ''
    ],
    [
      color('#0078AA'),
      color('#009ED8'),
      color('#41C7E0'),
      color('#3BB0CD'),
      color('#C64875'),
      color('#E0688B'),
      color('#EF818A'),
      color('#EFA4B8'),
      ''
    ],
    [

    ]
  ]
  _background = createCanvasBackground()
  background(_background, 0, 0)
  scheme = getRandomArrayItem(bauhaus)
  rnd1 = random(3.5,4)
  rnd2 = random(2.5,3)
  noLoop();
}

const calculatePointsOfCircle = (width, height, diameter, pointCount) => {
    // Replace Angle with PI
    let angle = PI;  // 0 would still work here
    let points = [];
    // Update 360 to TWO_PI, still offset via angle
    for(let i = angle; i < TWO_PI + angle; i += TWO_PI / pointCount){
        let x = diameter / 2 * Math.cos(i) + width / 2;
        let y = diameter / 2 * Math.sin(i) + height / 2;
        points.push({x, y})
    }

    return points;
}

window.draw = function() {

    background(255)
    image(_background, 0 , 0)
    noFill();
    stroke(255)
    strokeWeight(1)
    //rect(padding, padding, innerSize, innerSize);
    strokeWeight(.4)
    var center = size/2;
    var radius = innerSize/min(rnd1,rnd2)*1.5;


    //circle(center, center, radius)
    // circle(center, center, radius * rnd1 / 3)
    // var points = calculatePointsOfCircle(size, size, radius, 10);
    // points.forEach((p) => {
    //     fill(255)
    //     circle(p.x, p.y, 15);
    // })

    // fill(bauhaus[0]);

    // arc(center, center, innerSize/rnd1, innerSize/rnd1, 3 * PI/ 2, PI / 2, OPEN); // 180 degrees
    // fill(bauhaus[1]);
    // arc(center, center, innerSize/rnd2, innerSize/rnd2, PI / 2, 3 * PI/ 2, OPEN); // 180 degrees

    // noFill()
    // stroke(0)
    // strokeWeight(1)
    gx=padding;
    gy=padding;
    var points = [];
    while (gx < innerSize + padding + iis ) {
      gy=padding;
      while(gy < innerSize + padding + iis ) {
        noFill()
        //circle(gx,gy, iis)
        fill(0)
        points.push({
          gx,gy
        })
        //circle(gx,gy, 2)
        gy = gy + iis;
      }
      gx = gx + iis;
    }

    //circle(center,center, 10)
    noFill()
    // console.log(points);
    // points.forEach((p) => {
    //   fill(255,100,100,2)
    //   circle(p.gx, p.gy, 1)
    // })
    //circle(center, center, random(innerSize));
    for(var i=0; i < random(220,422); i ++){

        var p1 = getRandomArrayItem(points);
        var p2 = getRandomArrayItem(points);

        var c = getRandomArrayItem(scheme)
        c.setAlpha(100)
        stroke(c)
        line2(p1.gx, p1.gy,p2.gx, p2.gy, random(10,50))
    }

}

window.mousePressed = function() {
  redraw();
}

window.keyPressed = function(e) {
  if(e.key === 's')(
    save(`shuhblam.jpg`)
  )
}


const createCanvasBackground = () => {
    var bgStroke = 1
    var bgIncrement = 1
    var overflowStart = 10;
    var overflowEnd = 14;
    let bg = createGraphics(size, size);
    bg.colorMode(HSB, 360, 100, 100, 100);
    var flip = random(1)
    for(var i = 0; i<2; i++) {
        if(i == 1){
          bg.stroke(43,11,91,80)
        } else {
          // bg stroke
          bg.stroke(352, 0, 70, 30);
        }
        y = padding;
        while(y < innerSize + padding + random(overflowStart,overflowEnd)){
          line2(
              padding-random(6,8),
              y-random(3,8),
              innerSize + padding +random(3,8),
              y-random(3,8),
              bgStroke,
              bg
          );
          y = y + bgIncrement;
        }
    
        x = padding;
        while(x < innerSize + padding + random(overflowStart,overflowEnd) ){
            line2(
              x-random(5,8),
              padding-random(6,8),
              x-random(5,8),
              innerSize + padding + random(5,8),
              bgStroke, bg
            );
            x = x + bgIncrement;
        }
    }
    return bg.get();
}