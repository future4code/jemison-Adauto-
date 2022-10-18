

const tarefas = [
	"Lavar a louça",
	"Comprar Leite"
]
function addTarefas(){
const novasTarefas = process.argv[2]
tarefas.push(novasTarefas) 
return tarefas
}
console.log(addTarefas())