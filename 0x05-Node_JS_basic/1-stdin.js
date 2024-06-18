// Importing the readline module to handle user input
const readline = require('readline');

// Creating an interface to read input from stdin and write output to stdout
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

// Handle the close event to display the closing message
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
