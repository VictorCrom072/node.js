import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

app.use(express.json())

//devolve o objeto do array pelo id
function buscarSelecaoId(id){
  return selecoes.filter(selecao => selecao.id == id)
}

//devolve o index do array pelo id
function buscarIndexId(id){
  return selecoes.findIndex(selecao => selecao.id == id)
}

//ROTAS
//criação de rota padrão
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//rota para buscar todos os objetos
app.get('/usuarios', (req, res) => {
  const query = "select * from usuarios;"
  conexao.query(query, (erro, result) => {
    if(erro){
      res.status(404).json({"erro" : erro})
    } else {
      res.status(200).send(result)
    }
  })
})

//buscar pelo paramentro no get
app.get('/usuarios/:id', (req, res) => {
  //res.json(buscarSelecaoId(req.params.id))
  const id = req.params.id
  const query = 'select * from usuarios where id = ?;'
  conexao.query(query, id, (erro, result) => {
    if(erro){
      res.status(404).json({"erro" : erro})
    } else {
      res.status(200).send(result)
    }
  })
})

//rota para criação de objeto por JSON
app.post('/usuarios', (req, res) => {
  let selecao = req.body
  const query = "insert into usuarios set ?;"
  conexao.query(query, selecao, (erro, result) => {
    if(erro){
      res.status(400).json({"erro" : erro})
    } else {
      res.status(201).send(result)
    }
  })
})

//rota para deletar objeto do array
app.delete('/usuarios/:id', (req, res) => {
  const id = req.params.id
  const query = 'delete from usuarios where id = ?;'
  conexao.query(query, id, (erro, result) => {
    if(erro){
      res.status(404).json({"erro" : erro})
    } else {
      res.status(200).send(result)
    }
  })
})

//rota para alterar objeto do array por id
app.put('/usuarios/:id', (req, res) => {
  const id = req.params.id
  let selecao = req.body
  const query = "update usuarios set ? where id = ?;"
  conexao.query(query, [selecao, id], (erro, result) => {
    if(erro){
      res.status(400).json({"erro" : erro})
    } else {
      res.status(209).send(result)
    }
  })
})

export default app
