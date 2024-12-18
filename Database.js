// dbOperations.js
// query for port in mysql cmd  --- SHOW GLOBAL VARIABLES LIKE 'PORT';

const mysql = require('mysql2');

// MySQL Connection Setup
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306 // Change port if needed 3309
});

// Connect to MySQL
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL!!!");

    // Create Database
    con.query("CREATE DATABASE Products", function(err) {
        if (err) throw err;
        console.log("Database 'Products' Created !!");
    });

    // Use the newly created database
    con.changeUser({ database: 'Products' }, function(err) {
        if (err) throw err;
    }); 

    // Create Table
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS Customer (
            custId INT PRIMARY KEY,
            cname VARCHAR(55),
            address VARCHAR(255)
        );
        `;    
    con.query(createTableQuery, function(err) 
    {
        if (err) throw err;
        console.log("Table 'Customer' Created!!");
    });

    
    // Insert Data
    const insertQuery = "INSERT INTO Customer (custId, cname, address) VALUES ?";
    const custData = [
        [103, 'Vinesh Gupta', 'Bandra'],
        [104, 'Arpita Patel', 'Malad'],
        [105, 'Mansvi Patel', 'Dadar']
    ];
    con.query(insertQuery, [custData], function(err) {
        if (err) throw err;
        console.log("Data Inserted into 'Customer' Table!!");
    });


    // Select Data
    con.query('SELECT * FROM Customer', function(err, results) {
        if (err) throw err;
        console.log("Data in 'Customer' Table:");
        console.log(results);
    });

    // Update Data
    const updateQuery = "UPDATE Customer SET address = 'Andheri' WHERE custId = 104";
    con.query(updateQuery, function(err) {
        if (err) throw err;
        console.log("Data Updated in 'Customer' Table!!");
    });

    // Select Data After Update
    con.query('SELECT * FROM Customer', function(err, results) {
        if (err) throw err;
        console.log("Data After Update:");
        console.log(results);
    });
                           
    // Delete Data
    const deleteQuery = "DELETE FROM Customer WHERE custId = 103";
    con.query(deleteQuery, function(err) {
        if (err) throw err;
        console.log("Data Deleted from 'Customer' Table!!");
    });
                                
    // Final Select Data
    con.query('SELECT * FROM Customer', function(err, results) {                            
        if (err) throw err;
        console.log("Final Data in 'Customer' Table:");
        console.log(results);
    });
                                  
});
