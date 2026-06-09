CREATE TABLE usuarios
(
	nome VARCHAR(70),
    usuario VARCHAR(70),
    senha VARCHAR(12)
);

INSERT INTO usuarios(nome, usuario, senha, idade)
		VALUES ("Gabriel Pimentel", "gabriel.pimentel", "senha123", 28);
        
INSERT INTO usuarios(nome, usuario, senha, idade)
		VALUES ("Brenda Vieira", "brenda.vieira", "123456", 26);
        
DELETE FROM usuarios WHERE usuario = 'brenda.vieira';

UPDATE usuarios SET 
	senha = '56789',
    nome = 'Brenda Vieira Pimentel'
    WHERE usuario = 'brenda.vieira';

ALTER TABLE usuarios
	ADD COLUMN idade TINYINT NOT NULL DEFAULT 0 AFTER senha;
    
ALTER TABLE usuarios
	DROP COLUMN idade;
    
UPDATE usuarios SET
	idade = '18'
    WHERE usuario = 'brenda.vieira';

DROP TABLE usuarios;

