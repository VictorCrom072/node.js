drop database if exists bd_copa;
create database bd_copa;
use bd_copa;

create table selecoes(
	id int primary key auto_increment,
    selecao varchar(25) not null,
    grupo char(1) not null
);

insert into selecoes values (default, "Holanda", "A");
insert into selecoes values (default, "Senegal", "A");
insert into selecoes values (default, "Equador", "A");
insert into selecoes values (default, "Catar", "A");

select * from selecoes;

select * from selecoes where id = 1;

delete from selecoes where id = 1;

update selecoes set selecao = 'Paises Baixos' and grupo = 'A' where id = 1;