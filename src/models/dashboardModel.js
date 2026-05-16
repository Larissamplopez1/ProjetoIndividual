var database = require("../database/config");

// Dados do último quiz do usuário (para KPI 1 e Gráfico 2)
function buscarUltimoQuizUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT turistaCultural, turistaGastronomico, turistaEspontaneo, turistaAventureiro, turistaVencedor
        FROM quiz
        WHERE fkUsuario = ${idUsuario}
        ORDER BY dtRealizacao DESC
        LIMIT 1;
    `;
    return database.executar(instrucaoSql);
}

// Total de quizzes realizados (todos os usuários — para KPI 3)
function totalQuizzes() {
    var instrucaoSql = `
        SELECT COUNT(*) AS total FROM quiz;
    `;
    return database.executar(instrucaoSql);
}

// Contagem de cada tipo vencedor (para Gráfico 1 — pizza de todos os usuários)
function distribuicaoTipos() {
    var instrucaoSql = `
        SELECT turistaVencedor, COUNT(*) AS quantidade
        FROM quiz
        GROUP BY turistaVencedor;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimoQuizUsuario,
    totalQuizzes,
    distribuicaoTipos
};
