const nome = process.argv [2]
const data = process.argv [3]
const separar = data.split('/')
const fraseDeApresentacao = "Ola me chamo " + nome + ", nasci no dia " + separar[0] + " do mês de " + separar[1] + " do ano de " + separar[2]



console.log(fraseDeApresentacao)