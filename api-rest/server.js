import app from './src/app.js'

const port = 3000

//escutar(listen) a porta 3000
app.listen(port, () => {
  console.log(`Servidor sendo executado a partir do endereço http://localhost:${port}`)
})
