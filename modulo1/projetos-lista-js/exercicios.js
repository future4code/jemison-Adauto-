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

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}