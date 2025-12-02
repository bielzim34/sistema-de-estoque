const Fornecedor = require("../models/Fornecedor");
const Produto = require("../models/produto")

class ProdutoController{
    static async relatorio (req, res){
        const status = req.query.s;
        const produtos = await Produto.find();
        res.render("produto/relatorio",{produtos, status});
};
    static async detalhar (req, res){
        const produto = await Produto.findOne({nome: req.params.nome})
        res.render("produto/detalhar", {produto});
    };


    static async atualizarPost(req, res){
        const produto = req.body;
        console.log(produto);
        await Produto.updateOne({_id:produto._id},{
            codp: produto.codp,
            nome:produto.nome,
            marca:produto.marca,
            qproduto:produto.qproduto,

        });
            res.redirect("/produtos?s=3");
            };

    static async atualizar (req, res){
        const produto = await Produto.findOne({nome: req.params.nome})
        res.render("produto/cadastrar", {produto});
    };

    static async cadastrarpost(req, res){

        const produto= req.body;
    
        const novoProduto = new Produto({
    
            nome:produto.nome,
            marca:produto.marca,
            qproduto:produto.qproduto,
            codp: produto.codp
            });
            await novoProduto.save();
        res.redirect("/produtos?s=1");
    };

        static async excluir(req, res){
            const produto = await Produto.deleteOne({codp:req.params.codp})
            res.redirect("/produtos?s=2");
        
         };

    static cadastrarget(req, res){
        const produto ={};
        res.render("produto/cadastrar",{produto});
    };    

}
    module.exports = ProdutoController;