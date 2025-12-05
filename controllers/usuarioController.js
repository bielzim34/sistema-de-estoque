const Usuario = require("../models/Usuario");

const bcryptjs = require("bcryptjs");
class usuarioController{
    static async relatorio (req, res){
        const status = req.query.s;
        const usuarios = await Usuario.find();
        res.render("usuario/relatorio",{ usuarios, status});
};

    static async detalhar (req, res){
        const  usuario = await  Usuario.findOne({email: req.params.email})
        res.render("usuario/detalhar", { usuario});
    };

    static async atualizarPost (req, res){
        const  usuario = req.body;
        const salt = bcryptjs.genSaltSync();
        const hash = bcryptjs.hashSync(usuario.senha,salt);
        console.log(usuario);
        await Usuario.updateOne({_id:usuario._id},{
            senha: hash,
            nome: usuario.nome,
            email: usuario.email,
    
    });
        res.redirect("/usuario?s=3");
            };

    static async atualizar (req, res){
        const usuario = await Usuario.findOne({email: req.params.email})
        res.render("usuario/cadastrar", {usuario});
    };

    static async cadastrarpost(req, res){
        const usuario= req.body;
        const salt = bcryptjs.genSaltSync();
        const hash = bcryptjs.hashSync(usuario.senha,salt);
        const novoUsuario = new Usuario({
    
            nome:usuario.nome,
            email:usuario.email,
            senha: hash,
            });

            await novoUsuario.save();
        res.redirect("/usuarios?s=1");
    };

        static async excluir(req, res){
            const usuario = await Usuario.deleteOne({email:req.params.email})
            res.redirect("/usuarios?s=2");
            
        };

    static cadastrarget(req, res){
        const usuario={};
        res.render("usuario/cadastrar", {usuario});
    };

    static async loginpost(req, res){
        const usuario = await Usuario.findOne({email: req.body.email});
        if (usuario != null){
            if (bcryptjs.compareSync(req.body.senha, usuario.senha)){
                req.session.usuario = usuario.email;
                res.redirect ("/")
            
            } else{res.redirect("/usuarios/login?s=1");
                
            }
        
        }else{res.redirect("/usuarios/login?s=1");

        }

        };


    static loginget(req, res){
        const status = req.query.s;
        res.render("usuario/login",{status});
    };

    static async logout(req, res){
        req.session.usuario = null;
        res.redirect("/usuarios/login")
    };

}
module.exports = usuarioController;
