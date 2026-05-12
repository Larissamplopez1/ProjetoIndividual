var quizModel = require("../models/quizModel");

function listar(req, res) {
    quizModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var idUsuario = req.body.idUsuarioServer; 
    var turistaCultural = req.body.turistaCulturalServer; 
    var turistaGastronomico = req.body.turistaGastronomicoServer; 
    var turistaEspontaneo = req.body.turistaEspontaneoServer; 
    var turistaAventureiro = req.body.turistaAventureiroServer; 
    var turistaVencedor = req.body.turistaVencedorServer; 
 

    if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    }

   quizModel.cadastrar(idUsuario, turistaCultural, turistaGastronomico, turistaEspontaneo, turistaAventureiro, turistaVencedor).then(function(resposta){
        res.status(200).send("Quiz criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}