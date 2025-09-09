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

    setCodigo_produto(novoCodigo){
        this.#codigo_produto = novoCodigo;
    }

    adicionarItem(qtd) {
        if (qtd > 0) {
            this.qtd += qtd;
            return `Adicionado ${qtd} unidade(s). Total agora: ${this.qtd}`;
        } else {
            return "Quantidade inválida para adicionar.";
        }
    }

    removerItem(qtd) {
        if (qtd > 0 && qtd <= this.qtd) {
            this.qtd -= qtd;
            return `Removido ${qtd} unidade(s). Total agora: ${this.qtd}`;
        } else {
            return "Quantidade inválida para remover.";
        }
    }

    verificarItem() {
        return `Produto ${this.#codigo_produto} possui ${this.qtd} unidade(s).`;
    }
}