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
    "https://coolors.co/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0",
    "https://coolors.co/2b2d42-8d99ae-edf2f4-ef233c-d90429",
    "https://coolors.co/d8f3dc-b7e4c7-95d5b2-74c69d-52b788-40916c-2d6a4f-1b4332-081c15",
    "https://coolors.co/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529",
    "https://coolors.co/f94144-f3722c-f8961e-f9844a-f9c74f-90be6d-43aa8b-4d908e-577590-277da1",
    "https://coolors.co/011627-fdfffc-2ec4b6-e71d36-ff9f1c",
    "https://coolors.co/cad2c5-84a98c-52796f-354f52-2f3e46",
    "https://coolors.co/5f0f40-9a031e-fb8b24-e36414-0f4c5c",
    "https://coolors.co/001219-005f73-0a9396-94d2bd-e9d8a6-ee9b00-ca6702-bb3e03-ae2012-9b2226",
    "https://coolors.co/353535-3c6e71-ffffff-d9d9d9-284b63",
    "https://coolors.co/011627-fdfffc-2ec4b6-e71d36-ff9f1c",
    "https://coolors.co/f94144-f3722c-f8961e-f9844a-f9c74f-90be6d-43aa8b-4d908e-577590-277da1",
    "https://coolors.co/001219-005f73-0a9396-94d2bd-e9d8a6-ee9b00-ca6702-bb3e03-ae2012-9b2226",
    "https://coolors.co/ff5e5b-d8d8d8-ffa805-00cecb-ffed66-3e4e50",
    "https://coolors.co/550527-688e26-faa613-f44708-a10702-e1d6de",
    "https://coolors.co/261532-b055ce-79e27d-948b38-004d21-073e9d",
    "https://coolors.co/cb997e-ddbea9-ffe8d6-b7b7a4-a5a58d-6b705c",
    "https://coolors.co/5fad56-f2c14e-f78154-4d9078-b4436c",
    "https://coolors.co/3f0d12-a71d31-f1f0cc-d5bf86-8d775f",
    "https://coolors.co/513a24-6d6053-167da1-1c5872-ffffff",
    "https://coolors.co/3897d3-7fb7dc-67a5cf-4e92c2-638cb1-8e808e-b9756c-cf6f5b-da6c52-e46949",
    "https://coolors.co/3daecd-f1d430-879e2f-f08535-6c4896",
    "https://coolors.co/ffb340-f08600-e0157e-e37d7f-00fff5-000000-ffffff",
    "https://coolors.co/a44306-e46e14-4e3018-f9f9f9-649757",
    "https://coolors.co/eead53-7a934e-e24311-a94932-2d2c29",
    "https://coolors.co/d11961-f8be41-0f4f4f-1b1b1b-ffffff",
    "https://coolors.co/fedd3a-818e32-ad3638-d44a1b-401107",
    "https://coolors.co/3f0d12-a71d31-f1f0cc-d5bf86-8d775f",
    "https://coolors.co/5fad56-f2c14e-f78154-4d9078-b4436c",
    "https://coolors.co/800016-a0001c-c00021-ff002b-ffffff-407ba7-004e89-002962-00043a",
    "https://coolors.co/014737-03543f-046c4e-057a55-0e9f6e-31c48d-84e1bc-bcf0da-def7ec-f3faf7",
    "https://coolors.co/54478c-2c699a-048ba8-0db39e-16db93-83e377-b9e769-efea5a-f1c453-f29e4c",
    "https://coolors.co/000000-ffffff-f23d5b-f26924-ffd500-9ccc3d-15bdd4-1a76bd-6f4599-bf1d89",
    "https://coolors.co/ff0000-ff8700-ffd300-deff0a-a1ff0a-0aff99-0aefff-147df5-580aff-be0aff",
    "https://coolors.co/ff4800-ff5400-ff6000-ff6d00-ff7900-ff8500-ff9100-ff9e00-ffaa00-ffb600",
    "https://coolors.co/0c0f0a-ff206e-fbff12-41ead4-ffffff",
    "https://coolors.co/ff6700-ebebeb-c0c0c0-3a6ea5-004e98",
    "https://coolors.co/102542-f87060-cdd7d6-b3a394-ffffff",
    "https://coolors.co/0b132b-1c2541-3a506b-5bc0be-6fffe9",
    "https://coolors.co/add7f6-87bfff-3f8efc-2667ff-3b28cc",
    "https://coolors.co/ff6700-ebebeb-c0c0c0-3a6ea5-004e98",
    "https://coolors.co/0a2463-3e92cc-fffaff-d8315b-1e1b18",
    "https://coolors.co/006ba6-0496ff-ffbc42-d81159-8f2d56",
    "https://coolors.co/0b090a-161a1d-660708-a4161a-ba181b-e5383b-b1a7a6-d3d3d3-f5f3f4-ffffff",
    "https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557",
    "https://coolors.co/ff5400-ff6d00-ff8500-ff9100-ff9e00-00b4d8-0096c7-0077b6-023e8a-03045e",
    "https://coolors.co/0b090a-161a1d-660708-a4161a-ba181b-e5383b-b1a7a6-d3d3d3-f5f3f4-ffffff"
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

window.draw = function() {
    scale = random([.25,1])
    clear();
    var rand = randomNumber(0, URL.length - 1);
    url = URL[rand]
    COLS = createCols(url);
    noFill();
    var r = random(2)
    if(r > 1){
      backgroundType = "black"
      background(0);
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

    console.log(url)
}

function unit(bx, by, w, h) {
    flower(bx, by, w);
}


function flower(bx, by, s) {
    var maybe = fxrand()
    if (maybe < .75) {
 
        f = [c, c5];
        if (maybe < .1) {
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
    if (maybe < .75) {

        stroke(random(COLS))
        strokeWeight(1)
    } else {
        noStroke();
        fill(random(COLS));

    }

    ellipse(0, 0, min(_w, _h) * randomNumber(0.1, 0.8) * .57);
}


function c5(_w, _h) {
    ellipseMode(CENTER);
    rectMode(CENTER);

    fill(random(COLS));
    noStroke();

    rect(0, 0, randomNumber(_w/4, _w), randomNumber(_h/4, _h));
}



////////////////////////////////////////////////////////////////////////


function createCols(url) {
    let slaIndex = url.lastIndexOf("/");
    let colStr = url.slice(slaIndex + 1);
    let colArr = colStr.split("-");
    for (let i = 0; i < colArr.length; i++) colArr[i] = "#" + colArr[i];
    return colArr;
}