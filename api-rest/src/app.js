import express from 'express'
import UsuarioController from './app/controllers/UsuarioController.js'

const app = express()

//indicar leitura para o express do json no body
app.use(express.json())

//ROTAS
//criação de rota padrão
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//rota para buscar todos os objetos
app.get('/usuarios', UsuarioController.index)

//buscar pelo paramentro no get
app.get('/usuarios/:id', UsuarioController.show)

//rota para criação de objeto por JSON
app.post('/usuarios', UsuarioController.store)

//rota para alterar objeto do array por id
app.put('/usuarios/:id', UsuarioController.update)

//rota para deletar objeto do array
app.delete('/usuarios/:id', UsuarioController.delete)

export default app
