// Import the readline module to handle input and output
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Prompt the user for their name
rl.question('', (name) => {
  // Display the user's name
  console.log(`Your name is: ${name}`);
  
  // Close the readline interface
  rl.close();
});

// Listen for the 'close' event to display the closing message
rl.on('close', () => {
  console.log('This important software is now closing\n');
});
