
function number(number1:number, number2:number) :string {
   
    const soma:number = number1 + number2;
    const subtracao:number = number1 - number2;
    const mutiplica:number = number1 * number2;
          if (number1 > number2){
            return "o maior é " + number1;
          } else if (number1 < number2){
            return "o maior é " + number2;
          }else{
            return "iguais"
          } 
}

  console.log(number(32, 61))



