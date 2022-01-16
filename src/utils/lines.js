const MAX_VALUES = 5;

/* The map2() function supports the following easing types */
const LINEAR = 0;
const QUADRATIC = 1;
const CUBIC = 2;
const QUARTIC = 3;
const QUINTIC = 4;
const SINUSOIDAL = 5;
const EXPONENTIAL = 6;
const CIRCULAR = 7;
const SQRT = 8;

/* When the easing is applied (in, out, or both) */
const EASE_IN = 0;
const EASE_OUT = 1;
const EASE_IN_OUT = 2;

/*
 * A map() replacement that allows for specifying easing curves
 * with arbitrary exponents.
 *
 * value :   The value to map
 * start1:   The lower limit of the input range
 * stop1 :   The upper limit of the input range
 * start2:   The lower limit of the output range
 * stop2 :   The upper limit of the output range
 * type  :   The type of easing (see above)
 * when  :   One of EASE_IN, EASE_OUT, or EASE_IN_OUT
 */
const map2 = (value, start1, stop1, start2, stop2, type, when) => {
  const b = start2;
  const c = stop2 - start2;
  let t = value - start1;
  const d = stop1 - start1;
  const p = 0.5;
  switch (type) {
    case LINEAR:
      return c*t/d + b;
    case QUADRATIC:
        if (when === EASE_IN) {
          t /= d;
          return c*t*t + b;
        } else if (when == EASE_OUT) {
          t /= d;
          return -c * t*(t-2) + b;
        } else if (when == EASE_IN_OUT) {
          t /= d/2;
          if (t < 1) return c/2*t*t + b;
          t--;
          return -c/2 * (t*(t-2) - 1) + b;
        }
        break;
    };
  return 0;
}

export const line1 = (x1, y1, x2, y2, weight, value) => {
  const strokeColor = map2(value, 0, MAX_VALUES - 1, 0, 220, LINEAR, EASE_OUT);
  console.log(strokeColor);
  stroke(strokeColor);
  strokeWeight(weight);
  line(x1, y1, x2, y2);
  stroke(255, 0, 0);
  noFill();
  strokeWeight(1);
}

export const line2 = (x1, y1, x2, y2, weight, bg) => {
  for (let i = 0; i < weight * 5; i++) {
    const theta = random(TWO_PI);
    const nx1 = x1 + random(weight / 2) * cos(theta);
    const ny1 = y1 + random(weight / 2) * sin(theta);
    const nx2 = x2 + random(weight / 2) * cos(theta);
    const ny2 = y2 + random(weight / 2) * sin(theta);

    if(bg) {
      bg.strokeWeight(0.5);
      bg.line(nx1, ny1, nx2, ny2)
    } else {
      line(nx1, ny1, nx2, ny2)
    }

  }
}

export const line3 = (x1, y1, x2, y2, weight, value) => {
  const strokeColor = map2(value, 0, MAX_VALUES - 1, 220, 50, LINEAR, EASE_OUT);
  console.log(strokeColor);
  fill(0, strokeColor);
  for (let i = 0; i < weight * 300; i++) {
    const theta = random(TWO_PI);
    const nx1 = x1 + random(weight / 2) * cos(theta);
    const ny1 = y1 + random(weight / 2) * sin(theta);
    const nx2 = x2 + random(weight / 2) * cos(theta);
    const ny2 = y2 + random(weight / 2) * sin(theta);
    noStroke();
    //fill(0, map(value, 0, MAX_VALUES));
    const lval = random(1);
    ellipse(lerp(nx1, nx2, lval), lerp(ny1, ny2, lval), 0.5, 0.5);
  }
}

export const line4 = (x1, y1, x2, y2, weight, value) => {
  const darkness = map2(value, 0, MAX_VALUES - 1, 5, 1, QUADRATIC, EASE_OUT);
  for (let i = 0; i < weight * darkness * 100; i++) {
    const theta = random(TWO_PI);
    const nx1 = x1 + random(weight / 2) * cos(theta);
    const ny1 = y1 + random(weight / 2) * sin(theta);
    const nx2 = x2 + random(weight / 2) * cos(theta);
    const ny2 = y2 + random(weight / 2) * sin(theta);
    noStroke();
    fill(0);
    const lval = random(1);
    ellipse(lerp(nx1, nx2, lval), lerp(ny1, ny2, lval), 0.5, 0.5);
  }
}