export const getRandomNumber = (min, max) => {
  if(min !== undefined && max === undefined){
    return fxrand(min)
  }
  if(min === undefined && max === undefined) return fxrand()
  return fxrand() * (max - min) + min;
}

export const getRandomArrayItem = (arr) => {
  var idx = int(getRandomNumber(0, arr.length -1))
  return arr[idx];
}
