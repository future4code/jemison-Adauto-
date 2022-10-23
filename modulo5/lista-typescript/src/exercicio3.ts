type Films = {
    name:string
    year:number
    genre:string
    score:number
}
enum GENERO {
    ACAO="ação",
    DRAMA="drama",
    COMEDIA="comédia",
    ROMANCE="romance",
    TERROR="terror"

const option = (item?:number):Films =>{
const input: Films = {
    name:process.argv[2],
    year:Number(process.argv[3]),
    genre:process.argv[4],
    score:(item)
}
return input
}
const ola = Number(process.argv[5])
