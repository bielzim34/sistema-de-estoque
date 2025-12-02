const Fornecedor = require("../models/Fornecedor");

class FornecedorController{
    static async relatorio (req, res){
        const status = req.query.s;
        const fornecedores = await Fornecedor.find();
        res.render("fornecedor/relatorio",{fornecedores, status});
};

    static async detalhar (req, res){
        const fornecedor = await Fornecedor.findOne({nome: req.params.nome})
        res.render("fornecedor/detalhar", {fornecedor});
    };

    static async atualizarPost (req, res){
        const fornecedor = req.body;
        console.log(fornecedor);
        await Fornecedor.updateOne({_id:fornecedor._id},{
            codf: fornecedor.codf,
            nome: fornecedor.nome,
            endereço: fornecedor.endereço,        
    
    });
        res.redirect("/fornecedores?s=3");
            };

    static async atualizar (req, res){
        const fornecedor = await Fornecedor.findOne({codf: req.params.codf})
        res.render("fornecedor/cadastrar", {fornecedor});
    };

    static async cadastrarpost(req, res){
        const fornecedor= req.body;
    
        const novoFornecedor = new Fornecedor({
    
            nome:fornecedor.nome,
            endereço:fornecedor.endereço,
            codf: fornecedor.codf
            });

            await novoFornecedor.save();
        res.redirect("/fornecedores?s=1");
    };

        static async excluir(req, res){
            const fornecedor = await Fornecedor.deleteOne({codf:req.params.codf})
            res.redirect("/fornecedores?s=2");
            
        };

    static cadastrarget(req, res){
        const fornecedor={};
        res.render("fornecedor/cadastrar", {fornecedor});
    };

}
module.exports = FornecedorController;
