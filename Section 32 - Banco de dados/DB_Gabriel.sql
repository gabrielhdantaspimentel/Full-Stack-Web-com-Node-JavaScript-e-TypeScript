/*
CREATE DATABASE facebook;
create database facebook2;
DROP DATABASE FACEBOOK;
USE facebook;

CREATE TABLE usuarios 
(
	email VARCHAR(39),
    senha VARCHAR(8)
);

DESCRIBE usuarios;

DROP TABLE usuarios;



CREATE TABLE usuarios 
(
	email VARCHAR(39),
    senha VARCHAR(8)
);

INSERT INTO usuarios ( email, senha )
			VALUES ( 'gabriel@email.com', '12345' );



TRUNCATE TABLE usuarios;

DROP TABLE pessoas;
*/

CREATE TABLE pessoas
(
	numero INT
);

INSERT INTO pessoas (numero) VALUES (505156);
DROP TABLE pessoas;

