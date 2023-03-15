/*Escreva uma função que receba uma string e retorne a string reversa. 
Em outras palavras, se o input da sua função for "abcd", a saída deve ser 
"dcba" . */

function stringReversa(abc:string) :string{
  
    const reverse = abc.split("").reverse().join("")
    
      return reverse
}

const abc = "abcdefg"

console.log(stringReversa(abc))