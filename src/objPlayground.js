const calculator = (number1, number2) => {
  let calc = {
    sum: number1 + number2,
    mult: number1 * number2,
    div: Math.floor(number1 / number2),
    sub: number1 - number2,
  };
  
  return calc;
};

const arrayGenerator = (type, object) => {
  let list;
  if (type === 'keys') { list = Object.keys(object); return list; }
  if (type === 'values') { list = Object.values(object); return list; }
  if (type === 'entries') { list = Object.entries(object); return list; }
};

module.exports = { calculator, arrayGenerator };
