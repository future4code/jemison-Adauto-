/* 
Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, 
pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1. Leia o código abaixo
    
    ```jsx
    function minhaFuncao(variavel) {
    	return variavel * 5
    }
    
    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))
    ```
    
    a) O que vai ser impresso no console?
    
R: sera impresso no primeiro console.log 10 e no segundo 50 

    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a
     função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
    R: Creio q nada pois vc nao pediu para imprimir acho q o pc iria guarda para 
    ele essa resposta
2. Leia o código abaixo
    
    ```jsx
    let textoDoUsuario = prompt("Insira um texto");
    
    const outraFuncao = function(texto) {
    	return texto.toLowerCase().includes("cenoura")
    }
    
    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
    ```
    
    a. Explique o que essa função faz e qual é sua utilidade
    R: a função faz q o texto fique com todas as letras minusculas e verifique se a palavra
    'cenoura' esta no texto retornando true or false
    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura` R: True, eu gosto de cenoura
         ii.  `CENOURA é bom pra vista` true, cenoura é bom pra vista
         iii. `Cenouras crescem na terra` R: true, cenouras crescem na terra

         creio q era isso q era pra ser feito mas joguei pra testa e nao rolo so sai false ou true e
         e tambem o arquivo q pede para baixar para podermos fazer os exercicio o index.html estava 
         com o codigo q permeti a gente visializar no console na linha errada 



*/

//EXERCICIOS DE ESCRITA DE CODIGO

/*a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando 
algumas informações sobre você, como: 

```
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
```*/

function imprimeUmaSrting(){
    console.log('Eu sou Adauto, tenho 33 anos, moro em São Paulo e sou estudante da LABENU')
}
   imprimeUmaSrting()


   // Imprimiu toda a descriçao da função...

   // Professor to bem cançado hj essa semana foi punk pra mim termino no final de semana


   /*b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações 
   de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão 
   (string). Ela deve retornar uma string que unifique todas as informações da pessoa
    em uma só mensagem com o template:*/

    function funcaoDe4Paramentros(nome, numero, cidade, profissao) {
        console.log(`Eu sou ${nome}, tenho ${numero} anos, moro em ${cidade}
         e sou ${profissao} ate o momento!`)
    }

funcaoDe4Paramentros('Adauto', Number(33), 'SãoPaulo', 'frentista')  

/*2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
    faça a soma das     duas entradas e retorne o resultado. Invoque a função e 
    imprima no console o resultado.*/

    function somaDosParametros(numero1, numero2){
      console.log(Number(numero1) + Number(numero2))
    }

    somaDosParametros(12, 23)

    /*b) Faça uma função que recebe 2 números e retorne um booleano que informa se o
     primeiro número é maior ou igual ao segundo.*/

     function funcaoDeComparcaoMaiorIgual(num1, num2){
        console.log(Number(num1) >= Number(num2))
        
     }

     funcaoDeComparcaoMaiorIgual(5, 10);


     /*c)Escreva uma função que receba um número e devolva um booleano 
     indicando se ele é par ou não */

     function recebeNumDevolveBoo(numer1){
        console.log(numer1 %2 === 0)      
          
        }
     recebeNumDevolveBoo(12)

    /*
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e 
    imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
    */
function strinLi(Ola){
    
    console.log(Ola.length)
    console.log(Ola.toUpperCase())
}
strinLi("Ola LabeLovers")


/* 3 - Crie uma função para cada uma das operações básicas (soma, subtração, 
   multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e
    chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.
    Por fim, mostre no console o resultado das operações:

*/


const x = Number(prompt("Escolha um numero"))
const y = Number(prompt("Escolha outro numero pessoa"))

function mais(x, y){
    
 return x + y

}
const add = mais(x, y)
console.log(add)

/* function mais (){
    const x = prompet('escolha um numero')
    const y = prompet('Escolha outro numero')
    return  Number(x) + Number(y)
}

console.log(mais)

Pq essa logica esta errada?
*/



function menos(x, y){
    
 return x - y

}
const add2 = menos(x, y)
console.log(add2)


function vezes(x, y){
    
    return x * y
   
   }
   const add3 = vezes(x, y)
   console.log(add3)


function dividi(x, y){
    
    return x / y
   
   }
   const add4 = dividi(x, y)
   console.log(add4)


   /* O exercicos de desafios exigiria uma demanda de tempo 
   q nao tenho no momento, num futuro quem sabe eu o faça obrigado pela compreensão*/