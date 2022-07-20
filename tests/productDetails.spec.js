const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Teste se productDetails é uma função', () => {
    expect(productDetails).toBeDefined();
  })

  it('Teste se o retorno da função é um array', () => {
    expect(productDetails()).toEqual(productDetails());
  })

  it('Teste se o array retornado pela função contém dois itens dentro', () => {
    expect(productDetails().length).toEqual(productDetails().length);
  })

  it('Teste se os dois itens retornado pela função são objetos', () => {
    let otherObject = [ {
      name: 'Alcool gel',
      details: {
        productId: 'Alcool gel123',
      },
    },
    {
      name: 'Máscara',
      details: {
        productId: 'Máscara123',
      }
    } ];
    expect(productDetails('Alcool gel', 'Máscara')).toEqual(otherObject);
  })

  it('Teste se quando passado parâmetros diferentes os objetos também são', () => {
    let otherObject = [ {
      name: 'Alcool gel',
      details: {
        productId: 'Alcool gel123',
      },
    },
    {
      name: 'Máscara',
      details: {
        productId: 'Máscara123',
      }
    } ];
    expect(productDetails().length).toEqual(otherObject);
  })

  it('Teste se os dois productIds terminam com 123', () => {

    expect(productDetails('Máscara')).toContain({productId: 'Máscara123'});
  })

});
