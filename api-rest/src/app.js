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

//devolve o objeto do array pelo id
function buscarSelecaoId(id){
  return selecoes.filter(selecao => selecao.id == id)
}

//devolve o index do array pelo id
function buscarIndexId(id){
  return selecoes.findIndex(selecao => selecao.id == id)
}

//criação de rota padrão
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//rota para buscar todos os objetos
app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes)
})

//buscar pelo paramentro no get
app.get('/selecoes/:id', (req, res) => {
  //let index = req.params.id
  //console.log(index)
  res.json(buscarSelecaoId(req.params.id))
})

//rota para criação de objeto por JSON
app.post('/selecoes', (req, res) => {
  selecoes.push(req.body)
  res.status(201).send('seleção cadastrada com sucesso!')
})

//rota para deletar objeto do array
app.delete('/selecoes/:id', (req, res) => {
  let index = buscarIndexId(req.params.id)
  selecoes.splice(index, 1)
  res.send('seleção deletada com sucesso!')
})

export default app
