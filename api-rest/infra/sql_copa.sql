drop database if exists bd_copa;
create database bd_copa;
use bd_copa;

create table selecoes(
	id int primary key auto_increment,
    selecao varchar(25) unique not null,
    grupo char(1) not null
);