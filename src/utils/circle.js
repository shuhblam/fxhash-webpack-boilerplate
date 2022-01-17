export const drawCircles = (points, diameter) => {
  points.forEach((c) => {
    circle(c.x, c.y, diameter)
  })
};

export const getCirclePoints = (_x, _y, _diameter, pointCount) => {
  var points = [];
  let angle = PI;
  for(let i = angle; i < TWO_PI + angle; i += TWO_PI / pointCount){
      let x = _diameter / 2 * Math.cos(i) + _x;
      let y = _diameter / 2 * Math.sin(i) +_y;
      points.push(createVector(x,y))
  }
  return points;
};