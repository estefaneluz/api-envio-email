CREATE DATABASE newsletter;

CREATE TABLE subscribers(
  id serial PRIMARY KEY,
  nome varchar(100) NOT NULL,
  email varchar(200) NOT NULL
);