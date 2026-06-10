CREATE DATABASE loja;

CREATE TABLE IF NOT EXISTS produtos
(
	id_produto INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    preco DECIMAL (15,2),
    categoria VARCHAR(70),
    marca VARCHAR(70),
    foto VARCHAR(70)
);

INSERT INTO produtos VALUES (
	null, 'Notbeook Dell Inspiron I5', 3200, 'Eletronicos', 'Dell', 'foto 1, foto 2'
)