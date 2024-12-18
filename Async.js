// Initialize a counter variable
i = 0;

// Set an interval that prints a message every 3 seconds
var inter = setInterval(function() {
    ++i;
    console.log("Hello there!!! " + i); // Print message with counter
    if (i == 0) {
        clearInterval(inter); // Clear the interval when i is 0 (not reached after increment)
    }
}, 3000);

// Set a timeout that triggers after 2 seconds, but it's cleared immediately
var t = setTimeout(function() {
    console.log("Timeout Example"); // This message won't be shown because the timeout is cleared immediately
}, 2000);

// Immediately clear the timeout to prevent the message from being printed
clearTimeout(t);

// Print a message indicating the program is running
console.log("Program is Running!");

// Execute a task as the next phase in the event loop (nextTick)
process.nextTick(function() {
    console.log("Urgent Task!!"); // This will run before the rest of the code
});

// Print an initial message
console.log("Hello => Number 1");

// Execute a task immediately after the current event loop phase (setImmediate)
setImmediate(() => {
    console.log("Running Before the Timeout => Number 3"); // This will run after I/O tasks
});

// Set a timeout to print a message after 100ms
setTimeout(() => {
    console.log("The Timeout Running Last => Number 4");
}, 100);

// Execute another task at the nextTick stage
process.nextTick(function() {
    console.log("Running At Next Tick => Number 2"); // This will run before any I/O tasks
});
