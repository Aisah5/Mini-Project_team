create database kasir_db;
use kasir_db;

create table users(id_user integer(3), username varchar(30), email varchar(30), password varchar(30),
phone varchar(15), storename varchar(30));

alter table users add primary key auto_increment(id_user);

insert into users(username, email, password, phone, storename) values('admin', 'admin@gmail.com', 'Admin123', '089988776655', 'KasirApp');


select * from users;
show tables;