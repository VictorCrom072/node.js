import UsuarioRopository from "../repositories/UsuarioRepository.js"

class UsuarioController {

    async index(req, res) {
        const result = await UsuarioRopository.findAll()
        res.json(result)
    }

    async show(req, res) {
        const id = req.params.id
        const result = await UsuarioRopository.findById(id)
        res.json(result)
    }

    async store(req, res) {
        const usuario = req.body
        const result = await UsuarioRopository.create(usuario)
        res.json(result)
    }

    async update(req, res) {
        const id = req.params.id
        const usuario = req.body
        const result = await UsuarioRopository.update(usuario, id)
        res.json(result)
    }

    async delete(req, res) {
        const id = req.params.id
        const result = await UsuarioRopository.delete(id)
        res.json(result)
    }

}

//Padrão Singleton
export default new UsuarioController()
