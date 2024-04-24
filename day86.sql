CREATE DATABASE Hospital_System;
drop database Hospital_System;
show databases;
use Hospital_System;

-- Create Person table
CREATE TABLE Person (
    personID INT AUTO_INCREMENT PRIMARY KEY,
    personName VARCHAR(100),
    personAddress VARCHAR(200),
    personGender ENUM('Male', 'Female', 'Other'),
    dob DATE,
    ethnicity VARCHAR(50)
);

-- Create Patient table
CREATE TABLE Patient (
    PatientId INT AUTO_INCREMENT PRIMARY KEY,
    personId INT,
    joining_date DATE,
    FOREIGN KEY (personId) REFERENCES Person(personID)
);

-- Create Pharmacy table
CREATE TABLE Pharmacy (
    pharmacyID INT AUTO_INCREMENT PRIMARY KEY,
    Medication VARCHAR(100),
    DoctorId INT,
    dosage VARCHAR(50),
    price DECIMAL(10, 2),
    FOREIGN KEY (DoctorId) REFERENCES Person(personID)
);

-- Create Medical Record table
CREATE TABLE MedicalRecord (
    recordID INT AUTO_INCREMENT PRIMARY KEY,
    Description TEXT,
    history TEXT
);

-- Create AppointmentInfo table
CREATE TABLE AppointmentInfo (
    AppointmentID INT AUTO_INCREMENT PRIMARY KEY,
    patientId INT,
    doctorId INT,
    appointmentDateTime DATETIME,
    FOREIGN KEY (patientId) REFERENCES Patient(PatientId),
    FOREIGN KEY (doctorId) REFERENCES Person(personID)
);

-- Create Hospital table
CREATE TABLE Hospital (
    HospitalId INT AUTO_INCREMENT PRIMARY KEY,
    HospitalAddress VARCHAR(200),
    contact VARCHAR(20)
);

-- Create Staff_Category table
CREATE TABLE Staff_Category (
    staff_categoryID INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(50)
);

-- Create Staff table
CREATE TABLE Staff (
    StaffId INT AUTO_INCREMENT PRIMARY KEY,
    joining_date DATE,
    department VARCHAR(100),
    Joined_date DATE,
    personId INT,
    staff_categoryID INT,
    FOREIGN KEY (personId) REFERENCES Person(personID),
    FOREIGN KEY (staff_categoryID) REFERENCES Staff_Category(staff_categoryID)
);
