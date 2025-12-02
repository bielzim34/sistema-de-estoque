const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fornecedorSchema = Schema({
    nome: String,
    endereço: String,
    codf:Number
});

module.exports = mongoose.model("Fornecedor", fornecedorSchema);