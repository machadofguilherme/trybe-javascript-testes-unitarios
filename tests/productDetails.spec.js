describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Teste se productDetails é uma função", () => {
    expect(productDetails).toBeDefined();
  });

  it("Teste se o retorno da função é um array", () => {
    const productDetailsContent = productDetails();
    expect(Array.isArray(productDetailsContent)).toBeTruthy();
  });

  it("Teste se o array retornado pela função contém dois itens dentro", () => {
    const productDetailsContent = productDetails();
    expect(productDetailsContent.length).toEqual(2);
  });

  it("Teste se os dois itens retornado pela função são objetos", () => {
    const productDetailsContent = productDetails();
    let first = typeof productDetailsContent[0];
    let second = typeof productDetailsContent[1];

    expect(first).toEqual('object');
    expect(second).toEqual('object');
  });

  it("Teste se quando passado parâmetros diferentes os objetos também são diferentes", () => {
    const productDetailsContent = productDetails('Alcool gel', 'Máscara');
    expect(productDetailsContent[0]).not.toEqual({ name: 'Máscara', details: { productId: 'Máscara123' } });
  });

  it("Teste se os dois productIds terminam com 123", () => {
    const productDetailsContent = productDetails();
    let first = productDetailsContent[0].details.productId.substring(productDetailsContent[0].details.productId.length - 3);
    let second = productDetailsContent[1].details.productId.substring(productDetailsContent[0].details.productId.length - 3);
    expect(first).toEqual('123');
    expect(second).toEqual('123');
  });
});
