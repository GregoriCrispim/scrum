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
    atualizarCliente() {

    }

    excluirCliente() {

    }

    fazerPedido() {

    }

    consultarCliente() {
        return `Código: ${this.codigo}, Nome: ${this.nome}, Endereço: ${this.endereco}, CEP: ${this.cep}, UF: ${this.uf}`;
    }
}

module.exports = Cliente;
