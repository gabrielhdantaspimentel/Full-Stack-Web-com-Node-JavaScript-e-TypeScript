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

INSERT INTO produtos
		VALUES(
			NULL, 'Headphone Philips Wireless BT Branco', 'O fone de ouvido...', 92.90, 'eletronicos', 'Philips', 'foto1, foto2, foto3' 
        );
        
INSERT INTO produtos
		VALUES(
			NULL, 'Camera GoPro Hero9 Black', 'Descricao...', 92.90, 'eletronicos', 'GoPro', 'foto1, foto2, foto3' 
        );
        
INSERT INTO produtos
		VALUES(
			NULL, 'PocoFone X6 Pro', 'Descricao...', 2200.90, 'eletronicos', 'Xiaomi', 'foto1, foto2, foto3' 
        );
        

INSERT INTO vendas
		VALUES(
			'joao.silva', 'papel higienico', 13.90, 5, 'higiene'
        );
        
-- SELECT na prática

-- SELECIONANDO TUDO
SELECT * FROM vendas WHERE usuario = 'maria.bonita';


-- SELECIONNADO INDIVIDUALMENTE
SELECT 
	produto, preco, quantidade
FROM vendas 
WHERE usuario = 'maria.bonita';

SELECT * 
FROM vendas 
WHERE usuario <> 'maria.bonita';

SELECT * 
FROM vendas 
WHERE usuario <> 'maria.bonita';


-- CONSULTANDO VALORES MAIOR, MENOR E/OU MAIOR/MENOR IGUAL QUE ITEM
SELECT * 
FROM vendas 
WHERE preco <= 1000;

-- OPERADORES AND E OR
SELECT * 
FROM vendas 
WHERE categoria = 'roupas' OR preco >= 200;

-- OPERADOR LIKE E CORINGA -->  %
SELECT * 
FROM vendas 
WHERE produto LIKE '%ante';


-- SELECIONANDO VALORES ENTRE (BETWEEN)
SELECT * FROM vendas WHERE preco BETWEEN 1000 AND 2000;

-- IN e NOT IN
SELECT * FROM vendas WHERE categoria IN ('eletronicos', 'higiene');

-- NOT 
SELECT * FROM vendas WHERE NOT preco < 200;
SELECT * FROM vendas WHERE NOT preco BETWEEN 1000 AND 1200;
SELECT * FROM vendas WHERE NOT produto LIKE '%note%';

-- Ordenação com ORDER BY e LIMIT
/*
ASC  -> Ascendente a...z ou 0...100
DESC  -> Descendente z...a ou 100...0

*/

SELECT * FROM vendas WHERE categoria = 'roupas' ORDER BY preco ASC ;

SELECT * FROM vendas 
WHERE 1=1
ORDER BY produto ASC
LIMIT 2;


-- Consultas com agregações Funções SUM, MAX, MIN 
SELECT produto AS p FROM vendas;
SELECT produto, preco, quantidade, (preco * quantidade) AS total FROM vendas;

SELECT usuario, MAX(total) AS total_vendas FROM vendas GROUP BY usuario;

-- Alterando tabela para total
UPDATE vendas SET total = preco * quantidade;