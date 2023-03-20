type Produto ={
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

function addDesconto(produtos: Produto[]): Produto[]{

    return produtos.map((produto) => {
        let desconto: string = "";

        if (produto.classificacao === "Verão") {
            desconto = "5%";
        } else if (produto.classificacao === "Inverno") {
            desconto = '10%';
        } else if (produto.classificacao === "Banho") {
            desconto = "4%";
        } else if (produto.classificacao === "Intimas") {
            desconto = "7%";
        }


}