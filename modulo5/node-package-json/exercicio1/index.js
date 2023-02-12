// Para acessar os parâmetros: process.argv

     const nome = process.argv[2]
     const idade = Number(process.argv[3])

function exercicioLetraBC() {
     const sete = Number(7) 
     const soma= Number(idade) + Number(sete)
     
     return `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${soma}`
}
console.log(exercicioLetraBC)