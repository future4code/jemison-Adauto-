import { Type } from "typescript"

type Films = {
    nome:string
    ano:number
    genero:string
    score?:number
}
enum GENERO {
    ACAO="ação",
    DRAMA="drama",
    COMEDIA="comédia",
    ROMANCE="romance",
    TERROR="terror"
}

const filmes =(nome: string, ano: number, genero: GENERO, score?: number): string => {
   
    
     const movie: string = `O filme ${nome} do ano: ${ano} de ${genero}, teve a pontuação ${score}`
    
     return movie
    }

console.log(filmes("Ojuara o homem que desafio o diabo", 2007, GENERO.COMEDIA, 89))
    