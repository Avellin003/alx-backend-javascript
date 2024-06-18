// Import the readline module to handle user input
const readline = require('readline');

// Create an interface to read from stdin and write to stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display the initial welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read the user's input
rl.on('line', (input) => {
    // Display the user's name
    console.log(`Your name is: ${input}`);
    
    // Close the readline interface
    rl.close();
});

// Handle the closing of the readline interface
rl.on('close', () => {
    // Display the closing message
    console.log('This important software is now closing');
    process.exit(0);
});
