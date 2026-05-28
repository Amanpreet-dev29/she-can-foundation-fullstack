CREATE DATABASE she_can_db;

USE she_can_db;

/* CONTACT TABLE */

CREATE TABLE contacts (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100),

    email VARCHAR(100),

    message TEXT

);

/* DONATION TABLE */

CREATE TABLE donations (

    id INT AUTO_INCREMENT PRIMARY KEY,

    donor_name VARCHAR(100),

    email VARCHAR(100),

    amount INT,

    payment_method VARCHAR(50),

    donated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
