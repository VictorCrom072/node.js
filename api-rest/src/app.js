import express from 'express'

const app = express()

app.use(express.json())

//mock
const selecoes = [
  {id: 1, selecao: 'Brasil', grupo: 'G'},
  {id: 2, selecao: 'Suiça', grupo: 'G'},
  {id: 3, selecao: 'Sérvia', grupo: 'G'},
  {id: 4, selecao: 'Camarôes', grupo: 'G'},
];

//criação de rota padrão
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes)
})

app.post('/selecoes', (req, res) => {
  selecoes.push(req.body)
  res.status(201).send('seleção cadastrada com sucesso!')
})

export default app
