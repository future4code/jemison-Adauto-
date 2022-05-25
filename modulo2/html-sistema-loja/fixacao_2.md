``` 
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let custo = 0
  if(quantidade < 12){
    custo = quantidade * 1.30
  } else if(quantidade >= 12){
    custo = quantidade * 1.00
  }
  return custo
}

```