-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE barcelona;
USE barcelona;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sobrenome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL
);

CREATE TABLE quiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    turistaCultural INT,
    turistaGastronomico INT,
    turistaEspontaneo INT,
    turistaAventureiro INT,
    turistaVencedor VARCHAR(45),
    dtRealizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fkUsuarioQuiz FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);