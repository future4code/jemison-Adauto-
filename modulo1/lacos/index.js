//Exercicios de interpretação de codigo

// 1) - O que o código abaixo está fazendo? Qual o resultado impresso no console?


/* R: O  i vale zero e ele vai repetir ate for menor q 5 e ele fara isso sempre com base em i = i + 1 e então somara o
valore imprimira sendo assim i=0 menor q 5 ele passara para o proximo somando mais um entao i igual a 1 menor que 5 
so q o detalhe esta aqui "valor =+ i" pq quando i passa a valer um 1 valor passa a valer 1 quando i passa a valer 2 
valor passa a valer 3, pq valor estava valendo 1 e soma com i valendo 2 assim sucessivamente

o resultado do será 10 (tive q rodar o codigo para entender)
*/

// 2) a -Sera impresso todos os numeros maiores de 18 desse array 19, 21, 23, 25, 27, 30 

// b - Sim o for of é suficiente eu so tiraria o if mas tenho certeza que a outras formas de fazer isso 


// 3) O sera 4 linhas com * impresso a primeira com um * impresso a segunda com dois ** e assim sucessivamente




// Exercícios de escrita de codigos

/*

1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um 
    por um, e guarde esses nomes em um array

    c) Por fim, imprima o array com os nomes dos bichinhos no console
*/

const quantidadeDeBichinhos = Number(prompt("Quantos bichinhos vc tem?"))
let quantidadeBicho = quantidadeDeBichinhos

if(quantidadeBicho === 0){
    console.log("Que pena! Você pode adotar um pet!")
}


//2 Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números.
// Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
   // a) Escreva um programa que **imprime** cada um dos valores do array original.
    
    //b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
    //c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original
    // e **imprima** esse novo array
    
    //d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma:
    // "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
    //e) Escreva um programa que imprima no console o maior e o menor números contidos no array original  

    const arrayOriginal = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10]

    for (item of arrayOriginal){
        console.log(item)
    }

    for (item of arrayOriginal){
        let intemdividido = item / 10
        console.log(intemdividido)
    }
        let originalPar = []
    for (item of arrayOriginal){
        if (arrayOriginal = item % 2 === 0){
            originalPar.push()
        }
     
        console.log([originalPar])
    }

