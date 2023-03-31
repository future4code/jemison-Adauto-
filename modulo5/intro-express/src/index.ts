import express, {Request, Response} from "express"
import cors from 'cors'
import { user } from "./data"

const app = express()

app.use(express.json())

app.use(cors())

app.get('/api',(req: Request, res: Response)=>{
    res.status(200).send("API trabalhando")
})

app.get('/users',(req: Request, res: Response)=>{
    const todos = user.map((lista)=>{
        return lista.id
    })
    res.status(201).send(todos)
})

app.listen(3003, () => {
    console.log("API rodando na porta 3003")
})