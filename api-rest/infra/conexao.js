import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "12345678",
    database: "bd_usuarios_node"
})

conexao.connect()

export default conexao
