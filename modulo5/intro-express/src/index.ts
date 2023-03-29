import express, {Request, Response} from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.get('/',(req: Request, res: Response)=>{
    res.status(200).send("API trabalhando")
})

app.listen(3003, () => {
    console.log("API rodando na porta 3000")
})