import { Router } from "express";
import UsuarioController from "./app/controllers/UsuarioController.js";

const router = Router()

//rota para buscar todos os objetos
router.get('/usuarios', UsuarioController.index)

//buscar pelo paramentro no get
router.get('/usuarios/:id', UsuarioController.show)

//rota para criação de objeto por JSON
router.post('/usuarios', UsuarioController.store)

//rota para alterar objeto do array por id
router.put('/usuarios/:id', UsuarioController.update)

//rota para deletar objeto do array
router.delete('/usuarios/:id', UsuarioController.delete)

export default router
