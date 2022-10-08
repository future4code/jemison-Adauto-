console.log("exercicio 1");

//transformar C em K e F
const grausCelsius = "5" // escolha um numero


const grausK = Number(grausCelsius) + 273.15
const grausF = Number(grausCelsius) * 1.8 + 32
const texto = console.log(grausCelsius +"C em Fahrenheit é " + grausF + "F e em Kelvin é " + grausK +"K")


const resposta = () =>{
    if(grausCelsius === Number || grausF === Number || grausK === Number )
    return 
}



let escolha = 'K'   //'Digite F ou K para selecionar'
let numeroCelsius = 25      //'Digite um numero'

const soma = () =>{

    if(escolha === 'K'){
    const respostaK = numeroCelsios + 273.15
    return respostaK
    }else if(escolha === 'F'){
    const respostaF = numeroCelsios * 9 / 5 + 32
    return respostaF
    }
    
}
 console.log(soma(numeroCelsius))