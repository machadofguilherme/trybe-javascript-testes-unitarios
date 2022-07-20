/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

/*
A função getCharacter recebe uma string que representa o nome de um personagem e retorna um objeto contendo seu nome, sua classe e suas frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro  |      Nome       |    Classe   |              Frases
----------------------------------------------------------------------------------
   Arya     |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
  Brienne   |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
Melissandre |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna `undefined`.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

  {
    name: 'Nome do Personagem',
    class: 'Classe do Personagem' ,
    phrases: ['frase1', 'frase2']
  }

- OBS.: O parâmetro não é CASE SENSITIVE, portanto Arya, ArYa e ARYA tem o mesmo resultado.

Escreva pelo menos seis testes para essa função garantindo que a implementação de getCharacter está correta.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}
*/

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Sem nenhum parâmetro retorna undefined.', () => {
    expect(getCharacter()).toBeUndefined();
  });

  it('Retorna o objeto correto para o parâmetro `Arya`.', () => {
    expect(getCharacter('Arya')).toEqual({name: 'Arya Stark', class: 'Rogue', phrases: [ 'Not today', 'A girl has no name.' ]});
  });

  it('Retorna o objeto correto para o parâmetro `Brienne`.', () => {
    expect(getCharacter('Brienne')).toEqual({name: 'Brienne Tarth', class: 'Knight', phrases: [ 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.' ]});
  });

  it('Retorna o objeto correto para o parâmetro `Melissandre`.', () => {
    expect(getCharacter('Melissandre')).toEqual({name: 'Melissandre', class: 'Necromancer', phrases: [ 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.' ]});
  });

  it('Verifica se o parâmetro é case sensitive.', () => {
    expect(getCharacter('Arya')).toEqual(getCharacter('arya'));
  });

  it('Verifica se a função retorna undefined caso um nome não seja encontrado.', () => {
    expect(getCharacter('Guilherme')).toBeUndefined();
  });
});
