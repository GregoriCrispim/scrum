export class Produto {
  #codigo_produto;

  constructor(codigo_produto, unidade, descricao_produto, val_unit) {
    this.#codigo_produto = codigo_produto;
    this.unidade = unidade;
    this.descricao_produto = descricao_produto;
    this.val_unit = val_unit;
  }

  cadastrarProduto() {
    console.log("Produto cadastrado:", this.descricao_produto);
  }

  atualizarProduto() {
    console.log("Produto atualizado:", this.descricao_produto);
  }

  get codigo_produto() {
    return this.#codigo_produto;
  }
}
