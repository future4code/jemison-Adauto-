const palavra = 'informarztw'

function anagrama(palavra: string): number {
    let resultado = 1;
    for (let i = 1; i <= palavra.length; i++) {
      resultado *= i;
    }
    return resultado;
  
}
  console.log(anagrama(palavra))

