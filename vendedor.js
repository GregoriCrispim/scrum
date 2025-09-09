class Vendedor{
    #codigo
    #salario
    #comissao
    constructor(nome, codigo, salario, comissao){
        this.nome = nome;
        this.#codigo = codigo;
        this.#salario = salario;
        this.#comissao = comissao;
    }

    get codigo(){
        return this.#codigo;
    }

    get salario(){
        return this.#salario;
    }

    get comissao(){
        return this.#comissao;
    }

    set salario(novoSalario){
        this.#salario = novoSalario;
    }

    set comissao(novaComissao){
        this.#comissao = novaComissao;
    }

    venderProduto() {

    }

    cadastrarVendendor() {

    }

    calcularComissao() {

    }
}