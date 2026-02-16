// Basic Express server setup for SwiftRise backend
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example routes
app.get('/', (req, res) => {
  res.send('SwiftRise Backend API');
});

// Users route
app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'Test User' }]);
});

// Cars route
app.get('/api/cars', (req, res) => {
  res.json([{ id: 1, model: 'Swift', available: true }]);
});

// Bookings route
app.get('/api/bookings', (req, res) => {
  res.json([{ id: 1, user: 1, car: 1, date: '2026-01-19' }]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
