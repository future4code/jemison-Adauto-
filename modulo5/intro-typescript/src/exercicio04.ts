
function comparaNumero(num1:number, num2:number) :number{
   
  let maiorNumero:number = 12
  let menorNumero:number = 4234

    if(num1 > num2) {


        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }
  
  const diferenca:number = maiorNumero - menorNumero

  return diferenca 
}

console.log(comparaNumero(45, 23))