import express from 'express'
import cors from 'cors'

const app = express()
const port = 3002
app.use(express.json())
app.use(cors())

const pessoas = []

let cont = 1
const id = () => cont++

const cadastroPessoas = (nome, dataNascimento, telefone) => {
    pessoas.push({id: id(), nome, dataNascimento, telefone})
}


app.get('/pessoas', (req, res) => {
    res.send(pessoas)
})

app.post('/pessoas', (req, res) => {
    cadastroPessoas(req.body.nome, req.body.dataNascimento, req.body.telefone)
    res.send('Pessoa cadastrada com sucesso!')
})
















app.listen(port, () => {
    console.log('Servidor Funcionando')
})




