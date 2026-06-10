-- CHAVE PRIMARIA NA PRATICA
CREATE TABLE produtos
(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT, -- DEFININDO PRIMARY KEY
	titulo VARCHAR(100),
    descricao TEXT,
    preco DECIMAL(15,2),
    categoria VARCHAR(70),
    marca VARCHAR(70),
    foto VARCHAR(70),
    PRIMARY KEY (id),
    UNIQUE KEY (titulo) -- email, cpf
);
