CREATE TABLE vendas
(
	usuario VARCHAR(40),
	produto VARCHAR(60),
	preco DECIMAL(15, 2),
	quantidade INT,
	categoria VARCHAR(60)
);

ALTER TABLE vendas ADD COLUMN total DECIMAL(15,2);



INSERT INTO vendas
		VALUES(
			'jamilton.damasceno', 'Notebook HP', 1200.90, 1, 'eletronicos'
        );
        
INSERT INTO vendas
		VALUES(
			'gabriel.pimentel', 'Smartphone', 1500.00, 4, 'eletronicos'
        );
        
INSERT INTO vendas
		VALUES(
			'maria.bonita', 'Jaqueta brilhante', 300.90, 2, 'roupas'
        );
        
INSERT INTO vendas
		VALUES(
			'maria.bonita', 'calcinha bege', 22.90, 2, 'roupas'
        );
        
        
INSERT INTO vendas
		VALUES(
			'gabriel.dantas', 'cuequinha branca', 500.00, 15, 'roupas'
        );
        
INSERT INTO vendas
		VALUES(
			'gabriel.pimentel', 'chocolate', 5.00, 2, 'comida'
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