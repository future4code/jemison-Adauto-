

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

function exer1Function(){
    const eu = 'Eu sou Adauto, tenho 33 anos, moro em São Paulo e sou estudante da LABENU'
    return eu
}
console.log(exer1Function
    
    // Imprimiu toda a descriçao da função...

    // Professor to bem cançado hj essa semana foi punk pra mim termino no final de semana
    