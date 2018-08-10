CREATE DATABASE onion_db;
USE onion_db;


CREATE TABLE surveys (
  id INTEGER AUTO_INCREMENT NOT NULL,
  question1 VARCHAR(255),
  question2 VARCHAR(255),
  question3 VARCHAR(255),
  PRIMARY KEY (id)
);