// Classe Pedido representa um pedido de cliente com itens, prazo e vendedor
export class Pedido {
  // Atributos privados: só podem ser acessados dentro da classe
  #cod_cliente;
  #cod_vendedor;

  // Construtor: define cliente, vendedor, número do pedido e inicializa outros atributos
  constructor(cod_cliente, cod_vendedor, num_pedido) {
    this.#cod_cliente = cod_cliente;      // Código do cliente
    this.#cod_vendedor = cod_vendedor;    // Código do vendedor
    this.num_pedido = num_pedido;         // Número do pedido
    this._prazo_entrega = new Date();     // Atributo interno para prazo de entrega (hoje por padrão)
    this.itens = [];                      // Array para armazenar preços dos itens do pedido
  }

  // ---------------- Getters privados ----------------
  // Permitem acesso seguro aos atributos privados
  get cod_cliente() {
    return this.#cod_cliente;
  }

  get cod_vendedor() {
    return this.#cod_vendedor;
  }

  // ---------------- Getter e Setter para prazo de entrega ----------------
  // Permite ler e atualizar o prazo de entrega
  get prazo_entrega() {
    return this._prazo_entrega;
  }

  set prazo_entrega(valor) {
    this._prazo_entrega = valor;
  }

  // ---------------- Métodos da classe ----------------
  
  // Calcula o subtotal somando os preços dos itens
  calcularSubtotal() {
    const total = this.itens.reduce((soma, preco) => soma + preco, 0);
    return `Subtotal do pedido ${this.num_pedido}: R$ ${total}`;
  }

  // Atualiza o prazo de entrega do pedido
  atualizarPedido(novoPrazo) {
    this.prazo_entrega = novoPrazo; // usa o setter
    return `Pedido ${this.num_pedido} atualizado. Novo prazo: ${this.prazo_entrega}`;
  }

  // Cancela o pedido
  cancelarPedido() {
    return `Pedido ${this.num_pedido} foi cancelado.`;
  }

  // Adiciona um item (preço) ao pedido
  adicionarItem(preco) {
    this.itens.push(preco);
    return `Item de valor R$ ${preco} adicionado ao pedido ${this.num_pedido}.`;
  }
}

// -------- Exemplo de uso --------
const pedido1 = new Pedido(101, 5001, 123);

console.log(pedido1.cod_cliente);    // 101 (acesso via getter)
console.log(pedido1.cod_vendedor);   // 5001 (acesso via getter)
console.log(pedido1.prazo_entrega);  // Data de hoje (atributo interno)

console.log(pedido1.atualizarPedido(new Date("2025-09-15"))); // Atualiza prazo
console.log(pedido1.prazo_entrega);  // Mostra a nova data

// Adicionando itens ao pedido
console.log(pedido1.adicionarItem(100));
console.log(pedido1.adicionarItem(250));
console.log(pedido1.adicionarItem(900));

// Calcula o subtotal do pedido
console.log(pedido1.calcularSubtotal()); // Subtotal do pedido 123: R$ 1250

// Cancela o pedido
console.log(pedido1.cancelarPedido());
