
import { consulta } from "../database/conexao.js"

class UsuarioRepository{

    create(usuario){
        const query = "insert into usuarios set ?;"
        return consulta(query, usuario, "Não foi possível cadastrar")
    }
    findAll(){
        const query = "select * from usuarios;"
        return consulta(query, "Não foi possível encontrar instâncias")
    }
    findById(id){
        const query = 'select * from usuarios where id = ?;'
        return consulta(query, id, "Não foi possível encontrar instância")
    }
    update(usuario, id){
        const query = "update usuarios set ? where id = ?;"
        return consulta(query, [usuario, id], "Não foi possível alterar")
    }
    delete(id){
        const query = 'delete from usuarios where id = ?;'
        return consulta(query, id, "Não foi possível deletar")
    }

}

export default new UsuarioRepository()
