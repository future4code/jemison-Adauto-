// Exercícios de intepretação de código


//1) -R:  Retornará  o item da posiçao 0 e o array q ele esta, assim sucessivamente...

//2) - R: Retornara um novo array so com o item NOME

//3) Retorna uma nova array com todos apelidos diferentes de "Chijo"

//---------------------------------------------------------------------------------------------------------

//Exercícios de escrita de código

// 1)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]


// a) - Crie um novo array que contenha apenas o nome dos doguinhos

const nomeDoguinhos = pets.map((doguinhos, index, array) => {
    return doguinhos.nome
 })
 
 console.log(nomeDoguinhos)

//b) - Crie um novo array apenas com os cachorros salsicha

const arraySalsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})

console.log(arraySalsicha)

//c) -Crie um novo array que possuirá mensagens para enviar para 
//todos os clientes que são poodles. A mensagem deve ser: 
//"Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const arrayPoodles = pets.filter((item, index, array) =>{
    return item.raca ==="Poodle"
})

const descontoDeClientesPoodle = arrayPoodles.map((item, indice, array) => {
     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})

console.log(descontoDeClientesPoodle)


//2)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 //a) Crie um novo array que contenha apenas o nome de cada item

 const arrayNomeProdutos = produtos.map((item, indice, array) => {
     return item.nome
})

 console.log(arrayNomeProdutos)

 //b) Crie um novo array que contenha um objeto com o nome e o preço de 
 //cada item, aplicando 5% de desconto em todos eles

 const arrayDesconto =produtos.map((item, indice, array) =>{
     return {nome: item.nome, preco:(item.preco * 0.95).toFixed(2)}
    })
console.log(arrayDesconto)
 

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const produtosBebidas = produtos.filter((produto, indice, array) => {
    return  produto.categoria === "Bebidas"
})
console.log(produtosBebidas)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//   Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const arrYpe = produtos.filter((item) =>{
    return item.nome.includes("Ypê")
})

console.log(arrYpe)

const compreYpe = arrYpe.map((item, indice, array) => {
    return `Compre ${item.nome} por, ${item.preco}`
})

console.log(compreYpe)

//Desafio

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]


 //a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
 
 const pokemonsOrdem = pokemons.map((item, indice, array) => {
     return item.nome
 })

console.log(pokemonsOrdem.sort())

//b) Crie um novo array apenas com os tipos dos pokémons, sem repetição

const tipoTipo = pokemons.map((item, indice, array) =>{
     return item.tipo
})
   let i = 0
   while(i<5){
       if(tipoTipo[i] === "grama"){
           console.log("grama")
       }else if(tipoTipo[i] === "fogo"){
           console.log("fogo")
       }else if(tipoTipo[i] === "água"){
           console.log("água")
       }
       i++
   }


