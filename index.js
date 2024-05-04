const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

let counter = 0; // Initialize counter at 0

// Route to handle GET request
app.get('/', (req, res) => {
  counter++; // Increment the counter on each visit
  res.json({ visits: counter });
});

// Specify the port to listen on
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));