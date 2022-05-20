/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    //console.log("ola mundo")

    
let cartasDoUsuario1 = comprarCarta()
let cartasdoUsuario2 = comprarCarta()
 
let cartasDoComputador1 = comprarCarta()
let cartasDoComputador2 = comprarCarta()
 
const somaCartasUsuario = cartasDoUsuario1.valor + cartasdoUsuario2.valor
const somaCartasComputador = cartasDoComputador1.valor + cartasDoComputador2.valor
 
 const maoDoUsuario = `Usuario - cartas:${cartasDoUsuario1.texto} ${cartasdoUsuario2.texto} - pontuação: ${somaCartasUsuario}`
 const maoDoComputador = `Computador - cartas: ${cartasDoComputador1.texto} ${cartasDoComputador2.texto} - pontuação: ${somaCartasComputador}`
 
 
console.log ("Bem vindo ao JOGO BLACKJACK!")
    

if(confirm("Começar novo jogo?")) {
      console.log("Iniciando rodada de BlackJack!")
      console.log(maoDoUsuario)
      console.log(maoDoComputador)
      if(somaCartasUsuario > somaCartasComputador){
         console.log("Usuário venceu!")
      } else if(somaCartasUsuario < somaCartasComputador){
         console.log("O computador ganhou!")
      } else {
         console.log("Empate!")
      }     
   } else {
      console.log("O jogo acabou!")
   }

   ; 
// Sorteia uma carta. Por exemplo, o rei de ouros


// imprime o texto da carta. Nesse caso: "K♦️"

 
// imprime o valor da carta (um número). Nesse caso: 10)



/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
        console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 */
    