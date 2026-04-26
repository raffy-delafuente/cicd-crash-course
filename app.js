const express = require('express');
const app = express();

app.use(express.json());

// Simple home route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from CI/CD crash course' });
});

// Health check (real apps need this for monitoring)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// A simple calculator endpoint we can test
app.post('/add', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Both a and b must be numbers' });
  }
  res.json({ result: a + b });
});

module.exports = app;