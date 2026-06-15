CREATE DATABASE social;

CREATE TABLE feed 
(
id_postagem INT,
titulo TINYTEXT,
descricao VARCHAR(500),
data_postagem DATETIME
);

INSERT INTO feed (id_postagem, titulo, descricao, data_postagem) VALUES 
(
1,
'Melhor hora do dia',
"Melhor que a hora do daniel churros",
'06-06-2026 16:20:25'
);

DROP TABLE feed;