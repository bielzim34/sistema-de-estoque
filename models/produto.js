const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produtoSchema = Schema({
    nome: String,
    marca: String,
    qproduto: Number,
    codp:Number
});

module.exports = mongoose.model("Produto", produtoSchema);
