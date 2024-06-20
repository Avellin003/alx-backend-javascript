const express = require('express');
const app = express();
const port = 7865;

// Middleware to log server start message
const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Route handling
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint for cart with ID validation
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

module.exports = server; // Exporting the server instanc
