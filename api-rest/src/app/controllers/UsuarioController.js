import conexao from "../database/conexao.js"

class UsuarioController {

    index(req, res) {
        const query = "select * from usuarios;"
        conexao.query(query, (erro, result) => {
            if (erro) {
                res.status(404).json({ "erro": erro })
            } else {
                res.status(200).send(result)
            }
        })
    }

    show(req, res) {
        const id = req.params.id
        const query = 'select * from usuarios where id = ?;'
        conexao.query(query, id, (erro, result) => {
            if (erro) {
                res.status(404).json({ "erro": erro })
            } else {
                res.status(200).send(result)
            }
        })
    }

    store(req, res) {
        let selecao = req.body
        const query = "insert into usuarios set ?;"
        conexao.query(query, selecao, (erro, result) => {
            if (erro) {
                res.status(404).json({ "erro": erro })
            } else {
                res.status(201).send(result)
            }
        })
    }

    update(req, res) {
        const id = req.params.id
        let selecao = req.body
        const query = "update usuarios set ? where id = ?;"
        conexao.query(query, [selecao, id], (erro, result) => {
            if (erro) {
                res.status(404).json({ "erro": erro })
            } else {
                res.status(209).send(result)
            }
        })
    }

    delete(req, res) {
        const id = req.params.id
        const query = 'delete from usuarios where id = ?;'
        conexao.query(query, id, (erro, result) => {
            if (erro) {
                res.status(404).json({ "erro": erro })
            } else {
                res.status(200).send(result)
            }
        })
    }

}

//Padrão Singleton
export default new UsuarioController()
