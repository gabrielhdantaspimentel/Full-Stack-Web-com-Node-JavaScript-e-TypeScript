CREATE TABLE IF NOT EXISTS produtos
(
	produto_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, -- DEFININDO PRIMARY KEY
	titulo VARCHAR(100),
    descricao TEXT,
    preco DECIMAL(15,2),
    categoria VARCHAR(70),
    marca VARCHAR(70),
    foto VARCHAR(70)
);

CREATE TABLE IF NOT EXISTS pedidos
(
	pedido_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, -- DEFININDO PRIMARY KEY
	produto_id INT UNSIGNED NOT NULL,
    preco DECIMAL(15,2),
    quantidade SMALLINT,
    usuario VARCHAR(50),
    CONSTRAINT produtos_id_fk 
    FOREIGN KEY (produto_id) REFERENCES produtos(produto_id)
);
INSERT INTO pedidos VALUES (NULL, 2, 2190.90, 1, 'maria.silva' );
DELETE FROM produtos WHERE id = 2;
DELETE FROM pedidos WHERE id = 1;

SELECT * FROM pedidos JOIN produtos USING(produto_id);


INSERT INTO produtos VALUES (
NULL, 'Headphone Philips Wireless BT Preto', 'Descricao de produto...', 95.50, 'eletronicos', 'philips', 'foto 1, foto 2, foto 3'
);

INSERT INTO produtos VALUES (
NULL, 'Celular Pocofone X6 Pro', 'Descricao de produto...', 2200.50, 'eletronicos', 'Xiaomi', 'foto 1, foto 2, foto 3'
);

INSERT INTO produtos VALUES (
NULL, 'Playstation 5', 'Descricao de produto...', 5000.00, 'eletronicos', 'Playstation', 'foto 1, foto 2, foto 3'
);



DROP TABLE IF EXISTS produtos;
DROP TABLE IF EXISTS pedidos;