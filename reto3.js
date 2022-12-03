function distributeGifts(packOfGifts, reindeers) {
  let weightGifts = 0;
  let weightLimit = 0;
  packOfGifts.forEach((elem) => (weightGifts += elem.length));
  reindeers.forEach((elem) => (weightLimit += elem.length * 2));
  return Math.trunc(weightLimit / weightGifts);
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];
console.log(distributeGifts(packOfGifts, reindeers));
