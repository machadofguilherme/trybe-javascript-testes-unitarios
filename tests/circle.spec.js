describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Teste se circle retorna undefined', () => {
    expect(circle()).toBeUndefined();
  });
  it('Teste se circle retorna um objeto', () => {
    let result = { radius: 1, area: 3.14, circumference: 6.28 }
    expect(circle(1)).toEqual(result);
  });

  it('Teste se o objeto retornado possui 3 propriedades', () => {
    const circleContent = circle(1);
    expect(Object.keys(circleContent).length).toBe(3);
  });

  it('Teste se a função sem nenhum parâmetro retorna undefined', () => {
    expect(circle()).toBeUndefined();
  });

  it('Teste se a função retorna o valor da circunferência para um círculo de raio 2', () => {
    let circum = {radius: 2, area: 12.56, circumference: 12.56}
    expect(circle(2)).toEqual(circum);
  });

  it('Teste se a função retorna o valor da circunferência para um círculo de raio 3', () => {
    let circum = {radius: 3, area: 28.259999999999998, circumference: 18.84}
    expect(circle(3)).toEqual(circum);
  });
});
