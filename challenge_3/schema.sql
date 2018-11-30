DROP DATABASE IF EXISTS clients;
CREATE DATABASE clients;

USE clients;

CREATE TABLE user (
  user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_username VARCHAR(30) NOT NULL,
  user_email VARCHAR(30) NOT NULL,
  user_password VARCHAR(30) NOT NULL,
  user_line1 VARCHAR(30) NOT NULL,
  user_line2 VARCHAR(30) NOT NULL,
  user_city VARCHAR(30) NOT NULL,
  user_state VARCHAR(30) NOT NULL,
  user_zip VARCHAR(30) NOT NULL,
  user_phone VARCHAR(30) NOT NULL,
  user_cc VARCHAR(30) NOT NULL,
  user_exp VARCHAR(30) NOT NULL,
  user_cvv VARCHAR(30) NOT NULL,
  user_billing_zip VARCHAR(30) NOT NULL,
  createdAt VARCHAR(30) NOT NULL
)
