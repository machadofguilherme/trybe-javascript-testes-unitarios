/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  
  it('Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true', () => {
    expect(numbers([1, 2, 3, 4, 5])).toEqual(true);
  });

  it('Retorna FALSO com string 3 no centro', () => {
    expect(numbers([1, 2, '3', 4, 5])).toEqual(false);
  });

  it('Retorna FALSO com string a no centro', () => {
    expect(numbers([1, 'a', 3])).toEqual(false);
  });

  it('Retorna FALSO quando recebe array vazia', () => {
    expect(numbers([' '])).toEqual(false);
  });
});
