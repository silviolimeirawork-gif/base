CREATE DATABASE vue_project;
USE vue_project;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

INSERT INTO users (name, email) VALUES
('Jose', 'jose@email.com'),
('Maria Souza', 'maria@email.com');
