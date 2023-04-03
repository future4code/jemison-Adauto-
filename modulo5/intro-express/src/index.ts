import express, {Request, Response} from "express"
import cors from 'cors'
import { user } from "./data"
import { postDosUsuarios } from "./data"

const app = express()

app.use(express.json())

app.use(cors())

app.get('/api',(req: Request, res: Response)=>{
    res.status(200).send("API trabalhando")
})

app.get('/users',(req: Request, res: Response)=>{
    
    
    res.status(201).send(user)
})


app.get('/posts',(req: Request, res: Response)=>{
    
    
    res.status(200).send(postDosUsuarios)
})

app.get('/users/1/posts', (req: Request, res: Response) => {
    const userPosts = postDosUsuarios.filter(post => post.userId === 1)
    res.status(200).send(userPosts)
  })
  
app.delete('/posts/:postId', (req: Request, res: Response) => {
    const postId = Number(req.params.postId)
    const index = postDosUsuarios.findIndex(post => post.id === postId)
  
    if (index === -1) {
      return res.status(404).send({ message: 'Deu ruim post nao encontrado' })
    }
  
    postDosUsuarios.splice(index, 1)
  
    return res.status(204).send(postDosUsuarios)
  })

app.delete('/deleta/:usuarioId',(req: Request, res: Response) =>{
    const usuarioId = Number(req.params.usuarioId)
    const index = user.findIndex(user => user.id === usuarioId)
   
    if (index === -1) {
        return res.status(404).send({ message: 'Ih usuario nao encontrado' })
      }

      user.splice(index, 1)
      return res.status(204).send(user)

})  
  

app.listen(3003, () => {
    console.log("API rodando na porta 3003")
})