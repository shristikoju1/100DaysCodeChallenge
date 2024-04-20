

-- Create a new database
CREATE DATABASE retail_store;

-- Use the newly created database
USE retail_store;

-- Create the Branch table
CREATE TABLE Branch(
    BranchID INT PRIMARY KEY,
    Location VARCHAR(20),
    ContactDetails INT,
    ManagerID INT,
    Employee_count INT
);

-- Create the Product table
CREATE TABLE Product(
    ProductID INT PRIMARY KEY,
    ProductName CHAR(25),
    Brand CHAR(15),
    Category VARCHAR(100),
    Barcode VARCHAR(5),
    SalePrice FLOAT(10)
);

-- Create the Sales table
CREATE TABLE Sales(
    TransactionID INT PRIMARY KEY,
    BranchID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID),
    Date DATE,
    Time TIME,
    Discount VARCHAR(3),
    Payment_Method VARCHAR(100),
    Transaction_Status VARCHAR(10),
    CustomerID INT,
    CashierID INT
);

-- Create the SalesDetail table
CREATE TABLE SalesDetail(
    SalesDetailID INT PRIMARY KEY,
    ProductID INT,
    FOREIGN KEY (ProductID) REFERENCES Product(ProductID),
    TransactionID INT,
    FOREIGN KEY (TransactionID) REFERENCES Sales(TransactionID),
    UnitPrice INT
);

-- Create the Inventory table
CREATE TABLE Inventory(
    InventoryID INT AUTO_INCREMENT PRIMARY KEY,
    ProductID INT,
    FOREIGN KEY (ProductID) REFERENCES Product(ProductID),
    BranchID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID),
    Supplier VARCHAR(30),
    Quantity INT,
    Location VARCHAR(20),
    CostPrice DOUBLE,
    Expiry_Date DATE,
    Manufactured_Date DATE
);

-- Create the Threshold table
CREATE TABLE Threshold(
    ThresholdId INT PRIMARY KEY,
    ProductId INT,
    BranchId INT,
    min_quantity DECIMAL(10,2),
    max_quantity DECIMAL(10,2),
    Threshold_status VARCHAR(100),
    FOREIGN KEY (BranchId) REFERENCES Branch(BranchID),
    FOREIGN KEY (ProductId) REFERENCES Product(ProductID)
);

-- Insert data into the Branch table
INSERT INTO Branch (BranchID, Location, ContactDetails, ManagerID, Employee_count)
VALUES 
    (1, 'New York', 123, 1, 10),
    (2, 'Los Angeles', 987, 2, 15),
    (3, 'Chicago', 555, 3, 8),
    (4, 'Houston', 444, 4, 12),
    (5, 'Miami', 666, 5, 20);

-- Insert data into the Product table
INSERT INTO Product (ProductID, ProductName, Brand, Category, Barcode, SalePrice)
VALUES 
    (1, 'Shirt', 'Nike', 'Clothing', '145', 19.99),
    (2, 'Running Shoes', 'Adidas', 'Footwear', '670', 79.99),
    (3, 'Smartphone', 'Samsung', 'Electronics', '521', 499.99),
    (4, 'Headphones', 'Sony', 'Electronics', '458', 99.99),
    (5, 'Watch', 'Casio', 'Accessories', '875', 149.99);

-- Insert data into the Sales table
INSERT INTO Sales (TransactionID, BranchID, Date, Time, Discount, Payment_Method, Transaction_Status, CustomerID, CashierID)
VALUES 
    (1, 1, '2024-04-01', '10:30:00', '10', 'Credit Card', 'Completed', 101, 201),
    (2, 2, '2024-04-02', '11:45:00', '20', 'Cash', 'Completed', 102, 202),
    (3, 3, '2024-04-03', '09:15:00', '15', 'Credit Card', 'Pending', 103, 203),
    (4, 4, '2024-04-04', '14:20:00', '5', 'Cash', 'Completed', 104, 204),
    (5, 5, '2024-04-05', '16:30:00', '25', 'Credit Card', 'Completed', 105, 205);

-- Insert data into the SalesDetail table
INSERT INTO SalesDetail (SalesDetailID, ProductID, TransactionID, UnitPrice)
VALUES 
    (1, 1, 1, 19.99),
    (2, 2, 2, 79.99),
    (3, 3, 3, 499.99),
    (4, 4, 4, 99.99),
    (5, 5, 5, 149.99);

-- Insert data into the Inventory table
INSERT INTO Inventory (ProductID, BranchID, Supplier, Quantity, Location, CostPrice, Expiry_Date, Manufactured_Date)
VALUES 
    (1, 1, 'Supplier A', 100, 'Warehouse A', 10.50, '2024-12-31', '2024-01-15'),
    (2, 2, 'Supplier B', 50, 'Shelf B', 25.75, '2025-06-30', '2024-03-20'),
    (3, 3, 'Supplier C', 75, 'Backroom C', 15.00, '2024-09-30', '2023-11-10'),
    (4, 4, 'Supplier D', 30, 'Shelf D', 35.25, '2024-08-31', '2024-02-05'),
    (5, 5, 'Supplier E', 20, 'Warehouse E', 50.00, '2024-11-30', '2024-04-25');

-- Insert data into the Threshold table
INSERT INTO Threshold (ThresholdId, ProductId, BranchId, min_quantity, max_quantity, Threshold_status)
VALUES 
    (1, 1, 1, 10, 100, 'Normal'),
    (2, 2, 2, 20, 200, 'Low'),
    (3, 3, 3, 15, 150, 'High'),
    (4, 4, 4, 25, 250, 'Critical'),
    (5, 5, 5, 30, 300, 'Normal');

-- Update data in the Branch table
UPDATE Branch
SET Location = 'New Location',
    ContactDetails = 123,
    ManagerID = 2,
    Employee_count = 15
WHERE BranchID = 1;

-- Update data in the Threshold table
UPDATE Threshold
SET min_quantity = 20,
    max_quantity = 200,
    Threshold_status = 'Low'
WHERE ThresholdId = 5;

-- Delete data from the Inventory table
DELETE FROM Inventory
WHERE ProductID = 1;

-- Delete data from the SalesDetail table
DELETE FROM SalesDetail
WHERE SalesDetailID = 5;

-- Alter the data type of the min_quantity column in the Threshold table
ALTER TABLE Threshold
MODIFY COLUMN min_quantity DECIMAL(10,2);

-- Select data from Sales and SalesDetail tables
SELECT * 
FROM Sales
INNER JOIN SalesDetail ON Sales.TransactionID = SalesDetail.TransactionID ;

-- Select data from Sales and Branch tables
SELECT * 
FROM Sales
INNER JOIN Branch ON Sales.BranchID = Branch.BranchID ;

-- Select data from Inventory and Branch tables
SELECT * 
FROM Inventory
INNER JOIN Branch ON Inventory.BranchID = Branch.BranchID ;

-- Select data from Product and SalesDetail tables
SELECT * 
FROM Product
INNER JOIN SalesDetail ON Product.ProductID = SalesDetail.ProductID ;

-- Select data from Inventory and Product tables
SELECT * 
FROM Inventory
INNER JOIN Product ON Inventory.ProductID = Product.ProductID ;
