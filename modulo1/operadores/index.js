
/*Leia o código abaixo. Indique todas a
mensagens impressas no console, SEM EXECUTAR
o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)R: FALSE

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) R: FALSE

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) R: TRUE

console.log("d. ", typeof resultado) R: BOOLEAN */

//2

/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

R: Vai concatena os numero pq o programa ira ler como strings*/


//3) 

/* Para o exercício anterior, sugira ao seu colega uma solução 
para que o valor impresso no console seja, de fato, a soma
dos dois números.*/

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)

// Podemos fazer a conversão usando o comando Number()