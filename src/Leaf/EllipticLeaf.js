import { midpoint } from '../utils/math';

export default class EllipticLeaf{
  constructor(start, end) {


    //line(start.x, start.y, end.x, end.y)
    // midpoint of the start and end of bezier curve
    var startendMid = midpoint(start, end);


    var length = dist(start.x, start.y, end.x, end.y)
    // first control point
    var control1 = createVector( 
      startendMid.x,
      startendMid.y - startendMid.y / 2,
    );


    // second control point
    var control2 = createVector(
      (startendMid.x - startendMid.x / 2)+ length / 4,
      (startendMid.y + startendMid.y / 2)- length / 4,
    );



    // // start of the bezier curve
    circle(start.x,start.y, 20);

    // // end of the bezier curve
    circle(end.x,end.y, 20);

    // midpiont
    //circle(startendMid.x, startendMid.y, 20);

    // // control points
    circle(control1.x, control1.y, 20);
    line(start.x, start.y, control1.x, control1.y);

    circle(control2.x, control2.y, 20);
    line(end.x, end.y, control2.x, control2.y);


    beginShape();
    vertex(start.x,start.y);
    bezierVertex(control1.x, control1.y, control2.x, control2.y, end.x, end.y)
    //bezierVertex(control4.x, control4.y, control3.x, control3.y, start.x, start.y)
    endShape();
  }
}