CREATE TABLE IF NOT EXISTS funcionarios
(
	id_funcionario INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    sobrenome VARCHAR(100)
);

INSERT INTO funcionarios VALUES (null, 'Maria','Almeida');
INSERT INTO funcionarios VALUES (null, 'Gabriel','Pimentel');
INSERT INTO funcionarios VALUES (null, 'Brenda','Vieira');
INSERT INTO funcionarios VALUES (null, 'Joao','Zinho');


CREATE TABLE IF NOT EXISTS cargos
(
	id_cargo INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100),
    salario VARCHAR(100)
);

INSERT INTO cargos VALUES (null, 'Diretor','50000');
INSERT INTO cargos VALUES (null, 'Gerente','20000');
INSERT INTO cargos VALUES (null, 'Programador','10000');
INSERT INTO cargos VALUES (null, 'Estagiario','1200');

CREATE TABLE IF NOT EXISTS salarios
(
	id_salario INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_funcionario INT UNSIGNED NOT NULL UNIQUE KEY,
    id_cargo INT UNSIGNED NOT NULL,
    CONSTRAINT funcionarios_id_funcionario_fk
    FOREIGN KEY (id_funcionario) REFERENCES funcionarios(id_funcionario),
    CONSTRAINT cargo_id_cargo_fk
    FOREIGN KEY (id_cargo) REFERENCES cargos(id_cargo)
);
DROP TABLE salarios;
INSERT INTO salarios VALUES(null, 5, 1);
INSERT INTO salarios VALUES(null, 1, 2);




-- Outro exemplo
CREATE TABLE IF NOT EXISTS produtos
(
	id_produto INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	titulo VARCHAR(100),
	preco DECIMAL(15, 2),
    categoria VARCHAR(70),
	marca VARCHAR(70),
	foto VARCHAR(70)
);
INSERT INTO produtos (id_produto, titulo, preco, categoria, marca, foto) 
VALUES (1, 'Smartphone X', 4999.00, 'Eletrônicos', 'Marca X', 'foto.jpg');

CREATE TABLE IF NOT EXISTS produtos_detalhes
(
	id_produto_detalhe INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_produto INT UNSIGNED NOT NULL UNIQUE KEY,
    descricao TEXT,
    informacoes_adicionais TEXT,
    cor VARCHAR(15),
    memoria_interna VARCHAR(8),
    tipo_tela VARCHAR(8),
    conectividade VARCHAR(8),
    CONSTRAINT produtos_id_produto_fk
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);
INSERT INTO produtos_detalhes VALUES 
(
null, 1, 'descricao teste...', 'info teste...', 'azul', '500GB', 'Retina', 'wifi'
);

DROP TABLE produtos_detalhes;





DROP TABLE IF EXISTS produtos;
TRUNCATE TABLE salarios;