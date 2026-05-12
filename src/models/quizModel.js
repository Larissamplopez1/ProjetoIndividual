var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(idUsuario, turistaCultural, turistaGastronomico, turistaEspontaneo, turistaAventureiro, turistaVencedor) {
    var instrucao = `
        INSERT INTO quiz (fkUsuario, turistaCultural, turistaGastronomico, turistaEspontaneo, turistaAventureiro, turistaVencedor) 
        VALUES (${idUsuario}, ${turistaCultural}, ${turistaGastronomico}, ${turistaEspontaneo}, ${turistaAventureiro}, '${turistaVencedor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};