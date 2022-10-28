const vqv = (name, age) => {
  if (name === undefined || age === undefined) { return undefined; }
    
  let phrase = `Oi, meu nome é ${name}!\nTenho ${age} anos,
trabalho na Trybe e mando muito em programação!\n#VQV!`;
  return phrase;
};

vqv();

module.exports = vqv;
