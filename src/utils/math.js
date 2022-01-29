export const midpoint = (p1, p2) => {
  var x = (p1.x + p2.x) / 2;
  var y = (p1.y + p2.y ) / 2;

  return createVector(x,y)
}


export const intersect = (l1, l2) => {
  var point1 = [l1[0].x, l1[0].y];
  var point2 = [l1[1].x, l1[1].y];
  var point3 = [l2[0].x, l2[0].y];
  var point4 = [l2[1].x, l2[1].y];

  const ua = ((point4[0] - point3[0]) * (point1[1] - point3[1]) - 
  (point4[1] - point3[1]) * (point1[0] - point3[0])) /
 ((point4[1] - point3[1]) * (point2[0] - point1[0]) - 
  (point4[0] - point3[0]) * (point2[1] - point1[1]));

const ub = ((point2[0] - point1[0]) * (point1[1] - point3[1]) - 
  (point2[1] - point1[1]) * (point1[0] - point3[0])) /
 ((point4[1] - point3[1]) * (point2[0] - point1[0]) - 
  (point4[0] - point3[0]) * (point2[1] - point1[1]));

const x = point1[0] + ua * (point2[0] - point1[0]);
const y = point1[1] + ua * (point2[1] - point1[1]);

return createVector(x,y)
}