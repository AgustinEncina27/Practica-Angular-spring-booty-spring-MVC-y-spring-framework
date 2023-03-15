CREATE DATABASE notesdb;

USE notesdb;

CREATE TABLE note (
  id int NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content VARCHAR(255) NOT NULL,
  last_date date NOT NULL,
  archived bit(1) NOT NULL,
  PRIMARY KEY (id)
);