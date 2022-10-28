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
