const express = require("express");
const routes = express.Router();

const usuarioController = require("../controllers/usuarioController");

routes.get("/usuarios/cadastrar", usuarioController.cadastrarget);
routes.get("/usuarios/login",usuarioController.loginget);
routes.get("/usuarios/excluir/:email",usuarioController.excluir);
routes.get("/usuarios/atualizar/:email",usuarioController.atualizar);

routes.get("/usuarios", usuarioController.relatorio);
routes.post("/usuarios",usuarioController.cadastrarpost );
routes.post("/usuarios/atualizar", usuarioController.atualizarPost);
routes.post("/usuarios/login",usuarioController.loginpost );
routes.post("/usuarios/login",usuarioController.logout );
routes.get("/usuarios/:email", usuarioController.detalhar);


module.exports = routes;