const fs = require('fs');

// 1. Read & Write Operation (Sync)
function fileReadWrite() {
    // Write data to a file
    fs.writeFileSync("TestFile.txt", "Peonies are beloved perennials known for their large, fragrant blooms and lush foliage." + "\nWelcome to File Handling!!");
    console.log("File Created and Data Written.");

    // Read the data from the file
    fs.readFile("TestFile.txt", function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("File Content After Write:\n", data.toString());
        }
    });
}

// 2. Append Data Operation
function appendData() {
    // Read the file before appending
    let data = fs.readFileSync("TestFile.txt");
    console.log("Before Appending: " + data.toString());

    // Append data to the file
    fs.appendFileSync("TestFile.txt", "\nAppending Data into the File........");
    console.log("Data Appended to File.");

    // Read the file after appending
    fs.readFile("TestFile.txt", function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("After Appending: " + data.toString());
        }
    });
}

// 3. Rename File Operation
function renameFile() {
    // Rename the file from 'TestFile.txt' to 'NewFile.txt'
    fs.renameSync('TestFile.txt', 'NewFile.txt');
    console.log("File Renamed from 'TestFile.txt' to 'NewFile.txt'");

    // Try reading the old file (should return error because it's renamed)
    fs.readFile('TestFile.txt', function (err, data) {
        if (err) {
            console.log("Error (File not found, renamed):", err);
        } else {
            console.log("File Content:", data.toString());
        }
    });

    // Read the newly renamed file
    fs.readFile('NewFile.txt', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("New File Content:", data.toString());
        }
    });
}

// 4. Delete File Operation
function deleteFile() {
    // Delete the file
    fs.unlink('NewFile.txt', function (err) {
        if (err) {
            console.log("Error deleting file:", err);
        } else {
            console.log("File 'NewFile.txt' deleted successfully.");
        }
    });
}

// 5. File Upload (Simulated - using a local directory for this demo)
function uploadFile() {
    // Simulate file upload by copying it to another directory
    fs.copyFile('TestFile.txt', './uploads/TestFile.txt', function (err) {
        if (err) {
            console.log("Error uploading file:", err);
        } else {
            console.log("File uploaded to './uploads/TestFile.txt'.");
        }
    });
}

// Calling functions to perform file operations
fileReadWrite();
appendData();
renameFile();
deleteFile();

// Simulating file upload (ensure the './uploads' folder exists before running)
uploadFile();
