CREATE TABLE usuarios
(
	nome VARCHAR(70),
    usuario VARCHAR(70),
    senha VARCHAR(12)
);

INSERT INTO usuarios(nome, usuario, senha)
		VALUES ("Gabriel Pimentel", "gabriel.pimentel", "senha123");
        
INSERT INTO usuarios(nome, usuario, senha)
		VALUES ("Brenda Vieira", "brenda.vieira", "123456");usuarios
        
DROP TABLE usuarios;