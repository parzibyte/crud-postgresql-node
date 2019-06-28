create database tienda;
create table productos(
    id serial primary key,
    nombre varchar(255),
    precio decimal(5, 2)
);