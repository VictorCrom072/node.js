import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "12345678",
    database: "bd_usuarios_node"
})

conexao.connect()

/**
 * Executa um código sql com ou sem valores
 * @param {string} query instrução sql a ser executada
 * @param {string = id | [usuario, id]} valores 
 * @param {string} mensagemReject mensagem a ser mostrada no caso de erro 
 * @returns objeto da promisse
 */
export const consulta = (query, valores = '', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(query, valores, (erro, result) => {
            if(erro) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default conexao
