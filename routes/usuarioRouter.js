const express = require('express');
const routes = express.Router();

const usuarioController = require("../controllers/usuarioController");
const auth = require("../middlewares/usuarioAuth");

routes.get("/usuarios/cadastrar", usuarioController.cadastrarget);
routes.get("/usuarios/login",usuarioController.loginget);
routes.get("/usuarios/excluir/:email", auth,usuarioController.excluir);
routes.get("/usuarios/atualizar/:email", auth,usuarioController.atualizar);
routes.get("/usuarios", auth, usuarioController.relatorio);
routes.post("/usuarios",usuarioController.cadastrarpost );
routes.post("/usuarios/atualizar", auth, usuarioController.atualizarPost);
routes.post("/usuarios/login",usuarioController.loginpost );
routes.post("/usuarios/logout", auth,usuarioController.logout );
routes.get("/usuarios/:email", auth, usuarioController.detalhar);


module.exports = routes;