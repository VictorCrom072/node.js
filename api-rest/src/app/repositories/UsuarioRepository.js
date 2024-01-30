
import conexao from "../database/conexao.js"

class UsuarioRepository{

    create(usuario){
        const query = "insert into usuarios set ?;"
        return new Promise((resolve, reject) => {
            conexao.query(query, usuario, (erro, result) => {
                if(erro) return reject("Erro ao criar usuário")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
    findAll(){
        const query = "select * from usuarios;"
        return new Promise((resolve, reject) => {
            conexao.query(query, (erro, result) => {
                if(erro) return reject("Não é possível encontrar instâncias")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
    findById(id){
        const query = 'select * from usuarios where id = ?;'
        return new Promise((resolve, reject) => {
            conexao.query(query, id, (erro, result) => {
                if(erro) return reject("Não é possível encontrar a instância")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
    update(usuario, id){
        const query = "update usuarios set ? where id = ?;"
        return new Promise((resolve, reject) => {
            conexao.query(query, [usuario, id], (erro, result) => {
                if(erro) return reject("Erro ao alterar usuário")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
    delete(id){
        const query = 'delete from usuarios where id = ?;'
        return new Promise((resolve, reject) => {
            conexao.query(query, id, (erro, result) => {
                if(erro) return reject("Erro ao deletar usuário")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

}

export default new UsuarioRepository()
