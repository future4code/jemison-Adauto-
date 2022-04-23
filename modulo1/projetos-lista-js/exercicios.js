// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const retaguloA =prompt('qual é a altura do retagulo?')
const retaguloL = prompt('Qual é a largura do retagulo')

console.log(Number(retaguloA) * Number(retaguloL))
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const yourAge =prompt('Que ano vc nasceu?')
const Year =prompt('Que ano estamos?')

console.log(yourAge - Year)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
/*const altura = prompt('Qual é sua altura?')
const peso = prompt('Qual o seu peso?')
   const altXAlt= altura * altura
console.log(peso / altXAlt)*/
return(peso/(altura*altura))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome =prompt('Qual é seu nome?')
const idade =prompt('Qual é sua idade?')
const email =prompt('Qual é seu email?')

console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 =prompt('Qual é sua cor favorita?')
const cor2 = prompt('Qual é a sua segunda cor favorita?')
const cor3 =prompt('Qual é sua terceira cor favorita?')

   console.log([cor1, cor2, cor3])
} 

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return (string.toUpperCase())
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return(array[0])
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return(array[array.length - 1])
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  /*essa eu peguei ajuda dos colecas e meio q copiei o codigo pra poder entender pq todas 
  as logica q eu criava acabava defrontando o uma com a outra creio q deva ter uma forma de fazer 
  mais simples
 */
const ultimo = array[array.length-1]
const primeiro = array[0]
array.splice(0,1, ultimo)
array.splice(array.length - 1, 1, primeiro)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 
 const compara = string1.toUpperCase() === string2.toUpperCase()
 return compara
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
/* - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
  - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
  - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos*/

 const anoAtual = prompt('Que ano vc se encontra?')
 const anoDeNascimento = prompt('Criatura quando vc nasceu?')
 const anoEmissao = prompt('Quando seu rg foi emtido')
let idade = Number(anoAtual) - Number(anoDeNascimento)
 let comp1 = Number(idade) <= 20
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}



