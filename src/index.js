var rnd;
window.preload = function() {
    rnd = map(fxrand(), 0, 1, 0, 10000);
    noiseSeed(rnd);
    randomSeed(rnd);
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(fxrand() * (max - min + 1)) + min;
}

const URL = [
    "https://coolors.co/ff8e91-000000-82d8d5",
]
let COLS;
var size;
var minSize;
var maxSize;
var f = [];
var url;
var scale;
var onlyRectangles = false;
var backgroundType;
window.setup = function() {
    minSize = min(windowWidth, windowHeight)
    maxSize = max(windowWidth, windowHeight)
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    noLoop()
}

window.mousePressed = function() {
    //redraw();
}

window.keyPressed = function(e) {
  if(e.key === 's'){
    save();
  }
}
function addGrain(amount){
    loadPixels()
  
    for(let i=0;i<(width*pixelDensity())*(height*pixelDensity())*4;i+=4){
      let noise = map(fxrand(),0,1,-amount,amount)
      pixels[i] = pixels[i]+noise
      pixels[i+1] = pixels[i+1]+noise
      pixels[i+2] = pixels[i+2]+noise
      pixels[i+3] = pixels[i+3]+noise
    }
  
    updatePixels()
  }
window.draw = function() {
    scale = random([.75])
    clear();
    var rand = randomNumber(0, URL.length - 1);
    url = URL[rand]
    COLS = createCols(url);
    noFill();
    var r = random(2)
    if(r > 1){
      backgroundType = "white"
      background(255);
    } else  {
      backgroundType = "white"
      background(255);
      if(r < .5) {
        backgroundType = "color"
        background(random(COLS));
      }
    }
    noStroke();

    unit(maxSize / 2, minSize / 2, minSize / scale, maxSize / scale);
    var zoom = true;
    if(scale === 1) zoom = false
    window.$fxhashFeatures = {
      colors: url.split('https://coolors.co/')[1],
      zoom,
      onlyRectangles,
      backgroundType
    }

    addGrain(10)
}

function unit(bx, by, w, h) {
    flower(bx, by, w);
}


function flower(bx, by, s) {
    var maybe = fxrand()
    if (maybe < .75) {
 
        f = [c, c5];
        if (maybe < .9) {
          onlyRectangles = true
          f = [c5];   
        }
    } else {
        f = [c, c5];

    }
    ellipseMode(CENTER);
    noStroke();
    randCirclePattern(bx, by, s * 0.7, 10, 30, f);
}


function randCirclePattern(_x, _y, _d, _min, _max, funcArr) {
    if (_renderer._ellipseMode === CORNER) {
        _x += _d / 2;
        _y += _d / 2;
    }

    let d = _d;
    while (d > 10) {
        const span = random(_min, _max);
        ellipseMode(CENTER);
        var spanWh = random(2, 2.5);
        circlePattern(_x, _y, d, span / spanWh * random(0.4, 1.5), span / spanWh, random(funcArr));
        d -= span;
    }
}


function circlePattern(_x, _y, _dia, _uw, _uh, _fuc = function() {}, _debug = false) {

    if (_renderer._ellipseMode === CORNER) {
        _x += _dia / 2;
        _y += _dia / 2;
    }

    let radius = _dia / 2 - _uh / 2;

    push();
    translate(_x, _y);

    noStroke();
    circle(0, 0, _dia);

    let num = int(radius * TAU / _uw);
    num -= num % 4;
    if (num <= 1) {
        pop();
        return;
    }
    const rStep = TAU / num;

    for (let rad = rStep / 2; rad < TAU + rStep / 2; rad += rStep) {
        push();
        rotate(rad);
        translate(0, radius);
        _fuc(_uw, _uh);
        pop();
    }
    pop();
}

function c(_w, _h) {
    ellipseMode(CENTER);
    rectMode(CENTER);
    noFill()
    var maybe = fxrand();
    if (maybe < .1) {

        stroke(random(COLS))
        strokeWeight(1)
    } else {
        noStroke();
        fill(random(COLS));

    }

    ellipse(0, 0, min(_w, _h) * randomNumber(0.5, 1) * 2);
}


function c5(_w, _h) {
    ellipseMode(CENTER);
    rectMode(CENTER);

    fill(random(COLS));
    noStroke();

    rect(0, 0, randomNumber(_w*4, _w), randomNumber(_h/8, _h));
}



////////////////////////////////////////////////////////////////////////


function createCols(url) {
    let slaIndex = url.lastIndexOf("/");
    let colStr = url.slice(slaIndex + 1);
    let colArr = colStr.split("-");
    for (let i = 0; i < colArr.length; i++) colArr[i] = "#" + colArr[i];
    return colArr;
}