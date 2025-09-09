class Cliente {
    #codigo
    constructor(codigo, nome, endereco, cep, uf) {
        this.#codigo = codigo;
        this.nome = nome;
        this.endereco = endereco;
        this.cep = cep;
        this.uf = uf;
    }

    get codigo() {
        return this.#codigo;
    }

    cadastrarCliente() {
        return `Cliente ${this.nome} cadastrado com sucesso!`;
    }
    atualizarCliente(novoNome, novoEndereco, novoCep, novoUf) {
        if (novoNome) this.nome = novoNome;
        if (novoEndereco) this.endereco = novoEndereco;
        if (novoCep) this.cep = novoCep;
        if (novoUf) this.uf = novoUf;
        return `Cliente ${this.nome} atualizado com sucesso!`;
    }

    excluirCliente() {
        this.nome = null;
        this.endereco = null;
        this.cep = null;
        this.uf = null;
        return `Cliente excluído com sucesso!`;
    }

    fazerPedido(pedido) {
        return `Pedido ${pedido.num_pedido} realizado pelo cliente ${this.nome}.`;
    }

    consultarCliente() {
        return `Código: ${this.codigo}, Nome: ${this.nome}, Endereço: ${this.endereco}, CEP: ${this.cep}, UF: ${this.uf}`;
    }
}

module.exports = Cliente;
