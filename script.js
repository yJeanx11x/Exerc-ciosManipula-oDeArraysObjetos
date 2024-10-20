// 1. Criar e Acessar Propriedades
// Crie um objeto que represente um carro, com as propriedades: marca, modelo, ano.
// Acesse e exiba o valor da marca e do modelo.
// Atualize o valor do ano para um ano mais recente.

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2024,
};
console.log(`Marca: ${carro.marca}`);
console.log(`Modelo: ${carro.modelo}`);
console.log(`Ano atualizado: ${carro.ano}`);

// 2. Adicionar e Remover Propriedades
// Crie um objeto para um livro, com as propriedades: título, autor, ano, e gênero.
// Adicione uma nova propriedade chamada editora ao objeto.
// Remova a propriedade gênero do objeto.
// Exiba o objeto atualizado.

const livro = [
  {
    titulo: "Velozes e Furiosos",
    autor: "Gary Scott Thompson, Erik Bergquist, David Ayer",
    ano: 2001,
    genero: " Ação, Crime, Thriller",
  },
];
livro.editora = "Universal Pictures";
livro.splice(livro.genero);
// console.log(livro)

// 3. Métodos em Objetos
// Crie um objeto que represente uma pessoa, com as propriedades: nome, idade, falar().
// A função falar() deve exibir uma mensagem no console como "Olá, meu nome é [nome] e eu tenho [idade] anos".
// Adicione um método chamado aniversario() que aumente a idade da pessoa em 1.
// Exercícios Combinados (Arrays e Objetos)

const pessoa = {
  nome: "Jean",
  idade: 23,
  falar() {
    console.log(`Ola meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
  },
  aniversario() {
    this.idade += 1;
    console.log(
      `Parabéns Você fez aniversario mais um ano de vida sua idade é ${this.idade} anos`
    );
  },
};
console.log(pessoa);
pessoa.aniversario();
pessoa.falar();
console.log(pessoa);

// Crie um array de objetos representando produtos de uma loja, com propriedades: nome, preco e quantidade.
// Filtre os produtos que têm preço maior que 50.
// Use map para criar um array de nomes dos produtos.
// Some o valor total de todos os produtos (preço * quantidade)

const loja = [
  { nome: "blusa", preco: 40, quantidade: 2 },
  { nome: "calsa", preco: 80, quantidade: 5 },
  { nome: "bone", preco: 180, quantidade: 4 },
];

function valormaior(){
        if(loja>50) return true
        else return false
}

const numerof=loja.filter((loja)=>{return loja.preco >=50})
const nomesDosProdutos = loja.map(loja => loja.nome);
const somaDeTodosP=loja.reduce((soma,produtos)=>{
  return soma + (produtos.preco * produtos.quantidade)
},0)
console.log(`Os Produtos que tema valor maior é igual a 50 são `,numerof)
console.log(`Os Produtos são:`,nomesDosProdutos)
console.log(`O valor total: $${somaDeTodosP}`)
