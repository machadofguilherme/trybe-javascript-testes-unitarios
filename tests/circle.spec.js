/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência.
  Se não for especificado um raio, a função retorna `undefined`.
  Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no console do navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  
  it('Teste se circle retorna undefined', () => {
    expect(circle()).toEqual(undefined);
  });

  it('Teste se circle retorna um objeto', () => {
    let result = { radius: 1, area: 3.14, circumference: 6.28 }
    expect(circle(1)).toEqual(result);
  });

  it('Teste se o objeto retornado possui 3 propriedades', () => {
    let result = { radius: 1, area: 3.14, circumference: 6.28 }
    expect(circle(1)).toEqual( result );
  });


  it('Teste se a função sem nenhum parâmetro retorna undefined', () => {
    expect(circle()).toBeUndefined();
  });


  it('Teste se a função retorna o valor da circunferência para um círculo de raio 2', () => {
    let circum1 = { radius: 2, area: 12.56, circumference: 12.56 }
    expect(circle(2)).toEqual({ radius: 2, area: 12.56, circumference: 12.56 });
  });

  it('Teste se a função retorna o valor da circunferência para um círculo de raio 3', () => {
    let circum1 = { radius: 2, area: 12.56, circumference: 12.56 }
    expect(circle(3)).toEqual(
      { radius: 3, area: 28.259999999999998, circumference: 18.84 }
      );
  });


  it('Teste se a função retorna o valor da circunferência para um círculo de raio 3', () => {
    let circum1 = { radius: 2, area: 12.56, circumference: 12.56 }
    expect(circle(3)).toEqual(
      { radius: 3, area: 28.259999999999998, circumference: 18.84 }
      );
  });
});
