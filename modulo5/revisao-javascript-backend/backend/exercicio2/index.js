console.log("exercício 2");

const pessoas = [
	{ id: 1, nome: 'Fulano' },
	{ id: 2, nome: 'Ciclano' },
	{ id: 3, nome: 'Beltrano' },
	{ id: 4, nome: 'Fulana' }
]

const adicionado = pessoas.push({id: 5, nome: 'Guilherme'})

for(pessoa of pessoas){
	 console.log(pessoa)
	
}

 console.log(adicionado)

 console.log(pessoas)

 const validando = () =>{
 	const novaPessoa = {id: 4, nome: 'Guilherme'}

 	pessoas.map(() =>{
 		if(pessoas.id === novaPessoa.id || pessoas.nome === novaPessoa.nome){
 			return "Já existente!"
 		}else{
 			const adicionado = pessoas.push(novaPessoa)
 			return adicionado
			 
 		}

 	})
		
 }

 console.log(validando())




// 2 tabuada


const multiplicando = (num) =>{
     	
     	for(let i=0 ; i<=10 ; i++){
        console.log(i + "x" + num +"=" + (num * i))
        }
        }
     console.log(multiplicando(5))