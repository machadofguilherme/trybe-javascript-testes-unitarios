describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  
  it('Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBeTruthy();
  });

  it('Retorna FALSO com string 3 no centro', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBeFalsy();
  });

  it('Retorna FALSO com string a no centro', () => {
    expect(numbers([1, 'a', 3])).toBeFalsy();
  });

  it('Retorna FALSO quando recebe array vazia', () => {
    expect(numbers([' '])).toBeFalsy();
  });
});
