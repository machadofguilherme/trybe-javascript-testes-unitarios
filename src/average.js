const average = (array) => {
  let sum = 0;
  let result;
  if (array.length === 0) { return undefined; }

  for (let list of array) {
     if (typeof list !== 'number') { return undefined; }
    sum += list;
  }

  result = Math.round(sum / array.length);
  return result;
};

module.exports = average;
