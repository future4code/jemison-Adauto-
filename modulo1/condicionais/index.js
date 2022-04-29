//console.log("Ola mundo")

/*
a) Explique o que o código faz. Qual o teste que ele realiza? 

   R:Ele recebe um numero pelo usuario pelo prompt depois ele verifica se esse numero
   dividido por 2 é igual a 0 se sim passa no teste se não. não passa no teste

b) Para que tipos de números ele imprime no console "Passou no teste"? 

  R: Pares

c) Para que tipos de números a mensagem é "Não passou no teste"?
 
  R: Impar

*/

/*
a) Para que serve o código acima?

R: Ele serve para escolhar uma fruta e imprimir seu preço 

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

R: O preço da maça é R$ 2.25

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no 
console se retirássemos o `break` que está logo acima do `default` (o `break` indicado 
pelo comentário "BREAK PARA O ITEM c.")?

  R: "O preço da fruta Pêra é R$ 5" pq quando vc tira o break ele continua olhando o codigo
      e olha para proxima linha
*/

/*

a) O que a primeira linha está fazendo?
 
    R: Ele esta pedindo para o usuário digitar um número.

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

    R:Se fosse 10 seria "Esse número passou no teste" mas dara erro pq nao esta de imcolpleta a logica -10 erro

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

     R: Pq não a um else entao aquele let mensagem ta meio solto 
*/

// EXERCÍCIO DE ESCRITA DE CÓDIGO

/*
1)  Faça um programa que pergunta ao usuário qual a idade dele e imprima no console 
se ele/ela pode dirigir (apenas maiores de idade).

a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, 
imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/

let idade = prompt("Qual é sua idade?")
let age = Number(idade)
 if(age >= 18){
     console.log("Você pode dirigir.")
 }
 else{
     console.log("Você não pode dirigir.")
 }


 /* 
 Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino)
 ou V (Vespertino) ou N  (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou 
 "Boa Noite!". Utilize o bloco if/else
 
  */
 let alunoEstuda = prompt("Digite a inicial do seu periodo que estuda, Matutino, Vespertino, Noturno( M, V, N)").toUpperCase()

 if (alunoEstuda === "M"){
     console.log("Bom dia!")
 }
 else if(alunoEstuda === "V"){
     console.log("Boa tarde!")
 }
 else if(alunoEstuda === "N"){
     console.log("Boa noite!")
 }
 else{
     console.log("periodo nao encontrado")
 }


 // 3) Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let alunoSwitch = prompt("Digite a inicial do seu periodo que estuda, Matutino, Vespertino, Noturno( M, V, N)").toUpperCase()
switch(alunoSwitch){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite")
        break
    default:
        console.log("periodo não reconhecido, presta atenção")
        break
}

/*4) Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com 
você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário
qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu 
amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso
contrário, imprima "Escolha outro filme :("
*/

const queGenero = prompt("Qual o genero de filme vc quer assistir?").toUpperCase()
const valorTickt = prompt("Até quando vc quer pagar no ingresso?")

if (queGenero === "FANTASIA" && valorTickt <= 15){
    console.log("Bom filme")
}
else {
    console.log("Escolha outro filme :(")
}

/* 


*/