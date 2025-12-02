const express = require("express");
const routes = express.Router();

const produtoController = require("../controllers/produtoController");

routes.get("/produtos/cadastrar",produtoController.cadastrarget);
routes.get("/produtos/excluir/:codp",produtoController.excluir);
routes.get("/produtos/atualizar/:codp",produtoController.atualizar);

routes.post("/produtos",produtoController.cadastrarpost);
routes.get("/produtos", produtoController.relatorio);
routes.get("/produtos/:nome", produtoController.detalhar);
routes.post("/produtos/atualizar", produtoController.atualizarPost);


module.exports = routes; 