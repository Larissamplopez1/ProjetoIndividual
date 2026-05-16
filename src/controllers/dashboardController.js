var dashboardModel = require("../models/dashboardModel");

function listar(req, res) {

    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
        return;
    }

    dashboardModel.listar(idUsuario)
        .then(function (resultado) {

            res.status(200).json(resultado);

        }).catch(function (erro) {

            res.status(500).json(erro.sqlMessage);

        });
}

module.exports = {
    listar
}