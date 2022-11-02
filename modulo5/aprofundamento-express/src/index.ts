import express from "express"

import cors from 'cors'

const app = express()

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});