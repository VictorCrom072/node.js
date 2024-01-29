drop database if exists bd_usuarios_node;
create database bd_usuarios_node;
use bd_usuarios_node;

create table usuarios(
	id int primary key auto_increment,
    usuario varchar(40) not null,
    email varchar(40) not null,
    senha char(20) not null
);

insert into usuarios values (default, 'Thiago', 'thia@gmail.com', '123456');
insert into usuarios values (default, 'Henrique', 'henr@gmail.com', '123456');
insert into usuarios values (default, 'Augusto', 'augu@gmail.com', '123456');
insert into usuarios values (default, 'Yasmin', 'yasm@gmail.com', '123456');

select * from usuarios;
