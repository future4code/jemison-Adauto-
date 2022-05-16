// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   arrayEx01 = array.length
   return arrayEx01
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  arrayInver = array.reverse()
  return arrayInver
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  function ordenaNumeros(a, b) {
    return a - b;
  }   
  return array.sort(ordenaNumeros)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let  numberPar = []
    for (let posicao = 0; posicao < array.length; posicao++){
      if(array[posicao] % 2 === 0){
        numberPar.push(array[posicao])
      }
    }
  return numberPar
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let parElevado = []
      for (let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      parElevado.push(array[i] * array[i])
     }
  }
    return parElevado
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = -1
  for (let i = 0; i < array.length; i++){
       if(array[i] > maior){
       maior = array[i]}
  }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const objeto = {
    maiorNumero: Math.max(num1, num2),
    maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
    diferenca: Math.max(num1, num2) - Math.min(num1, num2)
  }
  return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const primeirosPares = []
    for(let i = 0; primeirosPares.length < n; i++){
      if (i % 2 === 0){
        primeirosPares.push(i)
      }
    }
    return primeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA === ladoB && ladoA === ladoC){
  return "Equilátero"
} else if(ladoA === ladoB && ladoA !== ladoC || ladoA === ladoC && ladoB !== ladoC || 
  ladoB === ladoC && ladoB !== ladoA) {
  return  "Isósceles"
} else if(ladoA !== ladoB && ladoA !== ladoC) {
  return "Escaleno"
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  function ordenaNumeros(a, b) {
    return a - b;
  }   
  return array.sort(ordenaNumeros)
  const segundoMaiorESegundoMenor = retornaSegundoMaiorESegundoMenor.filter(numero, indice)
  return indice(1, array.length[-2])
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}