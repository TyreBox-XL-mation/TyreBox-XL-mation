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
  description varchar(1400) NOT NULL,  
  PRIMARY KEY (ID)
);

CREATE TABLE admin_log (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  email varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  PRIMARY KEY (ID)
);


-- tyre table 
INSERT INTO tyre ( type, width, diameter, height) VALUES 
('Amine', 195, 55 , 16 );

INSERT INTO tyre ( type, width, diameter, height) VALUES 
('GoodYear', 200, 60 , 18 );

INSERT INTO tyre ( type, width, diameter, height) VALUES 
('Bridgestone', 205, 58 , 19 );

INSERT INTO tyre ( type, width, diameter, height) VALUES 
('Amine', 205, 55 , 16 );



INSERT INTO contact ( name, mobile, email, message) VALUES 
('Alaa', 21189897, 'alaa@gmail.com' , 'Interested in Bridgestone' );

INSERT INTO contact ( name, mobile, email, message) VALUES 
('Ines', 21492968, 'piazzese.ines@gmail.com' , 'Interested in Goodyear' );

INSERT INTO contact ( name, mobile, email, message) VALUES 
('Ramzi', 21378468, 'ramzus.best@gmail.com' , 'Interested in Amine' );


-- latest product 

INSERT INTO latestproduct ( image, reference, price) VALUES 
('https://www.pneu-amine.com.tn/sites/default/files/images/diapositifs/slider-gamme-sn66_1.jpg', "4x4, Light Truck, Commercial", 500);


INSERT INTO latestproduct ( image, reference, price) VALUES 
('https://www.pneu-amine.com.tn/sites/default/files/images/diapositifs/slider-sn66-range_1.jpg', "4x4, Light Truck, SUV (HiWay Performance)", 500);

INSERT INTO latestproduct ( image, reference, price) VALUES 
('https://www.pneu-amine.com.tn/sites/default/files/images/diapositifs/slider-scv-range_1.jpg', "Golf Cart Tyres 12 inch", 500);






-- our services
INSERT INTO ourservices ( image, servicename, description) VALUES 
('https://www.carter-cash.com/blog/wp-content/uploads/2013/09/%C3%A9quilibrage.jpg', 'Wheel Alignment', 'Wheel alignment is the process of adjusting the angles of wheels to the car manufacturer specifications.');

INSERT INTO ourservices ( image, servicename, description) VALUES 
('https://bridgestone-mea.com/media/67867/tyre_measuring.jpg', 'Tyre Rotation', 'As you drive your tyres wear out unevenly. Tyre rotation is changing the position of your tyres for more even wear so that they last longer. Front tyres are used for braking and steering. So, they get worn out quickly. Hence, after a period of one year or approximately every 10,000 km they need to be rotated. Rotation helps you to maintain the traction you need to drive more safely and helps increase the life of your tyres. It is recommended to rotate tyres every 5,000 to 10,000 kms.');

INSERT INTO ourservices ( image, servicename, description) VALUES 
('https://www.laws-tyres.com/assets/974592d48f93f9ea10af0499f10bd8e4_nitrogen-tyres.jpg', 'Nitrogen Filling', 'The normal air that you fill in your tyres consists of 78% nitrogen, 21% oxygen and 1% other gases and water. When you fill your tyre with nitrogen the pressure inside the tyre remains stable. This is because the nitrogen molecule is larger than the others, it doesn’t seep out of your tyre quickly.');

-- mysql -u root -p schema.sql

