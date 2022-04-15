
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


// Exercios de escrita de codigos

/* 1. Faça um programa que:
    
    a) Pergunte a idade do usuário
    
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior 
    do que a do seu melhor amigo?", seguido pela resposta 
    (`true` ou `false`)
    
    d) **Imprima na console** a diferença de idade
    (não tem problema se sair um número negativo) */

    let idade = prompt("Qual é sua idade?")

    let idadeAmigo = prompt("Eae, amigão qual sua idade?")
    
    const boleaPai = Number(idade) >= Number(idadeAmigo)

    console.log ("Sua idade é mair do que a do seu melhor amigo", boleaPai)


    const diferencaAmigao = Number(idade) - Number(idadeAmigo)

    console.log (diferencaAmigao)


    // 2)

    /* 2. Faça um programa que:
    
    a) Peça ao usuário que insira um número **par**
    
    b) Imprima na console **o resto da divisão** desse número por 2.
    
    c) Teste o programa com diversos números pares. Você notou um padrão?
    Escreva em um comentário de código.
    
    d) O que acontece se o usuário inserir um número ímpar?
     Escreva em um comentário de código */

     let nPar = prompt("Mister usuario coloque um numero PAR pq par nao é impar")
    
     const div = nPar % 2
      
      console.log(div)

      // C) R: O resto é sempre ZERO

      // D) R: O resto nao é mais zero


      /* 3. Faça um programa que pergunte ao usuário sua idade em 
      anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas*/

    let userIdade = prompt("Usuario querido quantos anos vc tem?")

    const userMeses = Number(userIdade) * 12

    console.log("Vc tem", userMeses, "meses de vida")
    
    let userDias = Number(userIdade) * 365

    console.log('Vc tem', userDias, 'dias de vida')
    
    let userHoras = Number(userDias) * 24

    console.log ('Tu tem criatura', userHoras, 'horas de vida')


    /* 4. Faça um programa que pergunte ao usuário dois números. 
    Em seguida, faça as operações e imprima no console as seguintes
     mensagens seguidas pelo `true` ou `false`:


         O primeiro numero é maior que segundo? true
         O primeiro numero é igual ao segundo? false
         O primeiro numero é divisível pelo segundo? true
         O segundo numero é divisível pelo primeiro? true*/


    let user1 = prompt("escolha um numero de 1 a 100")
    
    let user2 = prompt("Escolha outro numero diferente do que vc escolheu anteriormente")

    console.log(Number(user1) > Number(user2))
    
    console.log(Number(user1) === Number(user2))
    
    const restin = (Number(user1) % Number(user2))
    
    let compa = restin === Number(0)

    console.log(compa)

    const restin2 = Number(user2) % Number(user1)
     
    let compa2 =restin2 === Number(0)

     console.log(compa2)