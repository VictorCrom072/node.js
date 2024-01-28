import app from './src/app.js'
import conexao from './infra/conexao.js'
const port = 3000

//executando a conexão e exibindo resultados
conexao.connect((erro) => {
  if(erro){
    console.log(erro)
  }
  else{
    console.log("Conexão executada com sucesso!")
    //escutar(listen) a porta 3000
    app.listen(port, () => {
      console.log(`Servidor sendo executado a partir do endereço http://localhost:${port}`)
    })
  }
})
