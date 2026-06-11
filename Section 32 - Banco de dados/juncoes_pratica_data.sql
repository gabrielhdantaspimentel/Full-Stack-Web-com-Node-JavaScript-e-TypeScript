CREATE DATABASE pratica;
USE pratica;

-- Cria tabela de clientes
create table if not exists clientes (
    id_cliente int unsigned not null auto_increment primary key,
    nome_completo varchar(100),
    idade tinyint,
    cpf varchar(11)
);
insert into clientes values(
    null, "Jamilton Damasceno", 30, "39823498721"
);
insert into clientes values(
    null, "Maria Silva", 45, "39823498721"
);

-- Cria tabela de produtos
create table if not exists produtos (
    id_produto int unsigned not null auto_increment primary key,
    titulo varchar(100),
    preco decimal(10,2),
    marca varchar(70),
    foto varchar(70)
);

insert into produtos values(
    null, "Notebook Lenovo Ultrafino IdeaPad", 2899.00,
    "lenovo", "foto"
);

insert into produtos values(
    null, "Mouse Gamer Redragon Cobra", 118.00,
    "Redragon", "foto"
);

insert into produtos values(
    null, "Console Nintendo Switch", 2099.00,
    "Nintendo", "foto"
);


-- Cria tabela de pedidos
create table if not exists pedidos (
    id_pedido int unsigned not null auto_increment primary key,
    id_cliente int unsigned not null,
    data_pedido datetime not null default current_timestamp,
    data_entrega date not null,
    forma_pagamento varchar(100) not null,
    endereco_entrega varchar(100) not null,
    quantidade_itens smallint not null,
    total decimal(10,2),
    foreign key(id_cliente) references clientes(id_cliente)
);

insert into pedidos values(
    null, 1, default, "2025-11-20", "Boleto", "Rua Brigadeiro, 3045, APTO 10",
    2, 3017.00
);

insert into pedidos values(
    null, 2, default, "2025-11-15", "cartão de crédito", "AV. Pompéia, 3040",
    1, 2099.00
);


-- Cria tabela de pedidos produtos
create table if not exists itens_pedido (
    id_pedido int unsigned not null,
    id_produto int unsigned not null,
    quantidade smallint not null,
    preco decimal(10,2),
    foreign key(id_pedido) references pedidos(id_pedido),
    foreign key(id_produto) references produtos(id_produto),
    primary key (id_pedido, id_produto)
);

insert into itens_pedido values(
    1, 1, 1, 2089.00
);

insert into itens_pedido values(
    1, 2, 1, 118.00
);

insert into itens_pedido values(
    2, 3, 1, 2099.00
);

select * from clientes;
select * from pedidos;
select * from itens_pedido;
select * from produtos;

/*
Join na prática
*/
SELECT 
	pe.data_entrega, pe.forma_pagamento, pe.endereco_entrega, pe.total,
    cl.nome_completo
    -- *
FROM pedidos pe
INNER JOIN clientes cl USING (id_cliente)
INNER JOIN itens_pedido ip
WHERE pe.id_cliente = 1





