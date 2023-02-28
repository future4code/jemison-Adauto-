	//exercicio1


const checaGrausK = (grausCelsius) => {
    return Number(grausCelsius) + 273.15
}
const checaGrausF = (grausCelsius) =>{
    return Number(grausCelsius) * 1.8 + 32
}	
console.log(checaGrausK(12)+"º Kelvin")
console.log(checaGrausF(32)+"º Fahrenheit")
