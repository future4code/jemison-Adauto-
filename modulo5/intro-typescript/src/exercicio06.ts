//Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:

//a) A soma desses números

//b) A subtração desses números

//c) A multiplicação desses números

//d) Qual deles é o maior

//Você pode fazer todas as operações na mesma função.

//Como estamos usando o TypeScript, devemos passar para o código o
//tipo de parâmetro que é esperado pela função, afinal, no javascript, 
//nada nos impede de passar parâmetros sem especificação. 
//É como diz aquela piada de programadocao

const number1 = Number(process.argv[2]);
const number2 = Number(process.argv[3]);

function number(){
    const soma = number1 + number2;
    const subtracao = number1 - number2;
    const mutiplica = number1 * number2;
          if (number1 > number2){
            return "o maior é " + number1;
          } else if (number1 < number2){
            return "o maior é " + number2;
          }else{
            return "iguais"
          }

  
}

number()



