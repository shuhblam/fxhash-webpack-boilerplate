
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

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//

const URL  = [
  "https://coolors.co/011627-fdfffc-2ec4b6-e71d36-ff9f1c",
  "https://coolors.co/f94144-f3722c-f8961e-f9844a-f9c74f-90be6d-43aa8b-4d908e-577590-277da1",
  "https://coolors.co/001219-005f73-0a9396-94d2bd-e9d8a6-ee9b00-ca6702-bb3e03-ae2012-9b2226",
  "https://coolors.co/ff5e5b-d8d8d8-ffa805-00cecb-ffed66-3e4e50",
  "https://coolors.co/550527-688e26-faa613-f44708-a10702-e1d6de",
  "https://coolors.co/261532-b055ce-79e27d-948b38-004d21-073e9d",
  "https://coolors.co/cb997e-ddbea9-ffe8d6-b7b7a4-a5a58d-6b705c",
  "https://coolors.co/eddcd2-fff1e6-fde2e4-fad2e1-c5dedd-dbe7e4-f0efeb-d6e2e9-bcd4e6-99c1de",
  "https://coolors.co/ffcdb2-ffb4a2-e5989b-b5838d-6d6875",
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
  "https://coolors.co/ffcdb2-ffb4a2-e5989b-b5838d-6d6875"
]
let COLS;
var size;
var minSize;
var maxSize;
var f = [];
window.setup = function() {
	minSize = min(windowWidth, windowHeight)
  maxSize = max(windowWidth, windowHeight)
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	noLoop()
}

window.mousePressed = function() {
  redraw();
}

window.keyPressed = function() {
  save();
}

window.draw = function() {
  clear();
  var rand = randomNumber(0, URL.length-1);

  var url = URL[rand]

	COLS = createCols(url);
	const arr =  [c, c2, c3, c4];
	noFill();
	background(0);
	noStroke();
	
	unit(maxSize/2, minSize /2,  minSize / .25 ,  maxSize / .25 );
}

function unit(bx, by, w, h)
{
	flower(bx, by, w);
}


function flower(bx, by, s)
{
  var maybe = fxrand()
  if(maybe < .75){
    f = [c5];
    if(maybe < .1){
      f = [c,c2,c5];
    }
  } else {
    f = [c,c5];

  }

	ellipseMode(CENTER);
	noStroke();
	
  randCirclePattern(bx, by, s * 0.7, 10, 30, f);
	

}


function randCirclePattern(_x, _y, _d, _min, _max, funcArr)
{
	if(_renderer._ellipseMode === CORNER)
	{
		_x += _d / 2;
		_y += _d / 2;
	}
	
	let d = _d;
	while(d > 10)
	{
		const span = random(_min, _max);
		ellipseMode(CENTER);
    var spanWh = random(2, 2.5);
		circlePattern(_x, _y, d, span / spanWh * random(0.4, 1.5), span / spanWh, random(funcArr));
		d -= span;
	}
}


function circlePattern(_x, _y, _dia, _uw, _uh, _fuc = function(){}, _debug = false)
{
	
	if(_renderer._ellipseMode === CORNER)
	{
		_x += _dia / 2;
		_y += _dia / 2;
	}
	
	let maxRadius = _dia / 2;
	let minRadius = _dia / 2 - _uh ;
	let radius = _dia / 2 - _uh / 2;
	
	push();
	translate(_x, _y);
	
	if(_debug)
	{
		noFill();
		rectMode(CENTER);
		stroke(255, 255, 255);
		circle(0, 0, radius * 2);
		stroke(255, 255, 255);
		circle(0, 0, minRadius * 2);
		stroke(255, 255, 255);
		circle(0, 0, (minRadius + _uh) * 2);
		stroke(0);
	}
	
	noStroke();
	//fill(random(COLS));
	circle(0, 0, _dia);
	
	let num = int(radius * TAU / _uw);
	num -= num % 4;
	if(num <= 1){
		pop();
		return;
	}
	const rStep = TAU / num ;
	
	for(let rad = rStep / 2; rad < TAU + rStep / 2; rad += rStep)
	{
		push();
		rotate(rad);
		translate(0, radius);
		_fuc(_uw, _uh);
		pop();
	}
	pop();
}

function c(_w, _h)
{
	ellipseMode(CENTER);
	rectMode(CENTER);
	noFill()
  var maybe = fxrand();
  if(maybe < .75){

    stroke(random(COLS))
    strokeWeight(1)
  } else {
        noStroke();
    fill(random(COLS));

  }

	ellipse(0, 0, min(_w, _h) * randomNumber(0.1,0.8)*.57);
}

function c2(_w, _h)
{
	ellipseMode(CENTER);
	rectMode(CENTER);
	fill(0);
	noStroke();
	rect(0, 0, _w * 0.5, _h * 0.5);
}

function c3(_w, _h)
{
	const we = min(_w, _h) * 0.15;
	ellipseMode(CENTER);
	rectMode(CENTER);
	fill(0);
	noStroke();
	rect(0, 0, _w * 0.7, we);
	rect(0, 0, we, _h * 0.7);
}

function c4(_w, _h)
{
	fill(0);
	noStroke();
	triangle(-_w /2, _h / 2, 0, -_h / 2, _w /2, _h / 2);
}

function c5(_w, _h)
{
	ellipseMode(CENTER);
	rectMode(CENTER);

    fill(random(COLS));
    noStroke();

	rect(0, 0, randomNumber(0,_w),randomNumber(0,_h));
}



////////////////////////////////////////////////////////////////////////


function createCols(url)
{
	let slaIndex = url.lastIndexOf("/");
	let colStr = url.slice(slaIndex + 1);
	let colArr = colStr.split("-");
	for(let i = 0; i < colArr.length; i++)colArr[i] = "#" + colArr[i];
	return colArr;
}