/*function comparaDoisNumeros(num1, num2) {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }*/

  const num1 = Number(process.argv[2]);
  const num2 = Number(process.argv[3]);

  function comparaNumero(){
    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
      } else {
        maiorNumero = num2;
        menorNumero = num1;
      }
  
  const diferenca = maiorNumero - menorNumero;

  return diferenca 
}

console.log(comparaNumero(num1, num2))