const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables FIRST
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ─── Core Middleware ─────────────────────────────────────────────
// Parse JSON request bodies (for POST/PUT with JSON payloads)
app.use(express.json());

// CORS — allow frontend to make API calls
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}));

// ─── API Routes ──────────────────────────────────────────────────
// Health check endpoint — useful for deployment monitoring
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    status: 'API is running',
    environment: process.env.NODE_ENV
  });
});

// ─── Start Server ────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 DeutschPixel API running on port ${PORT}`);
});
