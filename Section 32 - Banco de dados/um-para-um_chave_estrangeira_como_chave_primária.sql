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
);

CREATE TABLE IF NOT EXISTS produtos_detalhes
(
	id_produto INT UNSIGNED NOT NULL PRIMARY KEY,
    descricao TEXT,
    informacoes_adicionais TEXT,
    cor VARCHAR(15),
    memoria_interna VARCHAR(8),
    tipo_tela VARCHAR(8),
    conectividade VARCHAR(8),
    CONSTRAINT produtos_id_produto_fk
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);

INSERT INTO produtos_detalhes VALUES (
	1, 'Notbeook Dell Inspiron I5', 'informação de teste...', 'amarelo', '500GB', 'retina', 'wifi'
);