import app from './app.js'

const PORT = process. env. PORT || 3000

//escutar(listen) a porta 3000
app.listen(PORT, () => {
  console.log(`Servidor sendo executado a partir do endereço http://localhost:${PORT}`)
})
