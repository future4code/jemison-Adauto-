/*function imprimeTresCoresFavoritas() {
    const cor1 = prompt("Insira sua primeira cor favorita")
    const cor2 = prompt("Insira sua segunda cor favorita")
    const cor3 = prompt("Insira sua terceira cor favorita")
    console.log([cor1, cor2, cor3])
 }*/

 const cor1 = process.argv[2];
 const cor2 = process.argv[3];
 const cor3 = process.argv[4];

 function imprimeTresCoresFavoritas(){
         
       return  "Minhas cores favoritas são:" + cor1 + " " + cor2 + " " + cor3
    }
    
    console.log(imprimeTresCoresFavoritas(cor1, cor2, cor3))