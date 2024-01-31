import express from 'express'
import routes from './routes.js'

const app = express()

//indicar leitura para o express do json no body
app.use(express.json())

//indicar o uso de router
app.use(routes)

export default app
