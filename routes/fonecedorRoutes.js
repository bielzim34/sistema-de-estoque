const express = require("express");
const routes = express.Router();

const fornecedorController = require("../controllers/fornecedorController");

routes.get("/fornecedores/cadastrar", fornecedorController.cadastrarget);
routes.get("/fornecedores/excluir/:codf",fornecedorController.excluir);
routes.get("/fornecedores/atualizar/:codf",fornecedorController.atualizar);

routes.get("/fornecedores/:nome", fornecedorController.detalhar);
routes.get("/fornecedores", fornecedorController.relatorio);
routes.post("/fornecedores",fornecedorController.cadastrarpost );
routes.post("/fornecedores/atualizar", fornecedorController.atualizarPost);

module.exports = routes;