CREATE TABLE postagens
(
	titulo VARCHAR(30) NOT NULL DEFAULT 'Titulo padrão',
    descricao TEXT NOT NULL
    -- qtd_visualizacoes INT NOT NULL DEFAULT 23
);

INSERT INTO postagens (titulo, descricao, dt_postagem, qtd_visualizacoes) VALUES 
(
'Hadouken',
'Descricao postagem',
'2026-06-06',
3789279

);

ALTER TABLE postagens_blog RENAME TO postagens;

-- ADICIONANDO VARIOS ITENS
ALTER TABLE postagens 
	ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo,
	ADD COLUMN qtd_visualizacoes INT NOT NULL DEFAULT 0;

-- REMOVENDO VARIOS ITENS
ALTER TABLE postagens 
	DROP COLUMN data_postagem,
    DROP COLUMN qtd_visualizacoes
    ;
    
-- ALTERANDO DADOS 
ALTER TABLE postagens 
	CHANGE COLUMN data_postagem dt_postagem DATE NOT NULL;
    
-- MODIFICANDO DADOS E POSICAO DE COLUNA EXISTENTE
ALTER TABLE postagens 
	MODIFY COLUMN qtd_visualizacoes BIGINT AFTER descricao;
    

DROP TABLE postagens;
TRUNCATE TABLE postagens;