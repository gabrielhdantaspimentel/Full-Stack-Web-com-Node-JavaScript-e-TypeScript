DROP DATABASE loja;
CREATE DATABASE loja;
USE loja;

CREATE TABLE IF NOT EXISTS categorias
(
	id_categoria INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30)
);

INSERT INTO categorias VALUES (null, 'Eletronicos');
INSERT INTO categorias VALUES (null, 'Moveis');

DROP TABLE produtos, categorias;
CREATE TABLE IF NOT EXISTS produtos
(
	id_produto INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_categoria INT UNSIGNED, 
    nome VARCHAR(30),
    preco DECIMAL(10,2),
    FOREIGN KEY(id_categoria) REFERENCES categorias(id_categoria)
		/*
        ON DELETE no action -- NO ACTION e RESTRICT são a mesma coisa
        ON UPDATE restrict
        
        ON DELETE cascade -- propaga as alterações
        ON UPDATE cascade
        */
        ON DELETE SET NULL -- configurar como nulo para o item removido 
        ON UPDATE SET NULL
);
INSERT INTO produtos VALUES (null, 1, 'Notebook', 1000);
INSERT INTO produtos VALUES (null, 2, 'Mesa de jantar', 900);

SELECT * FROM categorias; -- Tabela pai
SELECT * FROM produtos; -- Tabela filha

DELETE FROM categorias WHERE id_categoria = 1;
UPDATE categorias SET id_categoria = 3 WHERE id_categoria = 1;