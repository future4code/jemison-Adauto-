type Ingredientes = {
    nome: string,
    quantidade: number
}

type Pratos = {
    nome: string,
    custo: number,
    valorDeVenda: number,
    ingredientes: Ingredientes[]
}

type Vendas = {
    nomePrato: string,
    nomeCliente: string
}

const prato: Pratos[] = []
//a)
function cadastrarPrato(nome: string, custo: number, valorDeVenda: number, ingredientes: Ingredientes[]): void{
    const novoPrato: Pratos ={
        nome,
        custo,
        valorDeVenda,
        ingredientes
    }
    prato.push(novoPrato)
} 
//b)
function obterValorPorNome(nome: string): number | null {
    const pratoValor = prato.find(p => p.nome === nome)
  
    if (pratoValor) {
      return pratoValor.valorDeVenda
    } else {
      return null
    }
  }
  
  //c)

  const venda: Vendas[] = []

function realizarVenda(nomePrato: string, nomeCliente: string) {
  venda.push({ nomePrato, nomeCliente })
  }

//d)

function calcularLucro(): number {
    let valorTotalVendas = 0
    let custoTotalPratosVendidos = 0
  
    venda.forEach(venda => {
      const pratoEncontrado = prato.find(p => p.nome === venda.nomePrato)
  
      if (prato) {
        valorTotalVendas += pratoEncontrado.valorDeVenda
        custoTotalPratosVendidos += pratoEncontrado.custo
      }
    });
  
    return valorTotalVendas - custoTotalPratosVendidos
  }
  