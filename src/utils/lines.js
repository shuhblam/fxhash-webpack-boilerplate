import { getRandomNumber as rndm } from './random';

export const line1 = (x1, y1, x2, y2, weight) => {
  for (var i = 0; i < weight * 5; i++) {
    var theta = rndm(0, TWO_PI);
    var nx1 = x1 + rndm(0, weight / 2) * cos(theta);
    var ny1 = y1 + rndm(0, weight / 2) * sin(theta);
    var nx2 = x2 + rndm(0, weight / 2) * cos(theta);
    var ny2 = y2 + rndm(0, weight / 2) * sin(theta);
    strokeWeight(0.5);
    line(nx1, ny1, nx2, ny2);
  }
}