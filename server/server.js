import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// 1. Import routes & middleware
import authRoutes from './routes/authRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

// Connect Database
connectDB();

const app = express();

// 2. Essential Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
app.use(express.json()); // Parses incoming JSON payloads

// 3. Mount Routes
app.use('/api/auth', authRoutes); // <-- THIS LINE MOUNTS THE AUTH ROUTER

// 4. Centralized Error Handler (MUST BE AFTER ROUTES)
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));