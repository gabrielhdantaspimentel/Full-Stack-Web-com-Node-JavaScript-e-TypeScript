create database juncoes;
use juncoes;

create table if not exists bebidas (
	id_bebida int unsigned not null primary key auto_increment,
    bebida varchar(10),
    descricao varchar(20)
);
insert into bebidas values(null, "🧉", "Água Coco");
insert into bebidas values(null, "🧋", "Suco");
insert into bebidas values(null, "🥤", "Refrigerante");
-- insert into bebidas values(null, "🍺", "Cerveja");


create table if not exists comidas (
	id_comida int unsigned not null primary key auto_increment,
    comida varchar(20),
    descricao varchar(20),
    id_bebida int unsigned,-- not null
    foreign key(id_bebida) references bebidas(id_bebida)
);
insert into comidas values(null, "🍔", "Hamburguer", 1);
insert into comidas values(null, "🍱", "Com. Japonesa", null);
insert into comidas values(null, "🥪", "Sanduíche", 2);
-- insert into comidas values(null, "🍕", "Pizza", 2);


/*
1) Cross Join -> Cruzar dados (produto cartesiano)
*/
SELECT * FROM comidas CROSS JOIN bebidas;

/*
2) Inner Join -> Dados internos, o que é comum em dois conjuntos
USING -> usando
*/

SELECT * 
FROM comidas c
INNER JOIN bebidas b
USING(id_bebida)
-- ON c.id_bebida = b.id
-- WHERE c.id_bebida = b.id_bebida NÃO É RECOMENDADO
;

/*
3) left (outer) join -> ESQUERDA EXTERNA
Traz todos os resultados a esquerda + o que é comum nas duas tabelas
*/

SELECT * FROM comidas LEFT JOIN bebidas USING(id_bebida);

update comidas set id_bebida = 2 where id_comida = 4;-- 2
update comidas set id_bebida = 2 where id_comida = 3;-- 2


/*
4) right (outer) join
*/
select * from bebidas;
select * from comidas;

SELECT * FROM comidas RIGHT JOIN bebidas USING(id_bebida);


/*
5) full join (union)
*/
SELECT * FROM comidas LEFT JOIN bebidas USING(id_bebida)
UNION
SELECT * FROM comidas RIGHT JOIN bebidas USING(id_bebida);



