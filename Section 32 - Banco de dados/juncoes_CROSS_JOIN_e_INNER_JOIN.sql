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
    id_bebida int unsigned,
    foreign key(id_bebida) references bebidas(id_bebida)
);
insert into comidas values(null, "🍔", "Hamburguer", 1);
insert into comidas values(null, "🍱", "Com. Japonesa", null);
insert into comidas values(null, "🥪", "Sanduíche", 2);
-- insert into comidas values(null, "🍕", "Pizza", 2);