const session = require("express-session");

const express = require ('express')
const app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use(session({
    secret: 'ifpe',
 
    saveUninitialized: false,
    resave: false
     }));

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://eglms_db_user:1c4qKdl0NpE4VQsU@cluster0.yobunds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const fornecedorRouter = require("./routes/fonecedorRoutes");
app.use(fornecedorRouter);

const produtoRouter = require("./routes/produtoRouter");
app.use(produtoRouter);

const usuarioRouter = require("./routes/usuarioRouter");
app.use(usuarioRouter);


app.get("/", function(req, res) {
     if(req.session.usuario != null){
        res.render ("index");

     } else {
        res.redirect("/usuarios/login");
     }
    });

    app.use(function(req, res){
        res.status(404).render("404");
    });

app.listen("999", function(){
    console.log("Rodando...");
});