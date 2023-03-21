type Produto = {
    nome:string,
    preco: string,
    classificacao: string
}

const produtos: Produto[] =[
    {
        nome: "Biquini",
        preco: "R$1500,00",
        classificacao: "Banho"
    },
    {
        nome: "Cueca",
        preco: "R$150,00",
        classificacao: "Intimas"
    },
    {
        nome: "Bermuda",
        preco: "R$550,00",
        classificacao: "Verão"
    },
    {
        nome: "Blusa",
        preco: "R$1500,00",
        classificacao: "Inverno"
    },
    {
        nome: "Gorro",
        preco: "R$215,00",
        classificacao: "Inverno"
    },
    {
        nome: "Bronzeador",
        preco: "R$45,00",
        classificacao: "Verão"
    }
]

//function addDesconto(produtos: Produto[]): Produto[]{

    




function addDesconto(produtos: Produto[]): Produto[] {
    const descontoVerao = 0.05;
    const descontoInverno = 0.1;
    const descontoBanho = 0.04;
    const descontoIntimas = 0.07;
    
    const produtosComDesconto = produtos.map(produto => {
      let desconto = 0;
      switch (produto.classificacao) {
        case 'Verão':
          desconto = descontoVerao;
          break;
        case 'Inverno':
          desconto = descontoInverno;
          break;
        case 'Banho':
          desconto = descontoBanho;
          break;
        case 'Intimas':
          desconto = descontoIntimas;
          break;
      }
      const preco = Number(produto.preco.replace('R$', '').replace(',', '.'));
      const precoComDesconto = preco * (1 - desconto);
      const precoComDescontoFormatado = `R$${precoComDesconto.toFixed(2).replace('.', ',')}`;
      return {
        ...produto,
        'preco com desconto': precoComDescontoFormatado
      };
    });
  
    return produtosComDesconto;
  }
  
 
  const produtosComDesconto = addDesconto(produtos);
  console.log(produtosComDesconto);
 
  
  
  
  
  