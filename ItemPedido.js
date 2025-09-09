class ItemPedido extends Produto{
    #codigo_produto
    constructor(num_pedido, codigo_produto, qtd){
        this.#codigo_produto = codigo_produto;
        this.qtd = qtd;
        this.num_pedido = num_pedido;
    }

    getCodigo_produto(){
        return this.#codigo_produto;
    }

    setCodigo_produto(){
        return this.#codigo_produto;
    }

    adicionarItem(qtd) {
    if (qtd > 0) {
      this.qtd += qtd;
      console.log(`Adicionado ${qtd} unidade(s). Total agora: ${this.qtd}`);
    } else {
      console.log("Quantidade inválida para adicionar.");
    }
  }

  removerItem(qtd) {
    if (qtd > 0 && qtd <= this.qtd) {
      this.qtd -= qtd;
      console.log(`Removido ${qtd} unidade(s). Total agora: ${this.qtd}`);
    } else {
      console.log("Quantidade inválida para remover.");
    }
  }

  verificarItem() {
    console.log(`Produto ${this.#codigo_produto} possui ${this.qtd} unidade(s).`);
    return this.qtd;
  }
}