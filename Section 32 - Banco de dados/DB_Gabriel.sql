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

/* BRINCANDO DE SIMULAR POSTAGEM
INSERT INTO pessoas (titulo, postagem) VALUES ('
Dia de praia', 
'Dia legal na praia, lembro de quando fui com a galera e chapei de de tudo quanto que é bebida');
*/

CREATE TABLE postagens
(
	-- numero INT
    -- numero DECIMAL(10,4)
    -- titulo TINYTEXT, 
    -- texto VARCHAR(5)
    data_postagem DATETIME
);

-- INSERT INTO pessoas (numero) VALUES (999.9123459);
INSERT INTO postagens (data_postagem) VALUES ('2025-12-25 10:20:50');
DROP TABLE pessoas;