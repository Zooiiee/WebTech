// Function that accepts a callback function
function greetUser(name, callback) {
    console.log(`Hello, ${name}!`);
    // Calling the callback function after greeting
    callback();
}

// Function to be passed as a callback
function afterGreeting() {
    console.log("The greeting has been completed.");
}

// Calling the greetUser function and passing afterGreeting as a callback
greetUser("Zoya", afterGreeting);



//Demonstrating Callback Function with setTimeout
// Function to calculate sum and display result after a delay
var calc = function(x, y, display) {
    let sum = x + y; // Calculate the sum of x and y
    console.log("Leaving.........."); // Prints immediately before the callback is triggered

    // Delay the display of the sum by 10 seconds
    setTimeout(function() {
        display(sum); // Call the callback function after the delay
    }, 10000);
}

// Calling the function with numbers 5, 10, and a callback to display the result
calc(5, 10, function(res) {
    console.log("Sum : " + res); // Displays the sum after 10 seconds
    console.log("\nProgram Ended.");
})

// Immediate prints to show other activities in progress
console.log("\nDoing Something else.....");
console.log("Please Wait......");




//Writing and Reading from a Text File using Node.js
// Importing the 'fs' module to work with the filesystem
var fs = require("fs");

// Creating and writing to a text file named 'input.txt'
fs.writeFile('input.txt', 'Web Technology Practical - 5 : Writing and Reading a text file.', function(err) {
    if (err) {
        return console.error(err); // If an error occurs during writing, it is logged
    }
    console.log("Data successfully added to input.txt\n"); // Success message after writing to the file
});

// Reading the contents of 'input.txt'
fs.readFile('input.txt', function(err, data) {
    if (err) {
        return console.error(err); // If an error occurs while reading, it is logged
    }
    console.log("Printing content from input.txt\n");
    console.log(data.toString()); // Printing the content of the file
});

console.log("Please Wait........\n"); // This message prints immediately before the file reading occurs

/*
Order of Execution:

The fs.writeFile operation is asynchronous, meaning it doesn't block the execution of other code.
The fs.readFile function will execute immediately after the fs.writeFile command, and you may see "Please Wait........" printed before the file is read (because of the asynchronous nature of the file operations).4

*/


//4. Reading and Writing a File Using Callbacks

const fs = require("fs");

fs.writeFile("example.txt", "Hello, this is an example file!", (err) => {
    if (err) return console.error(err);
    console.log("File written successfully!");

    fs.readFile("example.txt", (err, data) => {
        if (err) return console.error(err);
        console.log("File content: " + data.toString());
    });
});


//3. Performing Math Operations Using Callback

function calculate(a, b, operation) {
    return operation(a, b); // The `operation` is a callback function
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log("Addition: " + calculate(5, 3, add));
console.log("Multiplication: " + calculate(5, 3, multiply));
