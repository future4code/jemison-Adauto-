// EXERCICIOS DE INTERPRETAÇÃO

//1.  a) O que vai ser impresso no console? 

    // R: Matheus Nachtergaele, 
    // R: Virginia Cavendish
    //R: Canal: Globo, horario: 14hrs

//2)

// a) O que vai ser impresso no console?

// R: Nome: Juca Idade:3 Raça: SRD 3x

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
                 
// R:Vc copia o objeto e suas informações 


//3)

//a) O que vai ser impresso no console?
// R: False, altura nao sera empresso nada pq nao foi decladrado    

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
 // R: Creio q expliquei na resposta anterior

// EXERCICIOS DE ESCRITA DE CODIGO

//1) 1. Resolva os passos a seguir: 
    
    /*a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos 
    (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função 
    que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo */

   
const pessoa = {
    nome: "Adauto", 
    apelidos: ["Papai", "Malagueta", "Otuada"]
 }
 

function fraseApelidos(nome, apelidos){

    const apelidos2 = `Eu sou o ${nome}, mas pode me chamar de: ${apelidos}.`
    console.log(apelidos2)
}


fraseApelidos(pessoa.nome, pessoa.apelidos)


/*b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade
 nome, mas com uma nova lista de três apelidos. 
Depois, chame a função feita no item anterior passando como argumento o novo objeto
*/

const novoObj = {
    ...pessoa,
    apelidos: ['Adautão', 'Dautin', 'Adautinho']

}

console.log(fraseApelidos(novoObj.nome, novoObj.apelidos))

/* 
2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`
*/


const obj1 = {
    nome: "Yuri",
    idade: 1,
    profissao: "estudante"
}

const obj2 = {

    nome: "Iago",
    idade: 29,
    profissao: 'Vendedor'
}

function letraB(nome, idade, profissao){
    const respostaLetraB = [nome, nome.length, idade, profissao, profissao.length]
    console.log(respostaLetraB)
}
 letraB(obj1.nome, obj1.idade, obj1.profissao)


/*
 3. Resolva os passos a seguir: 
    
 a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
 
 b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as
  seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como
   `true`)
 
 c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do
  array de `carrinho`. Invoque essa função passando os três objetos criados. 
 
 
     
 
 d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com
  três objetos.** 
 */
 

let carrinho = []








