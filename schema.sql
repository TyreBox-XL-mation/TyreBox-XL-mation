DROP DATABASE IF EXISTS tyrebox;

CREATE DATABASE tyrebox;

USE tyrebox;

CREATE TABLE tyre (
  id int NOT NULL AUTO_INCREMENT,
  type varchar(250) NOT NULL,
  width int NOT NULL,
  diameter int NOT NULL,
  height int NOT NULL,    
  PRIMARY KEY (ID)
);


CREATE TABLE contact (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(250) NOT NULL,
  mobile int NOT NULL,
  email varchar(250) NOT NULL,
  message varchar(400) NOT NULL,    
  PRIMARY KEY (ID)
);

CREATE TABLE latestproduct (
  id int NOT NULL AUTO_INCREMENT,
  image varchar(250) NOT NULL,
  reference varchar(250) NOT NULL,
  price int NOT NULL,  
  PRIMARY KEY (ID)
);

CREATE TABLE ourservices (
  id int NOT NULL AUTO_INCREMENT,
  image varchar(250) NOT NULL,
  servicename varchar(250) NOT NULL,
  description varchar(400) NOT NULL,  
  PRIMARY KEY (ID)
);


INSERT INTO tyre ( type, width, diameter, height) VALUES 
('Amine', 195, 55 , 16 );

INSERT INTO contact ( name, mobile, email, message) VALUES 
('Alaa', 21189897, 'alaa@gmail.com' , 'hello Alaa' );


INSERT INTO latestproduct ( image, reference, price) VALUES 
('https://fl-discounttyres-media.s3.amazonaws.com/uploads/2018/10/goodyear-assurance-triplemax-2.png', '195/75/15', 500);

INSERT INTO ourservices ( image, servicename, description) VALUES 
('https://fl-discounttyres-media.s3.amazonaws.com/uploads/2018/10/goodyear-assurance-triplemax-2.png', 'balancing', 'Tire Balancing Service Includes: Tire and wheel removal. Mounting each wheel on a state-of-the-art balancing machine. Spinning each wheel to make sure the weight of the wheel and tire are balanced evenly around the axle');

